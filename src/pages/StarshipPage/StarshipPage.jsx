import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { getDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom'

const StarshipPage = (props) => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()
  console.log(location)

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(shipData => setShipDetails(shipData))
  }, [])

  return (
    <>
    {shipDetails.length ?
      <div className='icon-container'>
        <div id='details'>
          <h2>{shipDetails.name}</h2>
          <h3>{shipDetails.model}</h3>
          <Link to='/'>
            <p>RETURN</p>
          </Link>
        </div>
      </div>
      :
      <p>Loading Details...</p>
    }
    </>
  );
}

export default StarshipPage;