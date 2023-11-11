import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logoImage from "../assets/img/logo.png";
import Error from "../components/ui/Error";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");
    // const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState("");

    const [register, { data, isLoading, error: responseError }] =
        useRegisterMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (responseError?.data) {
            setError(responseError.data);
        }
        if (data?.accessToken && data?.user) {
            navigate("/admin");
        }
    }, [data, responseError, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if (password_confirmation !== password) {
            setError("Passwords do not match");
        } else {
            register({
                name,
                email,
                phone,
                password,
            });
        }
    };



    return (
         <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 text-center">
                    <div>
                        <Link to="/">
                            <img
                                className="mt-4 img-responsive"
                                height="80"
                                width="80"
                                src={logoImage}
                                alt="TableTop Logo"
                            />
                        </Link>
                        <h2 className="m-3">
                            Create account
                        </h2>
                    </div>
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <Row sm={12}>
                            <Form.Group className="mb-3">
                                <Col>
                                    <Form.Control type="text" controlid="name" name="name" placeholder="Enter name" autoComplete="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Col>
                                     <Form.Control type="text" controlid="email-address" name="email" placeholder="Enter email" autoComplete="email" required value={email}  onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Col>
                                     <Form.Control type="phone" controlid="phone" name="phone" placeholder="01710-000000" autoComplete="phone" required value={phone}  onChange={(e) => setPhone(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Col>
                                    <Form.Control type="password" controlid="password" name="password" placeholder="Enter password" autoComplete="password" required value={password}  onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Col>
                                    <Form.Control type="password" controlid="password_confirmation" name="password_confirmation" placeholder="Confirm password" autoComplete="current-password_confirmation" required value={password_confirmation}  onChange={(e) => setConfirmPassword(e.target.value)} />
                                </Col>
                            </Form.Group>

                            {/* <Form.Group className="mb-3">
                                <Col className="d-flex">
                                    <Form.Check type="checkbox" controlid="agree" name="agree" required checked={agreed}
                                    onChange={(e) =>
                                        setAgreed(e.target.checked)
                                    } />
                                    <Form.Label><span className="m-3">Agreed with the terms and condition</span></Form.Label>
                                </Col>
                            </Form.Group> */}


                            {/* <Form.Group className="float-right">
                                <Col className="d-flex">
                                    <span className="p-1">Already have an account?</span>
                                    <Link
                                        to="/login"
                                        className="text-center text-secondary p-1"
                                    >
                                        <span className="">Login</span>
                                    </Link>
                                </Col>
                            </Form.Group> */}

                           
                            <Form.Group className="mb-3">
                                <Col className="d-flex">
                                    <Button variant="btn btn-outline-secondary btn-block rounded-0" type="submit" disabled={isLoading}>
                                        Register
                                    </Button>
                                </Col>
                            </Form.Group>

                            {error !== "" && <Error message={error} />}
                        </Row>

                    </form>
                </div>
            </div>
        </div>
    );
}
