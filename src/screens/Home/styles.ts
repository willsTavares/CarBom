import { TextInput, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background: ${theme.color.primary};
    `}
`;

export const Input = styled(TextInput)`
    ${({theme}) => css`
        background: ${theme.color.inputColor};
        border-radius: 3px;
        color: ${theme.color.textColor};
    `}
`;


export const ButtonSingUp = styled(TouchableOpacity)`
    ${({theme}) => css`
        background: ${theme.color.inputColor};
        border-radius: 3px;
        margin: 3px;
        padding: 10px;
    `}
`;
export const ButtonForgottenPassword = styled(TouchableOpacity)`
    ${({theme}) => css`
        margin: 3px;
        padding: 10px;
    `}
`;

export const TextWhite = styled.Text`
    ${({theme}) => css`
        color: ${theme.color.textColor};
        font-size: 15px;
    `}
`;

export const ButtonSingIn = styled(TouchableOpacity)`
    ${({theme}) => css`
        background: ${theme.color.buttonColor};
        border-radius: 3px;
        margin: 3px;
        padding: 10px;
    `}
`;

export const TextButtonSingIn = styled.Text`
    ${({theme}) => css`
        color: ${theme.color.secondary};
        font-size: 15px;
    `}
`;


export const TextTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.color.textColor};
        font-size: 30px;
        text-align: center;
        padding: 40px;
    `}
`;