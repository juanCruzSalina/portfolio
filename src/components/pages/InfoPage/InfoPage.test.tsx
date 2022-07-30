import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import InfoPage from './InfoPage'

describe('Info Page tests', () => {
  test('should render properly', () => {
    render(<InfoPage />)
    expect(screen.getByText(/Languages i know:/i)).toBeInTheDocument()
  })
})