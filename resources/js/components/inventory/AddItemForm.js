import React, { useEffect, useState, useContext } from "react";
import InventoryContext from "../../context/inventory/inventoryContext";
const AddItemInput = () => {
    const inventoryContext = useContext(InventoryContext);
    const { addItem } = inventoryContext;

    const [item, setItem] = useState({
        name: "",
        quantity: 1
    });
    const [validationErrors, setValidationErrors] = useState("");
    const { name, quantity } = item;
    const onChange = e => setItem({ ...item, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (item.name) {
            addItem(item);
            setItem({
                name: "",
                quantity: 1
            });
            setValidationErrors("");
        } else {
            setValidationErrors("Please enter name for the product first");
        }
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
            <div className="validation_errors">{validationErrors}</div>
        </form>
    );
};

export default AddItemInput;
