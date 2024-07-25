import { useRef, RefObject, MouseEvent } from "react"
import axios from "axios"


const Login = () =>{

  const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

  const formRef = useRef() as RefObject<HTMLFormElement>


  async function handleLogin(e: MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    const formData = new FormData(formRef.current!)
    const data = Object.fromEntries(formData.entries())
    try{
      console.log(data)
      const res = await axios.post(backendUrl + "auth/login", data)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      window.location.assign("/")
    }catch(err: any){
      alert(err.response?.data?.message || err.message || "error occured")
    }
  }


    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-center text-4xl font-bold mb-8 text-12xl mt-24 text-blue-400 top-0" >g-blog</h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form ref={formRef} action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  onClick={handleLogin}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">a
              dont have an account?{' '}
              <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                register here
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  

export default Login