import ClipboardJS from 'clipboard'

import {
  HomeGreeting,
  HomeContainer,
  HomeHeader,
  HomeAbout,
  HomeAboutPhoto,
  HomeAboutDescription,
  HomeAboutContainer,
  HomeSkills,
  HomeSkillsIcons,
  Icon,
  HomeExperience,
  HomeExperienceContent,
  Experience,
  HomeProjects,
  HomeProjectsContainer,
  Project,
  ImageProject,
  ProjectDescription,
  Skill,
  SkillContent,
  HomeContact,
  Contact,
  Links,
  LinksIcons,
} from './styles'

import { HiMenu, HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { BiLinkExternal, BiCopy, BiPhone } from 'react-icons/bi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'

import profile from '../../assets/profile.jpg'
import photo from '../../assets/photo-profile.jpg'
import rocketMovies from '../../assets/rocket-movies2.png'

import react from '../../assets/icon-react.svg'
import express from '../../assets/icon-express.svg'
import git from '../../assets/icon-git.svg'
import javascript from '../../assets/icon-javscript.svg'
import nest from '../../assets/icon-nest.svg'
import postegre from '../../assets/icon-postgresql.svg'
import storybook from '../../assets/icon-storybook.svg'
import tailwind from '../../assets/icon-tailwindcss.svg'
import tyscript from '../../assets/icon-typescript.svg'

export function Home() {
  const phoneNumber = '+55 15 992718000'

  // Configurar ClipboardJS para copiar o texto quando o ícone BiCopy for clicado
  const clipboard = new ClipboardJS('.copy-button', {
    text: function () {
      return phoneNumber
    },
  })

  clipboard.on('success', function (e) {
    console.log('Texto copiado:', e.text)
    // Você pode adicionar feedback ou ações adicionais aqui, se necessário
  })

  return (
    <HomeContainer>
      <HomeHeader>
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
      </HomeHeader>

      <HomeGreeting>
        <div className="photo">
          <img src={profile} alt="" />
        </div>

        <div className="description">
          <div className="about">
            <h1>Olá, eu sou Thales Nishida. 👋</h1>

            <p>
              Sou um desenvolvedor full stack, com foco em criar (e
              ocasionalmente em design) experiências digitais excepcionais que
              sejam rápidas, acessíveis, visualmente atraentes e responsivas.
              Tenho paixão por desenvolver aplicações web e estou comprometido
              em oferecer resultados de alta qualidade.
            </p>
          </div>

          <div className="location">
            <div className="location-live">
              <HiOutlineLocationMarker size={32} />
              Sorocaba, Brazil
            </div>

            <div className="location-available">
              <GoDotFill size={24} />
              <span>Disponível para novos projetos.</span>
            </div>
          </div>

          <div className="social-media">
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
          </div>
        </div>
      </HomeGreeting>

      <HomeAbout id="about">
        <span>about me</span>
        <HomeAboutContainer>
          <HomeAboutPhoto>
            <div className="photo-profile">
              <img src={photo} alt="" />
            </div>
          </HomeAboutPhoto>

          <HomeAboutDescription>
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
              Comecei minha jornada como desenvolvedor web em 2021 e, desde
              então, continuo a crescer e evoluir, assumindo novos desafios e
              aprendendo as tecnologias mais recentes ao longo do caminho.
              Agora, em meus trinta e poucos anos, estou construindo aplicações
              web de ponta usando tecnologias modernas como Next.js, TypeScript,
              Nestjs, Tailwindcss, Supabase e muito mais.
            </p>

            <p>
              Sou um pensador progressista e gosto de trabalhar em produtos do
              início ao fim, desde a concepção até o desenvolvimento.
            </p>

            <p>
              Quando não estou no modo desenvolvedor em tempo integral, você
              pode me encontrar circulando pelo Twitter ou pelo Indie Hacker,
              testemunhando a jornada de startups iniciantes ou aproveitando
              algum tempo livre. Você pode me seguir no Twitter, onde
              compartilho insights relacionados à tecnologia e trabalho de forma
              pública, ou pode me acompanhar no GitHub.
            </p>

            <p>Finalmente, algumas informações rápidas sobre mim.</p>

            <p>
              Uma última coisa, estou disponível para trabalhos freelance, então
              sinta-se à vontade para entrar em contato e dizer olá! Eu prometo
              que não mordo. 😉
            </p>
          </HomeAboutDescription>
        </HomeAboutContainer>
      </HomeAbout>

      <HomeSkills>
        <span>Skills</span>

        <p>The skills, tools and technologies I am really good at:</p>

        <HomeSkillsIcons>
          <Icon>
            <img src={javascript} alt="" />
            <span>Javascript</span>
          </Icon>

          <Icon>
            <img src={react} alt="" />
            <span>React</span>
          </Icon>

          <Icon>
            <img src={nest} alt="" />
            <span>Nest</span>
          </Icon>

          <Icon>
            <img src={tyscript} alt="" />
            <span>Typescript</span>
          </Icon>

          <Icon>
            <img src={express} alt="" />
            <span>Express</span>
          </Icon>

          <Icon>
            <img src={git} alt="" />
            <span>Git</span>
          </Icon>

          <Icon>
            <img src={postegre} alt="" />
            <span>Postgre</span>
          </Icon>

          <Icon>
            <img src={storybook} alt="" />
            <span>Storybook</span>
          </Icon>

          <Icon>
            <img src={tailwind} alt="" />
            <span>Tailwind</span>
          </Icon>
        </HomeSkillsIcons>
      </HomeSkills>

      <HomeExperience id="work">
        <span>Experiencias</span>
        <p>Aqui está um resumo rápido das minhas experiências mais recentes:</p>

        <HomeExperienceContent>
          <Experience>
            <h2>Kansha Consultoria</h2>

            <div className="d">
              <span>Junho 2023 - Outubro 2023</span>
              <div>
                <strong>Freelance Desenvolvedor FrontEnd</strong>
                <ul>
                  <li>
                    Criei interfaces de usuário interativas e visualmente
                    atraentes para sites e aplicativos web como freelancer.
                  </li>
                  <li>
                    Colaborei de perto com clientes e designers independentes
                    para transformar conceitos de design em código funcional e
                    entregar uma experiência do usuário coesa.
                  </li>
                  <li>
                    Fui encarregado de otimizar o desempenho e a responsividade
                    dos projetos, garantindo que funcionassem perfeitamente em
                    diferentes navegadores e dispositivos enquanto trabalhava
                    como freelancer.
                  </li>
                </ul>
              </div>
            </div>
          </Experience>
        </HomeExperienceContent>
      </HomeExperience>

      <HomeProjects id="projects">
        <span>Projetos</span>
        <p>Alguns dos projetos notáveis que construí:</p>

        <HomeProjectsContainer>
          <Project>
            <ImageProject>
              <div className="img">
                <img src={rocketMovies} alt="" />
              </div>
            </ImageProject>

            <ProjectDescription>
              <span>RocketMovies</span>
              <p>
                Desenvolvi uma aplicação full-stack que oferece aos usuários a
                capacidade de criar uma conta personalizada, fazer login e
                registrar notas de filmes que assistiram. A aplicação permite
                que os usuários atribuam classificações de 0 a 5 a cada filme,
                ajudando-os a manter um registro de suas preferências e
                experiências cinematográficas. Além disso, os usuários podem
                adicionar detalhes sobre os filmes, como título, diretor e
                gênero, tornando mais fácil organizar e revisitar suas seleções
                de filmes favoritos. Este projeto demonstra minhas habilidades
                tanto no desenvolvimento frontend quanto no backend, bem como na
                integração de recursos de autenticação e armazenamento de dados
                para criar uma experiência completa e personalizada para os
                usuários.
              </p>
              <SkillContent>
                <Skill>react</Skill>
                <Skill>node</Skill>
                <Skill>styled-components</Skill>
                <Skill>css</Skill>
                <Skill>javascript</Skill>
              </SkillContent>

              <div className="access-project">
                <a
                  href="https://rocketmovies93.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiLinkExternal size={24} />
                </a>
                <a
                  href="https://github.com/thalesnishida/rocketmovies"
                  target="_blank"
                  className="icon-git"
                  rel="noreferrer"
                >
                  <FiGithub size={24} />
                </a>
              </div>
            </ProjectDescription>
          </Project>

          <Project id="dif">
            <ImageProject className="dif">
              <div className="img">
                <img src={rocketMovies} alt="" />
              </div>
            </ImageProject>

            <ProjectDescription className="dif-one">
              <span>Skills</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <SkillContent>
                <Skill>react</Skill>
                <Skill>node</Skill>
                <Skill>styled-components</Skill>
                <Skill>css</Skill>
                <Skill>javascript</Skill>
              </SkillContent>

              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal size={24} />
              </a>
            </ProjectDescription>
          </Project>
        </HomeProjectsContainer>
      </HomeProjects>

      <HomeContact id="contact">
        <span>Contato</span>
        <p>
          O que vem a seguir? Sinta-se à vontade para entrar em contato comigo
          se estiver procurando um desenvolvedor, tiver uma pergunta ou
          simplesmente quiser se conectar.
        </p>

        <Contact>
          <HiOutlineMail size={24} />
          <a href="">
            <strong id="target">medeiros.tn@gmail.com</strong>
          </a>
          <BiCopy size={24} data-clipboard-target="#target" className="copy" />
        </Contact>

        <Contact>
          <BiPhone size={24} />
          <a href="">
            <strong>+55 15 992718000</strong>
          </a>
          <BiCopy size={24} className="copy" />
        </Contact>

        <Links>
          <span>Você também pode me encontrar nessas plataformas!</span>
          <LinksIcons>
            <FiGithub size={24} />
            <FiLinkedin size={24} />
          </LinksIcons>
        </Links>
      </HomeContact>
    </HomeContainer>
  )
}
