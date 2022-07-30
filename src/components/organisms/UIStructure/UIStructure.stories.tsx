import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import UIStructure from './UIStructure'

export default {
  title: 'Components/Organisms/UI Structure',
  component: UIStructure
} as ComponentMeta<typeof UIStructure>

const Template: ComponentStory<typeof UIStructure> = (args) => <UIStructure {...args}/>

export const Default = Template.bind({})
Default.args = {
  children: <h1 style={{color: 'white'}} >Component Story</h1>
}