"use client"

import { useState } from "react"

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confrm, setConfrm] = useState('')

  const [error, setError] = useState('')
  const [errorEmail, seterrorEmail] = useState('')
  const [errorPass, seterrorPass] = useState('')

  
  function Validations(e) {
    e.preventDefault()

    setError('')
    seterrorEmail('')
    seterrorPass('')

    const nam = name.trim()
    const upper = /[A-Z]/.test(pass)
    const lower = /[a-z]/.test(pass)
    const num = /\d/.test(pass)
    const char = /[^A-Za-z0-9 ]/.test(pass)

    if (!/^[A-Za-z\s]+$/.test(nam)) { 
      setError('Invalid! Name should contain only alphabets')
      return
    }

   
    if (/@.*\d/.test(email)) {
      seterrorEmail('Invalid! Numbers are not allowed after @')
      return
    }

    
    if (!upper || !lower || !num || !char || pass.length < 8) {
      seterrorPass(
        'Password must have 8 characters, uppercase, lowercase, number and special character'
      )
      return
    }

    
    if (confrm.trim() !== pass.trim()) {
      seterrorPass('Invalid! Passwords do not match')
      return
    }

    alert('Signup successful!')
    setName('')
    setEmail('')
    setPass('')
    setConfrm('')
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen flex-col bg-blue-300 p-4">
      
      <h2 className="font-bold text-xl text-slate-800">Welcome!</h2>
      <h3 className="font-medium mb-6 text-slate-700">To continue, Register Now</h3>

      <div className="bg-blue-200 rounded-xl w-[350px] min-h-[520px] p-6 flex flex-col justify-center shadow-lg">
        
        <form onSubmit={Validations} className="flex flex-col items-center w-full gap-3">

          <div className="w-full max-w-[260px]">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 pl-1">
              NAME
            </label>
            <input
              type="text"
              id="name"
              required
              minLength={2}
              className="w-full border-2 rounded-lg border-blue-500 mt-1 p-1.5 bg-white text-black focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && (
              <p className="text-red-600 text-xs mt-1 font-medium break-words px-1">
                {error}
              </p>
            )}
          </div>

          <div className="w-full max-w-[260px]">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 pl-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full border-2 rounded-lg border-blue-500 mt-1 p-1.5 bg-white text-black focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorEmail && (
              <p className="text-red-600 text-xs mt-1 font-medium break-words px-1">
                {errorEmail}
              </p>
            )}
          </div>

          <div className="w-full max-w-[260px]">
            <label htmlFor="pass" className="text-sm font-semibold text-gray-700 pl-1">
              PASSWORD
            </label>
            <input
              type="password"
              id="pass"
              required
              minLength={8}
              className="w-full border-2 rounded-lg border-blue-500 mt-1 p-1.5 bg-white text-black focus:outline-none"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="w-full max-w-[260px]">
            <label htmlFor="confrm" className="text-sm font-semibold text-gray-700 pl-1">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              id="confrm"
              required
              minLength={8}
              className="w-full border-2 rounded-lg border-blue-500 mt-1 p-1.5 bg-white text-black focus:outline-none"
              value={confrm}
              onChange={(e) => setConfrm(e.target.value)}
            />
            {errorPass && (
              <p className="text-red-600 text-xs mt-1 font-medium break-words px-1">
                {errorPass}
              </p>
            )}
          </div>

          <div className="w-full max-w-[260px] flex justify-center mt-3">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-2 cursor-pointer transition-colors shadow-md"
            >
              SUBMIT
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}
