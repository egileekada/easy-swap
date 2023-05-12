
import { Input, Select } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { IUser, UserContext } from '../../../../../context/userContext';
import { usBankDetailsCallback } from '../../../../../action/useAction';

interface Props {
    rate?: boolean,
    data?: any,
    holder?: any,
    code?: any
}

export default function BankSelection({rate, data, holder, code}: Props) {

    const [showModal, setShowModal] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [dataInfo, setDataInfo] = React.useState([] as any)
    const [bankName, setBankName] = React.useState("")
    const [searchBank, setSearchBank] = React.useState("") 
    const configValue: string = (process.env.REACT_APP_MY_ENV_VAL as string) 
    React.useEffect(()=> { 
        setLoading(true)
        axios.get('https://api.shutterscore.io/v1/merchant/public/misc/banks?country=NG', {
            headers: {
                'X-API-KEY': "PUBK_TEST_a4662520-ad4f-4e52-bac8-c53bb0fc9443" 
              }
            }
        )
        .then(function (response) {
            setDataInfo(response?.data?.data) 
            setLoading(false)
        })
    }, []) 

    React.useEffect(()=> {
        if(holder){
            if(!loading){
                {dataInfo?.map((item: any, index: number)=> { 
                    if(holder === item?.name){
                        code(item?.code)
                    }
                })} 
            }
        }
    },[loading])

    const clickHandler =(name: string, code: any)=>{
        setBankName(name)
        data(name, code)
        setShowModal(false)
    } 


    const changeHandler =(item: any)=> {
        let feedArray=item.split(","); 

        data(feedArray[0], feedArray[1]) 
    }  

    const BankList =()=> {
        return(
            <> 
                <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className=' lg:mt-4 z-[200] lg:h-auto h-full bg-white flex flex-col w-full lg:w-[500px] lg:mb-20 lg:rounded-lg px-5 py-4 ' >
                    <div className=' w-full flex items-center justify-between ' >
                        <p className='font-bold text-lg '>Select Bank</p>
                        {/* <button onClick={()=> setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> */}
                        <Select height="32px"  >
                            {dataInfo?.map((item: any, index: number)=> { 
                                return(  
                                    <option value={item?.name+","+item.code} >{item?.name}</option> 
                                ) 
                            })}
                        </Select>
                    </div> 
                    {/* <div className=' w-full pt-6 pb-2 ' > 
                        <div className=' w-full relative ' >
                            <Input value={searchBank} type='text' onChange={(e)=> SearchHandler(e)} height="45px" paddingLeft="40px" placeholder='Search ' borderColor="#CBD5E1" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1' />
                            <div className=' h-[45px] absolute top-0 px-4 flex items-center ' >
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9661 12.8209L10.6467 9.50149C10.5839 9.4386 10.5018 9.40579 10.4143 9.40579H10.0534C10.9147 8.40779 11.4369 7.10903 11.4369 5.68722C11.4369 2.54558 8.89137 0 5.74972 0C2.60808 0 0.0625 2.54558 0.0625 5.68722C0.0625 8.82887 2.60808 11.3744 5.74972 11.3744C7.17153 11.3744 8.47029 10.8522 9.46829 9.99092V10.3518C9.46829 10.4393 9.50384 10.5214 9.56399 10.5842L12.8834 13.9036C13.0119 14.0321 13.2197 14.0321 13.3482 13.9036L13.9661 13.2857C14.0946 13.1572 14.0946 12.9494 13.9661 12.8209ZM5.74972 10.062C3.33265 10.062 1.37494 8.10429 1.37494 5.68722C1.37494 3.27015 3.33265 1.31244 5.74972 1.31244C8.16679 1.31244 10.1245 3.27015 10.1245 5.68722C10.1245 8.10429 8.16679 10.062 5.74972 10.062Z" fill="#667085"/>
                                </svg>
                            </div>
                        </div>
                    </div>  */}
                    {/* <div className=' w-full flex font-medium pt-6 mt-6 flex-col gap-5 overflow-y-auto lg:max-h-64 ' >
                        {dataInfo?.map((item: any, index: number)=> { 
                            return(
                                <div key={index} role="button" onClick={()=> clickHandler(item?.name, item?.code)} className=' w-full flex items-center gap-3 ' > 
                                    <p className=' text-[#8994A1] ' >{item?.name}</p> 
                                </div> 
                            ) 
                        })}
                    </div> */}
                </div>
                <div className=' fixed z-[100] inset-0 bg-opacity-20 bg-black ' onClick={()=> setShowModal(false)} />
            </>
        )
    }

    return (
        <div className=' w-full relative' >
            <p className=' font-semibold text-sm text-[#334155] mb-2 ' >Select Bank</p>
            {/* <div onClick={()=> setShowModal(true)} role='button' className=' w-full rounded-lg border border-[#CBD5E1] flex items-center justify-between h-[45px] bg-[#F8FAFC] relative ' >
                <div className=' flex items-center ' >
                    <div className=' h-full z-10 flex items-center px-3 ' > 
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4453 0.16795C6.7812 -0.0559832 7.21881 -0.0559832 7.55471 0.16795L13.5547 4.16795C13.804 4.33413 13.9656 4.60333 13.9951 4.90146C14.0247 5.1996 13.919 5.49526 13.7071 5.70711L13 6.41421V11.0004C13.5845 11.2223 14 11.7876 14 12.45C14 13.306 13.306 14 12.45 14H1.55C0.693958 14 0 13.306 0 12.45C0 11.7876 0.415462 11.2223 1.00001 11.0004V6.41421L0.292899 5.70711C0.0810543 5.49526 -0.024649 5.1996 0.00487213 4.90146C0.0343934 4.60333 0.196029 4.33413 0.445305 4.16795L6.4453 0.16795ZM9 6C9.55228 6 10 6.44772 10 7V10C10 10.5523 9.55228 11 9 11C8.44771 11 8 10.5523 8 10V7C8 6.44772 8.44771 6 9 6ZM6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7V10C4 10.5523 4.44772 11 5 11C5.55228 11 6 10.5523 6 10V7Z" fill="#647488"/>
                        </svg>
                    </div>
                    <p className={bankName ? ' text-[#000] font-medium ml-2 ': ' text-[#647488] font-medium ml-2 '} >{bankName ? bankName : "Select Bank"}</p>
                </div>
                <div className=' h-full w-[45px] border-l flex justify-center items-center border-[#CBD5E1] rounded-lg ' >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00025 7.00025C5.74425 7.00025 5.48825 6.90225 5.29325 6.70725L0.29325 1.70725C-0.09775 1.31625 -0.09775 0.68425 0.29325 0.29325C0.68425 -0.09775 1.31625 -0.09775 1.70725 0.29325L6.00025 4.58625L10.2933 0.29325C10.6842 -0.09775 11.3162 -0.09775 11.7072 0.29325C12.0982 0.68425 12.0982 1.31625 11.7072 1.70725L6.70725 6.70725C6.51225 6.90225 6.25625 7.00025 6.00025 7.00025Z" fill="#5C5F62"/>
                    </svg>
                </div>
            </div> */}
            {!loading && (
                <Select onChange={(e)=> changeHandler(e.target.value)} placeholder={holder? holder:'Select Bank'} fontSize="sm" height="45px" borderWidth="1px" borderColor="#CBD5E1"  > 
                    {dataInfo?.map((item: any, index: number)=> { 
                        return(  
                            <option key={index} value={item?.name+","+item.code} >{item?.name}</option> 
                        ) 
                    })} 
                </Select>
            )}
            {loading && (
                <p>Loading...</p>
            )}
            {showModal && (
                <> 
                    <div className=' w-full fixed z-50 inset-0  justify-center items-center h-full flex lg:px-4 flex-col '  > 
                        <BankList />
                    </div> 
                    {/* <div className=' w-full absolute z-20 hidden h-full lg:flex flex-col items-end '  > 
                        <BankList />
                    </div> */}
                </>
            )}
        </div>
    )
}
