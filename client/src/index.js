import React from 'react';
import ReactDOM from'react-dom';
// import Calendar from 'react-calendar';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'react-calendar/dist/Calendar.css'; 

// const ReactCalendar = () => {
//   const [date, setDate] = useState(new Date())

//   const onChange = date => {
//       setDate(date)
//   }
//   return (
//       <div>
//       <Calendar onChange={onChange} value={date} />
//       {console.log(date)}
//       {date.toString()}
//   </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//vital information