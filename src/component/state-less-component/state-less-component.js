import React from "react";

const Users = props => (
    <div>
        <br/><br/><br/>
        <div className="row">
            <h5>StateLess / Presentational / Function</h5>
        </div>
        <div className="row">
            <ul>
            {props.users.map(user => (
                <li>{user}</li>
            ))}
            </ul>
        </div>
    </div>
);
export default Users;
