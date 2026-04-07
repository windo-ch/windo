import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "windo.ch — Eine Website, die für Sie arbeitet.",
  description:
    "Professionelle Websites für Schweizer KMU. Fertig in 10 Arbeitstagen, direkt von Henry — keine Agentur.",
  openGraph: {
    title: "windo.ch — Eine Website, die für Sie arbeitet.",
    description: "Professionelle Websites für Schweizer KMU. Fertig in 10 Arbeitstagen, direkt von Henry.",
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
