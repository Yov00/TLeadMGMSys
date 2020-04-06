import { ADD_MULTISPORT_CARD,GET_ALL_MULTISPORT_CARDS,UPDATE_MULTISPORT_CARD,TOGGLE_MULTISPORTCARD_MODAL } from "../../Types";

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
                
            };
        case UPDATE_MULTISPORT_CARD:
            return {
                ...state,
                selectedCard: null,
                showModal:false
            };
        case TOGGLE_MULTISPORTCARD_MODAL:
            return{
                ...state,
                showModal:!state.showModal,
                selectedCard:action.payload
            }
        default:
            break;
    }
};
