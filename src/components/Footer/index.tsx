import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navs, getPathName } from 'src/lib'
import Case from 'case'
import * as Styled from './styles'
import { NavValue } from 'src/lib/navs'

const Footer: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const name: NavValue = getPathName(pathname)
  const [value, setValue] = useState<NavValue>(name)

  const handleChange = (_e: any, newValue: NavValue): void => {
    setValue(newValue)
    navigate(navs[newValue].path)
  }

  return (
    <Styled.Footer value={value} onChange={handleChange}>
      {Object.entries(navs).map(([key, { icon }]) => (
        <Styled.FooterAction
          key={key}
          value={Case.kebab(key)}
          label={Case.capital(key)}
          icon={icon}
        />
      ))}
    </Styled.Footer>
  )
}

export default Footer
