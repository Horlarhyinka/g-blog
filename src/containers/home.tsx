import axios from "axios"
// import blogs from "../assets/blogs"
import { BlogCard } from "../components/blog-card"
import { SearchSection } from "../components/search-section"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"



export const Home = () =>{
    const authToken = localStorage.getItem("token")
    const rawUser = localStorage.getItem("user")
    const user = JSON.parse(rawUser!)    
    const [blogs, setBlogs] = useState<any[]>([])

    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

    useEffect(()=>{
        axios.get(backendUrl + 'blogs', {headers: {
            Authorization: `Bearer ${authToken}`
        }})
        .then(res=>{
            setBlogs(res.data.data)
        })
    },[])

    async function handleSearchBlog(filter: string = "content", value: string=""){
        try{

            const res = await axios.get(`${backendUrl}blogs?filter=${filter}&&value=${value}`, {headers: {
                Authorization: `Bearer ${authToken}`
            }})
            console.log(res.data)
            setBlogs(res.data.data)
        }catch(err: any){
            alert(err.response?.data.message || err.message)
        }
    }

 
    return <div className="home p-8 box-border text-center w-fit overflow-hidden">
        <h4 className="block text-left mb-2  text-2xl font-serif font-semibold text-gray-800 bg-white" >welcome, <span className="font-sans font-extrabold text-blue-700 capitalize" >{user.username}</span></h4>
        
        <SearchSection handler={handleSearchBlog} />
        <div className="box-border mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 bg-slate-50">
            {
                blogs.map(blog=><BlogCard key={blog._id} blog={blog} />)
            }
        </div>
        <a href="/new" >
        <span className="p-8 bg-blue-600 fixed right-8 bottom-8 rounded-full drop-shadow-sm" >
            <Icon icon="icons8:create-new" className="text-white font-bold" style={{fontSize: "28px"}} />
        </span>
        </a>
    </div>
}