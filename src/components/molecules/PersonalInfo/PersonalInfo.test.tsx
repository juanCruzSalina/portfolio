import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../../test-utils/customRender'
import PersonalInfo from './PersonalInfo'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

describe('Personal info component tests', () => {
  test('should render properly', () => {
    const testInfo = {
      imageURL: 'https://www.clarin.com/img/2020/08/16/avatar-the-last-airbender-foto___pck4_8liS_1256x620__2.jpg#1597613994196',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor mauris, iaculis vitae vehicula id, blandit eget massa. Vivamus auctor.',
      icons: [
        {
          icon: faLinkedin,
          url: ''
        },
        {
          icon: faInstagram,
          url: ''
        },
        {
          icon: faFacebook,
          url: ''
        }
      ]
    }
    render(
      <PersonalInfo {...testInfo}/>
    )
    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument()
  })
})