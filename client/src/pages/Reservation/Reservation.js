import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Services from '../Services/Services';
import {ADD_TO_CART}  from '../../actions/cart'
import {connect} from "react-redux";
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class Reservation extends React.Component {

  //Showing 2 months
  static defaultProps = {
    numberOfMonths: 2,
  };

  //Setting up props to handle user clicks
  constructor(props) {
    console.log('reservation checking for user',props)
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  //Initial state of date set to undefined
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      serviceName: '',
    };
  }

  //Handle user clicking on specific day 
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  //Reset function in case user doesn't want the dates they chose first
  handleResetClick() {
    this.setState(this.getInitialState());
  }

  //Saving the user's choice for dates
  handleSaveClick(from, to) {
    let userId = this.props.user.userId || 1;
    let id = Math.floor(Math.random() * Date.now());

    let dateFrom = moment(from).format('MM/DD/YY');
    let dateTo = moment(to).format('MM/DD/YY');
    // Math days to get Total price
    let duration = moment.duration(moment(dateTo).diff(dateFrom));
    let days = duration.asDays() + 1;
    let {price} = this.state;
    let totalPrice = days * price
    // Math End
    this.props.dispatch({type:ADD_TO_CART,data:{...this.state,userId,id,dateFrom,dateTo,price,totalPrice}})
    this.props.history.push( `${process.env.PUBLIC_URL}/cart` );
  }

  //Changing the price for the service the user picked
  onChangeServiceName = ({name:serviceName,price}) => {
    this.setState({serviceName,price})
  };

  //Rendering the user choices for dates
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <>
      <div className="RangeExample">
          <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <Helmet/>
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <>
             <div>
               <Services
                onChangeService={this.onChangeServiceName}
               />
               </div>     
            <button className="resetlink" onClick={this.handleResetClick}>
              Reset
            </button>
            <button
            disabled={this.state.serviceName === ''}
            className="savelink"
            onClick={()=>this.handleSaveClick(from, to)}>
                Add to Cart
            </button>
            </>
          )}
        </p>
        <form>
          <div>
            <reservationInput/>
          </div>
      </form>
        </div>
        </>
    )
}}
const mapStateToProps = (state) => {
  console.log('map to state',state)
  // get userId in the state
  return {...state}
}
export default withRouter(connect(mapStateToProps)(Reservation));