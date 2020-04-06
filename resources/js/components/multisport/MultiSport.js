import React, { useContext, useEffect } from "react";
import MultisportItem from "./MultisportItem";
import Spinner from '../layout/Spinner';
import MultisportContext from "../../context/multisport/multisportContext";
import MultiSportCardModal from "./MultisportCardModal";

const MultiSport = () => {
    const multisportContext = useContext(MultisportContext);
    const {selectedCard, multisportCards, fetchAllMultisportCards,loading,showModal} = multisportContext;

    useEffect(()=>{
        fetchAllMultisportCards();
    },[]);

    if(loading){
        return <Spinner/>;
    }
    const modal = showModal ? (<MultiSportCardModal/>):null;
    return (
        <div>
            <MultisportItem  />
            {modal}
        </div>
    );
};

export default MultiSport;
