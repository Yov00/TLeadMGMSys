import React, { useContext, useEffect } from "react";
import InventoryContext from "../../context/inventory/inventoryContext";
import AddItemForm from "./AddItemForm";
const Inventory = () => {
    const inventoryContext = useContext(InventoryContext);
    const { items, fetchAllItems, removeItem } = inventoryContext;

    useEffect(() => {
        fetchAllItems();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="inventoryWrapper">
            <h1 className="ease_in" style={{ fontSize: "40px" }}>
                Inventory
            </h1>
            <AddItemForm />

            <table className="inventory ease_in">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Submitted date</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map(item => (
                            <tr className="tr__hoverable" key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.created_at}</td>

                                <td className="flex__space_evenly">
                                    <div>
                                        <input
                                            type="button"
                                            className="btn__light"
                                            value="arrived"
                                        />
                                    </div>
                                    <div>
                                        <form
                                            onSubmit={e => {
                                                e.preventDefault();
                                                removeItem(item.id);
                                            }}
                                        >
                                            <input
                                                type="submit"
                                                value="Delete"
                                                className="btn__dark"
                                            />
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">
                                <h3>There are no inventory items...</h3>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;
