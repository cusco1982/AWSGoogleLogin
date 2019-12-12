import React, { Component } from "react";
import { Link } from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <div className='main-container'>

                <h1>main page</h1>



                <Link className="profile-link" to="/profile">Profile</Link>


            </div>

        );
    }
}

export default Main;