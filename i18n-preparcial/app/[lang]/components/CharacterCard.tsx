import Image from "next/image";
import Link from "next/link";
import {BgColorHouses} from "../constants/houses";


type Character = {
  id: string;
  name: string;
  image: string;
  house: "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff" | "NoHouse";
};


export default function CharacterCard({
  character,
  lang,
}: {
  character: Character;
  lang: string;
}) {
  const bg = BgColorHouses[character.house] || BgColorHouses.NoHouse;
console.log(character)
console.log(character.image)
 return (
    <Link href={`/${lang}/characters/${character.id}`}>

      <div className="w-[320px] rounded-lg overflow-hidden shadow-md">

        
        <div className={`${bg} text-white text-center py-3 font-bold`}>
          {character.name}
        </div>

        
        <div className="relative w-full h-[450px]">

          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
          />

        </div>

      </div>

    </Link>
  );
}