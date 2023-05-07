import { useNavigate } from "react-router-dom";
import axios from "../config/utils/axios"; 

 
export function useGetDataCallback() {
  const navigate = useNavigate()
  const handleGetData = async (postData: any, ): Promise<any> => {    
    try{ 
        const response = await axios.get(postData,
        {
            headers: {
                'Content-Type':'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }, 
        }); 
        return response       
    } catch(err: any) {   
      if(err?.response.data.error === "Unauthorized"){
        navigate("/")
      } 
      return err?.response    
    }     
  }
  return { handleGetData }
}
 
export function useSwapCoinCallback() {
  const handleSwapCoin = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/swap/coin-swap', postData,
        {
          headers: {
            'Content-Type':'application/json', 
            Authorization : `Bearer ${localStorage.getItem('token')}`
          }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleSwapCoin }
} 

export function useBankDetailCallback() {
  const handleBankDetail = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/swap/verify-account', postData,
        {
          headers: {
            'Content-Type':'application/json', 
            Authorization : `Bearer ${localStorage.getItem('token')}`
          }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleBankDetail }
}  

export function useExchangeRateCallback() {
  const handleExchangeRate = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/swap/rate-calculator', postData,
        {
          headers: {
            'Content-Type':'application/json',  
          }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleExchangeRate }
}  

export function useEmailVerificationCallback() {
  const handleEmailVerification = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('users/verify-otp', postData,
        {
          headers: {
            'Content-Type':'application/json',  
          }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleEmailVerification }
}  
 