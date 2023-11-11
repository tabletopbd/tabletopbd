import { useAddRestaurantMutation } from "../../../features/auth/authApi";
import { useEffect, useState, ChangeEvent } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Sidebar from "../components/Sidebar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Error from "./Error";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: 'Everyday', label: 'Everyday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
];

// const lists = items.map(item => item.id);
export default function AddRestaurantForm() {
    const [resName, setResName] = useState("");
    const [resCategories, setResCategories] = useState("");
    const [resLocations, setResLocations] = useState("");
    const [resAddress, setResAddress] = useState("");
    // const [resItem, setResItem] = useState("");
    const [resAbout, setResAbout] = useState("");
    const [resNumber, setResNumber] = useState("");
    const [resEmail, setResEmail] = useState("");
    const [resOfferDays, setResOfferDays] = useState([]);
    const [resOfferAmount, setResOfferAmount] = useState("");
    const [resOfferProduct, setResOfferProduct] = useState("");
    const [resOpenTime, setResOpenTime] = useState("");
    const [resCloseTime, setResCloseTime] = useState("");
    const [resImage, setResImage] = useState();
    const [resImageName, setResImageName] = useState("");
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const [Restaurant, { data, isLoading, error: responseError }] =
        useAddRestaurantMutation();
        
    const navigate = useNavigate();
    
    useEffect(() => {
        if (responseError?.data) {
            setError(responseError.data);
        }

       if (data?.accessToken && data.restaurant.id) {
            // console.log(data.restaurant.id);
            handleImageSubmit(data.restaurant.id, data.accessToken);
        }

    }, [data, responseError, navigate]);

	const imageHandler = (event) => {
		setResImageName(event.target.files[0].name);
		setResImage(event.target.files[0]);
		setIsFilePicked(true);
	};

     const handleImageSubmit = (restaurantId, accessToken) => {
        const formData = new FormData();
        const baseUrl = process.env.REACT_APP_API_URL;
        const url = `${baseUrl}/add-image/${restaurantId}`;
        formData.append('_method', 'POST');
        if(resImage !== null){
            formData.append('resImage', resImage)
        };

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${accessToken}`,
            },
        };
     
        axios.post(url, formData, config)
        .then((response) => {
            // console.log(response.data);
            navigate("/restaurant");
        })
        .catch(err => {
            let message = err.response.data.error;
            console.log(message);
        });
    };

    const handleMultiSelect = (e) => {
        setResOfferDays(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        
        Restaurant({
                resName,
                resCategories,
                resLocations,
                resAddress,
                // resItem,
                resAbout,
                resNumber,
                resEmail,
                resOfferDays: resOfferDays.join(','),
                resOfferAmount,
                resOfferProduct,
                resOpenTime, 
                resCloseTime,
            });

    };

  
  return (
     <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <Sidebar />      
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <Container>
                <div className="col-10 offset-1">
                    <h1 className='p-3'>Restaurant Information</h1>
                    <h6 className="text-success">{success}</h6>
                    <h6 className="text-success">{error}</h6>
                    <div className="p-3">
                        <p className='mt-1 mb-3 h6'>Please fill out restaurant information form below.</p>
                         <form className="form-horizontal" onSubmit={handleSubmit}>
                            <Row sm={12}>
                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control type="text" controlid="resName" name="resName" placeholder="Restaurant name" autoComplete="resName" required value={resName} onChange={(e) => setResName(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control type="text" controlid="resCategories" name="resCategories" placeholder="Category" autoComplete="resCategories" required value={resCategories} onChange={(e) => setResCategories(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control type="text" controlid="resLocations" name="resLocations" placeholder="Location" autoComplete="resLocations" required value={resLocations} onChange={(e) => setResLocations(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control type="text" controlid="resAddress" name="resAddress" placeholder="Address" autoComplete="resAddress" required value={resAddress} onChange={(e) => setResAddress(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                {/* <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control type="text" controlid="resItem" name="resItem" placeholder="Restaurant Items" autoComplete="resItem" required value={resItem} onChange={(e) => setResItem(e.target.value)} />
                                    </Col>
                                </Form.Group> */}

                                <Form.Group className="mb-3">
                                    <Col>
                                        {/* <Form.Control type="number" controlid="resNumber" name="resNumber" placeholder="Restaurant Contact" autoComplete="resNumber" required value={resNumber} onChange={(e) => setResNumber(e.target.value)} /> */}

                                        <InputGroup>
                                            <InputGroup.Text id="resNumber">+88</InputGroup.Text>
                                            <Form.Control type="number"
                                            placeholder="01710-000000"
                                            name="resNumber"
                                            aria-describedby="resNumber"
                                            value={resNumber} onChange={(e) => setResNumber(e.target.value)} />
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control type="email" controlid="resEmail" name="resEmail" placeholder="Restaurant Email" autoComplete="resEmail" required value={resEmail} onChange={(e) => setResEmail(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                {/* <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Select aria-label="resOfferDays" name="resOfferDays" value={resOfferDays} onChange={(e) => setResOfferDays(e.target.value)}>
                                            <option>Offer Days</option>
                                            <option value="Everyday">Everyday</option>
                                            <option value="Saturday Only">Saturday Only</option>
                                            <option value="Friday, Saturday Only">Friday, Saturday Only</option>
                                            <option value="Saturday, Sunday Only">Saturday, Sunday Only</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group> */}

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Select
                                            // defaultValue={resOfferDays}
                                            // onChange={setResOfferDays}
                                            // options={options}
                                            // closeMenuOnSelect={false}
                                            // components={animatedComponents}
                                            // isMulti
                                            // className="basic-multi-select"
                                            // classNamePrefix="select"

                                            className="dropdown"
                                            placeholder="Select Option"
                                            value={options.filter(obj => resOfferDays.includes(obj.value))} // set selected values
                                            options={options} // set list of the data
                                            onChange={handleMultiSelect} // assign onChange function
                                            isMulti
                                            isClearable
                                            components={animatedComponents}
                                        />
                                    </Col>

                                        {/* {resOfferDays && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                                            <div><b>Selected Days: </b> {JSON.stringify(resOfferDays, null, 2)}</div>
                                        </div>} */}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Select aria-label="resOfferAmount" name="resOfferAmount" value={resOfferAmount} onChange={(e) => setResOfferAmount(e.target.value)}>
                                            <option>Offer Amount</option>
                                            <option value="10">10%</option>
                                            <option value="15">15%</option>
                                            <option value="20">20%</option>
                                            <option value="25">25%</option>
                                            <option value="30">30%</option>
                                            <option value="40">40%</option>
                                            <option value="50">50%</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control type="text" controlid="resOfferProduct" name="resOfferProduct" placeholder="Offer Product" autoComplete="resOfferProduct" required value={resOfferProduct} onChange={(e) => setResOfferProduct(e.target.value)} />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Select aria-label="resOpenTime" name="resOpenTime" placeholderText="Close Time" value={resOpenTime} onChange={(e) => setResOpenTime(e.target.value)}>
                                            <option>Select</option>
                                            <option value="8:00 PM">8:00 AM</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                        </Form.Select>

                                        {/* <DatePicker className="form-control"
                                            selected={resOpenTime}
                                            name="resOpenTime"
                                            placeholderText="Open Time"
                                            required value={resOpenTime}
                                            onChange={(date) => setResOpenTime(date)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        /> */}
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Select aria-label="resCloseTime" name="resCloseTime" placeholderText="Close Time" value={resCloseTime} onChange={(e) => setResCloseTime(e.target.value)}>
                                            <option>Select</option>
                                            <option value="8:00 PM">8:00 PM</option>
                                            <option value="9:00 PM">9:00 PM</option>
                                            <option value="10:00 PM">10:00 PM</option>
                                            <option value="11:00 PM">11:00 PM</option>
                                            <option value="12:00AM">12:00AM</option>
                                        </Form.Select>


                                         {/* <DatePicker className="form-control"
                                            selected={resCloseTime}
                                            name="resCloseTime"
                                            placeholderText="Close Time"
                                            required value={resCloseTime}
                                            onChange={(date) => setResCloseTime(date)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        /> */}
                                    </Col>
                                </Form.Group>

                                 <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control  controlId="resAbout"
                                            as="textarea" name="resAbout" required value={resAbout} onChange={(e) => setResAbout(e.target.value)}
                                            placeholder="About Restaurant"
                                            style={{ height: '100px' }}
                                            />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <input className="form-control" type="file" name="resImage" onChange={imageHandler} />

                                        {isFilePicked ? (
                                            <div className="d-flex">
                                                <p>
                                                    {resImage.name}, 
                                                    {resImage.type}, 
                                                    {resImage.size}, 
                                                    {resImage.lastModifiedDate.toLocaleDateString()}
                                                </p>
                                            </div>
                                        ) : (
                                            <span className="d-flex"></span>
                                        )}
                                    </Col>
                                </Form.Group>
                              
                                  <Form.Group className="mb-3">
                                    <Col className="d-flex">
                                        <Button variant="btn btn-outline-primary btn-block rounded-0" type="submit" disabled={isLoading}>
                                            Add Restaurant
                                        </Button>
                                    </Col>
                                </Form.Group>

                            </Row>
                        </form>
                        {/* <form className="form-horizontal" onSubmit={handleImageSubmit}>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Col>
                                       <ImageUpload
                                        onFileSelectSuccess={(file) => setResImage(file)}
                                        onFileSelectError={({ error }) => alert(error)}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Col>
                                         <button className="btn btn-primary" type="submit">Upload Image</button>
                                    </Col>
                                </Form.Group>
                            </Row>
                        </form> */}
                        {error !== "" && <Error message={error} />}
                    </div>
                </div>
            </Container>
        </div>
      
    </div>
  );
}