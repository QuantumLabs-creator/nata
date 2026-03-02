import Link from "next/link";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export function WhatsAppButton({
  message,
  label = "Pedir por WhatsApp",
}: {
  message: string;
  label?: string;
}) {
  const href = buildWhatsAppLink(message);

  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-4 py-3 text-white hover:opacity-90 transition"
    >
      {label}
    </Link>
  );
}
