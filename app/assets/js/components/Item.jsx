import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Item = (activity) => {
    console.log(activity.activity)
    
    const removeActivity = (id) => {
        axios.delete(`http://localhost:8080/delete/${id}`)
            .then(res => {
                console.log("deletion succesfull")
                
            })  
            .cathc(error => console.log(error));
    }   

    return (<>
        {/* {!allActivities[0] && <p>Loading Activities</p>} */}
        <ul className="collection">
            <li key={activity.activity[1]} className="collection-item">{activity.activity[1]}, {activity.activity[2]}  
                <button key={activity.activity[0]} id={activity.activity[0]} className='waves-effect waves-light btn' onClick={(e) => removeActivity(e.target.id)}>
                    Remove Id: {activity.activity[0]}
                </button>
            </li>
        </ul>
    </>);
};

export default Item;
