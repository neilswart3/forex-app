import { Typography } from '@mui/material'
import * as Styled from './styles'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Styled.HeaderWrap>
      <Styled.Header position='static' color='transparent' enableColorOnDark>
        <Typography variant='h3' component='h1'>
          {title}
        </Typography>
      </Styled.Header>
    </Styled.HeaderWrap>
  )
}

export default Header
