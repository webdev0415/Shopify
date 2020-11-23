import styled, { css } from 'styled-components'

const fullWidthStyles = ({fullWidth}) => {
    if(fullWidth){
        return css`
            display: block;
            width: 100%;
        `
    }
}

export const Button = styled.button`
    outline: none;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
    box-shadow: none;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    background: white;
    color: black;
    border: 1px solid black;
    white-space: nowrap;
    ${fullWidthStyles}

    &:hover:not(:disabled){
        color: white;
        background: #99ca3b;
        border: 1px solid #99ca3b;
    }

    &:disabled{
        border-color: #999;
        cursor: not-allowed;
        color: #999
    }
`