import React from 'react'; 
import './UserDetails.css';

const UserDetails = ({userData}) => {
    return (
        <div className="user">
            <div className="user__title">{userData.name.first} {userData.name.last}</div>
            <div className="user__body">
                <div>{userData.login.username}</div>
                <div className="user__image"><img src={userData.picture.medium}/></div>
            </div>

        </div>
    )
}

export default UserDetails;