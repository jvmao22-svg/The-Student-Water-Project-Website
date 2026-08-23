"use client";

import Script from "next/script";

export function ZeffyEmbedScript() {
  return (
    <Script
      src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
      strategy="afterInteractive"
      onError={() => {
        document
          .querySelectorAll("[data-zeffy-embed-fallback]")
          .forEach((el) => {
            (el as HTMLElement).style.display = "block";
            el.querySelectorAll("iframe[data-zeffy-embed-src]").forEach(
              (frame) => {
                (frame as HTMLIFrameElement).src =
                  frame.getAttribute("data-zeffy-embed-src") ?? "";
              },
            );
          });
      }}
    />
  );
}
