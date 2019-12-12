import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";


class Main extends Component {
    render() {
        return (
            <div className='main-container'>

                <div className="profile-link">
                    <Link className="profile-link" to="/profile">Profile</Link>
                </div>

                <div className="login-container">
                    <h1>Login Here</h1>
                    <Formik>
                        
                        <form>
                            <input type='text' name='fullname' placeholder='Full name' />
                            <br />
                            <input type='email' name='email' placeholder='Enter email' />
                            <br />
                            <input type='password' name='password' placeholder='Enter password' />
                            <br />
                            <input type='radio' name='gender' /> <label>Male</label>
                            <input type='radio' name='gender' /> <label>Female</label>
                            <br />
                            <input type='checkbox' name='terms' /> <label>Terms&Conditions</label>
                            <br />
                            <button type='submit'>Submit</button>
                        </form>
                    </Formik>
                </div>


            </div>

        );
    }
}

export default Main;