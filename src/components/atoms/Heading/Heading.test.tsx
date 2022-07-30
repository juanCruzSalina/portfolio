import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import Heading from './Heading'

describe('Heading component test', () => {
  test('should render properly', () => {
    render(
      <Heading>
        testing heading
      </Heading>
    )
    expect(screen.getByText(/testing heading/i)).toBeInTheDocument()
  })
})