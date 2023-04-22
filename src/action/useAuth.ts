import axios from "../config/utils/axios"; 

export function useLoginCallback() {
  const handleLogin = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/users/email-login', postData,
        {
          headers: {'Content-Type':'application/json'}, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleLogin }
} 

export function useRegisterCallback() {
  const handleRegister = async (postData: any): Promise<any> => {    
    try{ 
        const response = await axios.post('/users/email-register', postData,
        {
          headers: {'Content-Type':'application/json'}, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleRegister }
}
  