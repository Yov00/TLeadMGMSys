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
        <div className="modal-wrapper invoice__modal">
            {setInvoiceIdOnLoad()}
            <div className="modal-form">
                <div className="modal-header">
                    Invoice Details
                    <button className="btn__dark close-modal" onClick={() => showHandler({})}>
                <i class="fas fa-times-circle"></i>
                </button>
                </div>
                <div className="modal-body">
                    <div>
                        <h2>{name.toUpperCase()}</h2>
                    </div>
                    <div className="form__group">
                        <label>Number</label>
                        <input
                            step="any"
                            name="number"
                            type="number"
                            onChange={onChange}
                            placeholder="Invoice number..."
                        />
                    </div>
                    <div className="form__group">
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
                <div className="modal-footer">
                    <form onSubmit={onSubmit}>
                    <button  onClick={() => showHandler({})} className="btn-modal-close" type="button">Cancel</button>
                        <button type="submit" className="modal-footer-button success">
                            Add Invoice
                        </button>
                    </form>
                </div>
               
            </div>
            <div className="overlay" onClick={() => showHandler({})}></div>
        </div>
    );
};

export default InvoiceModal;
