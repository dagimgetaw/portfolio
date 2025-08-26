"use client";
import React, { useState, useRef } from "react";
import { WavyBackground } from "./ui/WavyBackground";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(3, "Message must be at least 3 characters")
    .max(1000, "Message is too long"),
});

const Contact = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    fullname?: string;
    email?: string;
    message?: string;
  }>({});

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0] as string;
        if (!fieldErrors[path]) fieldErrors[path] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setValues({ fullname: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-16">
      <div className="absolute inset-0">
        <WavyBackground
          blur={20}
          speed="slow"
          waveOpacity={0.4}
          containerClassName="w-full h-full"
        />
      </div>

      <div className="relative z-20">
        <h1 className="text-3xl md:text-4xl mx-2 font-bold text-white mb-10 md:mb-12 text-center">
          Get in Touch - <span className="text-purple">Let&apos;s Connect</span>
        </h1>

        <div className="flex items-center justify-center font-text rounded-sm border border-transparent max-w-md mx-auto mt-5 sm:px-0 px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-gray-900/45 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg space-y-4"
            ref={formRef}
          >
            <div>
              <label
                className="block text-white text-xs font-medium mb-1"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-xs text-white rounded-md bg-gray-900 border border-gray-900 focus:outline-none focus:ring-1 focus:ring-purple"
                placeholder="Your full name"
              />
              {errors.fullname && (
                <p className="mt-1 text-xs text-red-400 font-bold">
                  {errors.fullname}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-white text-xs font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-xs text-white rounded-md bg-gray-900 border border-gray-900 focus:outline-none focus:ring-1 focus:ring-purple"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 font-bold">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-white text-xs font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                value={values.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-xs text-white rounded-md bg-gray-900 border border-gray-900 focus:outline-none focus:ring-1 focus:ring-purple resize-none"
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-xs text-red-400 font-bold">
                  {errors.message}
                </p>
              )}
            </div>
            <input
              type="hidden"
              name="timestamp"
              value={new Date().toLocaleString()}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-purple text-gray-900 hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed font-text text-xs py-3 rounded-md transition flex items-center justify-center"
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin -ml-1 mr-1 w-3 h-3 md:w-4 md:h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </span>
              ) : status === "success" ? (
                "Sent!"
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
