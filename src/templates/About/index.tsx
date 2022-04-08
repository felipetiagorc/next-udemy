import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>MyTrips</S.Heading>

    <S.Body>
      <p>Lorem ipusum dolar sit amet</p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
