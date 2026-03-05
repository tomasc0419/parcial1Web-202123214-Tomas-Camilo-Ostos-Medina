import CharacterList from "./components/CharacterList"
import {getDictionary} from "./dictionaries"

export default async function Home({
params
}:{params:Promise<{lang:string}>}){

const {lang} = await params
const dict = await getDictionary(lang)

return(

<section>

<h1 className="text-center text-2xl font-bold mb-6">

{dict.characters}

</h1>

<CharacterList lang={lang}/>

</section>

)

}