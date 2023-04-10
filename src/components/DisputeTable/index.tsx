import { Select, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function DisputeTable() {
    return (
        <div className=' w-full  ' >
            <div className=' grid grid-cols-auto lg:grid-cols-5 gap-5 font-medium  ' >
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Type</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>Deposit</option>
                    </Select>
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Date</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>This month</option>
                    </Select>
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Assets</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>All</option>
                    </Select>
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Status</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>All</option>
                    </Select>
                </div>
            </div>
            <div className=' w-full mt-6 lg:block hidden ' >
            <TableContainer>
                <Table variant='unstyled'> 
                    <Thead style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] font-bold bg-[#F9FAFB] text-[#000] ' >
                        <Tr> 
                            <Td>
                                Asset
                            </Td>
                            <Td>
                                Amount
                            </Td>
                            <Td>
                                Status
                            </Td>
                            <Td>
                                Reason
                            </Td>
                            <Td>
                                Customer
                            </Td>
                            <Td>
                                Disputed Time
                            </Td>
                            <Td>
                                Responded Time
                            </Td>  
                        </Tr>
                    </Thead>
                    <Tbody>  
                        <Tr style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] bg-white text-[#202223] font-Inter-Regular border-t  ' >
                            {/* <Td>2023-03-04 12:31</Td>  
                            <Td>Abdulazeez Aiye...</Td>    */}
                            <Td>USDT</Td> 
                            <Td>100,000</Td>  
                            {/* <Td>0xcdadb45afa459de98...</Td>  */}
                            {/* <Td>
                                <div className=' gap-2 flex items-center ' > 
                                    0xcdadb45afa459de98...
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.71304 2.75V0.875C2.71304 0.70924 2.77601 0.550269 2.8881 0.433058C3.00019 0.315848 3.15222 0.25 3.31074 0.25H10.4831C10.6416 0.25 10.7936 0.315848 10.9057 0.433058C11.0178 0.550269 11.0808 0.70924 11.0808 0.875V9.625C11.0808 9.79076 11.0178 9.94973 10.9057 10.0669C10.7936 10.1842 10.6416 10.25 10.4831 10.25H8.68998V12.125C8.68998 12.47 8.42102 12.75 8.08811 12.75H0.924144C0.845324 12.7505 0.767188 12.7347 0.694224 12.7035C0.621261 12.6723 0.554908 12.6264 0.498979 12.5683C0.44305 12.5102 0.398647 12.4412 0.368321 12.3651C0.337994 12.289 0.322343 12.2074 0.322266 12.125L0.324059 3.375C0.324059 3.03 0.593021 2.75 0.925937 2.75H2.71304ZM1.51945 4L1.51765 11.5H7.4946V4H1.51945ZM3.90843 2.75H8.68998V9H9.88537V1.5H3.90843V2.75Z" fill="#5C5F62"/>
                                    </svg>
                                </div>
                            </Td>  */}
                            <Td>
                                <div className=' py-2 px-4 w-fit bg-[#AEE9D1] rounded-[10px] ' >
                                Won    
                                </div>    
                            </Td>  
                            <Td>Cash not received</Td> 
                            <Td>bigjay@gmail.com</Td>  
                            <Td>2023-03-04 12:31</Td>   
                            <Td>2023-03-04 12:31</Td>  
                        </Tr>
                    </Tbody> 
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}
