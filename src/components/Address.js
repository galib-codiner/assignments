import React from 'react'; 

const Address = ({location}) => {
    return (
        <div className="address">
            <h4>Address</h4>
                <p> <span> Street: </span>{location.street.number} {location.street.name} </p>
                <p> <span> City: </span>{location.city}  </p>
                <p> <span> Country: </span>{location.country}  </p>
                <p> <span> Postcode: </span>{location.postcode}  </p>
        </div>
    )
}

export default Address;