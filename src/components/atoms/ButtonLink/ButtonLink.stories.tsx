import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonLink from './ButtonLink';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default {
  title: 'Components/Atoms/ButtonLink',
  component: ButtonLink
} as ComponentMeta<typeof ButtonLink>

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args}/>

export const Default = Template.bind({})
Default.args = {
  icon: faGithub,
  children: 'Repo. Link',
  to: 'https://github.com/'
}