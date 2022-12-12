import { Container, Text } from '@nextui-org/react'
import { useState } from 'react'
import { HijoComponent } from './HijoComponent'

export const PadreComponent = () => {
  const [mensaje, setMensaje] = useState('')

  const onRecibirAlgoDelHijo = (mensajeDelHijo: string): void => {
    setMensaje(mensajeDelHijo)
  }

  return (
    <Container
      css={{
        border: '1px solid red',
        padding: '1em',
        margin: '1em',
        textAlign: 'center',
      }}>
      <Text
        h1
        css={{
          color: 'red',
        }}>
        Este es el componente padre
      </Text>
      <Text>
        El hijo le dice al padre:
        <Text
          span
          css={{
            color: '#09f',
            fontWeight: 'bolder',
            marginLeft: '.5rem',
          }}>
          {mensaje}
        </Text>
      </Text>

      <Text
        h2
        css={{
          color: 'blue',
        }}>
        El hijo es el de abajo
      </Text>
      <HijoComponent onDecirAlgoAlPadre={onRecibirAlgoDelHijo} />
    </Container>
  )
}
