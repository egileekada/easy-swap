import { useToast } from '@chakra-ui/react';
import React from 'react' 

type props = {
    type?: boolean,
    hide?: boolean,
    text: string,
}

export default function CopyButtton({type, text, hide}: props) {

    const [copySuccess, setCopySuccess] = React.useState('');
    const textAreaRef: any = React.useRef(null);
    const toast = useToast()

    function copyToClipboard(item: any) { 
        navigator.clipboard.writeText(item)
        // setCopySuccess('Copied!');
        toast({
            title: 'copied successful', 
            status: 'success',  
            duration: 3000, 
            position:"top"
        }) 
        // const t1 = setTimeout(() => {
        //     setCopySuccess('');
        //     clearTimeout(t1); 
        // }, 2000); 
    };

    return ( 
        <div className=' w-full flex items-center gap-4 ' > 
            <textarea
                className=' hidden'
                ref={textAreaRef}
                value={text+""}
            />
            {!type && ( 
                <div className=' w-full break-all lg:gap-0 gap-2  py-3 px-4 bg-[#F9FAFB] border flex text-sm font-bold items-center  border-[#D0D5DD] rounded-lg ' >
                    <p className=' break-all' >{text}</p>
                    <div className='  w-fit ml-auto  lg:hidden ' >
                        <svg role='button' onClick={()=> copyToClipboard(text)} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.34045 4V1C4.34045 0.734784 4.44741 0.48043 4.63779 0.292893C4.82817 0.105357 5.08638 0 5.35562 0H17.5376C17.8069 0 18.0651 0.105357 18.2555 0.292893C18.4458 0.48043 18.5528 0.734784 18.5528 1V15C18.5528 15.2652 18.4458 15.5196 18.2555 15.7071C18.0651 15.8946 17.8069 16 17.5376 16H14.4921V19C14.4921 19.552 14.0353 20 13.4698 20H1.30206C1.16818 20.0008 1.03547 19.9755 0.911546 19.9256C0.78762 19.8757 0.674922 19.8022 0.579928 19.7093C0.484934 19.6164 0.409516 19.5059 0.358008 19.3841C0.3065 19.2624 0.279916 19.1319 0.279785 19L0.282831 5C0.282831 4.448 0.739656 4 1.3051 4H4.34045ZM2.31316 6L2.31012 18H12.4618V6H2.31316ZM6.37079 4H14.4921V14H16.5225V2H6.37079V4Z" fill="#5C5F62"/>
                        </svg>
                    </div>
                </div>
            )}
            {type && (
                <p>{text.slice(0,17)+"..."}</p>
            )}
            {!hide && (
                <div className=' w-[20px] ml-auto lg:w-[40px] flex justify-end ' >
                    <svg role='button' onClick={()=> copyToClipboard(text)} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.34045 4V1C4.34045 0.734784 4.44741 0.48043 4.63779 0.292893C4.82817 0.105357 5.08638 0 5.35562 0H17.5376C17.8069 0 18.0651 0.105357 18.2555 0.292893C18.4458 0.48043 18.5528 0.734784 18.5528 1V15C18.5528 15.2652 18.4458 15.5196 18.2555 15.7071C18.0651 15.8946 17.8069 16 17.5376 16H14.4921V19C14.4921 19.552 14.0353 20 13.4698 20H1.30206C1.16818 20.0008 1.03547 19.9755 0.911546 19.9256C0.78762 19.8757 0.674922 19.8022 0.579928 19.7093C0.484934 19.6164 0.409516 19.5059 0.358008 19.3841C0.3065 19.2624 0.279916 19.1319 0.279785 19L0.282831 5C0.282831 4.448 0.739656 4 1.3051 4H4.34045ZM2.31316 6L2.31012 18H12.4618V6H2.31316ZM6.37079 4H14.4921V14H16.5225V2H6.37079V4Z" fill="#5C5F62"/>
                    </svg>
                    {copySuccess}
                </div>
            )}
            {hide && (
                <div className=' w-[20px] lg:w-[40px] hidden lg:flex justify-end ' >
                    <svg role='button' onClick={()=> copyToClipboard(text)} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.34045 4V1C4.34045 0.734784 4.44741 0.48043 4.63779 0.292893C4.82817 0.105357 5.08638 0 5.35562 0H17.5376C17.8069 0 18.0651 0.105357 18.2555 0.292893C18.4458 0.48043 18.5528 0.734784 18.5528 1V15C18.5528 15.2652 18.4458 15.5196 18.2555 15.7071C18.0651 15.8946 17.8069 16 17.5376 16H14.4921V19C14.4921 19.552 14.0353 20 13.4698 20H1.30206C1.16818 20.0008 1.03547 19.9755 0.911546 19.9256C0.78762 19.8757 0.674922 19.8022 0.579928 19.7093C0.484934 19.6164 0.409516 19.5059 0.358008 19.3841C0.3065 19.2624 0.279916 19.1319 0.279785 19L0.282831 5C0.282831 4.448 0.739656 4 1.3051 4H4.34045ZM2.31316 6L2.31012 18H12.4618V6H2.31316ZM6.37079 4H14.4921V14H16.5225V2H6.37079V4Z" fill="#5C5F62"/>
                    </svg>
                    {copySuccess}
                </div>
            )}
        </div>  
    )
} 