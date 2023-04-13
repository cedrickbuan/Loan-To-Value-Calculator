import React from 'react'
import { useQuery, gql } from '@apollo/client';
import "../assets/Styles/Components/LoanResult.scss";

interface Props {
    depositValue: string;
    purchasePrice: string;
}
const LoanResult = ({ depositValue = '0', purchasePrice = '0' }: Props) => {
    console.log("the props value");
    console.log(depositValue, purchasePrice)

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
    console.log(data)

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className='loan-result'>
            <div>Your loan to value result:</div>
            <div className='total'>{data.loanToValueCalc.result}</div>
            <div className='breakdown-container'>
                <div><span>Deposit Value</span><p>{depositValue}</p></div>
                <div><span>Purchase Price</span><p>{purchasePrice}</p></div>
            </div>
        </div>
    )
}

export default LoanResult