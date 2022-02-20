import { useState } from 'react'
import Case from 'case'
import navs from './navs'
import * as Styled from './styles'

type Value = 'home' | 'exchange' | 'add-account'

const Footer: React.FC = () => {
  const [value, setValue] = useState<Value>('home')

  const handleChange = (_e: any, newValue: Value): void => {
    setValue(newValue)
  }

  return (
    <Styled.Footer value={value} onChange={handleChange}>
      {Object.entries(navs).map(([key, icon]) => (
        <Styled.FooterAction
          value={Case.kebab(key)}
          label={Case.capital(key)}
          icon={icon}
        />
      ))}
    </Styled.Footer>
  )
}

export default Footer
