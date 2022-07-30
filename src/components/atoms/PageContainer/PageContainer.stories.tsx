import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PageContainer from './PageContainer'

export default {
  title: 'Components/Atoms/PageStructure',
  component: PageContainer
} as ComponentMeta<typeof PageContainer>

const Template: ComponentStory<typeof PageContainer> = (args) => <PageContainer {...args}/>

export const Default = Template.bind({})