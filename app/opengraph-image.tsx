import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "windo.ch — Neue Website in 10 Arbeitstagen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,68,24,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Accent bar left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 6,
            height: "100%",
            background: "#C94418",
          }}
        />
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px",
            width: "100%",
          }}
        >
          {/* Top: logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img
              src="https://www.windo.ch/windo-logo-2026-transparent.png"
              alt="windo.ch"
              style={{ height: 44, width: "auto" }}
            />
            <div
              style={{
                width: 1,
                height: 24,
                background: "rgba(255,255,255,0.15)",
              }}
            />
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>
              Schweizer Webdesign
            </div>
          </div>

          {/* Middle: headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                color: "white",
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -2,
              }}
            >
              Neue Website.
            </div>
            <div
              style={{
                color: "#C94418",
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -2,
              }}
            >
              In 10 Arbeitstagen.
            </div>
          </div>

          {/* Bottom: tags */}
          <div style={{ display: "flex", gap: 16 }}>
            {["Individuell gestaltet", "100/100 PageSpeed", "Schweizer Server", "Ab CHF 1'490"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 15,
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    size
  );
}
