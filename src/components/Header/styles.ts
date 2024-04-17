import styled from "styled-components"
// import { actionProps } from "."

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin-top: 48px;
    width: 1000px;
    box-sizing: border-box;
`

export const HeaderContent = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #343A40;
    width: 90%;
    height: 60px;
    border-radius: 100px;
    padding: 0 32px;
`

export const HeaderActions = styled.div `
    display: flex;
    gap: 10px;
`

export const HeaderTitle = styled.p `
    font-size: 24px;
    color: #fff;
`

export const HeaderAction = styled.button `
    background-color: transparent;
    color: #fff;
    transition: all 240ms;
    border: none;

    :hover {
    border-radius: 20px;
    background-color: #3AA0A3;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`