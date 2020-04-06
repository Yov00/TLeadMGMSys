import React,{useContext,useState,useEffect} from 'react'
import EmployeeContext from '../../context/employee/employeeContext';
import MultisportContext from '../../context/multisport/multisportContext';
import Spinner from '../layout/Spinner';

const CreateMultisportCard = () => {

    const employeeContext = useContext(EmployeeContext);
    const multisportContext = useContext(MultisportContext);

    const {createMultisportCard} = multisportContext;
    const {fetchAllEmployees,employees,loading} = employeeContext;
    const [card,setCard] = useState({
        card_number:null,
        employee_id:0,
        active:false
    });
    
    useEffect(()=>{
        fetchAllEmployees();
        
    },[]);

    const onChange=(e)=>{
        let targetValue = e.target.value;
        if(targetValue=='true'){
            targetValue = true;
        }
        if(targetValue == 'false')
        {
            targetValue = false;
        }

       setCard({...card,[e.target.name]:targetValue});
       console.log(e.target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        createMultisportCard(card);
    }
  
   if(loading){
       return <Spinner/>;
   }
    const employeeOptions = employees.map(employee=>(
        <option key={employee.id} value={employee.id}>
            {`${employee.first_name}, ${ employee.last_name}`}
        </option>
        ));

    return (
        <form onSubmit={(e)=>onSubmit(e)} className="ease_in multisport_form">
        {console.log(card)}
        <div className="d__flex">
            <div className="form__group">
                    <label htmlFor="">Card Number</label>
                <input onChange={(e)=>onChange(e)} name="card_number" type="text"/>
            </div>  
            <div className="form__group">
                <label htmlFor="active">Active</label>
                <select onChange={(e)=>onChange(e)} name="active" id="active" style={{ width:'fit-content' }}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                    
            </div>  
        </div>
        
            <div className="form__group">
                <select name="employee_id" id="employee_id" onChange={(e)=>onChange(e)}> 
                    {employeeOptions}
                </select>
            </div>

            <div className="form__group ">
                <button type="submit">
                    Create
                </button>
            </div>
    
        </form>
    )
}

export default CreateMultisportCard
