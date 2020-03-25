import { ADD_MULTISPORT_CARD } from "../../Types";

export default (state, action) => {
    switch (action.type) {
        case ADD_MULTISPORT_CARD:
            return {
                ...state,
                balance: action.payload
            };
        case UPDATE_BALANCE:
            return {
                ...state,
                balance: action.payload
            };
        default:
            break;
    }
};
