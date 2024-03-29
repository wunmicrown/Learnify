import axios from "axios"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { loginSchema } from "../Schema/userSchema"


const UserLogin = () => {
    const navigate = useNavigate()
    const URL = "http://localhost:3000/user/login"
    // const [loading, setLoading] = useState(true)
    
    // useEffect(() => {
      
    // })
    

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        loginSchema: loginSchema,
        onSubmit: (values) => {
            console.log(values);
            axios.post(URL, values)

        }

    });
    return (
        <section className="flex justify-center bg-gradient-to-r from-slate-600 to-slate-900 h-screen ">
            <main className=" lg:m-20 shadow-md bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-lg">
            <h1 className="text-center w-full mt-10 font-bold text-3xl text-yellow-500 ">Student Portal</h1>
            <form onSubmit={handleSubmit} className="p-10 ">
                <input type="email" placeholder='Email address' onChange={handleChange} name="email" value={values.email} className="w-full mb-3 p-2 rounded-md outline-1 outline-slate-400 text-black" /> <span>{errors.email}</span>
                <input type="password" placeholder='Password' onChange={handleChange} name="password" value={values.password}  className="w-full p-2 mb-3 rounded-md outline-1 outline-slate-400 text-black"/> <span>{errors.password}</span>
                <div className="flex justify-between mb-3">
                    <div>
                        <input type="checkbox" name="rememberMe" id="" /> <label>Remember me</label>

                    </div>
                    <Link to='/forgot'>Forgot password</Link>
                </div>
                <button type="submit" className="bg-yellow-500 p-3 text-white rounded w-full mb-3 font-bold">login</button>
                <p className="text-center">Don't have an account? <Link to='/signup' className="text-gray-500 font-bold">Sign up</Link></p>
            </form>
            
            </main>
        </section>
    )
}



export default UserLogin