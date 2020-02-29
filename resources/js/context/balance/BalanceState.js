import React, { useReducer, Children } from "react";
import BalanceContext from "./balanceContext";
import BalanceReducer from "./balanceReducer";
import axios from "axios";

import { GET_BALANCE, UPDATE_BALANCE } from "../../Types";
const BalanceState = props => {
    const initialState = {
        balance: 0
    };
    const [state, dispatch] = useReducer(BalanceReducer, initialState);

    const fetchBalance = async () => {
        try {
            const res = await axios.get("/api/balance");
            dispatch({
                type: GET_BALANCE,
                payload: res.data
            });
        } catch (err) {
            console.log(err.response);
        }
    };

    // Update Balance
    const updateBalance = async balance => {
        console.log(balance);
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.put(
                "/api/balance/" + balance.id + "/update",
                balance,
                config
            );
            dispatch({
                type: UPDATE_BALANCE,
                payload: res.data
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <BalanceContext.Provider
            value={{
                balance: state.balance,
                fetchBalance,
                updateBalance
            }}
        >
            {props.children}
        </BalanceContext.Provider>
    );
};

export default BalanceState;
