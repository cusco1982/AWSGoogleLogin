import React from "react";
import "./imgstyle.css";



function ProjectCard(props) {
    return (
        <div className="col" style={{float: 'right'}}>
            <div className="animated fadeInUp delay-1s" style={{cursor:"pointer"}} onClick={() => props.open(props.id)}>
                <img style={{height:"500px", width:"400px", paddingBottom:"100px", paddingRight:"50px"}} src={props.image} className="card-img-top" alt="image" />

                {/* <div className="card-body">
                    <h3 className="tool-tip inner">{props.address}</h3>
                    <h3 className="card-text">{props.city}</h3><br />
                    <div className="d-flex justify-content-center">
                        <h4 className="card-text">{props.price} {props.other}</h4>
                    </div>
                </div> */}

                {/* <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => props.open(props.id)}>Request Info</button> */}
            </div>
        </div>
    );
}

export default ProjectCard;