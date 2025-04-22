import React from "react"; 
import { GIT_HUB_API_URL } from "../../utils/constant";

// Class Based Components

class UserClass extends React.Component{ 

    constructor(props){
        super(props);

        this.state = {
            
            userInfo : {
                name : "Dummy Name",
                location   : "Default",
                avatar_url : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }
            
        };

    }

    
    async componentDidMount(){
       
       const data = await fetch(GIT_HUB_API_URL +"Deepesh-Gaharwar");
       const json = await data.json();

       this.setState({
        userInfo : json,  
       })

    }


    render(){

      // destructuring in the class based components
       const {name,location,avatar_url} = this.state.userInfo;
       

        
       return (
            <div className='user-card p-[10px] border '>
                
                {/* <h1 className="p-[5px] m-[5px]">Count : {count }</h1> */}
                {/* <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count : this.state.count + 1,
                    })

                }} */}
                {/* className="bg-amber-200 border-1 rounded p-[5px] m-[3px]"
                >
                    Click to Update Count
                </button> */}
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : deepeshgaharwar3@gmail.com</h4>
      
            </div> 
        ) 
    }

}

export default UserClass;