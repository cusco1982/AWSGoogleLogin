import React, { Component } from "react";
import { Link } from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <div className='main-container'>
            
                <div>
                    <h1>Login Here</h1>
                </div>



                <div className="profile-link">
                    <Link className="profile-link" to="/profile">Profile</Link>
                </div>

            </div>

        );
    }
}

export default Main;