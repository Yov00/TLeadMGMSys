import React, { useContext, useState, useEffect } from "react";
import InventoryContext from "../../context/inventory/inventoryContext";
import BalanceContext from "../../context/balance/balanceContext";
const InvoiceModal = props => {
    const { item, show, showHandler } = props;
    const [invoice, setInvoice] = useState({
        number: 0,
        ammount: 0,
        item_id: 0
    });
    const [validation_errors, setValidation_errors] = useState("");
    const inventoryContext = useContext(InventoryContext);
    const balanceContext = useContext(BalanceContext);
    const { createInvoice, removeItem } = inventoryContext;
    const { updateBalance, balance } = balanceContext;
    const { name, id } = item;

    const onChange = e => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        let valRegex = /^[0-9]+(\.[0-9]+)+$/;
        if (invoice.ammount) {
            createInvoice(invoice);
            removeItem(invoice.item_id);
            const newBalance = { ...balance };
            const newBalanceInfo = new FormData();

            newBalance.ammount -= parseFloat(invoice.ammount);

            updateBalance(newBalance);
            showHandler({});
            setInvoice({
                number: 0,
                ammount: 0,
                item_id: 0
            });
        } else {
            setValidation_errors("Please add an ammount");
        }
    };

    const setInvoiceIdOnLoad = () => {
        if (invoice.item_id <= 0) {
            setInvoice({ item_id: item.id });
        }
    };
    if (!show) {
        return <div></div>;
    }
    return (
        <div className="invoiceModal__wrapper">
            {setInvoiceIdOnLoad()}
            <div className="invoiceModal">
                <button className="close_modal" onClick={() => showHandler({})}>
                    X
                </button>
                <div className="invoiceModal__header">
                    <h3>Invoice Details</h3>
                </div>
                <div className="invoiceModal__body">
                    <div>
                        <label>{id + ": " + name.toUpperCase()}</label>
                    </div>
                    <div>
                        <label>Number</label>
                        <input
                            name="number"
                            type="number"
                            onChange={onChange}
                            placeholder="Invoice number..."
                        />
                    </div>
                    <div>
                        <label>Ammount</label>
                        <input
                            type="number"
                            name="ammount"
                            min="1"
                            max="12"
                            onChange={onChange}
                            placeholder="Paid ammount..."
                            required
                        />
                    </div>
                    {validation_errors && (
                        <div className="validationError">
                            {validation_errors}
                        </div>
                    )}
                </div>
                <div className="invoiceModal__footer">
                    <form onSubmit={onSubmit}>
                        <button type="submit" className="add_invoice_button">
                            Add Invoice
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
