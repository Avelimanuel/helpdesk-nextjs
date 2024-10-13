import Link from 'next/link'


const NotFound = () => {
  return (
    <main className="text-center">
        <h2 className='text-4xl'>Page not found</h2>
        <Link href="/">Dashboard</Link>

    </main>
  )
}

export default NotFound
