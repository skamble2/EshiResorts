import { whatsappLink } from "@/content/site";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi Eshi Resorts! I'd like to enquire about a stay.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.001 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.56-1.72A12.74 12.74 0 0 0 16 28.8C23.07 28.8 28.8 23.07 28.8 16S23.07 3.2 16.001 3.2Zm0 23.04c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.89 1.02 1.04-3.79-.27-.43A10.2 10.2 0 0 1 5.76 16c0-5.65 4.6-10.24 10.24-10.24S26.24 10.35 26.24 16 21.65 26.24 16 26.24Zm5.62-7.67c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.53-1.83-1.71-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.55.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.55.08-.83.39-.28.31-1.09 1.07-1.09 2.6 0 1.53 1.12 3.01 1.27 3.22.16.2 2.2 3.36 5.33 4.71.74.32 1.32.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.2-.59-.36Z" />
      </svg>
    </a>
  );
}
