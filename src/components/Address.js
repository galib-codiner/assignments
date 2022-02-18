import React from 'react'; 
import './Address.css';

const Address = ({location}) => {
    return (
        <div className="address">
            <h4>Address :- </h4>
                <pre>
                <p> <span> Street  </span>{location.street.number} {location.street.name} </p>
                <p> <span> City  </span>{location.city}  </p>
                <p> <span> Country  </span>{location.country}  </p>
                <p> <span> Postcode  </span>{location.postcode}  </p>
            </pre>
        </div>
    )
}

export default Address;