import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProjectCard from './ProjectCard'
import PageContainer from '../../atoms/PageContainer/PageContainer'

export default {
  title: 'Components/Molecules/ProjectCard',
  component: ProjectCard
} as ComponentMeta<typeof ProjectCard>

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <PageContainer>
    <ProjectCard {...args}/>
  </PageContainer>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Example Card',
  projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
  imageURL: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  repoLink: 'https://github.com/juanCruzSalina/giff-art-expert',
  demoLink: 'https://giff-art.netlify.app/'
}