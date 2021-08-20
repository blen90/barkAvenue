import React, {useState} from "react";
import {CART_ITEM_UPDATE}  from '../../actions/cart'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Row, Form, FormGroup, Button , Label, Input  } from "reactstrap";
import {connect} from "react-redux";

const Cart = (props) => {
    const [updateCart,setUpdateCart] = useState({});

    const onChangeDate = (userId,date,type) => {
        if(!updateCart[userId]) {
            updateCart[userId] = {}
        }
        updateCart[userId] = {...updateCart[userId],[type]:date,userId}
        setUpdateCart(updateCart);
    }

    const onChangePackage = (userId,e) => {
        let valuePack = e.target.value;
        console.log('package type *** ', valuePack);

        if(!updateCart[userId]) {
            updateCart[userId] = {}
        }

        updateCart[userId] = {...updateCart[userId],valuePack,userId}
        setUpdateCart(updateCart);
    }

    const onSubmitEdit = (userId) => {
        let updateItem = updateCart[userId]
        console.log('SUBMIT!!!', updateItem)
        // dispatch updateItem
        props.dispatch({type:'CART_ITEM_UPDATE',data:updateItem});
    }

    const FORMAT = 'MM/dd/yyyy';
    const items = props.items.map( (
        {valuePack,dateFrom,dateTo,userId}
        ,index) => {
        return (
            <FormGroup key={index} inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="cart-package" className="mr-sm-2">Package</Label>
                    <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    onChange={ e =>onChangePackage(userId,e)}
                    value={valuePack}>
                        <option>Basic</option>
                        <option>Premium</option>
                        <option>Deluxe</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">From</Label>
                    <DayPickerInput
                        format={FORMAT}
                        value={dateFrom}
                        onDayChange={(e)=>onChangeDate(userId,e,'dateFrom')}
                    />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label className="mr-sm-2">To</Label>
                    <DayPickerInput
                        format={FORMAT}
                        value={dateTo}
                        onDayChange={(e)=>onChangeDate(userId,e,'dateTo')}
                    />
                </FormGroup>
                <Button
                onClick={()=>onSubmitEdit(userId)}
                >Edit</Button>
            </FormGroup>
        )
    })

    return (
        <Row>
            <Form>
                {items}
            </Form>
        </Row>
    )
}

const mapStateToProps =(state) => {
    return {...state.cart};
};
  
export default connect( mapStateToProps )(Cart);