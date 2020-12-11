import styled, { css } from 'styled-components'

export const HomeStyles = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    min-height: calc(100vh - 24px - 48px - 20px - 24px);
    width: 100%;

    > :first-child {
      margin-top: auto !important;
    }

    > :last-child {
      margin-bottom: auto !important;
    }
  `}
`
