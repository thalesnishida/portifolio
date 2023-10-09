import styled from 'styled-components'

export const ExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 1rem;

  margin: 0 auto;

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

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ExperienceItem = styled.div`
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
    padding: 2rem;

    .d {
      display: flex;
      flex-direction: row-reverse;
      gap: 1rem;

      > span {
        min-width: max-content;
      }
    }
  }

  @media (min-width: 1120px) {
    flex-direction: row;
    gap: 3rem;

    max-width: 75rem;
  }
`
