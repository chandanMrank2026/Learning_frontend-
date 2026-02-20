import React ,{useContext}from 'react';

 export const useContext = useContext()
const LogincontextA = () => {
    const [user,setuser]=useState("BROcode");
  return (
   <>
   <useContext.Provider>
    <div>
      
    </div>

   </useContext.Provider>
     
   </>
  )
}

export default LogincontextA