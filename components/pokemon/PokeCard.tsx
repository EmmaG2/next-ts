import { Button, Card, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
  img?: string
  name?: string
  id: number
}

export const PokeCard: FC<Props> = ({ img, name = '', id }) => {
  const router = useRouter()

  const onClick = () => {
    if (name !== '') {
      router.push(`/name/${name}`)
      return
    }

    router.push(`/pokemon/${id}`)
  }

  return (
    <Card isHoverable>
      {name === '' ? null : (
        <>
          <Card.Header>
            <Text
              transform='capitalize'
              b>
              {name}
            </Text>
          </Card.Header>
          <Card.Divider />
        </>
      )}
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={img || ''}
          objectFit='cover'
          width={'100%'}
          height={140}
          alt={name}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: 'flex-start' }}>
        <Row
          wrap='wrap'
          justify='space-between'
          align='center'>
          <Button
            size={'xs'}
            color={'error'}
            onPress={onClick}>
            Ver mas info
          </Button>
          <Text
            css={{
              color: '$accents7',
              fontWeight: '$semibold',
              fontSize: '$sm',
            }}>
            {id}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  )
}
