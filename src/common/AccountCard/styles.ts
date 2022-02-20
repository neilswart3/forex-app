import styled from '@emotion/styled/macro'
import { Card, CardActionArea, CardHeader } from '@mui/material'
import { rgba } from 'polished'
import { colors } from 'src/lib/theme'

export const AccountCard = styled(Card)`
  border-radius: 2rem;
  background-color: ${rgba(colors.white, 0.4)};
  backdrop-filter: blur(4rem);
`

export const AccountCardActionArea = styled(CardActionArea)``

export const AccountCardHeader = styled(CardHeader)`
  .MuiCardHeader-action {
    align-self: center;
    margin: 0;
  }
`
