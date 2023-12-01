import React, { useRef } from 'react'
import CoinSelection from './components/CoinSelection'
import CoinNetwork from './components/CoinNetwork'
import Bank from './components/Bank'
import { Input, useToast } from '@chakra-ui/react'
import ButtonComponent from '../../ButtonComponent'
// import { IUser, UserContext } from '../../../context/userContext'
import { useBankDetailCallback, useExchangeRateCallback, useSwapCoinCallback } from '../../../action/useAction'
import { cashFormat } from '../../../config/utils/cashFormat'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import ModalLayout from '../../ModalLayout'
import buycrypto from '../../../global-state/buycrypto'
import userdata from '../../../global-state/userdata'
import transactiondetail from '../../../global-state/transactiondetail'
// import BankInfo from './components/Bankinfo'

type props = {
    next?: any,
    kyc?: boolean
}

export default function SellCrypto({ kyc }: props) {

    const data: any = buycrypto((state) => state.crypto)
    const userinfo: any = userdata((state) => state.user)
    const updateCrypto = buycrypto((state) => state.updateCrypto)
    // const tnxinfo = transactiondetail((state) => state.tnx)
    const setTnxData = transactiondetail((state) => state.setTnxData)

    const navigate = useNavigate()
    const toast = useToast()

    const endHeight: any = useRef(null)
    const [loading, setLoading] = React.useState(false)
    const [loadingRate, setLoadingRate] = React.useState(false)
    const [loadingBank, setLoadingBank] = React.useState(false)
    const [exchangeRate, setExchangeRate] = React.useState("")
    const [coinName, setcoinName] = React.useState("")
    const [accountName, setAccountName] = React.useState("")
    const [network, setNetwork] = React.useState("")
    const [value, setValue] = React.useState("")
    const [bankCode, setBankCode] = React.useState("")
    const [AcountNumber, setAcountNumber] = React.useState("")
    const [bankName, setBankName] = React.useState("")
    const [AmountData, setAmountData] = React.useState("0")

    const { handleSwapCoin } = useSwapCoinCallback();
    const { handleBankDetail } = useBankDetailCallback();
    const { handleExchangeRate } = useExchangeRateCallback();
    // const { handleGetData } = useGetDataCallback()

    const formik = useFormik({
        initialValues: { coin_amount_to_swap: '', bank_acc_name: '', bank_code: '', bank_acc_number: '', phone_number: '', coin_name: '', network: '' },
        onSubmit: () => { },
    });
 
    React.useEffect(() => {
        formik.setFieldValue("coin_amount_to_swap", data?.coin_amount_to_swap)
        formik.setFieldValue("bank_acc_name", data?.bank_acc_name)
        formik.setFieldValue("bank_code", data?.bank_code)
        formik.setFieldValue("bank_acc_number", data?.bank_acc_number)
        formik.setFieldValue("phone_number", data?.phone_number ? data?.phone_number : userinfo?.phone)
        formik.setFieldValue("coin_name", (coinName === "Bitcoin" ? "Bitcoin" : network === "BSC" ? "USDT_BSC" : network === "TRON" ? "USDT_TRON" : "USDT"))
        // formik.setFieldValue("network", network)

        // endHeight.current?.scrollIntoView({ behavior: "smooth" })
    }, [data?.coin_amount_to_swap, data?.bank_acc_name, data?.bank_code, data?.bank_acc_number, userinfo?.phone, coinName, network, data?.phone_number])



    // React.useEffect(() => {

    //     endHeight.current?.scrollIntoView({ behavior: "smooth" })
    // }, [bankName, bankCode, AcountNumber, userinfo?.phone, coinName, network])

    React.useEffect(() => {
        const exchangeRate = async () => {
            setLoadingRate(true)
            let Str = coinName.charAt(0).toUpperCase() + coinName.slice(1)
            const request = await handleExchangeRate(JSON.stringify({
                "coin_name": (coinName === "Bitcoin" ? Str : coinName === "Tether" ? "USDT" : "USDT_TRON"),
                "coin_amount_to_calc": value
            }))

            setExchangeRate(request?.data?.total_coin_price_ngn)
            setLoadingRate(false)
        }

        if (coinName && value) {
            exchangeRate()
        }

    }, [coinName, value])


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
                    duration: 1500,
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

    const submit = async () => {
        setLoading(true);

        if (!userinfo?.email) {
            navigate("/signin")
        } else if (Number(formik.values.coin_amount_to_swap) < 20 && formik?.values?.coin_name !== "Bitcoin") {
            setAmountData("20")
            setOpen(true)
        } else if (Number(formik.values.coin_amount_to_swap) > 1000 && !kyc && formik?.values?.coin_name !== "Bitcoin") {
            setAmountData("1000")
            setOpen(true)
        } else if (Number(formik.values.coin_amount_to_swap) > 50000 && kyc && formik?.values?.coin_name !== "Bitcoin") {
            setAmountData("50,000")
            setOpen(true)
        } else if (Number(exchangeRate) < 20000 && formik?.values?.coin_name === "Bitcoin") {
            setAmountData("20")
            setOpen(true)
        } else if (Number(exchangeRate) > 1000000 && !kyc && formik?.values?.coin_name === "Bitcoin") {
            setAmountData("1000")
            setOpen(true)
        } else if (Number(exchangeRate) > 50000000 && kyc && formik?.values?.coin_name === "Bitcoin") {
            setAmountData("50,000")
            setOpen(true)
        } else if (!formik.values.bank_code) {
            toast({
                title: ("Please Enter Your Bank Information"),
                position: "top",
                status: "error",
                duration: 1500,
                isClosable: true,
            })
        } else {
            const request = await handleSwapCoin(formik.values)

            if (request.status === 200) {
                toast({
                    title: "Order Successful",
                    position: "top",
                    status: "success",
                    duration: 1500,
                    isClosable: true,
                })
                setTnxData(request?.data)
                const t1 = setTimeout(() => {
                    setLoading(false);
                    navigate("/tnxinfo")
                    // next(true)
                    clearTimeout(t1);
                }, 1000);
            } else {
                toast({
                    title: (request?.data?.error?.details[0] ? request?.data?.error?.details[0] : "Error Occured"),
                    position: "top",
                    status: "error",
                    duration: 1500,
                    isClosable: true,
                })
                setLoading(false)
            }
            setLoading(false);
        }
        setLoading(false);
    }

    const CoinName = (item: any, net: any, val?: any) => {
        updateCrypto({ ...data, "coin_name": item, network: net })
        setcoinName(item)
        setNetwork(net)

        formik.setFieldValue("network", item === "Bitcoin" ? "Bitcoin" : net)
        if (val > -1) {
            setValue(val)
            updateCrypto({ ...data, "coin_amount_to_swap": val })
        }
        endHeight.current?.scrollIntoView({ behavior: "smooth" })
    }

    const BankHandler = (item: any, code: any) => {
        updateCrypto({ ...data, "bank_acc_name": item, "bank_code": code, "bank_acc_number": ""  })

        setAccountName('')
        setBankCode(item) 
        setAcountNumber("") 
        setBankName(item)
        setBankCode(code)
        endHeight.current?.scrollIntoView({ behavior: "smooth" })
    }

    const BankDetailHandler = (item: any, numb: any, name: any) => {
        updateCrypto({ ...data, "bank_acc_name": item, bank_acc_number: numb })
        setBankName(item)
        setAccountName(name)
        setAcountNumber(numb)
        endHeight.current?.scrollIntoView({ behavior: "smooth" })
    }

    const GetAmount = (item: any) => {
        setValue(item.target.value)
        updateCrypto({ ...data, "coin_amount_to_swap": item.target.value })
    }

    const ChangeNetwork = (item: any) => {
        setNetwork(item)

        formik.setFieldValue("network", coinName === "Bitcoin" ? "Bitcoin" : item)
        endHeight.current?.scrollIntoView({ behavior: "smooth" })
    }

    const ChangeAccountNumber = (item: any) => {
        updateCrypto({ ...data, "bank_acc_number": item })
        setAcountNumber(item)
        endHeight.current?.scrollIntoView({ behavior: "smooth" })
    }

    const ChangePhoneNumber = (item: any) => {
        updateCrypto({ ...data, "phone_number": item })
        formik.setFieldValue("phone_number", item)
        endHeight.current?.scrollIntoView({ behavior: "smooth" })
    }

    const ChangeBankCode = (item: any) => {
        formik.setFieldValue("bank_code", item) 
        setBankCode(item)  
        updateCrypto({ ...data, "bank_code": item })
        endHeight.current?.scrollIntoView({ behavior: "smooth" })
    } 

    const [open, setOpen] = React.useState(false) 

    return (
        <div id='end' className=' w-full flex flex-col items-center font-medium ' >
            <p className=' text-[#757575] font-medium text-lg ' >To swap your Crypto to Naira, select your coin to proceed.</p>
            <div className=' w-full mt-10 flex flex-col gap-4 pb-8 ' >
                <CoinSelection data={CoinName} />
                {/* {coinName && ( */}
                    <div className=' w-full ' >
                        <p className=' font-normal text-[#334155] mb-2 ' >Amount of asset you want to sell</p>
                        <div className=' w-full mb-1 relative flex ' >
                            <Input onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} value={formik.values.coin_amount_to_swap} onChange={GetAmount} placeholder='Enter Amount' height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1' />
                            <p className=' text-sm text-[#475467] font-medium absolute bottom-3 z-20 right-3 ' >min $20 - max {kyc ? "$50,000" : "$1000"}</p>
                        </div>
                        <div className=' w-full flex justify-end ' >
                            <p className=' text-xs text-[#475467] font-medium  ' >Est Price = <span className='font-semibold' >NGN</span> {loadingRate ? "..." : cashFormat(exchangeRate)}</p>
                        </div>
                    </div> 
                <>
                    <CoinNetwork data={ChangeNetwork} network={network} /> 
                        <Bank data={BankHandler} detail={BankDetailHandler} holder={bankName} code={ChangeBankCode} /> 
                </>

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
                    {loadingBank ? <p className=' mt-2 font-bold  ' >Loading</p> :
                        <>
                            {accountName &&
                                <p className=' mt-2 font-bold  ' >{accountName}</p>
                            }
                        </>
                    }
                </div>
                <div className=' w-full ' >
                    <p className=' font-normal text-[#334155] mb-2 ' >Phone number</p>
                    <div className=' w-full mb-8  ' >
                        <Input value={formik.values.phone_number} onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} onChange={(e) => ChangePhoneNumber(e.target.value)} placeholder='Enter your phone number' height="45px" type='tel' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1' />
                    </div>
                    <ButtonComponent disable={(formik?.values?.coin_amount_to_swap && formik?.values?.bank_acc_name && formik?.values?.bank_code && formik?.values?.bank_acc_number && formik?.values?.phone_number && formik?.values?.coin_name && formik?.values?.network) ? false : true } onClick={() => submit()} name={loading ? "Loading..." : "Initialize Payment"} bgcolor={' text-[#F1F1F1] bg-[#303179] '} />

                </div>
            </div>
            <ModalLayout open={open} size={"md"} close={setOpen} >
                <div className=' w-full bg-white p-6 pb-[35px] pt-[40px] ' >
                    <div className=' w-full flex items-center justify-center ' >
                        <svg className=' w-[90px] lg:w-[112px] ' viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="warning">
                                <circle id="Oval" cx="55.9932" cy="56.0068" r="55.9932" fill="#303179" />
                                <g id="Group 12">
                                    <g id="Path">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7529 29.8733V61.5716V29.8733Z" fill="#98A2B3" />
                                        <path d="M55.7529 29.8733V61.5716" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <g id="Path_2">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.9164 79.4068V80.9493V79.4068Z" fill="#98A2B3" />
                                        <path d="M55.9164 79.4068V80.9493" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    {AmountData === "20" ?
                        <p className=' font-normal text-[#1D2939] text-center text-sm leading-[20px] my-6 ' >Oops! The amount you entered is below our minimum requirement of $20. Please kindly enter an amount that meets or exceeds the minimum threshold to proceed with your transaction. Thank you for your understanding and cooperation!</p> :

                        <p className=' font-normal text-[#1D2939] text-center text-sm leading-[20px] my-6 ' >Oops! The amount you entered is above our maximum requirement of ${AmountData}. Please kindly enter an amount that meets the maximum threshold to proceed with your transaction. Thank you for your understanding and cooperation!</p>
                    }
                    <ButtonComponent onClick={() => setOpen(false)} name={"Try Again"} bgcolor={' text-[#F1F1F1] text-base bg-[#303179] mt-4  '} />
                </div>
            </ModalLayout>

            {/* <div ref={endHeight} /> */}
        </div>
    )
}
