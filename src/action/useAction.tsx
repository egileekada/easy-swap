import { useNavigate } from "react-router-dom";
import axios from "../config/utils/axios"; 
import Dashboard from "../pages/Dashboard";

 
export function useGetDataCallback() {
  const navigate = useNavigate()
  const handleGetData = async (postData: any): Promise<any> => {    
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
      if(window.location.pathname.includes("dashboard")){
        if(err?.response.data.error?.message === "Request not authorized"){
          navigate("/signin")
        } 
      }
      return err?.response    
    }     
  }
  return { handleGetData }
} 

export function useGetDataNotAutCallback() {
  const navigate = useNavigate()
  const handleGetDataNotAut = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.get(postData,
        {
            headers: {
                'Content-Type':'application/json'
            }, 
        }); 
        return response       
    } catch(err: any) {    
      if(window.location.pathname.includes("dashboard")){
        if(err?.response.data.error?.message === "Request not authorized"){
          navigate("/signin")
        } 
      }
      return err?.response    
    }     
  }
  return { handleGetDataNotAut }
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

export function useSortTnxCallback() {
  const handlSortTnx = async (postData: any): Promise<any> => {    
    try{  
        const response = await axios.post('swap/swap-sort', postData,
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
  return { handlSortTnx }
}  

export function useGoogleCallback() {
  const handlGoogle = async (postData: any): Promise<any> => {    
    try{  
        const response = await axios.post('users/google-auth', postData,
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
  return { handlGoogle }
}   

export function useVerifyUserCallback() {
  const handleVerifyUser = async (postData: any, image?: any): Promise<any> => {    
    try{  
        const response = await axios.post('users/create-user-kyc', postData,
        {
          headers: {
            'Content-Type': image.type,  
            Authorization : `Bearer ${localStorage.getItem('token')}` 
          }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response
    }     
  }
  return { handleVerifyUser }
}  

export function useSendOtpCallback() {
  const handleSendOtp = async (postData: any): Promise<any> => {    
    try{  
        const response = await axios.post('users/resend-otp', postData,
        {
          headers: {
            'Content-Type': 'application/json',  
            Authorization : `Bearer ${localStorage.getItem('token')}` 
          }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response
    }     
  }
  return { handleSendOtp }
}  