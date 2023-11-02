import React from "react";
import { supabase } from "../config/ClientSupabase"
import { useEffect, useState } from "react";
import Projectcard from "../Card/Projectcard";


function Projects() {

    const [fetcherror, setFetchError] = useState("");
    const [empprojects, setEmpProjects] = useState("");

    const handleDelete=(id)=>{
            setEmpProjects(prevEmployees =>{
                return prevEmployees.filter(sm=>sm.id!==id)
            })
    }
    
    useEffect(() => {
        const fetchprojects = async () => {
            const { data, error } = await supabase
                .from("projects")
                .select()

            if (error) {
                setFetchError('Unable to fetch data from supabase');
                setEmpProjects(null);
                console.log(error);
            }
            if (data) {
                setEmpProjects(data);
                setFetchError(null);
            }
        }
        fetchprojects();
    }, [])

    return (
        <div>
            <h1>View Projects</h1>
            <div className="container">
            {fetcherror && <p>{fetcherror}</p>}
                {empprojects && (
                    <div className="card-container">
                        {empprojects.map((empproject) => (
                            <Projectcard key={empproject.id} empproject={empproject} onDelete={handleDelete}/>
                        ))}
                    </div>
                )}
            </div>
            <a href="/createproject"><button type="submit">Add Project</button></a>
        </div>
    );
}

export default Projects;