import styled from 'styled-components'
import {StyledLink} from '../StyledLink'

export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: '/cart',
}))`
    margin-left: auto;
    display: flex;
    color: white;
    text-decoration: none;

    >div:last-child{
        padding-left: 6px;
        margin: auto 0;
    }

`
