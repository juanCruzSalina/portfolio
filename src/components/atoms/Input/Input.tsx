import { faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field } from 'formik';
import React, { Fragment } from 'react'
import styled from 'styled-components';

interface InputProps {
  placeholder: string;
  name: string;
  type: 'email' | 'password' | 'text';
  message?: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  width: fit-content;
  border: 1px solid ${props => props.theme.colors.dark};
  transition: all ease 0.3s;
  border-radius: 5px;
  &:hover {
    box-shadow: 0.5rem 0.25rem 0.5rem ${props => props.theme.colors.light};
  }
`;

const StyledInput = styled(Field)`
  font-size: 1rem;
  color: black;
  background: transparent;
  outline: none;
  border: none;
  padding:  1rem;
  &::-webkit-input-placeholder {
    opacity: 1;
  }
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 500;
  color: ${props => props.theme.colors.light};
`;

const InputError = styled.div`
  color: #ff99ac;
  display: flex;
  align-items: center;
  height: 1.5rem;
`;

const ErrorText = styled.p`
  margin-bottom: .2rem;
`;

const ErrorIcon = styled(FontAwesomeIcon)`
  margin: 0 .5rem;
`;

const Input: React.FC<InputProps> = (props) => {
  const stringCapitalizer = (string: string) => {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1)
  }
  return (
    <InputLabel>
      {stringCapitalizer(props.name)}
      <Wrapper>
      <StyledInput {...props}/>
      </Wrapper>
      {
        (props.message) &&
          <InputError>
            <ErrorIcon icon={faXmark as IconDefinition}/>
            <ErrorText>
              {props.message}
            </ErrorText>
          </InputError>
      }
    </InputLabel>
  )
}

export default Input