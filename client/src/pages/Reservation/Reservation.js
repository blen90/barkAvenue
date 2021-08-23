import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Services from '../Services/Services';
import {ADD_TO_CART}  from '../../actions/cart'
import {connect} from "react-redux";
import { loginUser } from '../../utils/API';
import moment from 'moment';

class Reservation extends React.Component {

  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    console.log('reservation checking for user',props)
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      serviceName: '',
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  handleSaveClick(from, to) {
    let userId = this.props.user.userId || 1;
    let id = Math.floor(Math.random() * Date.now());

    let dateFrom = moment(from).format('MM/DD/YY');

    let dateTo = moment(to).format('MM/DD/YY');
    
    this.props.dispatch({type:ADD_TO_CART,data:{...this.state,userId,id,dateFrom,dateTo}})
  }

  onChangeServiceName = (serviceName) => {
    this.setState({serviceName})
  };

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
export default connect(mapStateToProps)(Reservation);