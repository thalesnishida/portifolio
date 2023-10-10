import { IconContainer } from './styles'

type PropsIcon = {
  imgIcon: string
  name: string
}

export function Icon({ imgIcon, name }: PropsIcon) {
  return (
    <IconContainer>
      <img src={imgIcon} alt="" />
      <span>{name}</span>
    </IconContainer>
  )
}
