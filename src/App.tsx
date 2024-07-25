import './App.css'
import './tailwind.css'
import Register from './containers/register'
import Login from './containers/login'
import { Home } from './containers/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthRoute from './containers/AuthView'
import NewBlog from './containers/new-blog'
import { PreviewBlog } from './containers/blog-preview'


function App() {

  return (
    <>
      <BrowserRouter>
      <nav aria-label="Global" className="ml-6">
      <div className="">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </a>
        </div>
      </nav>
      <Routes>

          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/' element={<AuthRoute Component={<Home/>} />} />
          <Route path='/new' element={<AuthRoute Component={<NewBlog/>} />} />
          <Route path='/blogs/:id' element={<AuthRoute Component={<PreviewBlog/>} />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
