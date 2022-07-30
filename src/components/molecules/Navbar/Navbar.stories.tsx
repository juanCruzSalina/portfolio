import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from './Navbar';
import PageContainer from '../../atoms/PageContainer/PageContainer';

export default {
  title: 'Components/Molecules/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => (
  <PageContainer>
    <Navbar />
  </PageContainer>
)

export const Default = Template.bind({})
