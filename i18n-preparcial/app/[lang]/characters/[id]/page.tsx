import type { Metadata } from "next"
import CharacterDetail from "../../components/CharacterDetail"
import { getCharacterById } from "../../api/characters"
import { getDictionary, hasLocale, defaultLocale } from "../../dictionaries"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}): Promise<Metadata> {

  const { id, lang: rawLang } = await params
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale

  const dict = await getDictionary(lang)
  const character = await getCharacterById(id)

  return {
    title: `${dict.detailTitle} ${character?.name ?? ""}`,
  }
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { id, lang } = await params

  return <CharacterDetail id={id} lang={lang} />
}