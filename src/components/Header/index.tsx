import { HiMenu } from 'react-icons/hi'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>[ T ]</span>
      <HiMenu size={32} />

      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
