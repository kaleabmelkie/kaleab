import styled, { css } from 'styled-components'

export const LetsConnectStyles = styled.div`
  ${() => css`
    display: block;

    padding: 48px 0 0;

    text-align: center;

    a {
      display: inline-block;

      margin: 0 8px;

      width: 1.2em;
      height: 1.8em;

      font-size: 1.2em;
      line-height: 1.8em;
      text-align: center;

      @media (max-width: 480px) {
        width: 1.1em;
      }
    }

    .lets-connect-separator {
      display: inline-block;

      padding: 0 4px;

      font-weight: 100;
      font-size: 1.8em;

      color: rgba(0, 0, 0, 0.07);
    }

    .upwork-link {
      margin-top: 48px !important;
      padding: 12px 24px !important;

      width: initial !important;
      height: initial !important;

      font-size: inherit !important;

      background-color: rgba(0, 0, 0, 0.07);
    }
  `}
`