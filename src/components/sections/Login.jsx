import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    // function for handling the login 
    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const res = await axios.post('https://ephone-backend.onrender.com/login', { email, password });
            // storing the generated token in the local storage for easy accessibility
            localStorage.setItem('token', res.data.token);
            alert('You have sucessfully loged in');
            navigate('/home')
        }
        catch (error) {
            console.error(error);
            alert('Invalid Credentials')

        }
    }


    return (
        <section className=" px-150 bg-gray-100 min-h-screen flex items-center justify-center w-full ">
            <div className=" w-100 mx-auto mt-20 p-6 bg-blue-950  rounded-lg shadow-md ">
                <form onSubmit={handleLogin}>
                    <h1 className="text-orange-500 font-bold text-center text-2xl">Log In</h1> <br />
                    <div className="flex items-center gap-4">
                        <MdEmail className="text-sm text-orange-500" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-3 border border-gray-300 outline-none bg-white w-full mb-4 rounded-md" required /> <br />
                    </div>

                    <div className="flex items-center gap-4">
                        <FaLock className="text-sm text-orange-500" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="p-3 border border-gray-300 outline-none bg-white w-full mb-4 rounded-md" required /> <br />
                    </div>

                    <button type="submit" className="mt-4 p-3 w-full bg-orange-500 hover:bg-orange-700 cursor-pointer text-violet-500 rounded-md">Log In</button>
                </form>
                <p className="text-center text-violet-500 mt-4">Don't have an account? <Link to="/signup" className="text-orange-500 hover:underline">Sign up</Link></p>
            </div>
        </section>




    )
}

export default Login

