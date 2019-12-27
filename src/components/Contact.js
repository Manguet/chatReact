import React from "react";
import "./Contact.css";

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.image} alt={props.name} className="avatar"/>
            <div>
                <p className="name">{props.name}</p>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}/>
                    {props.online ? "Online" : 'Offline'}
                </div>
            </div>
        </div>
    );
}

export default Contact;