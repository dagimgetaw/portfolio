"use client";

import { useRef, useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(3, "Write a short message")
    .max(1000, "Message is too long (1000 characters max)"),
});

type Field = keyof z.infer<typeof contactSchema>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const empty = { fullname: "", email: "", message: "" };

const fieldClass = "flex flex-col gap-1.5 text-muted";
const inputClass =
  "w-full resize-y rounded-none border-0 border-b border-line bg-transparent pt-1.5 pb-2.5 text-lg text-fg " +
  "transition-colors focus:border-fg focus:outline-none aria-[invalid=true]:border-error";
const errorClass = "not-italic text-error";

const fieldOrder: Field[] = ["fullname", "email", "message"];

function validateField(name: Field, value: string): string | undefined {
  const result = contactSchema.shape[name].safeParse(value);
  return result.success ? undefined : result.error.issues[0]?.message;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as Field;
    const { value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Re-validate live only after the user has left the field once,
    // so they aren't shown errors while still typing for the first time.
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
    if (status !== "idle") setStatus("idle");
  };

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as Field;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, e.target.value) }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        fieldErrors[key] ??= issue.message;
      }
      setErrors(fieldErrors);
      setTouched({ fullname: true, email: true, message: true });
      const firstInvalid = fieldOrder.find((f) => fieldErrors[f]);
      if (firstInvalid) {
        (formRef.current?.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      }
      return;
    }
    setErrors({});

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      setValues(empty);
      setTouched({});
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const statusText = {
    idle: "",
    sending: "Sending…",
    sent: "Message sent. I'll get back to you soon.",
    error: "Couldn't send your message. Try again, or email me directly.",
  }[status];

  return (
    <form ref={formRef} className="flex flex-col gap-7 pt-2" onSubmit={onSubmit} noValidate>
      <label className={fieldClass}>
        <span>Full name</span>
        <input
          className={inputClass}
          name="fullname"
          type="text"
          autoComplete="name"
          value={values.fullname}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!errors.fullname}
          aria-describedby={errors.fullname ? "fullname-error" : undefined}
        />
        {errors.fullname && (
          <em id="fullname-error" className={errorClass}>
            {errors.fullname}
          </em>
        )}
      </label>

      <label className={fieldClass}>
        <span>Email</span>
        <input
          className={inputClass}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <em id="email-error" className={errorClass}>
            {errors.email}
          </em>
        )}
      </label>

      <label className={fieldClass}>
        <span>Message</span>
        <textarea
          className={inputClass}
          name="message"
          rows={4}
          value={values.message}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <em id="message-error" className={errorClass}>
            {errors.message}
          </em>
        )}
      </label>

      <input type="hidden" name="timestamp" value={new Date().toISOString()} />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button type="submit" className="cursor-pointer rounded-full border-0 bg-fg px-[22px] py-3 text-bg transition-opacity hover:opacity-80 disabled:cursor-progress disabled:opacity-50" disabled={status === "sending"}>
          Send message&nbsp;&rarr;
        </button>
        <span className="text-muted" aria-live="polite">
          {statusText}
        </span>
      </div>
    </form>
  );
}
