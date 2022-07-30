import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import PageContainer from './PageContainer'

describe('Page Structure component tests', () => {
  test('should render children', () => {
    render(<PageContainer> test </PageContainer>)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})