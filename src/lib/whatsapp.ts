export function buildWhatsAppLink(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "";
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}
