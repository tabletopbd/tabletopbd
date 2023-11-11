import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContactMutation } from "../../../features/auth/authApi";
import Table from 'react-bootstrap/Table';
import React, { useRef } from 'react';
import axios from "axios";

export default function Contact() {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    
    const [Contact, { data, error: responseError }] =
        useContactMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (responseError?.data) {
            setError(responseError.data);
        }
        if (data?.contacts) {
            navigate("/contact");
        }

    }, [data, responseError, navigate ]);

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_URL;
        const fetchContacts = async () => {
        try {
                const response = await axios.get(`${baseUrl}/contacts`)
                setContacts(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log('There was a problem or request was cancelled.')
            }
        }
            fetchContacts()
    }, [])

    const contactsData = (
        contacts.map((contact) => (
                        
            <tr key={ contact.id }>
                <td>{ contact.id }</td>
                <td>{ contact.firstName }</td>
                <td>{ contact.lastName }</td>
                <td>{ contact.contactEmail }</td>
                <td>{ contact.contactNumber }</td>
                <td>{ contact.contactAbout }</td>
            </tr>
            
        ))
    )

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div className="col-10 offset-1">
                    <h1 className="mb-3 mt-3">Contacts</h1>
                    <h6 className="mb-3 mt-3">Query made by public</h6>
                    <hr />
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact Email</th>
                                <th>Contact Mobile</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            { isLoading == false ? <>{ contactsData }</> :<td>Loading....</td> }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        
    );
}
