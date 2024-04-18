import {useNavigate} from "react-router-dom";

export default function Campo() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/home');
    };
    return (
        <div className='flex justify-center items-center mt-6'>
            <form  method="get" className=''>
                <div><input placeholder='Username' type="text" className='mb-16 rounded-full pl-10 py-2 text-2xl font-bold'  /></div>
                <div><input placeholder='Password' type="password" className='mb-16 rounded-full pl-10 py-2 text-2xl font-bold'/></div>
                <div className="flex justify-center items-center text-3xl">
                    <button onClick={goToHomePage} className="bg-[#3C5F7C] hover:bg-[#325068]
                      text-white font-bold py-10 px-32 rounded-full">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}