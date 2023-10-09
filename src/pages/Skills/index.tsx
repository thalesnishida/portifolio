import { SkillsContainer, SkillsContainerIcons, Icon } from './styles'

import react from '../../assets/icon-react.svg'
import express from '../../assets/icon-express.svg'
import git from '../../assets/icon-git.svg'
import javascript from '../../assets/icon-javscript.svg'
import nest from '../../assets/icon-nest.svg'
import postegre from '../../assets/icon-postgresql.svg'
import storybook from '../../assets/icon-storybook.svg'
import tailwind from '../../assets/icon-tailwindcss.svg'
import tyscript from '../../assets/icon-typescript.svg'

export function Skills() {
  return (
    <SkillsContainer>
      <span>Skills</span>

      <p>The skills, tools and technologies I am really good at:</p>

      <SkillsContainerIcons>
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
      </SkillsContainerIcons>
    </SkillsContainer>
  )
}
