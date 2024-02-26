'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';


const LoginForm = () => {

    const searchParams = useSearchParams();

    const error = searchParams.get('error');

    async function login(e) {

        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        signIn('credentials' , {
            ...data,
            callbackUrl: '/HomePage',
        });

    }

    return ( 
        
        <form onSubmit={login} className="max-w-sm mx-auto mt-24">
            
                <h1 className='text-white text-3xl font-bold text-center mb-5'>Login</h1>

            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>


            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800">Submit</button>

            {error === 'CredentialsSignin' && (<div className='text-red-500 font-bold text-xl text-center bg-slate-900 mt-5'>
                Erro in Login
            </div>) }
        </form>
     );
}
 
export default LoginForm;