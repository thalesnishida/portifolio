import {
  AboutContainer,
  AboutContent,
  AboutContentPhoto,
  AboutContentDescription,
} from './styles'

import photo from '../../assets/photo-profile.jpg'

export function About() {
  return (
    <AboutContainer>
      <span>about me</span>
      <AboutContent>
        <AboutContentPhoto>
          <div className="photo-profile">
            <img src={photo} alt="" />
          </div>
        </AboutContentPhoto>

        <AboutContentDescription>
          <h2>Curious about me? Here you have it:</h2>

          <p>
            Sou um designer apaixonado, autodenominado, especializado em
            desenvolvimento full stack (React.js e Node.js). Tenho grande
            entusiasmo em dar vida aos aspectos técnicos e visuais de produtos
            digitais. A experiência do usuário, o design perfeito em pixel e
            escrever código claro, legível e altamente performante são
            importantes para mim.
          </p>

          <p>
            Comecei minha jornada como desenvolvedor web em 2021 e, desde então,
            continuo a crescer e evoluir, assumindo novos desafios e aprendendo
            as tecnologias mais recentes ao longo do caminho. Agora, em meus
            trinta e poucos anos, estou construindo aplicações web de ponta
            usando tecnologias modernas como Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase e muito mais.
          </p>

          <p>
            Sou um pensador progressista e gosto de trabalhar em produtos do
            início ao fim, desde a concepção até o desenvolvimento.
          </p>

          <p>
            Quando não estou no modo desenvolvedor em tempo integral, você pode
            me encontrar circulando pelo Twitter ou pelo Indie Hacker,
            testemunhando a jornada de startups iniciantes ou aproveitando algum
            tempo livre. Você pode me seguir no Twitter, onde compartilho
            insights relacionados à tecnologia e trabalho de forma pública, ou
            pode me acompanhar no GitHub.
          </p>

          <p>Finalmente, algumas informações rápidas sobre mim.</p>

          <p>
            Uma última coisa, estou disponível para trabalhos freelance, então
            sinta-se à vontade para entrar em contato e dizer olá! Eu prometo
            que não mordo. 😉
          </p>
        </AboutContentDescription>
      </AboutContent>
    </AboutContainer>
  )
}
