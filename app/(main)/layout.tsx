import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "windo — Ihr Schaufenster im Netz | Websites für Schweizer KMU",
  description:
    "Ihr Schaufenster im Netz. Professionelle Websites für Schweizer KMU — individuell gemacht, fertig in 10 Arbeitstagen. Direkt von Henry, keine Agentur, keine 3-Jahres-Bindung.",
  openGraph: {
    title: "windo — Ihr Schaufenster im Netz | Websites für Schweizer KMU",
    description:
      "Ihr Schaufenster im Netz. Professionelle Websites für Schweizer KMU — individuell gemacht, fertig in 10 Arbeitstagen. Direkt von Henry, keine Agentur, keine 3-Jahres-Bindung.",
    url: "https://www.windo.ch",
    siteName: "windo.ch",
    locale: "de_CH",
    type: "website",
    images: [{ url: "/windo-og-1.png", width: 1200, height: 630 }],
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
