import React, {useState, useEffect} from 'react'; 
import Address from './Address';
import Modal from 'react-modal'
import './User.css';


const Users = ({userData}) => {
    const [modalOpen, setMOdalOpen] = useState(false)
    const [imageOpen, setImageOpen] = useState(false)

    return (
        <div className="user">
            <div className="user__body">
                {/* <div className="user__title">{userData.name.first} {userData.name.last}</div> */}
                <div>
                    <a className="user__title" onClick={() => setMOdalOpen(true)}>{userData.name.first} {userData.name.last}</a>
                    <Modal isOpen={modalOpen}>
                    <div>
                        <h3>Other Details</h3>
                        <h4>Full Name: {userData.name.first} {userData.name.last}</h4>
                        <p>Gender: {userData.gender}</p>
                        <p>Email: {userData.email}</p>
                        <p>Phone: {userData.phone}</p>
                    </div>
                    <div>
                        <button onClick={() => setMOdalOpen(false)} >Close</button>
                    </div>
                    </Modal>
                </div>
                <div> <span>Username</span> {userData.login.username}</div>
                <div> <span>Email</span> {userData.email}</div>
                <div> <span>DOB</span> {userData.dob.date}</div>
                
                <Address location={userData.location} />
                <div> <span>Phone</span> {userData.phone}</div>
                {/* <div className="user__image"><img src={userData.picture.medium}/></div> */}
                <a className="user__title" onClick={() => setImageOpen(true)}><img src={userData.picture.thumbnail}/></a>
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