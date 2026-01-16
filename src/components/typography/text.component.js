import React from "react";
import styled from "styled-components/native";

const defaultTextSyles = (theme)=>`
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top:0px;
    margin-bottom:0px;
`;
const body=(theme)=>`
    font-size: ${theme.fontSizes.body};
`
const hint=(theme)=>`
    font-size: ${theme.fontSizes.body};
`
const caption=(theme)=>`
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`
const error=(theme)=>`
    color: ${theme.colors.ui.error};
`
const label=(theme)=>`
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
`
const variants={
    body,
    hint,
    caption,
    error,
    label,
}

export const Text=styled.Text`
    ${({theme})=>defaultTextSyles(theme)}
    ${({variant="body",theme})=> variants[variant](theme)}
`;

Text.defaultProps={
    variant:"body",
}