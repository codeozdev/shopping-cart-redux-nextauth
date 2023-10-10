import Link from 'next/link'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Navbar() {
  return (
    <div className='container'>
      <div className='flex w-fit flex-wrap justify-center gap-3 sm:gap-10 mx-auto font-medium py-4 text-blackish text-xs sm:text-base px-5 sm:px-0'>
        <Link href={'/'} className='navbar_link relative'>
          HOME
        </Link>

        <Link href={'#'} className='navbar_link relative'>
          MEN{`'`}S
        </Link>

        <Link href={'#'} className='navbar_link relative'>
          WOMEN{`'`}S
        </Link>

        <Link href={'#'} className='navbar_link relative'>
          JEWELRY
        </Link>

        <Link href={'#'} className='navbar_link relative uppercase'>
          electronics
        </Link>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}
