import { forwardRef, InputHTMLAttributes } from 'react'
import { space, layout, typography } from 'styled-system'
import styled, { css } from 'styled-components'

import { Column, Row } from 'components'

interface InputProps {
  type?: string
  inputId?: any
  inputHeight?: number
}

type InputComponentProps = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    name: string
    placeholder?: string
    placeholderColor?: string
    disabled?: boolean
    error?: boolean
    cursor?: string
    bgColor?: string
    borderColor?: string
    borderOnFocus?: string
    borderRadius?: string
  }

const defaultHeight = 35
const errorTextHeight = 21

const InputComponent = forwardRef<any, InputComponentProps>(
  ({ name, placeholder, cursor, error, disabled, type, inputId, inputHeight, borderRadius = '4px' }, ref) => {
    const heightSum = defaultHeight + (error ? errorTextHeight : 8)
    const inputHeightSum = !!inputHeight ? inputHeight : 0
    const height = !!inputHeight ? inputHeightSum : heightSum

    return (
      <Column width='100%' height={height}>
        <Row position='relative'>
          <Input
            id={inputId}
            name={name}
            ref={ref}
            type={type}
            as={'input'}
            disabled={disabled}
            inputHeight={inputHeight}
            placeholder={placeholder}
            error={error}
            borderRadius={borderRadius}
            cursor={cursor}
          />
        </Row>
      </Column>
    )
  }
)

InputComponent.displayName = 'InputComponent'

const Input = styled.input<InputComponentProps>(
  ({ cursor, inputHeight, bgColor, borderOnFocus, borderColor, placeholderColor, borderRadius }) => css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400px;
    box-sizing: border-box;

    height: ${`${inputHeight}px`};
    width: 60%;
    padding: 8px 10px;

    transition: transform 0.1s;
    background-color: ${bgColor};
    border: 1px solid;
    border-color: ${borderColor};
    border-radius: ${borderRadius};

    resize: none;
    outline: none;
    &::placeholder {
      color: ${placeholderColor};
    }
    &:focus {
      border: 2px solid;
      border-color: ${borderOnFocus};
    }
    ${!!cursor ? `cursor: ${cursor};` : ''}
    ${space};
    ${typography};
    ${layout};
  `
)

InputComponent.defaultProps = {
  width: '60%',
  type: 'text'
}

export default InputComponent
