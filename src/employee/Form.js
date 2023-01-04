import React , {useState} from 'react'
import Axios from 'axios';
import './form.css'

function Form() {

  const [id, setID] = useState()
  const [name, setName] = useState()
  const [department, setDepartment] = useState()
  const [salary, setSalary] = useState()

 const handleSubmit = (e) =>{
    console.log("clicked>>>>>>>>>>>")

    e.preventDefault();
    // get form data out of state
 
  Axios.post("http://localhost:5000/api/v1/employee" , { 
    id : id,
    name :  name,
    department :  department,
    salary : salary

  }).then((res) => {

    console.log(res)

         
    });
  }


  

  return (
    <div  className="outerForm">

    
        <h1>Register</h1>
  
       <form>
       
        <div className="formFields">
        <lable>ID</lable>
        <input  type="number" onChange = {(event)=>{setID(event.target.value)}}/>
        

      
        <lable>NAME</lable>
        <input  type="text" onChange = {(event)=>{setName(event.target.value)}}/>
        

       
        <lable>DEPARTMENT</lable>
        <input  type="text" onChange = {(event)=>{setDepartment(event.target.value)}}/>
       

        
        <lable>SALARY</lable>
        <input  type="number" onChange = {(event)=>{setSalary(event.target.value)}}/>
       
        

        </div>
        <div>
        <button  className= "buttonSubmit" type="submit" onClick={handleSubmit}>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Form