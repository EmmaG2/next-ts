import { Navbar, Text } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export const NavbarComponent = () => {
  return (
    <Navbar
      shouldHideOnScroll
      variant={'floating'}>
      <Navbar.Brand>
        <Link
          href={'/'}
          style={{ display: 'flex' }}>
          <Image
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            }
            alt='icon application'
            width={70}
            height={70}
          />
          <Text
            color='error'
            css={{
              fontSize: '2rem',
              fontWeight: 'bold',
            }}>
            P
          </Text>
          <Text
            css={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}>
            okemon
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        variant={'highlight-solid-rounded'}
        hideIn='xs'>
        <Navbar.Link
          isActive
          activeColor={'error'}
          color={'error'}
          href='/'>
          Home
        </Navbar.Link>
        <Navbar.Link href='/favorites'>Favoritos</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}
