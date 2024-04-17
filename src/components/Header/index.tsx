import React, { ButtonHTMLAttributes } from 'react'
import './styles'
import { HeaderContainer, HeaderContent, HeaderActions, HeaderTitle, HeaderAction } from './styles'

export interface actionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

export interface HeaderProps {
    title: string
    actions?: actionProps[]
}

export const Header: React.FC<HeaderProps> = ({ title, actions }) => {
    return (
        <HeaderContainer>
            <HeaderContent>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderActions>
                {
                  actions &&  actions.map((action, key) => {
                        return (
                        <HeaderAction key={key} onClick={() => action.onClick()}>
                            <p>{action.title}</p>
                        </HeaderAction>
                        )
                         } )
                }
            </HeaderActions>
        </HeaderContent>
        </HeaderContainer>
    )
}