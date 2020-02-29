import React, { useContext, useEffect } from "react";
import AddItemForm from "./AddItemForm";
import InventoryContext from "../../context/inventory/inventoryContext";

const InventoryItems = ({ items }) => {
    const inventoryContext = useContext(InventoryContext);
    const { showModalHandler } = inventoryContext;
    return (
        <table className="inventory ease_in">
            <thead>
                <tr>
                    <th
                        colSpan="4"
                        style={{
                            backgroundColor: "white",
                            color: "#333",
                            textAlign: "left",
                            fontSize: "40px"
                        }}
                    >
                        Inventory
                    </th>
                </tr>
                <tr>
                    <th
                        colSpan="4"
                        style={{
                            backgroundColor: "white",
                            color: "#333",
                            textAlign: "left"
                        }}
                    >
                        <AddItemForm />
                    </th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Submitted date</th>
                    <th>Manage</th>
                </tr>
            </thead>
            <tbody>
                {items.length > 0 ? (
                    items.sort().map(item => (
                        <tr className="tr__hoverable" key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.created_at.slice(0, 10)}</td>

                            <td className="flex__space_evenly">
                                <div>
                                    <input
                                        type="submit"
                                        className="btn__light"
                                        value="arrived"
                                        onClick={() => showModalHandler(item)}
                                    />
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
    );
};

export default InventoryItems;
