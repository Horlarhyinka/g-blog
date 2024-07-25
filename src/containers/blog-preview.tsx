import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Avatar from "../assets/avatar.png"

interface Blog{title: string
    content: string
    tags: string[],
    author: {
        username: string
    },
    _id: string,
    createdAt: string
}

export function PreviewBlog(){

    const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

    const authToken = localStorage.getItem("token")
    const {id} = useParams()

    useEffect(()=>{
        axios.get(backendUrl + 'blogs/'+id, {headers: {
            Authorization: `Bearer ${authToken}`
        }})
        .then(res=>{
            setBlog(res.data)
        })
    },[])

    const [blog, setBlog] = useState<Blog>()
    return !blog?<p className="p-8" >loading blog...</p>:
    <>
    <div className="relative mt-12 mx-4 flex items-center gap-x-4 box-border">
      <img alt="" src={Avatar} className="h-10 w-10 rounded-full bg-gray-50" />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <a href={""}>
            <span className="absolute inset-0" />
            {blog.author.username}
          </a>
        </p>
      </div>
    </div>
    <article className="box-border w-fit" >
        <h1 className="title text-2xl font-semibold mx-4 mt-4 mb-8 text-gray-800">
            {blog.title}
        </h1>
        <div className="flex items-center gap-x-4 text-xs mx-5 mb-8">
        <time className="text-gray-500">
        {(new Date(blog!.createdAt)).getFullYear()} - {(new Date(blog!.createdAt)).getMonth()} - {(new Date(blog!.createdAt)).getDate()}
        </time>
        <div>
           {
            blog.tags.map((tag, i)=><a
            key={i}
            className=" relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:text-white hover:bg-gray-600" > {tag} </a>)
            }
        </div>

        </div>
      
        <p className="content text-gray-700 font-normal ml-4 p-2 break-words block w-fit xl:max-w-lg">
            {blog.content}
        </p>

    </article>

    </>
}