import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function Topbar() {
  return (
    <>
      <Menubar
        start={<InputText placeholder='Search' type='text' />}
        end={<Button label='Logout' icon='pi pi-power-off' />}
      />
    </>
  );
}
