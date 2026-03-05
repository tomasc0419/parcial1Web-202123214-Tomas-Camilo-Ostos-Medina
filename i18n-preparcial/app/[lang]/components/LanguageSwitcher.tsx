'use client'

import { usePathname, useRouter } from 'next/navigation'

function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60
  document.cookie = `${name}=${value}; Path=/; Max-Age=${maxAge}`
}

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  function changeLang(nextLang: 'es' | 'en') {
    setCookie('NEXT_LOCALE', nextLang)

    const parts = pathname.split('/')
    parts[1] = nextLang
    const nextPath = parts.join('/') || `/${nextLang}`

    router.push(nextPath)
    router.refresh()
  }

  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
      <button onClick={() => changeLang('es')} disabled={currentLang === 'es'}>
        ES
      </button>
      <button onClick={() => changeLang('en')} disabled={currentLang === 'en'}>
        EN
      </button>
    </div>
  )
}