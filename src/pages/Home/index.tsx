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
} from './styles'

import { HiMenu, HiOutlineLocationMarker } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { GoDotFill } from 'react-icons/go'

import profile from '../../assets/profile.jpg'
import photo from '../../assets/photo-profile.jpg'

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
  return (
    <HomeContainer>
      <HomeHeader>
        <span>[ T ]</span>
        <HiMenu size={32} />

        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
            <h1>Hi, I’m Thales Nishida 👋</h1>

            <p>
              I m a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>

          <div className="location">
            <div className="location-live">
              <HiOutlineLocationMarker size={32} />
              Sorocaba, Brazil
            </div>

            <div className="location-available">
              <GoDotFill size={24} />
              <span>Avalible for new projects</span>
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

      <HomeAbout>
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
              I m a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>

            <p>
              I began my journey as a web developer in 2015, and since then, Ive
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I m building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>

            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>

            <p>
              When I m not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>

            <p>Finally, some quick bits about me.</p>

            <p>
              One last thing, I m available for freelance work, so feel free to
              reach out and say hello! I promise I dont bite 😉
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

      <HomeExperience>
        <span>Experience</span>
        <p>Here is a quick summary of my most recent experiences:</p>

        <HomeExperienceContent>
          <Experience>
            <h2>UpWork</h2>

            <div className="d">
              <span>Nov 2021 - Present</span>
              <div>
                <strong>Sr. Frontend Developer</strong>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
          </Experience>

          <Experience>
            <h2>UpWork</h2>

            <div className="d">
              <span>Nov 2021 - Present</span>
              <div>
                <strong>Sr. Frontend Developer</strong>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
          </Experience>

          <Experience>
            <h2>UpWork</h2>

            <div className="d">
              <span>Nov 2021 - Present</span>
              <div>
                <strong>Sr. Frontend Developer</strong>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
          </Experience>
        </HomeExperienceContent>
      </HomeExperience>

      <HomeProjects>
        <span>Work</span>
        <p>Some of the noteworthy projects I have built:</p>

        <HomeProjectsContainer>
          <Project>
            <ImageProject>
              <div className="img">
                <img
                  src="https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1696809600&Signature=bFuCIGytdVrzpOxIKkXtC1~WxB1KAUFcu8ktcY1zC1JVtqTt4j31Srgn4q-Yubq9~UfCvszqXxiu3jwlozKJ-ev7Qvd~orDV5NAo3ZTiaQbtPlCIzb4WuOPxYDKEvlDFe1pkXxIR-DYkOJNgSJnmOk5DgNxXlwX1r66Qp~6GVPCr80wyZVSlG3YJFbudOPVWfZDzJfbplMXSR5bzUYsLrJCF7yrJb3Z6p9giDGHGPUKFDZdHjBy5ic-k9MRe4y-Nh0HRFRKVwCG~vWU2Ez4-ivGHgoex1DpS5pqBpnpT~mQ-XNxgz5psnu0SApG93VsZAovOJ8V3gond39tBvUfZEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
            </ImageProject>

            <ProjectDescription>
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

          <Project>
            <ImageProject>
              <div className="img">
                <img
                  src="https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1696809600&Signature=bFuCIGytdVrzpOxIKkXtC1~WxB1KAUFcu8ktcY1zC1JVtqTt4j31Srgn4q-Yubq9~UfCvszqXxiu3jwlozKJ-ev7Qvd~orDV5NAo3ZTiaQbtPlCIzb4WuOPxYDKEvlDFe1pkXxIR-DYkOJNgSJnmOk5DgNxXlwX1r66Qp~6GVPCr80wyZVSlG3YJFbudOPVWfZDzJfbplMXSR5bzUYsLrJCF7yrJb3Z6p9giDGHGPUKFDZdHjBy5ic-k9MRe4y-Nh0HRFRKVwCG~vWU2Ez4-ivGHgoex1DpS5pqBpnpT~mQ-XNxgz5psnu0SApG93VsZAovOJ8V3gond39tBvUfZEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
            </ImageProject>

            <ProjectDescription>
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
    </HomeContainer>
  )
}
