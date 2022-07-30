import React, { useState } from 'react'
import { Formik } from 'formik'
import emailjs from '@emailjs/browser'
import Button from '../../atoms/Button/Button'
import Heading from '../../atoms/Heading/Heading'
import Input from '../../atoms/Input/Input'
import { FormWrapper, StyledForm } from './ContactForm.styles'
import Text from '../../atoms/Text/Text'

type ContactData = {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const [response, setResponse] = useState('')
  const handleSubmit = (data: ContactData) => {
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMPLATE_ID as string,
      data,
      process.env.REACT_APP_PUBLIC_KEY as string
    ).then(res => {
      setResponse(res.text)
    }).catch(err => {
      setResponse(err.text)
    })
  }

  return (
    <FormWrapper>
      <Heading>Or send me an email!</Heading>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          message: ''
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <StyledForm>
            <Input
              name='fullName'
              type='text'
              placeholder='John Doe'
            />
            <Input
              name='email'
              type='email'
              placeholder='example@email.com'
            />
            <Input
              name='message'
              type='text'
              placeholder='Message...'
              textArea
            />
            <Button>
              Send message
            </Button>
            {response && <Text>{response}</Text>}
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  )
}

export default ContactForm