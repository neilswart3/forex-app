import { createTheme, responsiveFontSizes } from '@mui/material'
import colors from './colors'
import components from './components'
import palette from './palette'

let theme = createTheme({
  palette,
  components,
})
theme = responsiveFontSizes(theme)

export { colors }

export default theme
