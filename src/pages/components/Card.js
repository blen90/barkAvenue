import React from 'react';

export default function Card(props) {

    return (
        <div className="container text-center">
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <div className="card-image">{props.image}</div>
                <div className="card-text">{props.description}</div>
                <button type="button" class="btn btn-primary">{props.price} $</button>
            </div>
        </div>
    );
}