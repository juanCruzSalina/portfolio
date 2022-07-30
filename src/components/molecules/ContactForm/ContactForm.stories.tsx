import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ContactForm from './ContactForm'
import PageContainer from '../../atoms/PageContainer/PageContainer'

export default {
  title: 'Components/Molecules/ContactForm',
  component: ContactForm
} as ComponentMeta<typeof ContactForm>

const Template: ComponentStory<typeof ContactForm> = () => (
  <PageContainer>
    <ContactForm />
  </PageContainer>
)

export const Default = Template.bind({})