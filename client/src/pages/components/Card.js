import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Row,
    Col
} from "reactstrap";

export default function Props(props) {
    return (         
        <Row>
            <Col sm="12" md="12">
                <Card key={props.id}>
                    <CardTitle><h2>{props.name}</h2></CardTitle>
                    <CardImg src={props.image} alt="furry" className="furry" />
                    <CardBody>{props.description}</CardBody>
                    <CardBody>Price per night: {props.price} $</CardBody>
                </Card>
            </Col>
        </Row>
       
    )
}
                