import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Item = ({activity,getAllActivities}) => {
    // console.log(activity.activity)
    
    const removeActivity = (id) => {
        axios.delete(`http://localhost:8080/delete/${id}`)
            .then(res => {
                console.log("deletion succesful")   
                console.log(getAllActivities());
            })  
            .catch(error => console.log(error));
    }   

    return (<>
        {/* {!allActivities[0] && <p>Loading Activities</p>} */}
        <ul className="collection">
            <li key={activity[1]} className="collection-item">{activity[1]}, for {activity[2]} minutes  
                <button key={activity[0]} id={activity[0]} className='waves-effect waves-light btn' onClick={(e) => removeActivity(e.target.id)}>
                    Remove
                </button>
            </li>
        </ul>
    </>);
};

export default Item;
