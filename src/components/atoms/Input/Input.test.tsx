import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../test-utils/customRender'
import { Form, Formik } from 'formik'
import Input from './Input'

describe('Input component tests', () => {
  test('should render properly', () => {
    const mockSubmit = jest.fn()
    render(
      <Formik
        initialValues={{
          test: ''
        }}
        onSubmit={mockSubmit}
      >
        <Form>
          <Input placeholder={'test input'} name={'test'} type={'text'}/>
        </Form>
      </Formik>
    )
    expect(screen.getByPlaceholderText(/test input/i)).toBeInTheDocument()
  })

  test('should change value', async () => {
    const user = userEvent.setup()
    const mockSubmit = jest.fn()
    render(
      <Formik
        initialValues={{
          test: ''
        }}
        onSubmit={mockSubmit}
      >
        <Form>
          <Input placeholder={'test input'} name={'test'} type={'text'}/>
        </Form>
      </Formik>
    )

    await user.type(screen.getByPlaceholderText(/test input/i), 'test text')
    expect(screen.getByPlaceholderText(/test input/i)).toHaveValue('test text')
  })
})