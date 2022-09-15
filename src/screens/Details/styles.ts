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
    `}
`;
