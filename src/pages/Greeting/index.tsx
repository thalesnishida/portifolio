import { GoDotFill } from 'react-icons/go'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import profile from '../../assets/profile.jpg'

import {
  GreetingContainer,
  GreetingDescription,
  GreetingDescriptionAbout,
  GreetingDescriptionLocation,
  GreetingDescriptionLocationAvailable,
  GreetingDescriptionLocationLive,
  GreetingDescriptionSocialMedia,
  GreetingPhotoProfile,
} from './styles'

export function Greeting() {
  return (
    <GreetingContainer>
      <GreetingPhotoProfile>
        <img src={profile} alt="" />
      </GreetingPhotoProfile>

      <GreetingDescription>
        <GreetingDescriptionAbout>
          <h1>Olá, eu sou Thales Nishida. 👋</h1>

          <p>
            Sou um desenvolvedor full stack, com foco em criar (e ocasionalmente
            em design) experiências digitais excepcionais que sejam rápidas,
            acessíveis, visualmente atraentes e responsivas. Tenho paixão por
            desenvolver aplicações web e estou comprometido em oferecer
            resultados de alta qualidade.
          </p>
        </GreetingDescriptionAbout>

        <GreetingDescriptionLocation className="location">
          <GreetingDescriptionLocationLive className="location-live">
            <HiOutlineLocationMarker size={32} />
            Sorocaba, Brazil
          </GreetingDescriptionLocationLive>

          <GreetingDescriptionLocationAvailable className="location-available">
            <GoDotFill size={24} />
            <span>Disponível para novos projetos.</span>
          </GreetingDescriptionLocationAvailable>
        </GreetingDescriptionLocation>

        <GreetingDescriptionSocialMedia>
          <a
            href="https://github.com/thalesnishida"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/thales-nishida/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={24} />
          </a>
        </GreetingDescriptionSocialMedia>
      </GreetingDescription>
    </GreetingContainer>
  )
}
