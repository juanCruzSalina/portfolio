import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import ContactForm from './ContactForm'

describe('Contact form component tests', () => {
  test('should render properly', () => {
    render(
      <ContactForm />
    )
    expect(screen.getByText(/send message/i)).toBeInTheDocument()
  })
})