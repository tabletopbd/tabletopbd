import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';

export default function AddRestaurant() {
    const navigate = useNavigate();
    const routeChange = () =>{ 
        navigate("/add-restaurant");
    }
  
  return (
     <div className="mx-auto">
      <Container>
          <button onClick={routeChange} className="mx-auto btn btn-block btn-outline-secondary rounded-0">
              Add Restaurant
          </button>
       </Container>
    </div>
  );
}