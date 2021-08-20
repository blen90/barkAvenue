
// import React, {Component} from 'react';
// import axios from 'axios';
// import ImageList from './DoggosImages'

// class Profile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {doggos: []}
//     }
//     async componentDidMount() {
//         const response =  await axios.get('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', {
//             headers: {
//                 ["x-api-key"]: 'b98d3829-cf07-4b25-b081-d35f42c5d1f9'
//             }
//         });
//         this.setState({doggos: response.data.results });
//         console.log(this.state.doggos)
//     }
//     render() {
//         return(
//             <div className="container mt-4">
//                 <ImageList images={ this.state.doggos }/>    
//             </div>
//         );
//     }
// }

// export default Profile;


