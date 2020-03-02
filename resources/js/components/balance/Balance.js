import React, { useEffect, useContext, useState } from "react";
import BalanceContext from "../../context/balance/balanceContext";

const Balance = () => {
    const balanceContext = useContext(BalanceContext);
    const { balance, fetchBalance, updateBalance } = balanceContext;

    // STATE
    const [showAddBalance, setShowAddBlanace] = useState(false);
    const [addedAmount, setAddedAmmount] = useState("");
    useEffect(() => {
        fetchBalance();
        console.log(balance);
    }, []);

    const showAddBalanceHandler = () => {
        setShowAddBlanace(!showAddBalance);
    };

    const onChange = e => {
        setAddedAmmount(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        let newBalance = { ...balance };

        if (addedAmount > 0) {
            newBalance.ammount += parseFloat(addedAmount);
            updateBalance(newBalance);
            setAddedAmmount("");
            setShowAddBlanace(false);
        }
    };

    const addBalance = showAddBalance ? (
        <form onSubmit={onSubmit} className="add_balance">
            <input
                onChange={e => onChange(e)}
                type="number"
                name="add_ammount"
                value={addedAmount}
                placeholder="0"
            />
            <button type="submit">+</button>
        </form>
    ) : (
        ""
    );

    const addOrRemoveIcon = !showAddBalance ? (
        <i
            onClick={() => showAddBalanceHandler()}
            className="fas fa-plus-circle"
        ></i>
    ) : (
        <i
            onClick={() => showAddBalanceHandler()}
            className="fas fa-minus-circle"
        ></i>
    );

    return (
        <div className="bance_wrapper">
            {addBalance}
            <div className="balance">
                Balance: {balance.ammount}
                <span>BGN</span>
                <div className="button">{addOrRemoveIcon}</div>
            </div>
        </div>
    );
};

export default Balance;
