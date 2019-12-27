import React from "react";
import Contact from "./Contact";

const users = [
    {
        name:"Jackson Evans",
        image:"https://randomuser.me/api/portraits/men/36.jpg",
        online:true,
    },
    {
        name:"Hugh Austin",
        image:"https://randomuser.me/api/portraits/men/32.jpg",
        online:false,
    },
    {
        name:"Ted Montgomery",
        image:"https://randomuser.me/api/portraits/men/62.jpg",
        online:true,
    },
    {
        name:"Corey James",
        image:"https://randomuser.me/api/portraits/men/7.jpg",
        online:false,
    },
    {
        name:"Holly Brown",
        image:"https://randomuser.me/api/portraits/women/24.jpg",
        online:false,
    }
];

const ContactList = () => (
    <div>
        {users.map((item,index) => (
                <Contact
                    key={index}
                    name={item.name}
                    image={item.image}
                    online={item.online}
                />
            )
        )}
    </div>
);

export default ContactList;