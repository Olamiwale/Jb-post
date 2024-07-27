import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
    <div className="flex justify-between">
      <Link href={'/'}> job board</Link>

      <nav className="gap-10 flex"> 
        <Link href={'/login'}>Login</Link>
        <Link href={'/new-listing'}>Post a Job</Link>
      </nav>
    </div>
  </header>
  )
}
