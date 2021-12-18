import React from 'react';
import './AddTransactionPage.scss';

const AddTransactionPage = () => {
    return (
        <div className="addTransactionPage">
            <div className="transactionFormContainer">
                <form className="addTransactionForm">
                    <input type="text" className="formInput" placeholder="Branch no." />
                    <input type="text" className="formInput" placeholder="Acc holder name" />
                    <input type="text" className="formInput" placeholder="Acc no." />
                    <input type="text" className="formInput" placeholder="Amount" />
                    <div className="buttonContainer">
                        <button>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTransactionPage;
