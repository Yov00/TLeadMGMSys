import React,{useContext,useState,useEffect} from 'react'
import EmployeeContext from '../../context/employee/employeeContext';

const CreateMultisportCard = () => {

    const employeeContext = useContext(EmployeeContext);
    const {fetchAllEmployees,employees} = employeeContext;
    const [allEmployees,setAllEmployees] = useState([]);
    
    useEffect(()=>{
       (async()=>{
        await  fetchAllEmployees();
       }, setAllEmployees(employees))();
    },[]);
   
    const employeeOptions =  employees.map(employee=>{
        <option value={employee.id}>
            {employee.first_name + " " + employee.last_name}
        </option>
    });
    console.log(allEmployees.current)

    return (
        <form className="ease_in multisport_form">
        <div className="d__flex">
            <div className="form__group">
                    <label htmlFor="">Card Number</label>
                <input type="text"/>
            </div>  
            <div className="form__group">
                <label htmlFor="">Active</label>
                <select name="active" id="active" style={{ width:'fit-content' }}>
                    <option value="yes">Yes</option>
                    <option value="yes">No</option>
                </select>
                    
            </div>  
        </div>
        <div className="form__group">
            <select name="active" id="active">
                        {employeeOptions}
            </select>
        </div>
        </form>
    )
}

export default CreateMultisportCard
