import { RouterProvider } from 'react-router'
import router from './router'
import './global.css'

export default function() {
  return <div className='p-2'>
    <RouterProvider router={router} />
  </div>
}