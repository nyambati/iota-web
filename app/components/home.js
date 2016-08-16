import React from 'react';

import './home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Home';
    this.state = {rooms: {}}
  }
  componentDidMount() {
    rooms: this.props.database.ref('rooms').on('value', (snapshot) => {
      this.setState({ rooms: snapshot.val() });
    });
  }
  render() {
    const data = Object.keys(this.state.rooms)
    console.log(this.state.rooms, "rooms")
    console.log(data)
    return (
      <div className='container rooms'>
        <table className='table table-bordered table-condensed'>
          <thead>
            <tr>
              <td>Room Id</td>
              <td>Room Name</td>
              <td>Room Status</td>
              <td>Book</td>
            </tr>
          </thead>
          <tbody>
          {data.map((room, index) => {
            const status = this.state.rooms[room].status
            return (
              <tr>
                <td>{this.state.rooms[room].id}</td>
                <td>{this.state.rooms[room].name}</td>
                <td><i className={`fa fa-circle ${status === 'occupied' ? 'green' : 'red'}`}></i>{status}</td>
                <td>
                {status === 'occupied' ? 
                  <button className={`btn btn-block btn-lg btn-${status === 'occupied' ? 'danger disabled' : 'success'}`}>{status === 'occupied' ? 'Disabled' : 'Book'}</button>
                :
                <a href="https://calendar.google.com/calendar/render?tab=wc&pli=1#main_7" target="blank">
                  <button className={`btn btn-block btn-lg btn-${status === 'occupied' ? 'danger disabled' : 'success'}`}>{status === 'occupied' ? 'Disabled' : 'Book'}</button>
                </a>
                } 
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
