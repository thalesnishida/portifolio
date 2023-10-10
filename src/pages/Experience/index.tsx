import { TextTitle } from '../../components/TextTitle'
import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceItem,
} from './styles'

export function Experience() {
  return (
    <ExperienceContainer>
      <TextTitle title="Experiencia" />
      <p>Aqui está um resumo rápido das minhas experiências mais recentes:</p>

      <ExperienceContent>
        <ExperienceItem>
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
                  Colaborei de perto com clientes e designers independentes para
                  transformar conceitos de design em código funcional e entregar
                  uma experiência do usuário coesa.
                </li>
                <li>
                  Fui encarregado de otimizar o desempenho e a responsividade
                  dos projetos, garantindo que funcionassem perfeitamente em
                  diferentes navegadores e dispositivos enquanto trabalhava como
                  freelancer.
                </li>
              </ul>
            </div>
          </div>
        </ExperienceItem>
      </ExperienceContent>
    </ExperienceContainer>
  )
}
