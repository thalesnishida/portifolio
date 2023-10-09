import styled from 'styled-components'

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['gray-dark-50']};

  gap: 2rem;

  text-align: center;

  padding: 4rem 1rem;

  > span {
    background: ${(props) => props.theme['gray-dark-200']};
    padding: 0.1rem 1.2rem;
    border-radius: 12px;
  }

  > p {
    color: ${(props) => props.theme['gray-dark-600']};
    line-height: 28px;
  }

  @media (min-width: 768px) {
    > p {
      font-size: 1.25rem;
      text-align: center;
      font-style: normal;
      font-weight: 400;
    }
  }

  @media (min-width: 1024px) {
    padding: 4rem 19rem;
  }
`
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > .copy:hover {
    color: ${(props) => props.theme.emerald};
    cursor: pointer;
  }
`

export const ContactLinks = styled.div`
  display: grid;
  gap: 1rem;
`

export const ContactLinksIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme['gray-dark-600']};
  }

  svg:hover {
    color: ${(props) => props.theme.emerald};
    cursor: pointer;
  }
`
