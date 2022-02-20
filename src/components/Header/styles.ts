import styled from '@emotion/styled/macro'
import { AppBar } from '@mui/material'
import { rgba } from 'polished'
import { colors } from 'src/lib/theme'

export const HeaderWrap = styled.div`
  background-color: ${rgba(colors.white, 0.3)};
  border-radius: 0 0 3rem 3rem;
  backdrop-filter: blur(1rem);
`

export const Header = styled(AppBar)`
  padding: 2.5rem 2rem;
  box-shadow: none;
`
