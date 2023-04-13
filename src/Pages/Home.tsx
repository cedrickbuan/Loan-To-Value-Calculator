import React, { useState, useEffect } from 'react'
import Header from '../Layout/Header'
import "../assets/Styles/Pages/Home.scss";
import LoanResult from '../Components/LoanResult';
import LoanForm from '../Components/LoanForm';
const Home = () => {

    const [FormDepositValue, setFormDepositValue] = useState('0');
    const [FormPurchagePrice, setFormPurchagePrice] = useState('0');

    const handleSubmitForm = (formDepositValue: string, formPurchaseValue: string) => {
        setFormDepositValue(formDepositValue);
        setFormPurchagePrice(formPurchaseValue);
    }

    useEffect(() => {
        setFormDepositValue('0');
        setFormPurchagePrice('0');
    }, [])

    return (
        <div className='main-page'>
            <Header />
            <div className='loan-form-section'>
                <div className='loan-form-container'>
                    <LoanForm onSubmitForm={handleSubmitForm} />
                </div>
                <div className='loan-result-container'>
                    <LoanResult purchasePrice={FormPurchagePrice} depositValue={FormDepositValue} />
                </div>
            </div>
        </div>
    )
}

export default Home