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
        font-size: 15px;
    `}
`;

export const TextTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.color.textColor};
        font-size: 30px;
        text-align: center;
        padding: 60px;
    `}
`;


export const ButtonGoBack = styled(TouchableOpacity)`
    ${({theme}) => css`
        background: ${theme.color.buttonColor};
        border-radius: 3px;
        margin: 3px;
        padding: 10px;
        align: center;
    `}
`;

export const TextGoBack = styled.Text`
    ${({theme}) => css`
        color: ${theme.color.secondary};
        font-size: 15px;
    `}
`;

