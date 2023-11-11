import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApi";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logoImage from "../assets/img/logo.png";
import Error from "../components/ui/Error";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [login, { data, isLoading, error: responseError, isSuccess :  responseSuccess }] =
        useLoginMutation();

    const navigate = useNavigate();
   
    useEffect(() => {
        if (responseError?.data) {
            setError(responseError.data);
        }
        if (data?.accessToken && data?.user) {
            navigate("/admin");
        }

        if(responseError) {
            setError(
                <>
                    <p className="text-danger h6 p-2">Email & Password does not match with our record.</p>
                </>
            );
           
        }

    }, [data, responseError, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // setError("");

        login({
            email,
            password,
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 text-center">
                    <div>
                        <Link to="/">
                            <img
                                className="mt-4 img-fluid"
                                src={logoImage}
                                height="80"
                                width="80"
                                alt="TableTop Logo"
                            />
                        </Link>
                        <h2 className="m-3 text-center">
                            Login to account
                        </h2>
                    </div>
                    
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <Row sm={12}>
                            <Form.Group className="mb-3">
                                <Col>
                                     <Form.Control type="text" controlid="email-address" name="email" placeholder="Enter email" autoComplete="email" required value={email}  onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                            </Form.Group>

                              <Form.Group className="mb-3">
                                <Col>
                                    <Form.Control type="password" controlid="password" name="password" placeholder="Enter password" autoComplete="password" required value={password}  onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlid="check-agree">
                                <Col className="d-flex">
                                   <Link
                                        to="/forgot-password"
                                        className="text-center text-secondary float-left"
                                    >
                                        <span className="">Forgot Password</span>
                                    </Link>
                                </Col>
                                {/* <Col className="d-flex mt-3">
                                   <Link
                                        to="/register"
                                        className="text-center text-secondary float-right"
                                    >
                                        <span className="pl-0">Create an account</span>
                                    </Link>
                                </Col> */}
                            </Form.Group>

                           
                            <Form.Group className="mb-3">
                                <Row>
                                    <div className="col-md-3">
                                        <Button disabled={isLoading} variant="btn btn-outline-secondary btn-block rounded-0" type="submit">
                                            Login
                                        </Button>
                                    </div>
                                    <div className="col-md-9">
                                        { success }
                                        { error }
                                    </div>
                                </Row>
                            </Form.Group>

                            
                        </Row>

                    </form>
                </div>
            </div>
        </div>
    );
}
