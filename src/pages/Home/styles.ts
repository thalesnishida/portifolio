import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  > span {
    font-size: 1.2rem;
  }

  > svg {
    cursor: pointer;
  }

  > nav {
    display: none;
  }

  @media (min-width: 768px) {
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem 3rem;

    > svg {
      display: none;
    }

    > nav {
      display: block;

      ul {
        display: flex;
        gap: 1rem;

        a {
          color: ${(props) => props.theme['gray-dark-600']};
        }

        a:hover {
          color: ${(props) => props.theme.emerald};
        }
      }
    }
  }
`
export const HomeGreeting = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 1rem;

  > .photo {
    width: 15rem;
    height: 17.5rem;

    img {
      border-radius: 16px;
      border: 4px solid ${(props) => props.theme.emerald};
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > .description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    > .about {
      h1 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 4.375rem;
      }

      p {
        color: ${(props) => props.theme['gray-dark-600']};
        line-height: 1.5rem;
        font-weight: 400;
        text-align: justify;
      }
    }

    > .location {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      .location-live,
      .location-available {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        svg {
          color: ${(props) => props.theme.emerald};
        }
      }
    }

    > .social-media {
      display: flex;
      gap: 1rem;

      svg:hover {
        color: ${(props) => props.theme.emerald};
      }
    }
  }

  // Media Screen 768px

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 3rem;

    > .photo {
      width: 75rem;
      height: 21.5rem;
    }

    > .description {
      > .location {
        align-self: flex-start;
        align-items: flex-start;

        > .location-available {
          margin-left: 0.26rem;
        }
      }

      > .social-media {
        align-self: baseline;
      }
    }
  }

  @media (min-width: 1024px) {
    max-width: 80rem;
    margin: 0 auto;

    > .photo {
      height: 27.5rem;
    }
  }
`
// SECTION HOME ABOUT

export const HomeAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['gray-dark-50']};
  padding: 4rem 0;

  > span {
    padding: 0 1rem;
    border: 1px solid black;
    border-radius: 12px;
    background: ${(props) => props.theme['gray-dark-200']};

    color: ${(props) => props.theme['gray-dark-600']};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    > span {
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 1024px) {
    > span {
      margin-bottom: 0;
    }
  }
`
export const HomeAboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem 2rem;

    gap: 1rem;
  }

  @media (min-width: 1440px) {
    gap: 13rem;
  }
`
export const HomeAboutPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  margin-bottom: 3rem;

  > .photo-profile {
    width: 15rem;
    height: 17.5rem;

    > img {
      border-radius: 16px;
      border: 4px solid ${(props) => props.theme.emerald};
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    > .photo-profile {
      width: 19rem;
      height: 23.5rem;
    }
  }
`
export const HomeAboutDescription = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;

  > p {
    text-align: justify;
  }
`

// SECTION SKILLS

export const HomeSkills = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  padding: 4rem 0;
  gap: 2rem;

  > span {
    width: fit-content;
    align-self: center;
    padding: 0 1rem;
    border: 1px solid black;
    border-radius: 12px;
    background: ${(props) => props.theme['gray-dark-200']};

    color: ${(props) => props.theme['gray-dark-600']};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`

export const HomeSkillsIcons = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));

  @media (min-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }

  @media (min-width: 1440px) {
    padding: 0 19rem;
  }
`

export const Icon = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// SECTION EXPERIENCE

export const HomeExperience = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 1rem;

  background: ${(props) => props.theme['gray-dark-50']};

  > span {
    background: ${(props) => props.theme['gray-dark-200']};
    padding: 0 1.15rem;
    border-radius: 12px;
  }

  > p {
    text-align: center;
  }
`

export const HomeExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Experience = styled.div`
  background: ${(props) => props.theme['gray-dark-100']};
  padding: 1rem;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${(props) => props.theme.emerald};
  }

  strong {
    font-size: 1.125rem;
  }

  ul {
    padding: 1rem;
  }

  li {
    padding: 0.3rem 0;
    list-style: disc;
  }

  .d {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 2rem;
    gap: 6rem;

    .d {
      gap: 5rem;
      display: flex;
      flex-direction: row-reverse;
    }
  }
`

// Sections Projects

export const HomeProjects = styled.section`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > span {
    background: ${(props) => props.theme['gray-dark-200']};
    padding: 0 1.15rem;
    border-radius: 12px;
  }

  > span,
  p {
    text-align: center;
  }
`

export const HomeProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImageProject = styled.div`
  padding: 2rem;
  background: var(--gray-dark-200, #374151);
  border-radius: 12px 12px 0 0;

  > .img {
    width: 100%;
    height: 100%;

    > img {
      width: inherit;
      object-fit: cover;
      border-radius: 12px;
    }
  }
`

export const ProjectDescription = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${(props) => props.theme['gray-dark-100']};
  border-radius: 0 0 12px 12px;

  > span {
    color: ${(props) => props.theme['gray-dark-900']};
  }

  > p {
    color: ${(props) => props.theme['gray-dark-600']};
    text-align: justify;
  }

  > svg:hover {
    cursor: pointer;
  }
`

export const Skill = styled.span`
  border-radius: 12px;
  padding: 2px 1.12rem;
  background: ${(props) => props.theme['gray-dark-200']};
`

export const SkillContent = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 0.5rem;
`
