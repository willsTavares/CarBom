import { TextInput, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background: ${theme.color.primary};
    `}
`;


export const TextWhite = styled.Text`
    ${({theme}) => css`
        color: ${theme.color.textColor};
        font-size: 20px;
    `}
`;


export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.color.textColor};
        font-size: 30px;
        font-weight: bold;
        margin: 10px
    `}
`;

export const Input = styled(TextInput)`
    ${({theme}) => css`
        background: ${theme.color.inputColor};
        border-radius: 3px;
        color: ${theme.color.textColor};
        margin: 10px;
    `}
`;

export const ButtonDescription = styled(TouchableOpacity)`
    ${({theme}) => css`
        background: ${theme.color.inputColor};
        border-radius: 3px;
        margin: 4px;
        padding: 10px;
    `}
`;