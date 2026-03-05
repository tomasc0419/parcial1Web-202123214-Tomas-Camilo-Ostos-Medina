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
   <>
     <Header lang={lang}/>
     <main className="bg-[#e0e0e0] min-h-screen p-6">
       {children}
     </main>
     <Footer/>
   </>
 );
}