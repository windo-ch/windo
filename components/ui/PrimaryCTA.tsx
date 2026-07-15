'use client';

const WA = 'https://wa.me/41791752020?text=Hallo%20Henry%2C%20ich%20m%C3%B6chte%20meine%20neue%20Website%20besprechen.';

export function PrimaryCTA() {
  return (
    <div className="flex flex-col items-center gap-3 py-10 px-6">
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 btn-whatsapp font-semibold px-8 py-4 rounded-xl text-base"
      >
        💬 Unverbindlich anfragen
      </a>
      <p className="text-sm text-gray-400">oder anrufen: <a href="tel:+41791752020" className="hover:text-gray-200 transition-colors">079 175 20 20</a></p>
    </div>
  );
}
