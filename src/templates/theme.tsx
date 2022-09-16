import React from "react";

import { ThemeProvider } from 'styled-components/native';

import theme from '../styles'

type Props = {
    children: React.ReactNode
}

export function Theme({children}: Props){
    return <ThemeProvider theme={theme.dark}>{children}</ThemeProvider>
}