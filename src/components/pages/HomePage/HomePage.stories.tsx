import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomePage from './HomePage'

export default {
  title: 'Components/Pages/HomePage',
  component: HomePage
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Default = Template.bind({})
