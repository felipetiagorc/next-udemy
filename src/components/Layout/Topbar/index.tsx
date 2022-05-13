import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'
export default function Topbar() {
  return (
<<<<<<< HEAD
    <S.TopbarContainer>
    <S.TopbarWrapper>
      <S.TopLeft>
        <S.Logo>
        <Link href={'/'}>
=======
    <S.Topbar>
      <Link href={'/'}>
>>>>>>> cfc9beb386e8f33888c928d81881b69962b0dbc0
        <a>
          <Image
            className="logo"
            src="/brasao-sp.png"
            alt="ss"
            width={50}
<<<<<<< HEAD
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
=======
            height={50}
          />
        </a>
      </Link>
    </S.Topbar>
>>>>>>> cfc9beb386e8f33888c928d81881b69962b0dbc0
  )
}
