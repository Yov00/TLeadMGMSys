import React, { useReducer } from "react";
import InventoryContext from "./inventoryContext";
import inventoryReducer from "./inventoryReducer";
import axios from "axios";

import {
    GET_ITEMS,
    ADD_INVENTORY_ITEM,
    REMOVE_INVENTORY_ITEM,
    CHECKOUT_INVENTORY_ITEM
} from "../../Types";

const InventoryState = props => {
    const initialState = {
        items: [],
        current: null
    };

    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    // Get all Items
    const fetchAllItems = async () => {
        try {
            const res = await axios.get("/api/items");

            dispatch({
                type: GET_ITEMS,
                payload: res.data
            });
        } catch (err) {
            console.log(err.response.msg + "TArambukataaaa");
        }
    };

    // ADD Item
    const addItem = async item => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.post("/api/items/create", item, config);

            dispatch({
                type: ADD_INVENTORY_ITEM,
                payload: res.data
            });
        } catch (err) {
            console.log(err.response.msg + "AddingUser");
        }
    };

    // Remove Item
    const removeItem = async id => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            await axios.delete("/api/item/" + id + "/delete");
            dispatch({
                type: REMOVE_INVENTORY_ITEM,
                payload: id
            });
        } catch (err) {
            console.log(err + ":  Remove User Err");
        }
    };

    return (
        <InventoryContext.Provider
            value={{
                items: state.items,
                current: state.current,
                fetchAllItems,
                addItem,
                removeItem
            }}
        >
            {props.children}
        </InventoryContext.Provider>
    );
};

export default InventoryState;
