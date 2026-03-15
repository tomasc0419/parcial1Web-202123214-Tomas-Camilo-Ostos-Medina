import Header from "./components/Header";
import Footer from "./components/Footer";
import { hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} />

      <main className="flex-1 px-4 py-8 bg-[#e0e0e0]">
        {children}
      </main>

      <Footer />
    </div>
  );
}