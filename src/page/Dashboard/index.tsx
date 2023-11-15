import React from 'react'
// import DashboardLayout from '../../components/DashboardLayout'
// import ButtonComponent from '../../components/ButtonComponent'
import TransactionComponent from '../../components/TransactionComponent'
// import { IUser, UserContext } from '../../context/userContext';
import { useGetDataCallback } from '../../action/useAction';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import userdata from '../../global-state/userdata';

export default function Dashboard() {

    // global state
    const userinfo: any = userdata((state) => state.user)

    const { handleGetData } = useGetDataCallback()
    const [data, setData] = React.useState({} as any)
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()


    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const request: any = await handleGetData("/swap/bank-details")
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
    }, [])

    return (
        <div className=' px-4 lg:px-8 py-14 w-full ' > 
            <Helmet>
                <script type="text/javascript">{`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/647b0a547957702c744b8a2e/1h20a0nu5';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();`}
                </script>
            </Helmet>
            <div className=' w-full flex lg:flex-row flex-col justify-between ' >
                <div>
                    <p className=' text-3xl lg:text-5xl text-[#303179] font-bold ' >Welcome Back,</p>
                    <p className=' font-normal text-xl mt-1 ' >{userinfo?.fullname}</p>
                </div>
                {!loading && (
                    <>
                        {data?.bank_name && (
                            <div className=' w-full lg:w-[430px] lg:mt-0 mt-4 bg-white rounded-xl border border-[#98A2B3] p-6 ' >
                                <div className=' w-full grid grid-cols-2 gap-4 ' >
                                    <div className='' >
                                        <p className=' text-[#344054] font-normal text-sm ' >Account Number</p>
                                        <p className=' text lg:text-xl font-bold text-[#303179] ' >{data?.account_number}</p>
                                    </div>
                                    <div className='' >
                                        <p className=' text-[#344054] font-normal text-sm ' >Bank</p>
                                        <p className=' text lg:text-xl font-bold text-[#303179] ' >{data?.bank_name}</p>
                                    </div>
                                    <div className=' block ' >
                                        <p className=' text-[#344054] font-normal text-sm ' >Account Name</p>
                                        <p className=' text lg:text-xl font-bold text-[#303179] ' >{data?.account_name}</p>
                                    </div>
                                </div>
                                <div className=' w-full lg:mt-0 mt-4 flex justify-end ' >
                                    <button onClick={() => navigate("/dashboard/banks")} className=" bg-[#303179] text-white w-fit px-5 py-3 text-sm font-bold rounded-md" >Edit Bank</button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
            <p className=' font-medium text-xl mb-8 mt-14 ' >Transaction History</p>
            <TransactionComponent />
        </div>
    )
}
