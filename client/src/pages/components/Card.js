import React from 'react';

export default function Card(props) {

    return (
        <div className="container text-center">
            <div className="card-body">
                <div className="row"> 
                <h2 className="card-title col-md-3">{props.name}</h2>
                <div className="card-image">{props.image}</div>
                <div className="card-text">{props.description}</div>
                <button type="button" className="btn btn-primary">{props.price} $</button>
            </div>
        </div>
        </div>
    );
}