'use client'
import React from 'react'
import { SecondaryButton } from './Button'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Hero = () => {
    const session = useSession()
    const router = useRouter()
  return (
    <div>
      <div className='text-5xl font-extrabold'>
        <span>
            The Indian Crypto 
        </span>
         
        <span className='text-blue-500 pl-2'>
            Revolution
        </span>
      </div>
      <div className='flex justify-center pt-4 text-xl text-slate-400'>
        Create frictionless wallets with just a Google Account !
      </div>
      <div className='pt-8 flex justify-center'>
        {session.data?.user ? <SecondaryButton onClick={()=>router.push("/dashboard")}>Go To Dashboard</SecondaryButton> :<SecondaryButton onClick={()=>signIn("google")}>Sign In with Google</SecondaryButton> }
        
      </div>
    </div>
  )
}

export default Hero
