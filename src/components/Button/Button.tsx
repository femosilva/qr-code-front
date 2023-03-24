import { FC, ButtonHTMLAttributes, Fragment } from 'react'
import styled, { css } from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  typography,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  TypographyProps
} from 'styled-system'

export type ButtonProps = SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  PositionProps &
  TypographyProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
    disabled?: boolean
  }

const ButtonComponent: React.FC<ButtonProps> = ({ isLoading, disabled, children, ...props }) => {
  const buttonChildren = isLoading ? 'Carregando...' : <Fragment>{children}</Fragment>

  const isDisabled = disabled || isLoading

  return (
    <Button disabled={isDisabled} {...props}>
      {buttonChildren}
    </Button>
  )
}

const Button: FC<ButtonProps> = styled.button<ButtonProps>(
  () => css`
    color: black;
    background-color: white;
    font-size: 16px;
    line-height: 20px;
    border-radius: 4px;
    border: 1px solid black;
    &:disabled {
      opacity: 0.7;
    }
    &:hover {
      transition: 0.4s;
      opacity: 0.9;
    }
    ${space}
    ${layout}
    ${color}
    ${border}
    ${position}
    ${typography}
  `
)

ButtonComponent.defaultProps = {
  width: '200px',
  height: '48px',
  type: 'button'
}

export default ButtonComponent
