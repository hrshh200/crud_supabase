import React from "react";
import { supabase } from "../config/ClientSupabase"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { useLocation } from 'react-router-dom';

function Home() {

    const [fetcherror, setFetchError] = useState("");
    const [employees, setEmployees] = useState("");
    const navigate= useNavigate();

    const location = useLocation();
    const receivedata = location.state?.data;
   
    const handleDelete=(id)=>{
            setEmployees(prevEmployees =>{
                return prevEmployees.filter(sm=>sm.id!==id)
            })
    }

    
    const handleadd = () =>{
        navigate('/create', { state: { data: receivedata } });
    }
    
    useEffect(() => {
        const fetchemployees = async () => {
            const { data, error } = await supabase
            .from('emp')
            .select()
            .eq('projectid', receivedata)

            if (error) {
                setFetchError('Unable to fetch data from supabase')
                setEmployees(null);
                console.log(error);
            }
            if (data!=null) {
                console.log(data);
                setEmployees(data);
                setFetchError(null);
            }
        }

        fetchemployees();
    }, [])


    return (
        <div>
            <h1>List of Employees</h1>
            <div className="container">
                {fetcherror && <p>{fetcherror}</p>}
                {employees && (
                    <div className="card-container">
                        {employees.map((employee) => (
                            <Card key={employee.id} employee={employee} onDelete={handleDelete}/>
                        ))}
                    </div>
                )}
            </div>
            <a href="/create"><button type="submit" onClick={handleadd}>Add Employee</button></a>
        </div>
    );
}

export default Home;