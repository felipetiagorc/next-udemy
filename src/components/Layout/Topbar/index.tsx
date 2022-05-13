import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'
export default function Topbar() {
  return (
    <S.TopbarContainer>
    <S.TopbarWrapper>
      <S.TopLeft>
        <S.Logo>
        <Link href={'/'}>
        <a>
          <Image
            className="logo"
            src="/brasao-sp.png"
            alt="ss"
            width={50}
            height={50}            
          />
        </a>
      </Link>
        </S.Logo>
      </S.TopLeft>
      
      <S.TopRight>
        Login
      </S.TopRight>
    </S.TopbarWrapper>
    </S.TopbarContainer>
  )
}
