import Header from '../Header'
import Footer from '../Footer'
import * as Styled from './styles'

interface Props {
  title: string
  children: React.ReactNode
  className?: string
}

const PageLayout: React.FC<Props> = (props) => {
  const { title, children, className = 'PageLayout' } = props
  return (
    <Styled.PageLayoutWrap>
      <Styled.PageLayout className={className}>
        <Header title={title} />
        <Styled.PageLayoutMain>{children}</Styled.PageLayoutMain>
        <Footer />
      </Styled.PageLayout>
    </Styled.PageLayoutWrap>
  )
}

export default PageLayout
