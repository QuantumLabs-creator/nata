import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton } from "@/src/components/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-emerald-50 border-t border-white/40">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-14 md:px-10 xl:px-12">

        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Marca */}
          <div className="space-y-4">
            <Image
              src="/NataLogo.png"
              alt="NATA"
              width={800}
              height={300}
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              Yogurt griego artesanal cajamarquino.
              Natural, cremoso y hecho con ingredientes reales.
            </p>
            <div className="flex gap-3">
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                100% Natural
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                Artesanal
              </span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-emerald-600 transition">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-emerald-600 transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-emerald-600 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Información</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span>Cajamarca, Perú</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🚚</span>
                <span>Entregas los lunes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🥛</span>
                <span>Producto artesanal</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🍓</span>
                <span>Frutas naturales</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Pedidos</h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Escríbenos directamente y coordinamos tu entrega.
            </p>

            <WhatsAppButton
              message="Hola, quiero hacer un pedido de Yogurt Griego NATA."
              label="Pedir por WhatsApp"
            />
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-14 pt-6 border-t border-white/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} NATA • Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terminos" className="hover:text-gray-700 transition">
              Términos y condiciones
            </Link>
            <span className="text-gray-300">|</span>
            <p className="opacity-70">
              Hecho con ❤️ en Cajamarca
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}