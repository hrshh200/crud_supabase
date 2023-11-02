import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {supabase} from "../config/ClientSupabase";
import { useLocation } from "react-router-dom";
import "./Create.css";

function Createnew(){

const navigate= useNavigate();
const [name, setName] = useState("");
const [salary, setSalary] = useState("");
const [designation, setDesignation] = useState("");
const [projectid, setProjectid] = useState(0);
const location = useLocation();

const receivedata2 = location.state?.data;
console.log(receivedata2);

const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleid = (e) => {
    setProjectid(receivedata2);
    console.log("Added Successfully");
    alert(`Employee Added Successfully`);
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending data to the server

    const {data, error} = await supabase
        .from("emp")
        .insert([{name,salary,designation,projectid}])

        
      
    if(data)
    {
        alert(`Registered employee successfully`)
    }
    if(error)
    {
        console.log(error);
        navigate("/projects");
    }

  };
    return(
        <>
        <h1>Add Employee</h1>
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
            <button type="submit" onClick={handleid}>Add</button>
        </form>
    </div>
    </>
    );
}

export default Createnew;