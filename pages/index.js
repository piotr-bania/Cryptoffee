// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

const posts = [
  { title: 'The Comprehensive Fibonacci Analysis',
  excerpt: 'The following series of articles will encourage you to explore a new area of technical analysis – the Comprehensive Fibonacci analysis'},
  { title: 'Second Post',
  excerpt: 'Second excerpt goes here.'}
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Cryptoffee | Cryptocurrency Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

      </div>
        
    </div>
  )
}

// export default Home
