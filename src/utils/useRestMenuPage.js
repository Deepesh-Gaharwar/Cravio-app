import  { useState } from 'react'
import { useEffect } from 'react';
import { MENU_API_URL } from './constant';


const useRestMenuPage = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    // fetchData

    useEffect(() => {
        fetchData();

    },[resId]);

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API_URL(resId));
            const json = await data.json();
            setResInfo(json.data);
            
        } catch (err) {
            console.error("Failed to fetch menu:", err);
            setResInfo(null);
        }
    };
    
  

    return resInfo;
}

export default useRestMenuPage
