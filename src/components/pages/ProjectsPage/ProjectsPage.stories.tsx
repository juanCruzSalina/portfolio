import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProjectsPage from './ProjectsPage'

export default {
  title: 'Components/Pages/ProjectsPage',
  component: ProjectsPage
} as ComponentMeta<typeof ProjectsPage>

const Template: ComponentStory<typeof ProjectsPage> = () => <ProjectsPage />

export const Default = Template.bind({})