import React from 'react'; 
import './Address.css';

const Address = ({location}) => {
    return (
        <div className="address">
            <h4>Address :- </h4>
                <pre>
                <p> <span className='spanone'> Street  </span> : <span className='spantwo'>{location.street.number} {location.street.name}</span> </p>
                <p> <span className='spanone'> City  </span> : <span className='spantwo'>{location.city}</span>   </p>
                <p> <span className='spanone'> Country  </span> : <span className='spantwo'>{location.country}</span>   </p>
                <p> <span className='spanone'> Postcode  </span> : <span className='spantwo'>{location.postcode}</span>   </p>
            </pre>
        </div>
    )
}

export default Address;