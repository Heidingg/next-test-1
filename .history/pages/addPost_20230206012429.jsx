import Head from 'next/head'

import NewPostForm from '../components/NewPostForm'

import axios from 'axios'

import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Profile({ user }) {
  const router = useRouter()


  const handleSubmit = async ({ language, code }) => {
    const { data } = await axios.post('/api/posts', {
      language,
      code,
    })
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Tell Me Something</title>
      </Head>
      <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
        <h1 className='text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl mb-6'>Tell Me Something</h1>

        <div className='mt-6'>
          <NewPostForm className='max-w-5xl' onSubmit={handleSubmit} />
        </div>

      </div>
    </>
  )
}