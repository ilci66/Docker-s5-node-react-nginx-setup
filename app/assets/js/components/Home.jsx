import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';

function Home() {

    const [name, setName] = useState("");
    const [duration, setDuration] = useState(0);

    const [allActivities, setAllActivities] = useState(undefined);

    const getAllActivities = () => {
        console.log("get all the activities")
        axios.get('http://localhost:8080/get-all')
            .then(res => {
                console.log(res.data)
                setAllActivities(res.data)
            })
            .catch(e => console.log("error in get all ==>", e))
    };
    useEffect(() =>{ 
        getAllActivities() 
    },[]);

    const submitActivity = (e) => {
        e.preventDefault();

        console.log(name, duration)
        const data = { name: name, duration: duration }
        console.log("data ==>  ",data)
        
        axios.post('http://localhost:8080/add', data)
            .then(res => {
                getAllActivities();
                console.log(res)
                alert("succesfully added")
            })
            .catch(error => console.log("error ==>", error))
    }   

    return (<div className='center-align homepage-container'>
        <h1>To Do List</h1>
        <div className='center-align'>
            <form className='form' onSubmit={(e) => submitActivity(e)}>
                <label htmlFor="activity-name">Add an activiy</label>
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Jogging'
                    name='activity-name'
                    id="a-name"
                />
                <label htmlFor="duration">Duration in minutes</label>
                <input 
                    type="number" 
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder='30'
                    name='duration'
                    id="a-duration"
                />
                <input className='waves-effect waves-light btn' type="submit" value="ADD" />
            </form>
        </div>
        {allActivities && allActivities.map((activity) => <Item getAllActivities={getAllActivities} activity={activity}/>)}
    </div>);
}


export default Home;