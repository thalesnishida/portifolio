import { HiOutlineMail } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { BiPhone, BiCopy } from 'react-icons/bi'

import {
  ContactContainer,
  ContactItem,
  ContactLinks,
  ContactLinksIcons,
} from './styles'
import { TextTitle } from '../../components/TextTitle'

export function Contact() {
  return (
    <ContactContainer>
      <TextTitle title="Contato" />
      <p>
        O que vem a seguir? Sinta-se à vontade para entrar em contato comigo se
        estiver procurando um desenvolvedor, tiver uma pergunta ou simplesmente
        quiser se conectar.
      </p>

      <ContactItem>
        <HiOutlineMail size={24} />
        <a href="">
          <strong id="target">medeiros.tn@gmail.com</strong>
        </a>
        <BiCopy size={24} data-clipboard-target="#target" className="copy" />
      </ContactItem>

      <ContactItem>
        <BiPhone size={24} />
        <a href="">
          <strong>+55 15 992718000</strong>
        </a>
        <BiCopy size={24} className="copy" />
      </ContactItem>

      <ContactLinks>
        <span>Você também pode me encontrar nessas plataformas!</span>
        <ContactLinksIcons>
          <FiGithub size={24} />
          <FiLinkedin size={24} />
        </ContactLinksIcons>
      </ContactLinks>
    </ContactContainer>
  )
}
