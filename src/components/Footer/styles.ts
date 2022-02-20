import styled from '@emotion/styled/macro'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { rgba } from 'polished'
import { colors } from 'src/lib/theme'

export const Footer = styled(BottomNavigation)`
  background-color: ${rgba(colors.white, 0.6)};
  backdrop-filter: blur(4rem);
`

export const FooterAction = styled(BottomNavigationAction)`
  opacity: 0.5;

  &.Mui-selected {
    opacity: 1;
  }
`
