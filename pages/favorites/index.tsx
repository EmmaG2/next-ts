import { useEffect, useState } from 'react'
import { MainLayout } from '../../components/layout'
import { FavoritePokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritosPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons())
  }, [])

  return (
    <MainLayout>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </MainLayout>
  )
}

export default FavoritosPage
