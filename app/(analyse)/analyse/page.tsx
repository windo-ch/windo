import type { Metadata } from "next";
import BedarfsanalyseWizard from "@/components/analyse/BedarfsanalyseWizard";

export const metadata: Metadata = {
  title: "Bedarfsanalyse — Welche Website braucht Ihr KMU? | windo.ch",
  description:
    "In 60 Sekunden herausfinden, was Ihre Website können muss — und was sie kosten würde. Kostenlos und unverbindlich.",
};

export default function AnalysePage() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="bg-bg-dark py-16 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 max-w-xl mx-auto">
          Was braucht Ihr KMU wirklich online?
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          5 kurze Fragen — in 60 Sekunden wissen Sie, wo Sie stehen.
        </p>
      </section>
      <BedarfsanalyseWizard />
    </main>
  );
}
