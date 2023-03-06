import React from 'react'
import Search from './Search'
import searchImage from '../../assets/search.svg'
import logo from '../../assets/lws.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
    <div
        class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
    >
        <Link to="/">
            <img
                class="h-10"
                src={logo}
                alt="Learn with Sumit"
            />
        </Link>
        <div
            class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
        >
           <Search/>
           
            <img
                class="inline h-4 cursor-pointer"
                src={searchImage}
                alt="Search"
            />
        </div>
    </div>
</nav>
  )
}

export default Navbar
