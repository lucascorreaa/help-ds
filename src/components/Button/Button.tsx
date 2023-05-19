import React, { InputHTMLAttributes } from 'react'

export interface OwnProps extends InputHTMLAttributes<HTMLButtonElement> {
    label: string
}

const ButtonWrapper = (props: OwnProps) => {

    return (
        <div>
            <button>{props.label}</button>
        </div>
    )
}

export default ButtonWrapper