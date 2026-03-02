import Link from "next/link";
import Image from "next/image";
import { products } from "@/src/lib/products";
import { WhatsAppButton } from "@/src/components/WhatsAppButton";

const FLAVORS = [
  "Frutos del bosque",
  "Maracumango",
  "Fresa",
  "Piña",
  "Lúcuma",
  "Arándano",
  "Mora",
  "Limón",
  "Naranja",
  "Tamarindo con mango",
];

export default function Home() {
  const generalMsg =
    "Hola, soy de Cajamarca. Quiero hacer un pedido de Yogurt Griego NATA. ¿Qué sabores hay hoy y cuánto está el delivery?";

  const featured = products.slice(0, 3);

  return (
    <main className="min-h-screen relative pt-52 lg:p-20 overflow-hidden">
      {/* Fondo full width con color */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-teal-50 via-white to-emerald-50" />
      <div className="pointer-events-none absolute -left-28 top-24 -z-20 h-[420px] w-[420px] rounded-full bg-teal-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 -z-20 h-[520px] w-[520px] rounded-full bg-emerald-300/20 blur-3xl" />

      {/* Header simple */}
      <header className="w-full">
        <div className="w-full px-32 md:px-12 py-4 -mt-10 flex items-center justify-between">
          {/* Logo normal del header (no gigante) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/NataLogo.png"
              alt="NATA"
              width={1600}
              height={1000}
              priority
              className="h-32 md:h-42 lg:h-48 w-auto object-contain"
            />
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              href="/catalogo"
              className="rounded-xl border border-white/40 bg-white/70 px-4 py-2 text-sm hover:bg-white transition backdrop-blur"
            >
              Catálogo
            </Link>
            <div className="hidden sm:block w-56">
              <WhatsAppButton message={generalMsg} label="Pedir por WhatsApp" />
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1800px] px-6 pb-10 pt-2 md:px-10 xl:px-12 relative">
          {/* contenido del hero */}
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Sin conservantes • frutas naturales • granola con miel
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Yogurt griego{" "}
                <span className="bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
                  artesanal
                </span>{" "}
                cajamarquino
              </h1>

              <p className="mt-4 text-gray-700 md:text-lg max-w-[52ch]">
                Cremoso, rico y natural.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-3 text-white shadow-sm hover:opacity-95 transition"
                >
                  Ver catálogo
                </Link>
                <div className="sm:w-56">
                  <WhatsAppButton message={generalMsg} label="Hacer pedido" />
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <InfoCard title="Entregas" desc="Todos los lunes" />
                <InfoCard title="Pedidos" desc="Semanales" />
                <InfoCard title="Soporte" desc="Campañas y activaciones" />
              </div>
            </div>

            {/* Imagen hero */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-sm backdrop-blur">
                <div className="relative h-[360px] w-full md:h-[440px]">
                  <Image
                    src="/products/temp.jpeg"
                    alt="Yogurt griego NATA con frutas"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute -bottom-3 left-4 rounded-2xl border border-white/40 bg-white/80 px-3 py-2 text-xs text-gray-700 shadow-sm backdrop-blur">
                🥛 Cremoso y natural
              </div>
              <div className="absolute -top-3 right-4 rounded-2xl border border-white/40 bg-white/80 px-3 py-2 text-xs text-gray-700 shadow-sm backdrop-blur">
                🍓 Sabores por temporada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección visual */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1800px] px-6 py-12 md:px-10 xl:px-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-sm backdrop-blur">
              <div className="relative h-[320px] w-full md:h-[380px]">
                <Image
                  src="/products/temp2.jpeg"
                  alt="Granola con miel y yogurt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="relative">
              {/* Badge decorativo */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs text-emerald-700 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                100% Artesanal
              </div>

              <h2 className="text-3xl font-semibold text-gray-800">
                Hecho para{" "}
                <span className="bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
                  disfrutarlo de verdad
                </span>
              </h2>

              <p className="mt-4 text-gray-600 max-w-[60ch] leading-relaxed">
                Yogurt griego artesanal con ingredientes simples y ricos.
                Sin conservantes, sin colorantes, solo sabor natural.
              </p>

              {/* Features con iconos */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <FeatureIcon
                  icon="🥛"
                  title="Leche pasteurizada"
                  desc="Base segura y de calidad"
                />
                <FeatureIcon
                  icon="🍓"
                  title="Frutas naturales"
                  desc="Sabor real, no artificial"
                />
                <FeatureIcon
                  icon="🍯"
                  title="Granola con miel"
                  desc="Crocante + dulce natural"
                />
                <FeatureIcon
                  icon="🌿"
                  title="Sin conservantes"
                  desc="100% natural y fresco"
                />
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-3 text-white font-medium shadow-md hover:shadow-lg hover:opacity-95 transition"
                >
                  Ver productos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Elemento decorativo de fondo */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-teal-100/50 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Recomendados */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1800px] px-6 pb-14 md:px-10 xl:px-12">
          {/* Header de sección */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs text-emerald-700 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Los favoritos
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Productos{" "}
                <span className="bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
                  Recomendados
                </span>
              </h2>
              <p className="mt-2 text-gray-600 max-w-md">
                Elige uno de nuestros favoritos y pide directamente por WhatsApp.
              </p>
            </div>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition group"
            >
              Ver todo el catálogo
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Grid de productos */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, index) => {
              const msg = `Hola, quiero pedir NATA:
• ${p.name} (${p.size})
• S/ ${p.price}
¿Me confirmas disponibilidad y entrega?`;

              return (
                <article
                  key={p.id}
                  className="group relative rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Badge de posición (opcional) */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                      ⭐ Más vendido
                    </div>
                  )}

                  {/* Imagen con overlay */}
                  <div className="relative h-52 w-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    {/* Overlay al hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Contenido */}
                  <div className="p-5">
                    {/* Tags de sabor y tamaño */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 font-medium">
                        {p.flavor}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {p.size}
                      </span>
                    </div>

                    {/* Nombre y precio */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-sm text-gray-500">Yogurt griego artesanal</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-emerald-700">S/ {p.price}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                    {/* CTA WhatsApp */}
                    <div className="flex items-center justify-between gap-3">
                      <WhatsAppButton message={msg}  />
                      <Link
                        href="/catalogo"
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-700 transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Decoración de fondo */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-100/30 rounded-full blur-3xl -z-10 group-hover:bg-emerald-100/50 transition" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sabores */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1800px] px-6 pb-14 md:px-10 xl:px-12">
          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Sabores</h3>
                <p className="text-sm text-gray-700">Disponibles según temporada.</p>
              </div>
              <Link href="/catalogo" className="text-sm underline text-gray-700 hover:text-black">
                Ver catálogo
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {FLAVORS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/40 bg-gradient-to-b from-white to-emerald-50 px-3 py-1 text-xs text-gray-700"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}


function FeatureIcon({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100/80 flex items-center justify-center text-lg">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}