import { render, screen } from '@testing-library/react'

import Navbar from './navbar'

describe('<navbar/>', () => {
  it('deve retornar heading', () => {
    const { container } = render(<Navbar />)
    expect(
      screen.getByRole('heading', { name: /PanelMenu/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
