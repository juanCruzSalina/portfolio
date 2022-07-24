import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import Link from './Link'

describe('Styled Link component tests', () => {
  test('should render properly', () => {
    render(
      <Link to='/'>
        test link
      </Link>
    )
    expect(screen.getByText(/test Link/i)).toBeInTheDocument()
  })
})