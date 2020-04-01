import React, { useContext } from "react";
import MultisportContext from "../../context/multisport/multisportContext";
import moment from "moment";

const MultisportItem = () => {
    const multisportContext = useContext(MultisportContext);
    const { loading, multisportCards } = multisportContext;

    const multisport_date_format = card => {
        const formatedDate = new moment(card.updated_at);
        return formatedDate.format("ll");
    };

    return (
        <table className="table_black_and_gray ease_in">
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
                    multisportCards.map((card, index) => (
                        <tr key={index} className="tr__hoverable">
                            <td>
                                {card.employee.first_name +
                                    ", " +
                                    card.employee.last_name}
                            </td>
                            <td>{card.card_number}</td>
                            <td>{multisport_date_format(card)}</td>

                            <td className="flex__space_evenly">
                                {card.active ? (
                                    <i
                                        className="fas fa-check-double"
                                        style={{
                                            color: "white",
                                            fontSize: "30px"
                                        }}
                                    ></i>
                                ) : (
                                    <i
                                        className="fas fa-times"
                                        style={{
                                            fontSize: "30px"
                                        }}
                                    ></i>
                                )}
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
        </table>
    );
};

export default MultisportItem;
