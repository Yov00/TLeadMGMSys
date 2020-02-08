import {
    GET_ITEMS,
    ADD_INVENTORY_ITEM,
    REMOVE_INVENTORY_ITEM,
    CHECKOUT_INVENTORY_ITEM
} from "../../Types";

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
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
        default:
            break;
    }
};
