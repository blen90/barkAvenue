import React, { useState }from 'react';



export default function Card(props) {
    const [serviceUpdate, setServiceUpdate] = useState(null);
    const serviceUpdateUpdate = (event) => {
        setServiceUpdate(event.target.value)
    }
    console.log(serviceUpdate);
    
    return (
        <div className="container text-center">
            <div className="card-body">
                <div className="row"> 
                <h2 className="card-title col-md-3">{props.name}</h2>
                <div className="card-image">{props.image}</div>
                <div className="card-text">{props.description}</div>
                <input onChange={serviceUpdateUpdate} checked={serviceUpdate === (props.name)} className="form-check-input" type="checkbox" value={props.name} id="checkBox"></input>
                <label className="form-check-label">
                            {props.name}{props.price}</label>
            </div>
        </div>
        </div>
    );
}