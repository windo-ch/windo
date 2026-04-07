import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "windo.ch — Ihre Website verliert Kunden. Jeden Tag.",
  description:
    "97% aller Kunden googeln. Wenn Ihre Website nicht überzeugt, buchen sie woanders. Gratis Website-Check in 60 Sekunden.",
  openGraph: {
    title: "windo.ch — Ihre Website verliert Kunden. Jeden Tag.",
    description: "97% aller Kunden googeln. Gratis Website-Check in 60 Sekunden.",
    url: "https://www.windo.ch",
    siteName: "windo.ch",
    locale: "de_CH",
    type: "website",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg text-bg-dark min-h-screen flex flex-col">
      <JsonLd />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
