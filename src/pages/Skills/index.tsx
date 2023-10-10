import { SkillsContainer, SkillsContainerIcons } from './styles'

import react from '../../assets/icon-react.svg'
import express from '../../assets/icon-express.svg'
import git from '../../assets/icon-git.svg'
import javascript from '../../assets/icon-javscript.svg'
import nest from '../../assets/icon-nest.svg'
import postegre from '../../assets/icon-postgresql.svg'
import storybook from '../../assets/icon-storybook.svg'
import tailwind from '../../assets/icon-tailwindcss.svg'
import typescript from '../../assets/icon-typescript.svg'
import { TextTitle } from '../../components/TextTitle'

import { Icon } from '../../components/Icon'

export function Skills() {
  return (
    <SkillsContainer>
      <TextTitle title="Skills" />

      <p>The skills, tools and technologies I am really good at:</p>

      <SkillsContainerIcons>
        <Icon imgIcon={javascript} name="Javascript" />
        <Icon imgIcon={react} name="React" />
        <Icon imgIcon={nest} name="Nest" />
        <Icon imgIcon={typescript} name="tyscript" />
        <Icon imgIcon={express} name="Express" />
        <Icon imgIcon={git} name="Git" />
        <Icon imgIcon={postegre} name="Postegre" />
        <Icon imgIcon={storybook} name="Storybook" />
        <Icon imgIcon={tailwind} name="Tailwind" />
      </SkillsContainerIcons>
    </SkillsContainer>
  )
}
