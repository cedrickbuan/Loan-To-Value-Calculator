import React from 'react'
import { ReactNode } from "react"

import "../assets/Styles/Components/FormFieldMessage.scss";
interface Props {
    isVisible: boolean;
    children: ReactNode;
}
const FormFieldMessage = ({ isVisible, children }: Props) => {
    if (!isVisible) return <span></span>;
    return (
        <span className='error-message'>Please enter a valid number</span>
    )
}

export default FormFieldMessage