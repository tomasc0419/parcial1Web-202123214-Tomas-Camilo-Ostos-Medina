import Image from "next/image"
import { BorderColorHouses } from "../constants/houses"
import { getCharacterById } from "../api/characters"
import { getDictionary, hasLocale, defaultLocale } from "../dictionaries"


type Character = {
  id: string
  name: string
  image: string
  gender: string
  house: "Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff" | "NoHouse" | ""
  wand: {
    wood: string
    core: string
    length: number | null
  }
}

export default async function CharacterDetail({
  id,
  lang,
}: {
  id: string
  lang: string
}) {
  const safeLang = hasLocale(lang) ? lang : defaultLocale
  const dict = await getDictionary(safeLang)

  const character: Character | undefined = await getCharacterById(id)

  if (!character) {
    return (
      <section className="flex justify-center mt-10">
        <p className="text-xl font-bold">{dict.characterNotFound}</p>
      </section>
    )
  }

  const house = character.house || "NoHouse"
  const borderColor = BorderColorHouses[house] || BorderColorHouses.NoHouse

  return (
    <section className="flex flex-col items-center mt-6">
      <h1 className="text-3xl font-bold text-[#FDB608] mb-6">
        {character.name}
      </h1>

     <div className={`flex overflow-hidden rounded-2xl border-4 ${borderColor} bg-[#e0e0e0] w-[600px]`}>
        <div className="w-1/2 flex flex-col justify-center px-8 text-lg space-y-3">
          <p><span className="font-bold">{dict.house}:</span> {character.house || dict.noHouse}</p>
          <p><span className="font-bold">{dict.gender}:</span> {character.gender || dict.noData}</p>
          <p><span className="font-bold">{dict.core}:</span> {character.wand?.core || dict.noData}</p>
          <p><span className="font-bold">{dict.wood}:</span> {character.wand?.wood || dict.noData}</p>
          <p><span className="font-bold">{dict.length}:</span> {character.wand?.length || dict.noData}</p>
        </div>

        <div className="relative w-1/2 aspect-[3/4]">

            <Image
            src={character.image}
            alt={character.name}
            fill
            className="w-full h-auto object-cover"
            />

        </div>
      </div>
    </section>
  )
}