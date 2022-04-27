import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { Menubar } from 'primereact/menubar'

export default function Topbar() {
  return (
    <>
      <div className=""></div>

      <Menubar
        className="topbar"
        start={
          <>
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
          </>
        }
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />
    </>
  )
}
