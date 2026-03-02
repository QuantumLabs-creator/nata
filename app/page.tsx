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
                Cremoso, rico y natural. Pide por WhatsApp y coordinamos la entrega.
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
                    src="/hero/hero.jpg"
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
                  src="/hero/section.jpg"
                  alt="Granola con miel y yogurt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h2 className="text-2xl font-semibold">Hecho para disfrutarlo de verdad</h2>
              <p className="mt-3 text-gray-700 max-w-[60ch]">
                Yogurt griego artesanal con ingredientes simples y ricos.
              </p>

              <div className="mt-6 grid gap-3">
                <Bullet title="Leche pasteurizada" desc="Base segura y de calidad." />
                <Bullet title="Frutas naturales" desc="Sabor real, no artificial." />
                <Bullet title="Granola con miel" desc="Crocante + dulce natural." />
              </div>

              <div className="mt-6">
                <Link
                  href="/catalogo"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/40 bg-white px-4 py-3 hover:bg-emerald-50 transition"
                >
                  Ver productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendados */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1800px] px-6 pb-14 md:px-10 xl:px-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Recomendados</h2>
              <p className="text-sm text-gray-700">Elige uno y pide por WhatsApp.</p>
            </div>
            <Link href="/catalogo" className="text-sm underline text-gray-700 hover:text-black">
              Ver todo
            </Link>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => {
              const msg = `Hola, quiero pedir NATA:
• ${p.name} (${p.size})
• S/ ${p.price}
¿Me confirmas disponibilidad y entrega?`;

              return (
                <article
                  key={p.id}
                  className="rounded-3xl border border-white/40 bg-white/80 shadow-sm backdrop-blur hover:shadow-md transition overflow-hidden"
                >
                  <div className="relative h-44 w-full bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-gray-700">
                          {p.size} • {p.flavor}
                        </p>
                      </div>
                      <p className="font-semibold">S/ {p.price}</p>
                    </div>

                    <div className="mt-4">
                      <WhatsAppButton message={msg} />
                    </div>
                  </div>
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

function Bullet({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/30 bg-white p-4">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}