import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'

import rocketMovies from '../../assets/rocket-movies2.png'

import {
  ProjectsContainer,
  ProjectImage,
  ProjectItem,
  ProjectsContent,
  ProjectDescription,
  ProjectSkillContent,
  ProjectSkill,
} from './styles'

export function Project() {
  return (
    <ProjectsContainer>
      <span>Projetos</span>
      <p>Alguns dos projetos notáveis que construí:</p>

      <ProjectsContent>
        <ProjectItem>
          <ProjectImage>
            <div className="img">
              <img src={rocketMovies} alt="" />
            </div>
          </ProjectImage>

          <ProjectDescription>
            <span>RocketMovies</span>
            <p>
              Desenvolvi uma aplicação full-stack que oferece aos usuários a
              capacidade de criar uma conta personalizada, fazer login e
              registrar notas de filmes que assistiram. A aplicação permite que
              os usuários atribuam classificações de 0 a 5 a cada filme,
              ajudando-os a manter um registro de suas preferências e
              experiências cinematográficas. Além disso, os usuários podem
              adicionar detalhes sobre os filmes, como título, diretor e gênero,
              tornando mais fácil organizar e revisitar suas seleções de filmes
              favoritos. Este projeto demonstra minhas habilidades tanto no
              desenvolvimento frontend quanto no backend, bem como na integração
              de recursos de autenticação e armazenamento de dados para criar
              uma experiência completa e personalizada para os usuários.
            </p>
            <ProjectSkillContent>
              <ProjectSkill>react</ProjectSkill>
              <ProjectSkill>node</ProjectSkill>
              <ProjectSkill>styled-components</ProjectSkill>
              <ProjectSkill>css</ProjectSkill>
              <ProjectSkill>javascript</ProjectSkill>
            </ProjectSkillContent>

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
        </ProjectItem>

        <ProjectItem id="dif">
          <ProjectImage className="dif">
            <div className="img">
              <img src={rocketMovies} alt="" />
            </div>
          </ProjectImage>

          <ProjectDescription className="dif-one">
            <span>Skills</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <ProjectSkillContent>
              <ProjectSkill>react</ProjectSkill>
              <ProjectSkill>node</ProjectSkill>
              <ProjectSkill>styled-components</ProjectSkill>
              <ProjectSkill>css</ProjectSkill>
              <ProjectSkill>javascript</ProjectSkill>
            </ProjectSkillContent>

            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <BiLinkExternal size={24} />
            </a>
          </ProjectDescription>
        </ProjectItem>
      </ProjectsContent>
    </ProjectsContainer>
  )
}
