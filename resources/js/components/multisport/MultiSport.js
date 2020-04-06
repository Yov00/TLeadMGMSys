import React, { useContext, useEffect } from "react";
import MultisportItem from "./MultisportItem";
import Spinner from '../layout/Spinner';
import MultisportContext from "../../context/multisport/multisportContext";
const MultiSport = () => {
    const multisportContext = useContext(MultisportContext);
    const { multisportCards, fetchAllMultisportCards,loading} = multisportContext;

    useEffect(()=>{
        fetchAllMultisportCards();
    },[]);

    if(loading){
        return <Spinner/>;
    }
    return (
        <div>
            <MultisportItem  />
        </div>
    );
};

export default MultiSport;
