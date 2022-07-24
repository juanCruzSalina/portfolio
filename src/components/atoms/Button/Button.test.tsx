import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import Button from './Button'

describe('Button component tests', () => {
  test('should render properly', () => {
    render(
      <Button>
        Button
      </Button>
    )
    expect(screen.getByText(/button/i)).toBeInTheDocument()
  })
})