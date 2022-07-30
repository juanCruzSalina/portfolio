import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import InfoPage from './InfoPage'

export default {
  title: 'Components/Pages/InfoPage',
  component: InfoPage
} as ComponentMeta<typeof InfoPage>

const Template: ComponentStory<typeof InfoPage> = (args) => <InfoPage />

export const Default = Template.bind({})