import axios from 'axios'
import { RefObject, useRef, MouseEvent } from 'react'

export default function NewBlog() {
  const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

  const formRef = useRef() as RefObject<HTMLFormElement>

  async function handleCreateBlog(e: MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    const token = localStorage.getItem("token")
    try{
      const formdata = new FormData(formRef.current!)
      const data = {...Object.fromEntries(formdata.entries())}
      if(data.tags){
        data.tags = data.tags.toString().split(",") as any
      }
      console.log(data)
      await axios.post(backendUrl + "blogs", data, {
        headers:{Authorization:  `Bearer ${token}`}
      })
      window.location.assign("/")
    }catch(err: any){
      alert(err.response?.data.message || err.message || "error occured")
    }
  }


  return (
    <form ref={ formRef } className='box-border p-8 w-fit' >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">New Blog</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Create a new blog
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                
                  <input
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                content
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Whats on your mind.</p>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                Tags
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                
                  <input
                    id="tags"
                    name="tags"
                    autoComplete="tags"
                    placeholder='general, education, sport, ...'
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-1 text-sm leading-6 text-gray-600">Separate tags with a comma (e.g education, technology)</p>
              </div>
            </div>

           
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <a href='/' >
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>

        </a>
        <button
          onClick={handleCreateBlog}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post
        </button>
      </div>
    </form>
  )
}
