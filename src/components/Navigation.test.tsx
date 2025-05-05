import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation'

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )

    expect(screen.getByText(/My Project/i)).toBeInTheDocument()
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Star Wars/i)).toBeInTheDocument()
  })
})
