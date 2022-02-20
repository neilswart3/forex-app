import { CurrenciesList } from 'src/components'
import * as Styled from './styles'

const Exchange: React.FC = () => {
  return (
    <Styled.Exchange title='Exchange'>
      <CurrenciesList />
    </Styled.Exchange>
  )
}

export default Exchange
