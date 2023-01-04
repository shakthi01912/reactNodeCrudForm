import {React, useEffect, useState} from 'react'
import Axios from 'axios';
import './idView.css'

function IdView() {

    const [empId, setEmpId] = useState();
    const [eachDatails , seteachDetails] = useState(null);

    const getDetailsById = (id) => {
        console.log("getDetailsById clicked", id)
        Axios.get(`http://localhost:5000/api/v1/employee/${id}`).then((res) => {
            console.log(res.data)
            seteachDetails(res.data) //problem
        });
    }

    useEffect( (id) => {
        
        Axios.get(`http://localhost:5000/api/v1/employee/${id}`).then((res) => {
            seteachDetails(res.data) 
    });
    }, [])

  return (
    <div className="outerContainer">
    <h1>Search</h1>
        
    <input onChange={(event) => {setEmpId(event.target.value)}}></input>
    <button onClick ={() => getDetailsById(empId)}>FIND</button>
    <div className="content">
    <lable>NAME</lable>
        <h3>{eachDatails?.name}</h3>
        <lable>DEPARTMENT</lable>
        <h3>{eachDatails?.department}</h3>
        <lable>SALARY</lable>
        <h3>{eachDatails?.salary}</h3>
    </div>
    </div>
  )
}

export default IdView