import { notFound } from 'next/navigation'
import LanguageSwitcher from './components/LanguageSwitcher'
import { getDictionary, hasLocale } from './dictionaries'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main style={{ padding: 24 }}>
      <LanguageSwitcher currentLang={lang} />

      <h1>{dict.welcome}</h1>
      <p>{dict.description}</p>

      <ul>
        <li>{dict.home}</li>
        <li>{dict.profile}</li>
      </ul>
    </main>
  )
}