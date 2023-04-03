import { TableContainer, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react'
import React from 'react'

export default function BankPage() {
    return (
        <div className=' w-full px-14 ' > 
            <p className=' font-semibold text-2xl mb-8 mt-14 ' >Bank Information</p>
            <div className=' w-full mt-6 ' >
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
            <div className=' w-full flex justify-end mt-8 ' > 
                <button className=' bg-[#303179] text-[#fff] rounded-md px-12 text-sm py-2 font-bold  ' >Add Bank</button>
            </div>
        </div>
    )
}
