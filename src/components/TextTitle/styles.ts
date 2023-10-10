import styled from 'styled-components'

export const TextTitleContainer = styled.span`
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
`
