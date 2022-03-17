import { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom'

const Starships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipName => setStarships(starshipName.results))
  }, [])
  console.log(starships)

  return (
    <>
      <h2>All Starships</h2>
      <div>
        {starships.map(starship =>
          <div>
            {starship.name}
          </div>
        )}
      </div>
    </>
  );
}

export default Starships;
