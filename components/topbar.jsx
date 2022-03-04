import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Topbar() {
  return (
    <>
      <Menubar
        start={
          <>
            <Link href={'/'}>
              <a>
                <Image
                  className='logo'
                  src='/brasao-sp.png'
                  alt='ss'
                  width={70}
                  height={70}
                />
              </a>
            </Link>
          </>
        }
        end={<Button label='Logout' icon='pi pi-power-off' />}
      />
    </>
  );
}
