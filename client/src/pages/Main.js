import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";


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
                        {(props) => (<Form>
                            <Field name="fullname"/>
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
                            name='gender' value='female' /> <label>Female</label>
                            <br />

                            <input type='checkbox'
                            value={props.values.terms} 
                            onChange={props.handleChange}
                            name='terms' /> <label>Terms&Conditions</label>
                            <br />
                            <button type='submit'>Submit</button>

                        </Form>)}
                    </Formik>
                </div>


            </div>

        );
    }
}

export default Main;