import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>{heading}</S.Heading>

    <S.Body>
      {/* entra com valor html que pode ser perigoso...
       * como esse html vem do grapcms la ja deve ter sanitize..
       * mas pode fazer sanitize no 'body' aqui tbm:
       */}
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </S.Body>
  </S.Content>
)

export default PageTemplate
