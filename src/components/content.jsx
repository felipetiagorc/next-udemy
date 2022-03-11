import { Panel } from 'primereact/panel'

export default function Content({ titulo, children }) {
  return <Panel header={titulo}>{children}</Panel>
}
