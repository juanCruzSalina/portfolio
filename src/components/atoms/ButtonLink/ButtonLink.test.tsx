import React from 'react'
import { render, screen } from '../../../test-utils/customRender'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ButtonLink from './ButtonLink'

describe('Button Link component test', () => {
  test('should render properly', () => {
    render(
      <ButtonLink to='https://github.com/' icon={faGithub}>
        Link button
      </ButtonLink>
    )
    expect(screen.getByText(/link button/i)).toBeInTheDocument()
  })
})