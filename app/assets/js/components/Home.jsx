import React, { useState } from 'react';
import AllItems from './AllItems';
import axios from 'axios';

function Home() {

    const [name, setName] = useState("");
    const [duration, setDuration] = useState(0)

    const submitActivity = (e) => {
        e.preventDefault();

        console.log(name, duration)
        data = { name, duration }
        axios.post('http://localhost:8080/add', data)
            .then(res => console.log(res.data))
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
    <AllItems />
    </div>);
}


export default Home;