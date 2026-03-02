"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const left: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/catalogo" },
  { label: "Nosotros", href: "/nosotros" },
];

const right: NavItem[] = [
  { label: "Contáctanos", href: "/contacto" },
  { label: "Tienda", href: "/catalogo" },
];

function NavLink({ href, label }: NavItem) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "text-sm md:text-base transition whitespace-nowrap",
        active
          ? "text-teal-800 font-semibold"
          : "text-gray-700 hover:text-black",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const mobileItems = Array.from(
    new Map([...left, ...right].map((i) => [i.href, i])).values()
  );
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      {/* Fondo transparente (sin línea) */}
      <div className="w-full">
        <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6 md:px-10 xl:px-12">
          {/* Card flotante */}
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
              {/* Left links - más cerca del logo */}
              <nav className="hidden md:flex items-center gap-6">
                {left.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </nav>

              {/* Logo center - más grande */}
              <Link
                href="/"
                className="flex items-center justify-center px-2"
                aria-label="Ir al inicio"
              >
                <Image
                  src="/NataLogo.png"
                  alt="NATA"
                  width={1000}
                  height={260}
                  priority
                  className="h-16 md:h-[72px] w-auto object-contain"
                />
              </Link>

              {/* Right links - más cerca del logo */}
              <nav className="hidden md:flex items-center gap-6">
                {right.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </nav>

              {/* Mobile */}
              <div className="md:hidden flex items-center gap-2">
                <Link
                  href="/catalogo"
                  className="rounded-xl bg-teal-700 px-3 py-2 text-sm text-white hover:opacity-90 transition"
                >
                  Catálogo
                </Link>
              </div>
            </div>

            {/* Mobile links row */}
            <div className="md:hidden px-4 sm:px-6 pb-4 flex flex-wrap gap-x-4 gap-y-2">
              {mobileItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}