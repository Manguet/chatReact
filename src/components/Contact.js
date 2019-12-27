import React from 'react';
import './Contact.css';

class Contact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online
        };
    }

    render(){
        return(
            <div className="Contact">
                <img src={this.props.image} alt="contact avatar" className="avatar"/>
                <div>
                    <p className="name">{this.props.name}</p>
                    <div className="status"
                         onClick={event => {
                             const newStatus = !this.state.online;
                             this.setState({
                                     online: newStatus
                                 }
                             );
                         }}>
                        <div
                            className={this.state.online ? 'status-online' : 'status-offline'}

                        ></div>
                        <p className="status-text">{this.state.online ? 'online' : 'offline'}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact;