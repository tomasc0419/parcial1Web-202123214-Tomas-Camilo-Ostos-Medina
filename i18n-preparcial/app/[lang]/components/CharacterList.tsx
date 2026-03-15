import CharacterCard from "./CharacterCard"
import {getFirst12Characters} from "../api/characters"


type Character = {
  id: string;
  name: string;
  image: string;
  house: "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff" | "NoHouse";
};
export default async function CharacterList({lang}:{lang:string}){

const characters: Character[] = await getFirst12Characters();

return(

<div className="grid grid-cols-3 gap-x-23 gap-y-5 w-fit mx-auto">

{characters.map((c)=>(

<CharacterCard
key={c.id}
character={c}
lang={lang}
/>

))}

</div>

)

}