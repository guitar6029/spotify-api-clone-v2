import {useState, useEffect} from 'react';
import './Greeting.css';

function Greeting() {

    const [greetingMessage, setGreetingMessage] = useState('');
    
    useEffect(() => {
        //greets the user, depends on current time for correct greeting
    const greeting = () => {
        
        let message = '';
        const currentHour = new Date().getHours();
        //morning
        if (currentHour < 12){
            message = 'Good morning';
            setGreetingMessage(message);
        }
        //evening
        else if (currentHour < 18){
            message = 'Good afternoon';
            setGreetingMessage(message);
        }
        else {
            message = 'Good evening';
            setGreetingMessage(message);
        }

    }

    greeting()

    })

  return (
    <div className='greeting'>
        {greetingMessage}
        </div>
  )
}

export default Greeting