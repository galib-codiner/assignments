import React, {useState, useEffect} from 'react'; 
import Address from './Address';
import Modal from 'react-modal'
import './User.css';
// const moment = require("moment");

// 24 Hour format
// console.log(moment().format("MM/DD/YYYY"));

import * as moment from 'moment'

const yourDate = new Date()
const NewDate = moment(yourDate, 'DD-MM-YYYY')

// const now = new Date();
// const dateString = now.toLocaleDateString({
//   weekday: "short",
//   year: "numeric",
//   month: "2-digit",
//   day: "numeric"
// })

const Users = ({userData}) => {
    const [modalOpen, setMOdalOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);


    return (
        <div className="user">
            <div className="user__body">
                <div>
                    <a className="user__title" onClick={() => setMOdalOpen(true)}>{userData.name.first} {userData.name.last}</a>
                    <Modal isOpen={modalOpen}>
                    <div>
                        <h3>Other Details</h3>
                        <h4>Full Name : {userData.name.first} {userData.name.last}</h4>
                        <p>Gender : {userData.gender}</p>
                        <p>Email : {userData.email}</p>
                        <p>Phone : {userData.phone}</p>
                    </div>
                    <div>
                        <button onClick={() => setMOdalOpen(false)} >Close</button>
                    </div>
                    </Modal>
                </div>
                
                <div className='other-details'>
                    <p><span>Username : </span> {userData.login.username}</p>
                    <p><span>Email : </span> {userData.email}  </p>
                    <p><span>DOB : </span> { (new Date(userData.dob.date)).toLocaleDateString() } </p>
                </div>
                
                <Address location={userData.location} />
                <div className='phone'> <span>Phone : </span> {userData.phone}</div>
                <a className="user__image" onClick={() => setImageOpen(true)}><img src={userData.picture.thumbnail}/></a>
                <Modal isOpen={imageOpen}>
                    <div>
                    <img className='zoomImage' src={userData.picture.thumbnail} />
                    </div>
                    <div>
                        <button onClick={() => setImageOpen(false)} >Close</button>
                    </div>
                </Modal>
            </div>

        </div>
    )
}

export default Users;