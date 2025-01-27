'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { PrimaryButton } from './Button'

const Appbar = () => {
  const session = useSession()
  return (
    <div className='px-2 border-b py-2 justify-between flex'>
      <div>
        DCEX
      </div>
      <div>
        {session.data?.user? <PrimaryButton onClick={()=>signOut()}>Logout</PrimaryButton> : <PrimaryButton onClick={()=>signIn('google')}>Sign In</PrimaryButton>}
      </div>
    </div>
  )
}

export default Appbar
