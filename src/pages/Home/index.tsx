import { HomeContainer } from './styles'

import { Header } from '../../components/Header'
import { Greeting } from '../Greeting'
import { About } from '../About'
import { Skills } from '../Skills'
import { Experience } from '../Experience'
import { Project } from '../Project'
import { Contact } from '../Contact'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Greeting />

      <About />

      <Skills />

      <Experience />

      <Project />

      <Contact />
    </HomeContainer>
  )
}
