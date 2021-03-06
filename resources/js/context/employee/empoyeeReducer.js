import {
    GET_EMPLOYEES,
    ADD_EMPLOYEE,
    GET_TOKENS,
    GET_SINGLE_EMPLOYEE,
    UPDATE_EMPLOYEE
} from "../../Types";

export default (state, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false
            };
        case GET_TOKENS:
            return {
                ...state,
                tokens: action.payload
            };
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        
        case UPDATE_EMPLOYEE:
            return{
                ...state,
                employees: [...state.employees, action.payload]

            };
        case GET_SINGLE_EMPLOYEE:
            return {
                ...state,
                singleEmployee: action.payload,
                loading: false
            };

        default:
            break;
    }
};
