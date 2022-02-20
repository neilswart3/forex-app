import { Components } from '@mui/material'
import { rgba } from 'polished'
import colors from './colors'

const components: Components = {
  MuiAvatar: {
    styleOverrides: {
      root: {
        background: `radial-gradient(87.73% 117.5% at 71.52% 13.75%, ${colors.purpleLight} 0%, ${colors.purpleDark} 100%);`,
        height: '3.25rem',
        width: '3.25rem',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        padding: '0.5rem 2.5rem',
        borderRadius: '2rem',
        boxShadow: 'none',
      },
      containedPrimary: {
        background: `linear-gradient(125.78deg, ${colors.blueLight} 24.99%, ${colors.blueMain} 103.87%)`,
      },
      containedSecondary: {
        background: `linear-gradient(125.78deg, ${colors.orangeLight} 24.99%, ${colors.orangeMain} 103.87%)`,
      },
    },
  },
}

export default components
