import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import ContactForm from '../../molecules/ContactForm/ContactForm'
import UIStructure from '../../organisms/UIStructure/UIStructure'
import { ContactContainer, ContactData, IconText } from './ContactPage.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Text from '../../atoms/Text/Text'

const ContactPage: React.FC = () => {
  return (
    <UIStructure>
      <ContactContainer>
        <ContactData>
          <Heading>
            Contact me!
          </Heading>
          <IconText>
            <FontAwesomeIcon style={{marginRight: '1rem'}} icon={faEnvelope}/>
            <Text>salinajuancruz@gmail.com</Text>
          </IconText>
          <IconText>
            <FontAwesomeIcon style={{marginRight: '1rem'}} icon={faPhone}/>
            <Text>+542995945254</Text>
          </IconText>
        </ContactData>
        <ContactForm />
      </ContactContainer>
    </UIStructure>
  )
}

export default ContactPage