import React , {useEffect, useState , Fragment} from 'react'
import Axios from 'axios';
import './table.css'
import EditTable from './EditTable.js';

function Table() {
    

    const [dataList , setDataList] = useState([]);

    const [userId , setUserId] =useState();
    

    useEffect( () => {
        Axios.get(`http://localhost:5000/api/v1/employee/`).then((res) => {
            setDataList(res.data) 
            console.log(res.data)
    });
    }, [])



    const handleEdit = (id) => {
        setUserId(id)
        console.log("clicked edit button" ,id)

    }

    const handleDelete = (id) => {
        
        console.log("del" , id)
        Axios.delete(`http://localhost:5000/api/v1/employee/${id}`).then((res) => {
               });

    }


  return (
    <div className="outerTable">
        <h1>All details</h1>
        <form>
        <table className="dataTable">
        <tr>
            <th>id </th>
            <th>name </th>
            <th>department</th>
            <th>salary</th>
        </tr>
    
    
        {dataList?.map((val) => (
            <Fragment>
                {userId === val.id ? (
                    <EditTable 
                    editId = {val.id}
                    editName = {val.name} 
                    editDep = {val.department}
                    editsal= {val.salary}
                    />) :( <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.department}</td>
                        <td>{val.salary}</td>
                    
                        <button onClick = {() => handleEdit(val.id)}className="edit">edit</button>
                        <button  onClick = {() => handleDelete(val.id)}>delete</button>
                            </tr>)}
                
            </Fragment>)
                )}
            </table>
            </form>
        </div>

  )
}

export default Table