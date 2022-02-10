import React, { useEffect, useState } from 'react';
import axios from 'axios'

const AllItems = () => {
    const [allActivities, setAllActivities] = useState(undefined);
    useEffect(() =>{
        axios.get('http://localhost:8080/get-all')
            .then(res => {
                console.log(res.data)
                setAllActivities(res.data)
            })
            .catch(e => console.log("error in get all ==>", e))
    },[])
    return (<>
        {!allActivities && <p>Loading Activities</p>}
        <ul className="collection">
            {allActivities !== undefined && allActivities.map(activity => {
                return <li key={activity[0]} className="collection-item">{activity[0]}, {activity[1]}</li>
            })}
        </ul>
    </>);
};

export default AllItems;
