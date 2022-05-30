import React from 'react'
import { useParams } from 'react-router-dom';
const Sliderdata = () => {
    const { sessionid,vehicleid } = useParams();
    const closewebview = ()=>{
        console.log('close');

        localStorage.setItem('sessionid', sessionid);
        if (typeof window.postMessage !== 'undefined') {
            console.log('close');
            const responseObj = {
              eventData: {
                // userId,
                // placeId,
                // hostname: source,
                // message: responseBody.message,
                // reservationId: responseBody.reservationId,
                // confirmationMessage: responseBody.confirmationMessage
              },
              eventName: 'confirmation'
            }
            window.parent.postMessage(responseObj, '*')
          }

          console.log('getse',localStorage.getItem('sessionid'));
    }
        const intervalchoose = (e)=>{
        console.log('enter');
         console.log(e.target.value);
    }
  return (
      <>
       <div>Sliderdata {sessionid} vehicleid: {vehicleid}</div>
       <input
          id="windows"
          value="Hourly"
          name="platform"
          type="radio"
          onChange={intervalchoose}
        />
        Hourly      
        <input
          id="mac"
          value="Daily"
          name="platform"
          type="radio"
          onChange={intervalchoose}
        />Daily
             
         <input
          id="linux"
          value="Weekly"
          name="platform"
          type="radio"
          onChange={intervalchoose}
        />Weekly
        
        <input
          id="linux"
          value="Monthly"
          name="platform"
          type="radio"
          onChange={intervalchoose}
        />Monthly
        

       <button onClick={closewebview}>closewebview</button>
      </>
   

  )
}

export default Sliderdata