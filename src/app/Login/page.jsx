
import LoginForm from '../components/LoginForm';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Login = () => {
    return ( 
        <section>
            <h1 className='text-white font-bold text-2xl p-6'> <a href="/" className='hover:text-blue-800'><ArrowBackIosIcon/></a></h1>
            <LoginForm/>
        </section>
     );
}
 
export default Login;