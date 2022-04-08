import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)
    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      nome: 'Petropolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const place2 = {
      id: '2',
      nome: 'Brasil',
      slug: 'brasil',
      location: {
        latitude: 1,
        longitude: 1
      }
    }

    render(<Map places={[place, place2]} />)
    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/brasil/i)).toBeInTheDocument()
  })
})
