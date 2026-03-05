import CharacterCard from "./CharacterCard"
import {getFirst12Characters} from "../api/characters"

export default async function CharacterList({lang}:{lang:string}){

const characters = await getFirst12Characters()

return(

<div className="grid grid-cols-3 gap-6">

{characters.map((c:string)=>(

<CharacterCard
key={c.id}
character={c}
lang={lang}
/>

))}

</div>

)

}