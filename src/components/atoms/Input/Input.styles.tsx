import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../../theme/theme";
import { device } from "../../../theme/sizes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  width: fit-content;
  transition: all ease 0.3s;
  border-radius: 5px;
  &:hover {
    box-shadow: 0.5rem 0.25rem 0.5rem ${props => props.theme.colors["grey-400"]};
  }
  @media screen and (${device.laptop}) {
    margin-top: calc(${props => props.theme.spacing.xxs} * .3);
  }
`;

export const StyledInput = styled.input`
  font-size: ${theme.measures.xxs};
  color: ${theme.colors.dark};
  background: transparent;
  outline: none;
  border: none;
  padding:  ${theme.spacing.xxs};
  &::-webkit-input-placeholder {
    opacity: 1;
  }
  @media screen and (${device.laptop}) {
    width: calc(${theme.measures.xxl} * 2);
    font-size: calc(${theme.fontSizes.m} * 1.15);
  }
`;

export const StyledTextArea = styled.textarea`
  width: calc(${theme.measures.xxl} * 1.725);
  font-size: ${theme.measures.xxs};
  color: ${theme.colors.dark};
  background: transparent;
  outline: none;
  border: none;
  padding:  ${theme.spacing.xxs};
  resize: none;
  font-family: inherit;
  &::-webkit-input-placeholder {
    opacity: 1;
  }
  @media screen and (${device.laptop}) {
    width: calc(${theme.measures.xxl} * 2);
    font-size: calc(${theme.fontSizes.m} * 1.15);
  }
`;



export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 500;
  color: ${props => props.theme.colors.light};
  @media screen and (${device.laptop}) {
    font-size: calc(${theme.fontSizes.m} * 1.15);
  }
`;

export const InputError = styled.div`
  color: #ff99ac;
  display: flex;
  align-items: center;
  height: ${props => props.theme.measures.s};
`;

export const ErrorText = styled.p`
  margin-bottom: calc(${props => props.theme.spacing.xxs} * .2);
  @media screen and (${device.laptop}) {
    font-size: calc(${theme.fontSizes.m} * 1.15);
  }
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
  margin:
    0
    calc(${props => props.theme.measures.xxs} * 0.5)
  ;
`;