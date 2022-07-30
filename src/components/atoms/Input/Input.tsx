import React, { Fragment } from 'react'
import { ErrorIcon, ErrorText, InputError, InputLabel, StyledInput, StyledTextArea, Wrapper } from './Input.styles';
import { faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Field, FieldProps } from 'formik';
interface InputProps {
  placeholder: string;
  name: string;
  type: 'email' | 'password' | 'text';
  textArea?: boolean
}

const Input: React.FC<InputProps> = (props) => {
  const stringCapitalizer = (string: string) => {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1)
  }
  return (
    <InputLabel>
      {stringCapitalizer(props.name)}
      <Field name={props.name}>
        {
          ({field, meta}: FieldProps) => (
            <Fragment>
              <Wrapper>
                {
                  props.textArea
                  ? <StyledTextArea {...field} placeholder={props.placeholder}/>
                  : <StyledInput type={props.type} {...field} placeholder={props.placeholder}/>
                }
              </Wrapper>
              {
                (meta.error && meta.touched) &&
                <InputError>
                    <ErrorIcon icon={faXmark as IconDefinition}/>
                    <ErrorText>
                      {meta.error}
                    </ErrorText>
                  </InputError>
              }
            </Fragment>
          )
        }
      </Field>
    </InputLabel>
  )
}

export default Input