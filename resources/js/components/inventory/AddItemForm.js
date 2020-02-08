import React, { useEffect, useState, useContext } from "react";
import InventoryContext from "../../context/inventory/inventoryContext";
const AddItemInput = () => {
    const inventoryContext = useContext(InventoryContext);
    const { addItem } = inventoryContext;

    const [item, setItem] = useState({
        name: "",
        quantity: 1
    });
    const { name, quantity } = item;
    const onChange = e => setItem({ ...item, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addItem(item);
        setItem({
            name: "",
            quantity: 1
        });
    };
    return (
        <form onSubmit={onSubmit} className="AddItemInput ease_in">
            <input
                type="text"
                name="name"
                placeholder="Add item..."
                onChange={onChange}
                value={name}
            />
            <input
                type="number"
                name="quantity"
                placeholder="Q"
                min="1"
                value={quantity}
                onChange={onChange}
            />
            <input type="submit" className="btn__dark" value="Add" />
        </form>
    );
};

export default AddItemInput;
