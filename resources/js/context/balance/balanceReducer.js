import { GET_BALANCE, UPDATE_BALANCE } from "../../Types";

export default (state, action) => {
    switch (action.type) {
        case GET_BALANCE:
            return {
                ...state,
                balance: action.payload,
                loading:false
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
