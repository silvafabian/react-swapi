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
      <div className='icon-conatiner'>
        {starships.map(starship =>
        <Link
          to='/starship'
          state={{starship}}
          key={starship.name}
        >
        <div id='classDiv'>
          {starship.name}
        </div>
      </Link>
        )}
      </div>
    </>
  );
}

export default Starships;
