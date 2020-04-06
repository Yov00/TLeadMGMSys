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

    const createMultisportCard = async (card)=>{
        const config = {
            'Content-type':'application/json'
        }
        try{
            const res = await axios.post('/api/create-multisport-card',card,config);
            dispatch({
                type: ADD_MULTISPORT_CARD,
                payload:res.data
            });
        }catch(err){
           throw new Error(err.message);
        }
    }
    return (
        <MultisportContext.Provider value={{ 
                 multisportCards: state.multisportCards,
                 loading:state.loading,
                 fetchAllMultisportCards,
                 createMultisportCard
         }}>
            {props.children}
        </MultisportContext.Provider>
    )
}

export default MultisportState
