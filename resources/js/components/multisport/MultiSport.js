import React, { useContext, useEffect } from "react";
import MultisportItem from "./MultisportItem";
import MultisportContext from "../../context/multisport/multisportContext";
const MultiSport = () => {
    const multisportContext = useContext(MultisportContext);
    const { multisportCards, fetchAllMultisportCards } = multisportContext;


    return (
        <div>
            <MultisportItem  />
        </div>
    );
};

export default MultiSport;
