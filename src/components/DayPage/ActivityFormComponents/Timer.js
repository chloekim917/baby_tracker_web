// import React, {useState, useEffect} from 'react';

const Timer = () => {
    const timeNow = new Date().getMinutes()
    const currentTime = new Date().toLocaleTimeString([], {timeStyle: 'short'})
    // timeStyle: 'short >> drops the seconds 
    console.log(typeof(currentTime))
    return (
        <div>
            <p>{currentTime}</p>
            <p>{timeNow}</p>
        </div>
        
    );
}
export default Timer;

