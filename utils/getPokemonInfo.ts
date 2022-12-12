import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameOrId}`, {
    headers: { 'accept-encoding': null },
  })

  const { id, sprites, name } = data

  const pokemon = {
    id,
    sprites,
    name,
  }

  return pokemon
}
