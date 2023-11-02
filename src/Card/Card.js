
import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {supabase} from "../config/ClientSupabase"
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ employee ,onDelete}) => {

    const navigate=useNavigate();

    const handleDelete = () => {
        supabase
            .from("emp")
            .delete()
            .eq('id', employee.id)
            .then(response => {
                if (response.error) {
                    console.error(response.error);
                } else {
                    console.log("Deleted successfully");
                    onDelete(employee.id)
                    navigate("/home");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };



    return (
        <div className="card-container">
            <div className="card">
                <h2>{employee.name}</h2>
                <p>Salary: {employee.salary}</p>
                <p>Designation: {employee.designation}</p>
                <div className="buttons">
                    <Link to={'/'+employee.id}>
                    <EditIcon color="primary" fontSize="small" />
                    </Link>
                    <button onClick={handleDelete}>
                    <DeleteIcon color="error" fontSize="small" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
