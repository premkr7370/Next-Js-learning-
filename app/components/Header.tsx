"use client";
import Link from "next/link";
import {useRouter}from "next/navigation";

import React from 'react'

function Header() {

      const navigate=useRouter();
  return (
    <div>
      <header>
        <h1>Header</h1>
         <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            <button onClick={()=>navigate.push("/DynamicRouting")}>Dynamic Routing</button>

      </header>
    </div>
  )
}

export default Header
