exports.component = (name, props) => `import * as Styled from './styles'

${
  props
    ? `interface Props {

}`
    : ''
}

const ${name}: React.FC${props ? '<Props>' : ''} = (${
  props ? 'props' : ''
}) => {
  return <Styled.${name}>${name} component</Styled.${name}>
}

export default ${name}
`

exports.styles = (name) => `import styled from '@emotion/styled/macro'

export const ${name} = styled.div\`\`
`

exports.test = (name, props) => `import { render } from '@testing-library/react'
import ${name} from '.'

${props} ? 'const props = {
  
}' : ''

describe(${name}, () => {
  it('should render the expected element', () => {
    render(<${name} ${props ? '{...props}' : ''} />)
  })
})
`
