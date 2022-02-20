import styled from '@emotion/styled/macro'
import { rgba } from 'polished'
import { colors } from 'src/lib/theme'

export const PageLayoutWrap = styled.div`
  background: url('/img/background-gradient-1.jpg') no-repeat center/cover;
`
export const PageLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: ${rgba(colors.white, 0.2)};
  backdrop-filter: blur(0.5rem);
`

export const PageLayoutMain = styled.main`
  padding: 1.5rem 2rem;
`
