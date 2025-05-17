import { useState,useEffect } from "react"; 

const useOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true); // internet is working fine 

    // check if the user is online
    useEffect( () => {
         
        window.addEventListener("offline" , () => {
             setOnlineStatus(false);
        });

        window.addEventListener("online" , () => {
            setOnlineStatus(true);
       });


    },[]);


    return onlineStatus; 

}

export default useOnlineStatus; 