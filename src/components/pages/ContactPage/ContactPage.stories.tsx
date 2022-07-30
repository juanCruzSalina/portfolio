import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import ContactPage from './ContactPage'

export default {
  title: 'Components/Pages/ContactPage',
  component: ContactPage
} as ComponentMeta<typeof ContactPage>

const Template: ComponentStory<typeof ContactPage> = (args) => <ContactPage />

export const Default = Template.bind({})