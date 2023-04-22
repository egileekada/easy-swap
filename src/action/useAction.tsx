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
 
export function useGetOTPCallback() {
  const handleGetOTP = async (): Promise<any> => {    
    try{ 
        const response = await axios.post('/admin-auth/generate-OTP',{},
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
  return { handleGetOTP }
}

export function useChangePasswordCallback() {
  const handleChangePassword = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.put('/admin-auth/change-password',postData,
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

export function useAddBankCallback() {
  const handleAddBank = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/bank/admin/create',postData,
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
  return { handleAddBank }
}  
 
export function useUpdateBankCallback() {
  const handleUpdateBank = async (postData: any, index: any): Promise<any> => {    
    try{ 
        const response = await axios.put('/bank/admin/update/'+index,postData,
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
  return { handleUpdateBank }
}  
 
export function useDeleteBankCallback() {
  const handleDeleteBank = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.delete('/bank/admin/'+postData,
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
  return { handleDeleteBank }
}  

export function useUpdateBioCallback() {
  const handleUpdateBio = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.put('/admin/update',postData,
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
  return { handleUpdateBio }
}  

export function useDeleteCallback() {
  const handleDelete = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.delete('/admin/users/'+postData,
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
  return { handleDelete }
}
 
export function useUpdateRateCallback() {
  const handleUpdateRate = async (index: any, rate: any, postData: any): Promise<any> => {    
    try{ 
        const response = await axios.put('/rate/'+index+"/"+rate, {},
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
  return { handleUpdateRate }
} 


 
export function useBuyPayoutCallback() {
  const handleBuyPayout = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.put('/transaction/buy/payout/'+postData, {},
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
  return { handleBuyPayout }
} 