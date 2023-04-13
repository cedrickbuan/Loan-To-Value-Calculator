import React, { useState } from 'react'
import "../assets/Styles/Components/LoanForm.scss";
import FormFieldMessage from './FormFieldMessage';

interface Props {
    onSubmitForm: (formDepositValue: string, formPurchaseValue: string) => void;
}

const LoanForm = ({ onSubmitForm }: Props) => {
    const [depositValue, setDepositValue] = useState('');
    const [purchagePrice, setPurchagePrice] = useState('');
    const [displayDepositValueMessage, setDepositValueMessageVisibility] = useState(false);
    const [displayPurchasePriceMessage, setPurchasePriceMessageVisibility] = useState(false);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setDepositValueMessageVisibility(false);
        setPurchasePriceMessageVisibility(false);
        let invalidFormData = false;
        if (isNaN(Number(depositValue)) || depositValue.trim() === "") {
            setDepositValueMessageVisibility(true);
            invalidFormData = true;
        }
        if (isNaN(Number(purchagePrice)) || purchagePrice.trim() === "") {
            setPurchasePriceMessageVisibility(true);
            invalidFormData = true;
        }
        if (!invalidFormData) onSubmitForm(depositValue, purchagePrice);

    }
    return (
        <div>
            <div className='form-title'>
                <h2>Loan to Value Calculator</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor='depositValue'>Deposit Value <span>*</span></label>
                    <input
                        type="text"
                        id="depositValue"
                        value={depositValue}
                        placeholder='Enter Amount'
                        onChange={(e) => setDepositValue(e.target.value)}
                    />
                    <FormFieldMessage isVisible={displayDepositValueMessage}>Please enter a valid number</FormFieldMessage>
                </div>
                <div className='form-field'>
                    <label htmlFor='purchasePrice'>Purchase Price <span>*</span></label>
                    <input
                        type="text"
                        id="purchasePrice"
                        value={purchagePrice}
                        placeholder='Enter Amount'
                        onChange={(e) => setPurchagePrice(e.target.value)}
                    />
                    <FormFieldMessage isVisible={displayPurchasePriceMessage}>Please enter a valid number</FormFieldMessage>
                </div>
                <button className='primary-button' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoanForm