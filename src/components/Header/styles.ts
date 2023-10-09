import styled from 'styled-components'

export const HeaderContainer = styled.header`
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
