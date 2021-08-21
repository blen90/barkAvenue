import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    Button,
    Input,
    Label
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";


export default function Props(props) {
    const [serviceUpdate, setServiceUpdate] = useState(null);
    const serviceUpdateUpdate = (event) => {
        setServiceUpdate(event.target.value)
    }
    console.log(serviceUpdate);

    return (

        <Row>
            <Col sm="12" md="12">
                <Card key={props.id}>
                    <CardTitle tag="h2" margin top="2%">{props.name}</CardTitle>
                    <CardImg src={props.image} alt="furry" className="furry" />
                    <CardText>{props.description}</CardText>
                    <CardText>Price per night: {props.price} $</CardText>
                    <Link underline="none" to={"/reservation"}>
                        <Input onChange={serviceUpdateUpdate} checked={serviceUpdate === (props.name)} className="form-check-input" type="checkbox" value={props.price} id="checkBox">
                            <Label className="form-check-label">
                                {props.name}{props.price}
                            </Label>
                        </Input>
                        <Button > Click me to make a reservation</Button>
                    </Link>
                </Card>
            </Col>
        </Row>
    );
}