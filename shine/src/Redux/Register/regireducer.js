import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./actiontype"



const initstate =
{
    isauth: false,
    isloading: false,
    iserror: false,
}


function regireducer(state = initstate, { type, payload})
{
    console.log(state, type, payload)
         switch(type)
         {

        case REGISTER_SUCCESS:
                {
                    return {
                ...state,
                isloading: false,
                isauth: false,
   
                    }
                } 
         case REGISTER_REQUEST:
            {
            return {                            
                 ...state,
                 isauth: false, 
                }
           }

        default: {
            return {
               ...state
             }   

         }

    }    
    
}
export default regireducer;