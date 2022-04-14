import React from 'react'

import { Container, Option, Icon } from './styles'

interface Props {
  title: string
  select: () => void
}

export function Options({ title, select }: Props) {
  return (
    <Container onPress={select}>
      <Option>{title}</Option>
      <Icon name="chevron-down" />
    </Container>
  )
}
