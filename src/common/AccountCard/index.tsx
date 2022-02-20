import { Avatar, Typography } from '@mui/material'
import { Account } from 'src/lib'
import * as Styled from './styles'

interface Props {
  data: Account
  base: string
  exchange: number
}

const AccountCard: React.FC<Props> = ({ data, base, exchange }) => {
  const { code, name, value } = data

  return (
    <Styled.AccountCard elevation={6}>
      <Styled.AccountCardActionArea>
        <Styled.AccountCardHeader
          avatar={<Avatar>{code}</Avatar>}
          title={<Typography variant='h5'>{name}</Typography>}
          subheader={
            <Typography variant='caption'>
              1.00 {base} = {exchange.toFixed(2)} {code}
            </Typography>
          }
          action={<Typography variant='h4'>{value}</Typography>}
        />
      </Styled.AccountCardActionArea>
    </Styled.AccountCard>
  )
}

export default AccountCard
