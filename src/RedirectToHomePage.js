import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectToHomePage() {

    const navigate = useNavigate();

   useEffect(()=>{
    navigate('/home');
   }, [])

  return (
    <div> redirect</div>
  )
}

export default RedirectToHomePage