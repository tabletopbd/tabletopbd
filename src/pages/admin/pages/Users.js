import Sidebar from "../components/Sidebar";
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
    const [hasError, setErrors] = useState(false);
    const [admins, setAdmins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


     useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_URL;
        const fetchAdmins = async () => {
        try {
                const response = await axios.get(`${baseUrl}/users`)
                setAdmins(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
            fetchAdmins()
    }, [])
   
    const userList = (
        admins.map((user) => (
                        
            <tr key={ user.id }>
                <td>{ user.id }</td>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td>{ user.phone }</td>
            </tr>
            
        ))
    )

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 pt-4">
                <div className="col-10 offset-1">
                    <h1 className="pt-2 pb-2">Users</h1>
                    <hr />
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            { isLoading == false ? <>{ userList }</> :<td>Loading....</td> }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        
    );
}
