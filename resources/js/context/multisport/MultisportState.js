import React,{useReducer} from 'react';
import axios from 'axios';
import MultisportContext from './multisportContext';
import multisportReducer from './multisportReducer';

import { ADD_MULTISPORT_CARD,GET_ALL_MULTISPORT_CARDS,UPDATE_MULTISPORT_CARD, TOGGLE_MULTISPORTCARD_MODAL } from "../../Types";


const MultisportState = props => {
    const initialState = {
        multisportCards:[],
        selectedCard:null,
        showModal:false,
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
    const updateMultisportCard = async(card)=>{
        const config = {
            'Content-Type':'application/json'
        }
        try{
            const res = await axios.put(`/api/multisport-card/${card.id}/update`,card,config);
            dispatch({
                type:UPDATE_MULTISPORT_CARD,
                payload:res.data
            })
            fetchAllMultisportCards();
        }catch(err){
            console.error(err.message);
        }
    }

    const toggleModal=(card = null)=>{
        dispatch({
            type:TOGGLE_MULTISPORTCARD_MODAL,
            payload:card
        });
    }
    return (
        <MultisportContext.Provider value={{ 
                 multisportCards: state.multisportCards,
                 showModal:state.showModal,
                 loading:state.loading,
                 selectedCard:state.selectedCard,
                 fetchAllMultisportCards,
                 createMultisportCard,
                 updateMultisportCard,
                 toggleModal
         }}>
            {props.children}
        </MultisportContext.Provider>
    )
}

export default MultisportState
