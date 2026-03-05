export async function fetchCharacters(){

const res = await fetch(
"https://hp-api.onrender.com/api/characters",
{cache:"no-store"}
)

if(!res.ok) throw new Error("API error")

return res.json()

}
export async function getFirst12Characters(){

const characters = await fetchCharacters()

return characters.slice(0,12)

}