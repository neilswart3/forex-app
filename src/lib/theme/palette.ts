import { Palette, PaletteColor } from '@mui/material'
import colors from './colors'

const palette: Partial<Palette> = {
  primary: {
    light: colors.blueLight,
    main: colors.blueMain,
    dark: colors.blueDark,
  } as PaletteColor,
  secondary: {
    light: colors.orangeLight,
    main: colors.orangeMain,
  } as PaletteColor,
  text: {
    primary: colors.blueDark,
    secondary: colors.black,
    disabled: '#89979D',
  },
}

export default palette
