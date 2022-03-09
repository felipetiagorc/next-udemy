import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import Link from 'next/link'

export default function Topbar() {
  return (
    <>
      <Menubar
        start={
          <>
            <Link href={'/'}>
              <a>
                <p className="nomeApp">
                  GPU | {`${process.env.NEXT_PUBLIC_PROJECT_NAME}`}
                </p>
              </a>
            </Link>
          </>
        }
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />
    </>
  )
}
