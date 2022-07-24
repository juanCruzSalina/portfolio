import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import Text from './Text'

describe('Text component tests', () => {
  test('should render properly', () => {
    render(
      <Text size='md'>
        Example text
      </Text>
    )
    expect(screen.getByText(/example text/i)).toBeInTheDocument()
  })
})