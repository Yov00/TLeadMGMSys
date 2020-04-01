import React,{useReducer} from 'react';
import axios from 'axios';
import MultisportContext from './multisportContext';
import multisportReducer from './multisportReducer';

import { ADD_MULTISPORT_CARD,GET_ALL_MULTISPORT_CARDS } from "../../Types";


const MultisportState = props => {
    const initialState = {
        multisportCards:[],
        loading:true
    }
    const [state,dispatch] = useReducer(multisportReducer,initialState);

    const fetchAllMultisportCards = async ()=>{
        try{
            const res = await axios.get('/api/get-multisport-cards');
            dispatch({
                type:GET_ALL_MULTISPORT_CARDS,
                payload:res.data
            });
        }catch(error){
            throw new Error(error.message);
        }
    }

    return (
        <MultisportContext.Provider value={{ 
                 multisportCards: state.multisportCards,
                 loading:state.loading,
                 fetchAllMultisportCards
         }}>
            {props.children}
        </MultisportContext.Provider>
    )
}

export default MultisportState
