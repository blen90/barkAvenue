import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button,
    Input,
    Label,
    Row,
    Col
} from "reactstrap";

export default function Props(props) {
    // const [serviceUpdate, setServiceUpdate] = useState();
    // const serviceUpdateUpdate = (event) => {
    //     setServiceUpdate(event.target.value)
    // }
    // console.log('choice changed to', serviceUpdate);

    // useEffect(() => {
    //     console.log(serviceUpdate)
    // }, [])


    return (

        <Row>
            <Col sm="12" md="12">
                <Card key={props.id}>
                    <CardTitle><h2>{props.name}</h2></CardTitle>
                    <CardImg src={props.image} alt="furry" className="furry" />
                    <CardBody>{props.description}</CardBody>
                    <CardBody>Price per night: {props.price} $</CardBody>
                    {/* <Link underline="none" to={"/reservation"}> */}
                        
                        
                        {/* <Label className="form-check-label">
                            {props.name}
                        </Label> */}
                        {/* <Button className="reservation"> Click me to make a reservation</Button>
                    </Link> */}
                </Card>
            </Col>
        </Row>
    );
}