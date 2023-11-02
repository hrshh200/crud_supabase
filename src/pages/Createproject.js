import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/ClientSupabase";
import "./Create.css";

function Createproject() {

    const navigate = useNavigate();
    const [projectname, setProjectName] = useState("");
    const [projectdescription, setProjectDescription] = useState("");

    const handleNameChange = (e) => {
        setProjectName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setProjectDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle the form submission logic, such as sending data to the server

        const { data, error } = await supabase
            .from("projects")
            .insert([{ projectname, projectdescription }])

        navigate("/projects");
        if (data != null) {
            alert(`Registered employee successfully`)
        }
        if (error) {
            console.log(error);
        }

    };
    return (
        <>
            <h1>Add Projects</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Project Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={projectname}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input
                            type="text"
                            name="designation"
                            value={projectdescription}
                            onChange={handleDescriptionChange}
                            required
                        />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    );
}

export default Createproject;