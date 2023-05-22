import React, { InputHTMLAttributes } from 'react'

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    label: string
}

const ButtonWrapper: React.FC<ButtonProps> = (props) => {

    return (
        <div>
            <button>{props.label}</button>
        </div>
    )
}

export default ButtonWrapper