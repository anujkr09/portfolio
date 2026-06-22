import { ImageResponse } from "next/og";

export const alt = "Anuj Kumar — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          color: "#F8FAFC",
          backgroundColor: "#0F172A",
          backgroundImage:
            "linear-gradient(135deg, #0F172A 20%, #172554 62%, #312E81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#67E8F9",
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer · Java · AI/ML
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 112,
            fontWeight: 800,
            letterSpacing: -6,
            lineHeight: 0.95,
          }}
        >
          ANUJ KUMAR
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            maxWidth: 850,
            fontSize: 30,
            lineHeight: 1.4,
            color: "#94A3B8",
          }}
        >
          Building scalable applications, intelligent systems, and modern
          digital experiences.
        </div>
      </div>
    ),
    size,
  );
}
