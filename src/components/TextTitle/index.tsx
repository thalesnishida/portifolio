import { TextTitleContainer } from './styles'

type PropsTitle = {
  title: string
}

export function TextTitle({ title }: PropsTitle) {
  return <TextTitleContainer>{title}</TextTitleContainer>
}
