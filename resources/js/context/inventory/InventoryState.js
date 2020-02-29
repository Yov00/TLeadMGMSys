import React, { useReducer } from "react";
import InventoryContext from "./inventoryContext";
import inventoryReducer from "./inventoryReducer";
import InvoiceModal from "../../components/invoice/InvoiceModal";
import axios from "axios";

import {
    GET_ITEMS,
    ADD_INVENTORY_ITEM,
    REMOVE_INVENTORY_ITEM,
    SHOW_MODAL,
    ARRIVED_ITEMS,
    CHECKOUT_INVENTORY_ITEM,
    ADD_INVOICE
} from "../../Types";

const InventoryState = props => {
    const initialState = {
        items: [],
        arrived_items: [],
        current: null,
        showModal: false,
        item: {},
        invoices: [],
        loading: true
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

    // Get All Arrived Items
    const fetchAllArrivedItems = async () => {
        try {
            const res = await axios.get("/api/arrivedItems");

            dispatch({
                type: ARRIVED_ITEMS,
                payload: res.data
            });
        } catch (err) {
            console.log(err.message + "Arrived Items");
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
            console.log(err.message + ":  Remove Item Err");
        }
    };

    // show modal
    const showModalHandler = item => {
        dispatch({
            type: SHOW_MODAL,
            payload: item
        });
    };

    // Create Invoice
    const createInvoice = async invoice => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const res = await axios.post(
                "/api/invoices/create",
                invoice,
                config
            );
            dispatch({
                type: ADD_INVOICE,
                payload: res.data
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <InventoryContext.Provider
            value={{
                items: state.items,
                arrived_items: state.arrived_items,
                current: state.current,
                item: state.item,
                showModal: state.showModal,
                loading: state.loading,
                fetchAllItems,
                addItem,
                removeItem,
                createInvoice,
                showModalHandler,
                fetchAllArrivedItems
            }}
        >
            {props.children}
        </InventoryContext.Provider>
    );
};

export default InventoryState;
