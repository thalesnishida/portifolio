import styled from 'styled-components'

export const ProjectsContainer = styled.section`
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

  @media (min-width: 768px) {
    padding: 4rem 3rem;
    max-width: 80rem;
    margin: 0 auto;
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    > #dif {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  @media (min-width: 1024px) {
    > #dif {
      display: grid;
      //grid-template-rows: 1fr 1fr;

      > .dif {
        border-radius: 0 12px 12px 0;
      }

      > .dif-one {
        border-radius: 12px 0 0 12px;
      }
    }
  }
`

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 1152px;
    > .dif {
      order: 2;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const ProjectImage = styled.div`
  padding: 2rem;
  background: var(--gray-dark-200, #374151);
  border-radius: 12px 12px 0 0;

  > .img {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: inherit;
      border-radius: 12px;
    }
  }

  @media (min-width: 768px) {
    padding: 3rem;

    > .img {
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 1024px) {
    border-radius: 12px 0 0 12px;
  }

  @media (min-width: 1440px) {
    > .img {
      img {
        height: -webkit-fill-available;
        object-position: left;
      }
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
    font-weight: 600;
    font-size: 1.125rem;
  }

  > p {
    color: ${(props) => props.theme['gray-dark-600']};
    text-align: justify;
    white-space: break-spaces;
  }

  > a {
    color: ${(props) => props.theme['gray-dark-600']};
    display: contents;
  }

  > a:hover {
    color: ${(props) => props.theme['gray-dark-800']};
  }

  > .access-project {
    display: flex;
    gap: 1rem;

    > svg:hover {
      color: ${(props) => props.theme.emerald};
      cursor: pointer;
    }

    > .icon-git {
      svg:hover {
        color: ${(props) => props.theme.emerald};
      }
    }
  }

  @media (min-width: 768px) {
    padding: 3rem;
    //border-radius: 0 12px 12px 0;
  }

  @media (min-width: 1024px) {
    border-radius: 0 12px 12px 0;
  }
`

export const ProjectSkill = styled.span`
  border-radius: 12px;
  padding: 2px 1.12rem;
  background: ${(props) => props.theme['gray-dark-200']};
`

export const ProjectSkillContent = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 0.5rem;
`
