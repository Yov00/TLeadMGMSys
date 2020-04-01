import React, { useContext, useEffect } from "react";
import InventoryContext from "../../context/inventory/inventoryContext";
import Spinner from "../layout/Spinner";

const ArrivedItems = () => {
    const inventoryContext = useContext(InventoryContext);
    const { arrived_items, fetchAllArrivedItems, loading } = inventoryContext;
    const { id, name, quantity, deleted_at } = arrived_items;
    useEffect(() => {
        fetchAllArrivedItems();
    }, []);
    if (loading) {
        return <Spinner />;
    }

    return (
        <table className="table_black_and_gray ease_in">
            <thead>
                <tr>
                    <th
                        style={{
                            backgroundColor: "white",
                            color: "#333",
                            fontSize: "40px",
                            padding: "20px 0",
                            textAlign: "left"
                        }}
                        colSpan="4"
                    >
                        Arrived Items
                    </th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Arrived on</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {arrived_items.length > 0 ? (
                    arrived_items.sort().map(item => (
                        <tr className="tr__hoverable" key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                {item.deleted_at
                                    ? item.deleted_at.slice(0, 10)
                                    : ""}
                            </td>

                            <td className="flex__space_evenly">
                                {item.invoice != null
                                    ? item.invoice.ammount + "$"
                                    : ""}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">
                            <h3>No arrived items...</h3>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default ArrivedItems;
