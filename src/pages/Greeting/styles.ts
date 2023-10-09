import styled from 'styled-components'

export const GreetingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    max-width: 80rem;
    margin: 0 auto;
  }
`
export const GreetingPhotoProfile = styled.div`
  width: 15rem;
  height: 17.5rem;

  img {
    border-radius: 16px;
    border: 4px solid ${(props) => props.theme.emerald};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 75rem;
    height: 21.5rem;
  }

  @media (min-width: 1024px) {
    height: 27.5rem;
  }
`
export const GreetingDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`
export const GreetingDescriptionAbout = styled.div`
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
`
export const GreetingDescriptionLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    align-self: flex-start;
    align-items: flex-start;
  }
`
export const GreetingDescriptionLocationLive = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.emerald};
  }
`
export const GreetingDescriptionLocationAvailable = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.emerald};
  }

  @media (min-width: 768px) {
    margin-left: 0.26rem;
  }
`
export const GreetingDescriptionSocialMedia = styled.div`
  display: flex;
  gap: 1rem;

  svg:hover {
    color: ${(props) => props.theme.emerald};
  }

  @media (min-width: 768px) {
    align-self: baseline;
  }
`
