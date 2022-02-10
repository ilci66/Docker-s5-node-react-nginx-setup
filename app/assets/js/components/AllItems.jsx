import React, { useEffect, useState } from 'react';
import axios from 'axios'

const AllItems = () => {
    // const deleteItem = (id) => {
    //     axios.delete(`http://localhost:8080/delete/${id}`)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(e => console.log("error in get all ==>", e))
    // };

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
        {/* {!allActivities[0] && <p>Loading Activities</p>} */}
        <ul className="collection">
            {allActivities !== undefined && allActivities.map(activity => {
                return <li key={activity[0]} className="collection-item">{activity[1]}, {activity[2]}  <button className='waves-effect waves-light btn' >Remove{activity[0]}</button></li>
            })}
        </ul>
    </>);
};

export default AllItems;
