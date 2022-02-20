import { AddCircle, CurrencyExchange, Home } from '@mui/icons-material'

export type NavValue = 'home' | 'exchange' | 'add-account'

const navs = {
  home: {
    path: '/',
    icon: <Home />,
  },
  exchange: {
    path: '/exchange',
    icon: <CurrencyExchange />,
  },
  'add-account': {
    path: '/add-account',
    icon: <AddCircle />,
  },
}

export default navs
