import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Link from './Link'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Components/Atoms/Link',
  component: Link
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}/>

export const Default = Template.bind({})
Default.args = {
  to: '/',
  children: 'Home',
  icon: faHome
}

export const Iconless = Template.bind({})
Iconless.args = {
  to: '/',
  children: 'Home',
}
