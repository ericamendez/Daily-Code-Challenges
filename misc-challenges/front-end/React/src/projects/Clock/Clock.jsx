import { useState, useEffect } from 'react';
import './style.css'

export default function Clock() {

  const [time, setTime] = useState(new Date())

  useEffect(()=> {
    const tick = () => {
      setTime(new Date)
      setTimeout(tick, 1000)
    }

    const timeoutID = setTimeout(tick, 1000)

    return () => clearTimeout(timeoutID)
  },[])

  return (
      <div className='outer'>
        <div className='inner'>
          {time.toLocaleTimeString()}
        </div>
      </div>
    )
}
