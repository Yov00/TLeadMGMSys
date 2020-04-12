import React, { useContext } from "react";
import MultisportContext from "../../context/multisport/multisportContext";
const MultisportCardModal = () => {
    const multisportContext = useContext(MultisportContext);
    const {
        selectedCard,
        toggleModal,
        updateMultisportCard,
    } = multisportContext;
    const { card_number, active, employee } = selectedCard;
    const { first_name, last_name } = employee;

    const onSubmit = (e) => {
        e.preventDefault();
        updateMultisportCard(selectedCard);
    };

    return (
        <div className="modal-wrapper">
            <form
                onSubmit={(e) => onSubmit(e)}
                className="modal-form"
            >
                <div className="modal-header">
                    Card manager
                    <button
                        className="btn__dark close-modal "
                        onClick={() => toggleModal()}
                    >
                        <i className="fas fa-times-circle"></i>
                    </button>
                </div>
                <div className="modal-body">

                    <h3> {`${first_name}, ${last_name}`}</h3>
                    <h3>
                        <i className="fas fa-id-card"></i>
                        {card_number}
                    </h3>

                </div>
                <div className="modal-footer" >
                    <button onClick={() => toggleModal()} className="btn-modal-close" type="button">Cancel</button>
                    <button type="submit" className={!active ? 'modal-footer-button success' : 'modal-footer-button danger'}>
                        {active ? "Deactivate" : "Activate"}
                    </button>
                </div>

            </form>

            <div className="overlay" onClick={() => toggleModal()}></div>
        </div >
    );
};

export default MultisportCardModal;
