import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Header() {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4 flex items-center justify-between'>
        <div className='flex gap-2'>
          <div className='header_icons'>
            <BsFacebook />
          </div>

          <div className='header_icons'>
            <BsTwitter />
          </div>

          <div className='header_icons'>
            <BsInstagram />
          </div>

          <div className='header_icons'>
            <BsLinkedin />
          </div>
        </div>

        <div className='text-gray-500 text-[12px]'>
          <b>FREE SHOPPING</b> THIS WEEK ORDER OVER $55
        </div>
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
