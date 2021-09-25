import React from 'react';
import "./Team.css"

const Team = (props) => {
    const { name, img, age, country, role } = props.person;
    return (
        <div className="team-details">
            <img height="150" className="rounded-circle" src={img} alt="" />
            <h3> Name : {name}</h3>
            <h4> Role : {role}</h4>
            <h4> Age : {age}</h4>
            <h4> Country : {country}</h4>


        </div>
    );
};

export default Team;