import { FC } from 'react'
import Head from 'next/head'
import { Container } from '@nextui-org/react'
import { NavbarComponent } from '../ui'

interface Props {
  children: React.ReactNode
  title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  try {
    console.log(window.location)
  } catch (error) {
    console.error('hola gei')
  }

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta
          name='author'
          content='Emmanuel Granados'
        />
        <meta
          name='description'
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta
          name='keywords'
          content={`${title}, pokemon, pokedex`}
        />
        <meta
          property='og:title'
          content={`Informacion sobre ${title}`}
        />
        <meta
          property='og:description'
          content={`Descubre toda la informacion sobre ${title} `}
        />
        <meta
          property='og:image'
          content='/banner.png'
        />
      </Head>
      <NavbarComponent />
      <Container>{children}</Container>
    </>
  )
}
