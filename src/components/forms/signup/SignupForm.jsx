import React from 'react';
import timezones from 'data/timezones';
import map from 'lodash/map';
import * as userActions from 'actions/userActions';
import {connect} from 'react-redux';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(userActions.signup(this.state));
  }

  render() {
    const options = map(timezones, (val, key) =>
      <option value={val} key={val}>{key}</option>
    )
    // console.log(options);
    return(
      <form role="form" onSubmit={this.onSubmit}>
        <h1>Join with me</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange} className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
        </div>
        
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input type="passwordh" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange} className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">TimeZone</label>
          <select name="timezone" value={this.state.timezone} onChange={this.onChange} className="form-control">
            <option disabled value="">Choose your timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    )
  }
}

// SignupPage.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired
// }

export default connect()(SignupForm);