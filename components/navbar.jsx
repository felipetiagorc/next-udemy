import { InputText } from 'primereact/inputtext'
import { PanelMenu } from 'primereact/panelmenu'

export default function navbar() {
  const items = [
    {
      label: 'Advogados',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Consultar',
          icon: 'pi pi-fw pi-plus',
          url: '/advogados'
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Presos',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right'
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center'
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify'
        }
      ]
    },
    {
      label: 'Visitas',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus'
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus'
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
    }
  ]
  return (
    <>
      <nav className="main-sidebar">
        <div>
          <span className="p-input-icon-right">
            <i className="pi pi-search"></i>
            <input className="p-inputtext" type="text" />
          </span>
        </div>
        <PanelMenu model={items} />
      </nav>
    </>
  )
}
