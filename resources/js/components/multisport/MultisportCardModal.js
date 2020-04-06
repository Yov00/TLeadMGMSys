import React,{useContext} from 'react'
import MultisportContext from '../../context/multisport/multisportContext';
const MultisportCardModal = () => {

    const multisportContext = useContext(MultisportContext);
    const {selectedCard,toggleModal,updateMultisportCard} =multisportContext;
    const {card_number,active,employee} = selectedCard;
    const {first_name,last_name} = employee;

    const onSubmit = (e) => {
        e.preventDefault();
        updateMultisportCard(selectedCard);
    }

    return (
        <div className="modal-wrapper">
       
            <form onSubmit={(e)=>onSubmit(e)} className="multisport-modal-form">
                <div className="form__group">
                    <h2>{card_number}</h2>
                </div>
                <div className="form__group">
                    <h2>{card_number}</h2>
                </div>
                <div className="form__group">
                    <button type="submit" className="btn__dark">{active? 'Deactivate':'Activate'}</button>
                </div>
            </form>
            <div className="overlay" onClick={()=>toggleModal()}></div>
        </div>
    )
}

export default MultisportCardModal
