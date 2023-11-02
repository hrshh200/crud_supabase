import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {supabase} from "../config/ClientSupabase";
import "./Update.css";

function ProjectUpdate(){
const {id} = useParams();
const navigate= useNavigate();
const [projectname, setProjectName] = useState("");
const [projectdescription, setProjectDescription] = useState("");

const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending data to the server

    const {data, error} = await supabase
        .from("projects")
        .update({projectname, projectdescription})
        .eq('id', id)

    navigate("/projects");
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
        <h1>Update Project Details</h1>
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Project Name:</label>
                <input
                    type="text"
                    name="projectname"
                    value={projectname}
                    onChange={handleProjectNameChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    name="projectdesignation"
                    value={projectdescription}
                    onChange={handleProjectDescriptionChange}
                    required
                />
            </div>
            <button type="submit">Update Details</button>
        </form>
    </div>
    </>
    );
}

export default ProjectUpdate;