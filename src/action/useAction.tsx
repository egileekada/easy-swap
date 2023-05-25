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

export function useEditUserCallback() {
  const handleEditUser = async (postData: any, image: any): Promise<any> => {    

    const formData = new FormData()  
    
    formData.append("fullname", postData.fullname)
    if(image){
      formData.append("photo", image)
    }
    formData.append("phone", postData.phone)

    try{ 
        const response = await axios.put('users/profile', formData,
        {
          headers: {
            'Content-Type': (image ? image.type: 'application/json'), 
            Authorization : `Bearer ${localStorage.getItem('token')}`
          }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleEditUser }
}  

export function useGetOTPCallback() {
  const handleGetOTP = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('users/password-reset-request', postData,
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
  return { handleGetOTP }
}   

export function useResetPasswordCallback() {
  const handleResetPassword = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('users/password-reset', postData,
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
  return { handleResetPassword }
}  

export function useChangePasswordCallback() {
  const handleChangePassword = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('users/change-password', postData,
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
  return { handleChangePassword }
}  

export function usBankDetailsCallback() {
  const handlBankDetails = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('swap/bank-details', postData,
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
  return { handlBankDetails }
}   

export function uesTnxStatusCallback() {
  const handlTnxStatus = async (postData: any, index: any): Promise<any> => {    
    try{  
        const response = await axios.put('swap/update-swap/'+index, postData,
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
  return { handlTnxStatus }
}  

export function useDisputeCallback() {
  const handlDispute = async (postData: any): Promise<any> => {    
    try{  
        const response = await axios.post('swap/support', postData,
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
  return { handlDispute }
}  