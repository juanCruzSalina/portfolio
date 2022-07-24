import React from 'react'
import { ComponentMeta, ComponentStory } from "@storybook/react";
import withFormik from '@bbbtech/storybook-formik'
import Input from './Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        name: ''
      }
    }
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>

export const Default = Template.bind({})
Template.args = {
  placeholder: 'John doe',
  type: 'text',
  name: 'name'
}