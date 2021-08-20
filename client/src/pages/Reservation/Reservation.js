import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Reservation extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    console.log(props)
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

    console.log(from.toLocaleDateString())
    console.log(to.toLocaleDateString())
    this.props.reservationInput(from.toLocaleDateString(), to.toLocaleDateString();
    // this.setState(this.state);
  }

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
            <button className="resetlink" onClick={this.handleResetClick}>
              Reset
            </button>
            <button className="savelink" onClick={()=>this.handleSaveClick(from, to)}>
                Save
            </button>
            </>
          )}
        </p>
        <form>
      </form>
        </div>
        </>
    )
}}