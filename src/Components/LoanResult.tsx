import React from 'react'
import { useQuery, gql } from '@apollo/client';
import "../assets/Styles/Components/LoanResult.scss";

interface Props {
    depositValue: string;
    purchasePrice: string;
}
const LoanResult = ({ depositValue = '0', purchasePrice = '0' }: Props) => {
    const addCommasToNumber = (numberString: string) => {
        const numberWithoutCommas = numberString.replace(/,/g, "");
        const numberWithCommas = numberWithoutCommas.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return numberWithCommas;
    }

    const loanToValueQuery = gql(/* GraphQL */`
        query loanToValueCalc( $depositValue: Int!, $purchasePrice: Int!) {
            loanToValueCalc( depositValue: $depositValue, purchasePrice: $purchasePrice) {
            result
            }
        }
    `);

    const { loading, error, data } = useQuery(loanToValueQuery, {
        variables: { depositValue, purchasePrice }
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='loan-result'>
            <div>Your loan to value result:</div>
            <div className='total'>{!error ? data.loanToValueCalc.result : '0%'}</div>
            <div className='breakdown-container'>
                <div><span>Deposit Value</span><p>{addCommasToNumber(depositValue)}</p></div>
                <div><span>Purchase Price</span><p>{addCommasToNumber(purchasePrice)}</p></div>
            </div>
        </div>
    )
}

export default LoanResult