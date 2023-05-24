import { TableContainer, Table, Thead, Tr, Td, Tbody, Input, Select, useToast } from '@chakra-ui/react'
import React from 'react'
import { usBankDetailsCallback, useBankDetailCallback, useGetDataCallback } from '../../action/useAction'
import Bank from '../../components/SellCrytoComponent/SellCrypto/components/Bank'

export default function BankPage() {

    const [showModal, setShowModal] = React.useState(false)
    const [loadingBank, setLoadingBank] = React.useState(false) 
    const [loading, setLoading] = React.useState(false) 
    const [Check, setCheck] = React.useState(false) 
    const [accountName, setAccountName] = React.useState("")
    const [bank_code, setBankNo] = React.useState("")
    const [data, setData] = React.useState({} as any)
    const [bank_name, setBankName] = React.useState("")
    const [account_number, setAccountNo] = React.useState("")

    const { handleBankDetail } = useBankDetailCallback(); 
    const {handlBankDetails} = usBankDetailsCallback()
    const toast = useToast() 
    const { handleGetData } = useGetDataCallback()

    React.useEffect(()=> { 
        const fetchData = async () => {
            setLoading(true);  
            const request: any = await handleGetData("/swap/bank-details")  
            
            console.log(request?.data);
            setData(request?.data)

            const t1 = setTimeout(() => {
                setLoading(false);  
                clearTimeout(t1);
            }, 1000);  
        }

        // call the function
        fetchData()

        // make sure to catch any error
        .catch(console.error);;
    }, [Check]) 

    React.useEffect(()=> {
        const fetchData =async()=> {
            setLoadingBank(true)
            const request = await handleBankDetail(JSON.stringify({ 
                "account_number": account_number,
                "bank_code": bank_code
            }))   
            setAccountName(request?.data?.account_name) 
            setLoadingBank(false)
        } 

        if(account_number?.length === 10 && bank_code){
            fetchData()
        }
    }, [account_number, bank_code])



    const BankHandler =(item: any, code: any)=>{
        // userContext.setSellCrypto({...userContext.sellCrypto, "bank_acc_name": item, "bank_code": code})
        setBankName(item)
        setBankNo(code)
    } 

    const submit =async()=> {
        setLoading(true)

        const request = await handlBankDetails(JSON.stringify({
            "account_name": accountName,
            "account_number": account_number,
            "bank_name": bank_name
        }))

        console.log(request); 

        if (request.status === 200 || request.status === 201) {      
            // localStorage.setItem('id', request?.data?.data?.user?.id);  
            setCheck((prev)=> !prev)
            toast({
                title: "Bank Details Added", 
                status: 'success',  
                duration: 3000, 
                position: "top"
            }) 
            setShowModal(false)
        }else { 
            toast({
                title: "Error Ocurred", 
                status: 'error',  
                duration: 3000, 
                position: "top"
            }) 
        }

        setLoading(false)
    } 


    return (
        <div className=' w-full px-6 lg:px-14 ' > 
            <p className=' font-semibold text-lg lg:text-2xl mb-8 mt-14 ' >Bank Information</p>
            <div className=' w-full lg:block hidden mt-6 ' >
                <TableContainer>
                    <Table variant='unstyled'> 
                        <Thead style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] font-bold bg-[#F9FAFB] text-[#000] ' >
                            <Tr> 
                                <Td>
                                    Account Number
                                </Td>
                                <Td>
                                    Account Name
                                </Td>
                                <Td>
                                    Bank Name
                                </Td>
                                <Td>
                                    Edit
                                </Td> 
                            </Tr>
                        </Thead>
                        <Tbody>  
                            {!loading && ( 
                                <Tr style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] bg-white text-[#202223] font-Inter-Regular border-t  ' > 
                                    <Td>{data?.account_number}</Td>   
                                    <Td>{data?.account_name}</Td>  
                                    <Td>{data?.bank_name}</Td>   
                                    <Td>
                                        <svg role='button' onClick={()=> setShowModal(true)} width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.41421 14.8895L13.5563 4.74737L12.1421 3.33316L2 13.4753V14.8895H3.41421ZM4.24264 16.8895H0V12.6469L11.435 1.21184C11.8256 0.821313 12.4587 0.821313 12.8492 1.21184L15.6777 4.04026C16.0682 4.43079 16.0682 5.06395 15.6777 5.45448L4.24264 16.8895ZM0 18.8895H18V20.8895H0V18.8895Z" fill="black"/>
                                        </svg>
                                    </Td>
                                </Tr> 
                            )}
                        </Tbody> 
                    </Table>
                </TableContainer>
                {loading && (
                    <div className=' w-full flex justify-center pt-8 text-lg font-semibold ' >
                        Loading...
                    </div>
                )}
                {!loading && (
                    <>
                        {data?.account_number ? "" :  
                            <div className=' w-full flex justify-center pt-8 text-lg font-semibold ' >
                                No Records Found
                            </div>
                        }
                    </>
                )}
            </div>
            <div className=' w-full lg:hidden ' >

                {loading && (
                    <div className=' w-full flex justify-center pt-8 text-lg font-semibold ' >
                        Loading...
                    </div>
                )}
                {!loading && (
                    <>
                        {!data?.account_number &&  
                            <div className=' w-full flex justify-center pt-8 text-lg font-semibold ' >
                                No Records Found
                            </div>
                        }
                    </>
                )}
                {!loading && ( 
                    <>
                        {data?.account_number &&
                            <div className=' w-full flex justify-between ' >
                                <div className='' >
                                    {/* <p className=' font-semibold text-[#344054] ' >Bank info</p> */}
                                    <p className=' font-normal text-[#667085] mt-1 ' >{data?.account_name}</p>
                                    <p className=' font-semibold text-[#344054] mt-1' >{data?.account_number}</p>
                                    <p className=' font-normal text-[#667085] mt-1 ' >{data?.bank_name}</p>
                                </div>
                                <div className=' w-fit flex flex-col items-end ' > 
                                    <svg role='button' onClick={()=> setShowModal(true)} width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.41421 14.8895L13.5563 4.74737L12.1421 3.33316L2 13.4753V14.8895H3.41421ZM4.24264 16.8895H0V12.6469L11.435 1.21184C11.8256 0.821313 12.4587 0.821313 12.8492 1.21184L15.6777 4.04026C16.0682 4.43079 16.0682 5.06395 15.6777 5.45448L4.24264 16.8895ZM0 18.8895H18V20.8895H0V18.8895Z" fill="black"/>
                                    </svg>
                                    <p className='  mt-4 text-[#12B76A] font-semibold ' >Active</p>
                                </div>
                            </div>
                        }
                    </>
                )}
            </div>
            {!data?.account_number && 
                <div className=' w-full flex justify-end mt-4 ' > 
                    <button onClick={()=> setShowModal(true)} className=' bg-[#303179] text-[#fff] rounded-md px-6 text-sm py-2 font-bold  ' >{data?.account_number ? "Update Bank Details" : "Add Bank"}</button>
                </div>
            }
            {showModal && (
                <>  
                    <div className=' w-full fixed z-20 h-full  px-4 inset-0 flex justify-center items-center flex-col '  >  
                        <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className=' mt-4 z-[200] bg-white w-full  lg:w-[500px] md:w-[500px] rounded-lg px-5 py-4 ' > 
                            <div className=' w-full mb-7 flex items-center justify-between ' >
                                <p className='font-bold text-lg ' >{data?.account_number ? "Update Bank Details" : "Add Bank Details"}</p>
                                <button onClick={()=> setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div> 
                            <Bank data={BankHandler} />
                            <p className=' text-[#475467] font-semibold text-sm mt-4 mb-2 ' >Account Number</p> 
                            <Input onChange={(e)=> setAccountNo(e.target.value)} fontSize="sm" height="45px" borderWidth="1px" borderColor="#CBD5E1" placeholder='Enter Account Number' type='number' /> 
                            {loadingBank ? <p className=' mt-2 font-bold  ' >Loading</p> :
                                <> 
                                    {accountName &&
                                        <p className=' mt-2 font-bold  ' >{accountName}</p>
                                    }
                                </>
                            }
                            <button onClick={submit} className=' bg-[#303179] mt-8 text-[#fff] rounded-md w-full text-sm py-3 font-bold  ' >
                                {loading ? "Loading..." : "Confirm"}
                            </button>
                        </div>
                        <div className=' fixed z-10 inset-0 bg-opacity-20 bg-black ' onClick={()=> setShowModal(false)} />
                    </div>
                </>
            )}
        </div>
    )
}
