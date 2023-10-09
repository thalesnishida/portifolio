import styled from 'styled-components'

export const SkillsContainer = styled.section`
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

export const SkillsContainerIcons = styled.div`
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
