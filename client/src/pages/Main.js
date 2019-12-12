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
                    <Formik 
                    initialValues={{ fullname: "John Snow"}} 
                    onSubmit={(values) => console.log('submitted values= ',values)}>
                        {(props) => (<form onSubmit={props.handleSubmit}>
                            <input 
                            type='text' name='fullname' 
                            value={props.values.fullname} 
                            onChange={props.handleChange}
                            placeholder='Full name'/>
                            <br />
                            <input 
                            type='email' name='email' 
                            value={props.values.email} 
                            onChange={props.handleChange}
                            placeholder='Enter email' />
                            <br />
                            <input 
                            type='password' name='password' 
                            value={props.values.password} 
                            onChange={props.handleChange}
                            placeholder='Enter password' />
                            <br />

                            <input type='radio'
                            onChange={props.handleChange}
                            name='gender' value='male' /> <label>Male</label>

                            <input type='radio' 
                            onChange={props.handleChange}
                            name='gender' value='femail' /> <label>Female</label>
                            <br />

                            <input type='checkbox' name='terms' /> <label>Terms&Conditions</label>
                            <br />
                            <button type='submit'>Submit</button>
                        </form>)}
                    </Formik>
                </div>


            </div>

        );
    }
}

export default Main;