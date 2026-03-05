import Image from "next/image";
import Link from "next/link";
import {BgColorHouses} from "../constants/houses";

export default function CharacterCard({character,lang}:string){

const bg = BgColorHouses[character.house] || BgColorHouses.NoHouse

return(

<Link href={`/${lang}/characters/${character.id}`}>

<div className={`${bg} p-4 rounded-lg text-white`}>

<Image
src={character.image}
alt={character.name}
width={10}
height={50}
/>

<h2 className="text-center mt-2 font-bold">

{character.name}

</h2>

</div>

</Link>

)

}