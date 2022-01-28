import React from 'react';
import MainContant from '../component/MainContant';
// import './Chairman.css';

const Chairman = () => {
    return (

        <div>
            <MainContant />
            <div className="container">
  <h1>FormSubmit Demo</h1>
  <form target="_blank"  action="https://formsubmit.co/el/muvoma" method="POST">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control" placeholder="Full Name" required></input>
        </div>
        <div className="col">
          <input type="email" name="email" className="form-control" placeholder="Email Address" required></input>
        </div>
        <div className="col">
        <input type="hidden" name="_subject" value="New submission!"></input>
        </div>
        <div className="col">
        <input type="hidden" name="_captcha" value="false"></input>
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>            
        </div>
)
}
export default Chairman;