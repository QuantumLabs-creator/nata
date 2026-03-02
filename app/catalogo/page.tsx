import Image from "next/image";
import Link from "next/link";
import { products } from "@/src/lib/products";
import { WhatsAppButton } from "@/src/components/WhatsAppButton";

export default function CatalogoPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Catálogo</h1>
          <p className="text-sm text-gray-600">
            Elige tu yogurt y coordina tu pedido por WhatsApp.
          </p>
        </div>

        <Link href="/" className="text-sm underline text-gray-700 hover:text-black">
          Inicio
        </Link>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const msg = `Hola, me interesa:
• ${p.name} (${p.size})
• S/ ${p.price}
¿Está disponible?`;

          return (
            <article key={p.id} className="rounded-2xl border p-4 hover:shadow-sm transition">
              <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>

              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-gray-600">
                    {p.size} • {p.flavor}
                  </p>
                </div>
                <p className="font-semibold">S/ {p.price}</p>
              </div>

              <div className="mt-4">
                <WhatsAppButton message={msg} />
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}