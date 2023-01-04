import React , {useState}  from 'react'
import Axios from 'axios';

function EditTable({editId , editName, editDep, editsal}) {

    // const [id, setID] = useState()
    const [name, setName] = useState()
    const [department, setDepartment] = useState()
    const [salary, setSalary] = useState()
  


    const newFormSubmit = (id) => {
     
        console.log("newForm" ,id)
        Axios.put(`http://localhost:5000/api/v1/employee/${id}` , {
  
            name :  name,
            department :  department,
            salary :salary 
        }).then((res) => {
       
            console.log(res)
    });
    

    }
  return (

    <tr>
        <td>
            {/* <input
            onChange = {(event)=>{setID(event.target.value)}}
            type="number"
            placeholder="enter a id:"
            name="id"
            required="required"
            >
            </input> */}
            {editId}
        </td>
        

        <td>
            <input
            onChange = {(event)=>{setName(event.target.value)}}
            type="text"
            placeholder={editName}
            name="name"
            required="required"
        
            >
            </input>
        </td>
        <td>
            <input
            onChange = {(event)=>{setDepartment(event.target.value)}}
            type="text"
            placeholder={editDep}
            name="department"
            required="required"
           
            >
            </input>
        </td>
        <td>
            <input
            onChange = {(event)=>{setSalary(event.target.value)}}
            type="number"
            placeholder= {editsal}
            name="salary"
            required="required"
       
            >
            </input>
        </td>

        <button onClick = {() => newFormSubmit(editId)}> Update </button>



       
    </tr>

 
  )
}

export default EditTable