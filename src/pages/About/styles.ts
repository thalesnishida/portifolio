import styled from 'styled-components'

export const AboutContainer = styled.section`
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
export const AboutContent = styled.div`
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
export const AboutContentPhoto = styled.div`
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
export const AboutContentDescription = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;

  > p {
    text-align: justify;
  }
`
