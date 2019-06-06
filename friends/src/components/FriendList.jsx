import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acquiringFriends } from '../actions';

class FriendList extends Component {
  componentDidMount() {
    this.props.acquiringFriends();
  }

  handleLogOut = () => {
    localStorage.removeItem('authToken');
    this.props.history.push('/login');
  }

  render() { 
    return (
      <div className="FriendList">
        <input className="logout" type="button" value="Logout" onClick={this.handleLogOut}/>
        {
          this.props.asyncRequest
            ? <div>...LOADING FRIENDS</div>
            : (
              <div className="friends">
                {this.props.friends.map(friend => <div className="friend">{friend.name}</div>)}
              </div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  asyncRequest: state.asyncRequest,
});
 
export default connect(mapStateToProps, { acquiringFriends })(FriendList);