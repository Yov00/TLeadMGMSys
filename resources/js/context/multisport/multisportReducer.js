import { ADD_MULTISPORT_CARD,GET_ALL_MULTISPORT_CARDS } from "../../Types";

export default (state, action) => {
    switch (action.type) {
        case GET_ALL_MULTISPORT_CARDS:
        return {
            ...state,
            multisportCards: action.payload,
            loading:false
        }
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
