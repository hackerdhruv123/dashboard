import { useState } from 'react'

export default function RoleSwitcher() {

  const [role, setRole] = useState('Admin')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = () => {

    if (!id || !password) {
      setMessage('Please enter ID and Password')
      return
    }

    if (
      role === 'Admin' &&
      id === 'admin123' &&
      password === 'admin'
    ) {
      setMessage('Admin Login Successful ')
    }

    else if (
      role === 'Teacher' &&
      id === 'teacher123' &&
      password === 'teacher'
    ) {
      setMessage('Teacher Login Successful ✅')
    }

    else if (
      role === 'Student' &&
      id === 'student123' &&
      password === 'student'
    ) {
      setMessage('Student Login Successful ✅')
    }

    else {
      setMessage('Invalid Credentials ❌')
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 border">

      <h1 className="text-3xl font-bold text-center text-gray-800">
        Login Portal
      </h1>

      <div className="flex gap-3">
        </div>

        <button
          onClick={() => setRole('Admin')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all
          ${
            role === 'Admin'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100'
          }`}
        >
          Admin
        </button>

        <button
          onClick={() => setRole('Teacher')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all
          ${
            role === 'Teacher'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100'
          }`}
        > </button>
        </div>
        )}
