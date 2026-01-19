import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  right: 'marginRight',
  bottom: 'marginBottom',
  left: 'marginLeft',
};

const getVariant = ({ position, size, theme }) => {
  const property = positionVariant[position];
  const sizeIndex = sizeVariant[size];
  const value = theme.space[sizeIndex];
  return `${property}: ${value};`;
};

export const SpacerView = styled.View`
  ${({ variant }) => variant}
`;
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variantStyles = getVariant({ position, size, theme });
  return <SpacerView variant={variantStyles}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
