
import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { supabase } from "../config/ClientSupabase"
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Projectcard = ({ empproject, onDelete }) => {

    const navigate = useNavigate();
    const senddata= empproject.id;

    const handleView =() =>{
        navigate('/home', { state: { data: senddata } });
    }

    const handleDelete = () => {
        supabase
            .from("projects")
            .delete()
            .eq('id', empproject.id)
            .then(response => {
                if (response.error) {
                    console.error(response.error);
                } else {
                    console.log("Deleted successfully");
                    onDelete(empproject.id)
                    navigate("/projects");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };



    return (
        <div className="card-container">
            <div className="card">
                <h2>{empproject.projectname}</h2>
                <p>Description: {empproject.projectdescription}</p>
                <div className="buttons">
                    <Link to={'/pro' + empproject.id}>
                        <EditIcon color="primary" fontSize="small" />
                    </Link>
                    <button onClick={handleDelete}>
                        <DeleteIcon color="error" fontSize="small" />
                    </button>
                </div>
                <button className="btnpro" type="submit" onClick={handleView}>View</button>
            </div>
        </div>
    );
};

export default Projectcard;
