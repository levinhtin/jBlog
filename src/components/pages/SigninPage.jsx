import React from 'react';

import SigninForm from 'components/forms/signin';


class SigninPage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="">
          <SigninForm />
        </div>
      </div>
    );
  }
}

export default SigninPage;