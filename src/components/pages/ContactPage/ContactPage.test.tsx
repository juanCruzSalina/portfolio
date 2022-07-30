import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import ContactPage from './ContactPage'

describe('Contact Page component test', () => {
  test('should render properly', () => {
    render(<ContactPage />)
    expect(screen.getByText(/contact me/i)).toBeInTheDocument()
  })
})