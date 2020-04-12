import React, { useContext, useState, useEffect } from 'react'
import EmployeeContext from '../../context/employee/employeeContext';
import MultisportContext from '../../context/multisport/multisportContext';
import MessageToast from '../materials/message-toast/MessageToats';
import Spinner from '../layout/Spinner';

const CreateMultisportCard = () => {

    const employeeContext = useContext(EmployeeContext);
    const multisportContext = useContext(MultisportContext);

    const { createMultisportCard } = multisportContext;
    const { fetchAllEmployees, employees, loading } = employeeContext;
    const [card, setCard] = useState({
        card_number: '',
        employee_id: 0,
        active: true
    });
    const [showMessage, setShowMessage] = useState(false);
    const [cardCreated, setCardCreated] = useState(false);

    // Validation
    const [validation_errors, setValidation_errors] = useState();
    const [employeeNotFilled, setEmployeeNotFilled] = useState(false);
    const [cardNumberNotFilled, setCardNumberNotFilled] = useState(false);

    useEffect(() => {
        fetchAllEmployees();

    }, []);

    const onChange = (e) => {
        let targetValue = e.target.value;
        if (targetValue == 'true') {
            targetValue = true;
        }
        if (targetValue == 'false') {
            targetValue = false;
        }

        setCard({ ...card, [e.target.name]: targetValue });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (card.card_number && card.employee_id > 0) {
            createMultisportCard(card);
            setCard({
                card_number: '',
                employee_id: -1,
                active: true
            });

            setEmployeeNotFilled(false);
            setCardNumberNotFilled(false);
            setShowMessage(true);
            setValidation_errors('');

            setCardCreated(true);
        }
        if (!card.card_number) {
            setValidation_errors('Please enter a card number');
            setCardNumberNotFilled(true);
            setEmployeeNotFilled(false);
        }
        if (card.employee_id <= 0) {
            setValidation_errors('Please select employee');
            setEmployeeNotFilled(true);
            setCardNumberNotFilled(false);
        }
        if (card.employee_id <= 0 && !card.card_number) {
            setValidation_errors('Please fill the below fields accordingly');
            setEmployeeNotFilled(true);
            setCardNumberNotFilled(true);
        }
    }

    if (loading) {
        return <Spinner />;
    }
    if (cardCreated) {
        setTimeout(() => {
            window.location.href = '/multi-sport';
        }, 1000);
    }
    const emplyeesWithNoMultisportCards = () => {
        let $filteredEmployees = employees.filter(employee => {
            return employee.multisport == null;
        });
        return $filteredEmployees;
    }
    const employeeOptions = emplyeesWithNoMultisportCards().map(employee => (
        <option key={employee.id} value={employee.id}>
            {`${employee.first_name}, ${employee.last_name}`}
        </option>
    ));

    const employee_validation = employeeNotFilled ? (
        <span style={{ color: 'tomato' }}> * </span>) : ''
    const cardNumber_validation = cardNumberNotFilled ? (
        <span style={{ color: 'tomato' }}> * </span>) : ''

    return (
        <form onSubmit={(e) => onSubmit(e)} className="ease_in multisport_form">
            <div className="modal-header">
                Create Multisport Card
            </div>

            <div className="d__flex">
                <div className="form__group">
                    <label htmlFor="card_number">
                        {cardNumber_validation}    Card Number
                    </label>
                    <input value={card.card_number} onChange={(e) => onChange(e)} name="card_number" type="text" id="card_number" />
                </div>
                <div className="form__group">
                    <label htmlFor="active">Active</label>
                    <select defaultValue={card.active} onChange={(e) => onChange(e)} name="active" id="active" style={{ width: 'fit-content' }}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                </div>
            </div>
            <div className="form__group" >
                <label htmlFor="employee_id">
                    {employee_validation}  Employee
                    </label>
                <select defaultValue={card.employee_id} name="employee_id" id="employee_id" onChange={(e) => onChange(e)}> \
                    <option value={-1}>select employee</option>
                    {employeeOptions}
                </select>

            </div>

            <div className="form__group ">
                <button className='btn__dark' type="submit">
                    Create
                </button>
            </div>
            {
                showMessage ? (<MessageToast className="success" message={'Card created successfully!'} />) : ''
            }
            {validation_errors && (
                <div className="validationError">
                    {validation_errors}
                    <i className="fas fa-times toast-close" onClick={() => setValidation_errors(null)}></i>
                </div>
            )}
        </form>

    )
}

export default CreateMultisportCard
