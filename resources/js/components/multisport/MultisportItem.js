import React,{useContext} from "react";
import MultisportContext from '../../context/multisport/multisportContext';

const MultisportItem = () => {
    
    const multisportContext = useContext(MultisportContext);
    const {loading,multisportCards} = multisportContext;
    return(
    <table className="table_black_and_gray ease_in">
    {console.log(multisportCards)}
    <thead>
        <tr>
            <th
                style={{
                    backgroundColor: "white",
                    color: "#333",
                    fontSize: "40px",
                    padding: "20px 0",
                    textAlign: "left"
                }}
                colSpan="4"
            >
                Multisport
            </th>
        </tr>
        <tr>
            <th>Employee</th>
            <th>Card Number</th>
            <th>Last Last Paid</th>
            <th>Active</th>
        </tr>
    </thead>
    <tbody>
        {multisportCards.length > 0 ? (
            multisportCards.map((card,index) => (
                <tr key={index} className="tr__hoverable">
                    <td></td>
                    <td></td>
                    <td>
                       
                    </td>

                    <td className="flex__space_evenly">
                        
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan="4">
                    <h3>No multisport cards...</h3>
                </td>
            </tr>
        )}
    </tbody>
</table>);
};

export default MultisportItem;
