"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ lang }: { lang: string }) {
  const pathname = usePathname()

  const segments = pathname.split("/")
  segments[1] = lang === "en" ? "es" : "en"


  return (
    <header className="bg-[#FDB608] flex gap-0 flex-col items-center py-4">

      
      <Link href={`/${lang}`}>
        <Image
          src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
          alt="Harry Potter Logo"
          width={150}
          height={150}
        />
      </Link>
    <div className="flex gap-2 text-white mt-2 text-sm">

        <Link
          href={pathname.replace(/^\/(en|es)/, "/en")}
          className={lang === "en" ? "font-semibold" : "font-normal"}
        >
          EN
        </Link>

        <Link
          href={pathname.replace(/^\/(en|es)/, "/es")}
          className={lang === "es" ? "font-semibold" : "font-normal"}
        >
          ES
        </Link>
    </div>

    </header>
    
  );
}