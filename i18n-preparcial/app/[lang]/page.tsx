import type { Metadata } from "next"
import CharacterList from "./components/CharacterList"
import { getDictionary, hasLocale, defaultLocale } from "./dictionaries"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: rawLang } = await params
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale
  const dict = await getDictionary(lang)

  return {
    title: dict.characters,
    description: dict.description,
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: rawLang } = await params
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale
  const dict = await getDictionary(lang)

  return (
    <section>
      <header className="flex flex-col">
        <h1 className="text-center text-2xl font-bold mb-6 text-[#FDB608]">
          {dict.characters}
        </h1>

        <p className="text-center text-sm mb-6 text-black">
          {dict.description}
        </p>
      </header>

      <CharacterList lang={lang} />
    </section>
  )
}