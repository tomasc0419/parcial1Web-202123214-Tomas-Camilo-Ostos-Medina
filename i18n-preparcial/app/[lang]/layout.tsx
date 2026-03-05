import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { hasLocale } from "./dictionaries";

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return <>{children}</>;
}