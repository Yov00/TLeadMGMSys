import {
    GET_ITEMS,
    ADD_INVENTORY_ITEM,
    REMOVE_INVENTORY_ITEM,
    SHOW_MODAL,
    ADD_INVOICE,
    ARRIVED_ITEMS
} from "../../Types";

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
            break;

        case ADD_INVENTORY_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_INVENTORY_ITEM:
            return {
                ...state,
                items: state.items.filter(items => items.id !== action.payload)
            };
            break;
        case SHOW_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
                item: action.payload
            };
        case ADD_INVOICE:
            return {
                ...state,
                invoices: [...state.invoices, action.payload],
                item: {}
            };
        case ARRIVED_ITEMS:
            return {
                ...state,
                arrived_items: action.payload,
                loading: false
            };
        default:
            break;
    }
};
