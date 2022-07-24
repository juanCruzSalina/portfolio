import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import Image from './Image'

describe('Image component tests', () => {
  test('should render properly', () => {
    const example = {
      src: 'examples',
      alt: 'alt-text',
    }
    render(
      <Image {...example} size={'avatar'}/>
    )
    expect(screen.getByAltText(/alt-text/i)).toBeInTheDocument()
  })
})