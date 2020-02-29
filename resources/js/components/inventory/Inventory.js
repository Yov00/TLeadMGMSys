import React, { useContext, useEffect } from "react";
import InventoryContext from "../../context/inventory/inventoryContext";
import AddItemForm from "./AddItemForm";
import InventoryItems from "./InventoryItems";
import Balance from "../balance/Balance";
import InvoiceModal from "../invoice/InvoiceModal";
import Spinner from "../layout/Spinner";

const Inventory = () => {
    const inventoryContext = useContext(InventoryContext);
    const {
        items,
        fetchAllItems,
        showModalHandler,
        showModal,
        item,
        loading
    } = inventoryContext;

    useEffect(() => {
        fetchAllItems();

        // eslint-disable-next-line
    }, []);
    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="inventoryWrapper">
            <InvoiceModal
                item={item}
                show={showModal}
                showHandler={showModalHandler}
            />

            <InventoryItems items={items} />
            <Balance />
        </div>
    );
};

export default Inventory;
