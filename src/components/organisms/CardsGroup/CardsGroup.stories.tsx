import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import CardsGroup from './CardsGroup'
import PageContainer from '../../atoms/PageContainer/PageContainer'

export default {
  title: 'Components/Organisms/CardsGroup',
  component: CardsGroup
} as ComponentMeta<typeof CardsGroup>

const Template: ComponentStory<typeof CardsGroup> = (args) => (
  <PageContainer>
    <CardsGroup {...args}/>
  </PageContainer>
)

export const Default = Template.bind({})
Default.args = {
  cards: [
    {
      title: 'Project Name 1',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
      imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
      repoLink: 'https://github.com/juanCruzSalina/giff-art-expert',
      demoLink: 'https://giff-art.netlify.app/'
    },
    {
      title: 'Project Name 2',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
      imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
      repoLink: 'https://github.com/juanCruzSalina/giff-art-expert1',
      demoLink: 'https://giff-art.netlify.app/'
    },
    {
      title: 'Project Name 3',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis blandit arcu. Aenean condimentum commodo lectus, non congue quam efficitur.',
      imageURL: 'https://gyazo.com/f43eb9f2e78a5a7b81602bfd72f31aef',
      repoLink: 'https://github.com/juanCruzSalina/giff-art-expert2',
      demoLink: 'https://giff-art.netlify.app/'
    },
  ]
}