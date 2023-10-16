import { Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useBankDetailCallback, useGetDataCallback } from '../../../../../action/useAction'
// import { useNavigate } from 'react-router-dom'

interface Props {
    bankName: string, 
    setBankName: any,
    AcountNumber: string, 
    setAcountNumber: any,
    bankCode: string, 
    setBankCode: any,
    AmountData: string, 
    setAmountData: any,
    accountName: string, 
    setAccountName: any,
    ChangeAccountNumber: any
 }

function BankInfo(props: Props) {
    const {
        // bankName, 
        setBankName,
        AcountNumber, 
        setAcountNumber,
        bankCode, 
        // setBankCode,
        // AmountData, 
        // setAmountData,
        accountName, 
        setAccountName,
        ChangeAccountNumber
    } = props 

    const [loadingBank, setLoadingBank] = React.useState(false)

    const [loading, setLoading] = React.useState(false)


    // const navigate = useNavigate()
    const toast = useToast()
 
    const { handleBankDetail } = useBankDetailCallback(); 
    const { handleGetData } = useGetDataCallback()

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const request: any = await handleGetData("/swap/bank-details") 
            if (request?.data?.account_name) {
                setAccountName(request?.data?.account_name)
                // setBankCode
                setAcountNumber(request?.data?.account_number)
                setBankName(request?.data?.bank_name)
            }

            const t1 = setTimeout(() => {
                setLoading(false);
                clearTimeout(t1);
            }, 1000);
        }

        // call the function
        // if(formik.values.network !== "ERC20" && formik.values.coin_amount_to_swap && (bankCode || accountName)){
            fetchData() 

            // make sure to catch any error
            .catch(console.error);;
        // }
    }, [])

    React.useEffect(() => {
        const fetchData = async () => {
            setLoadingBank(true)
            const request = await handleBankDetail(JSON.stringify({
                "account_number": AcountNumber,
                "bank_code": bankCode
            }))

            if (request?.data?.status === 500 || !request?.data?.account_name) {
                toast({
                    title: ("Incorrect Acount Details"),
                    position: "top",
                    status: "error",
                    isClosable: true,
                })
            }
            setAccountName(request?.data?.account_name)
            setLoadingBank(false)
        }

        if (AcountNumber?.length === 10 && bankCode) {
            fetchData()
        }
    }, [AcountNumber, bankCode])

    return (
        <div className=' w-full ' >
            <p className=' font-normal text-[#334155] mb-2 ' >Bank account number</p>
            <div className=' w-full   ' >
                <Input value={AcountNumber} onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} placeholder='Enter Account Number' onChange={(e) => ChangeAccountNumber(e.target.value)} height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1' />
            </div>
            <div className=' flex gap-2 lg:gap-3 font-normal mt-2 text-[#303179] text-sm ' >
                <div className=' w-fit mt-[1px] ' >
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="warning">
                            <circle id="Oval" cx="8" cy="8.99316" r="8" fill="#303179" />
                            <g id="Group 12">
                                <g id="Path">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.72372 6.08789V8.81516V6.08789Z" fill="#362A70" />
                                    <path d="M7.72372 6.08789V8.81516" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <g id="Path_2">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.72359 12.2967V12.5171V12.2967Z" fill="#362A70" />
                                    <path d="M7.72359 12.2967V12.5171" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                The name on your account must match the name provided on your BVN and Ezyswap account
            </div>
            {(loadingBank || loading) ? <p className=' mt-2 font-bold  ' >Loading</p> :
                <>
                    {accountName &&
                        <p className=' mt-2 font-bold  ' >{accountName}</p>
                    }
                </>
            }
        </div>
    )
}

export default BankInfo
