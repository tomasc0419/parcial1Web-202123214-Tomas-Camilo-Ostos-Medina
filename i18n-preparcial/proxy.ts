import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'

const locales = ['es', 'en'] as const
type Locale = (typeof locales)[number]

const defaultLocale: Locale = 'es'
const LOCALE_COOKIE = 'NEXT_LOCALE'

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

function getLocale(request: NextRequest): Locale {
  // 1) prioridad: cookie
  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  if (saved && isLocale(saved)) return saved

  // 2) fallback: Accept-Language
  const negotiatorHeaders = {
    'accept-language': request.headers.get('accept-language') ?? '',
  }
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // match devuelve string; lo acotamos a Locale
  return match(languages, [...locales], defaultLocale) as Locale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignorar Next internals, API y archivos con extensión
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return
  }

  // Si ya trae /es o /en, no tocar
  const hasPrefix = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  )
  if (hasPrefix) return

  // Redirigir a /{locale}{pathname}
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  const res = NextResponse.redirect(request.nextUrl)

  // Persistir preferencia (cookie)
  res.cookies.set({
    name: LOCALE_COOKIE,
    value: locale,
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })

  // Header opcional (debug o si lo lees en app/layout.tsx)
  res.headers.set('x-locale', locale)

  return res
}

export const config = {
  matcher: ['/((?!_next).*)'],
}