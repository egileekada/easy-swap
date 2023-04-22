import { TableContainer, Table, Thead, Tr, Td, Tbody, Input, Select } from '@chakra-ui/react'
import React from 'react'

export default function BankPage() {

    const [showModal, setShowModal] = React.useState(false)

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
                                    Status
                                </Td> 
                            </Tr>
                        </Thead>
                        <Tbody>  
                            <Tr style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] bg-white text-[#202223] font-Inter-Regular border-t  ' > 
                                <Td>01234567890</Td>   
                                <Td>Jay BigJaybos</Td>  
                                <Td>GTBank</Td>  
                                <Td>
                                    <div className=' py-2 px-4 w-fit bg-[#AEE9D1] rounded-[10px] ' >
                                        Success    
                                    </div>    
                                </Td>   
                            </Tr>
                            <Tr style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] bg-white text-[#202223] font-Inter-Regular border-t  ' > 
                                <Td>01234567890</Td>   
                                <Td>Jay BigJaybos</Td>  
                                <Td>GTBank</Td>  
                                <Td>
                                    <div className=' py-2 px-4 w-fit bg-[#FED3D1] rounded-[10px] ' >
                                        Not Active    
                                    </div>    
                                </Td>   
                            </Tr>
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div>
            <div className=' w-full lg:hidden ' >
                <div className=' w-full flex justify-between ' >
                    <div className='' >
                        <p className=' font-semibold text-[#344054] ' >Bank info</p>
                        <p className=' font-normal text-[#667085] mt-1 ' >Jay BigJaybos </p>
                        <p className=' font-semibold text-[#344054] mt-1' >01234567890</p>
                        <p className=' font-normal text-[#667085] mt-1 ' >GTBank</p>
                    </div>
                    <div className=' w-fit flex flex-col items-end ' > 
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.41421 14.8895L13.5563 4.74737L12.1421 3.33316L2 13.4753V14.8895H3.41421ZM4.24264 16.8895H0V12.6469L11.435 1.21184C11.8256 0.821313 12.4587 0.821313 12.8492 1.21184L15.6777 4.04026C16.0682 4.43079 16.0682 5.06395 15.6777 5.45448L4.24264 16.8895ZM0 18.8895H18V20.8895H0V18.8895Z" fill="black"/>
                        </svg>
                        <p className='  mt-4 text-[#12B76A] font-semibold ' >Active</p>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-end mt-8 ' > 
                <button onClick={()=> setShowModal(true)} className=' bg-[#303179] text-[#fff] rounded-md px-12 text-sm py-2 font-bold  ' >Add Bank</button>
            </div>
            {showModal && (
                <>  
                    <div className=' w-full fixed z-20 h-full  px-4 inset-0 flex justify-center items-center flex-col '  >  
                        <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className=' mt-4 z-[200] bg-white w-full  lg:w-[500px] md:w-[500px] rounded-lg px-5 py-4 ' > 
                            <div className=' w-full flex items-center justify-between ' >
                                <p className='font-bold text-lg ' >Add Bank Details</p>
                                <button onClick={()=> setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            
                            <p className=' text-[#475467] font-medium mt-8 mb-2 ' >Bank Name</p> 
                            <Select fontSize="sm" backgroundColor="white" >
                                <option>All</option>
                            </Select>
                            <p className=' text-[#475467] font-medium mt-4 mb-2 ' >Account Number</p> 
                            <Input placeholder='Enter Account Number' type='number' />
                            <button onClick={()=> setShowModal(false)} className=' bg-[#303179] mt-8 text-[#fff] rounded-md w-full text-sm py-3 font-bold  ' >Confirm</button>
                        </div>
                        <div className=' fixed z-10 inset-0 lg:bg-transparent lg:bg-opacity-0 bg-opacity-20 bg-black ' onClick={()=> setShowModal(false)} />
                    </div>
                </>
            )}
        </div>
    )
}
