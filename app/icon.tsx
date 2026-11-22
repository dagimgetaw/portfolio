import { ImageResponse } from "next/og";

/* "DG" monogram, matching the og-image. Served at /icon/192 and /icon/512. */

export const contentType = "image/png";

export function generateImageMetadata() {
  return [192, 512].map((size) => ({
    id: String(size),
    size: { width: size, height: size },
    contentType,
  }));
}

export default async function Icon({ id }: { id: Promise<string> | string }) {
  const size = Number(await id);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121313",
          color: "#ececeb",
          fontSize: size * 0.42,
          letterSpacing: "-0.02em",
        }}
      >
        DG
      </div>
    ),
    { width: size, height: size }
  );
}
