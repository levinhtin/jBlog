import React from 'react';
import SignupForm from '../components/signup';


class SignupPage extends React.Component {
  render() {
    const {userSignupRequest} = this.props;
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm />
        </div>
      </div>
    )
  }
}

export default SignupPage;