import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {supabase} from "../config/ClientSupabase";
import "./Update.css";

function Update(){
const {id} = useParams();
const navigate= useNavigate();
const [name, setName] = useState("");
const [salary, setSalary] = useState("");
const [designation, setDesignation] = useState("");

const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleupdate=()=>{
    alert(`Updated Successfully`);
  }

const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending data to the server

    const {data, error} = await supabase
        .from("emp")
        .update({name, salary ,designation})
        .eq('id', id)

    if(data!=null)
    {
        alert(`Updated employee successfully`)
    }
    if(error)
    {
        console.log(error);
    }

  };
    return(
        <>
        <h1>Update Employee Details</h1>
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </div>
            <div>
                <label>Salary:</label>
                <input
                    type="text"
                    name="salary"
                    value={salary}
                    onChange={handleSalaryChange}
                    required
                />
            </div>
            <div>
                <label>Designation:</label>
                <input
                    type="text"
                    name="designation"
                    value={designation}
                    onChange={handleDesignationChange}
                    required
                />
            </div>
            <button type="submit" onClick={handleupdate}>Update Details</button>
        </form>
    </div>
    </>
    );
}

export default Update;