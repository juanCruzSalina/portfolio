import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PersonalInfo from './PersonalInfo'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import PageContainer from '../../atoms/PageContainer/PageContainer'

export default {
  title: 'Components/Molecules/PersonalInfo',
  component: PersonalInfo
} as ComponentMeta<typeof PersonalInfo>

const Template: ComponentStory<typeof PersonalInfo> = (args) => (
  <PageContainer>
    <PersonalInfo {...args}/>
  </PageContainer>
)

export const Default = Template.bind({})
Default.args = {
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