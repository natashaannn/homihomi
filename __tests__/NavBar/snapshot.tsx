import { render } from '@testing-library/react'
import NavBar from '@components/NavBar/NavBar'

it('renders navigation bar unchanged', () => {
  const { container } = render(<NavBar />)
  expect(container).toMatchSnapshot()
})

export {}