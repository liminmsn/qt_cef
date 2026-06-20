import { RouterProvider } from 'react-router'
import { ThemeProvider } from "next-themes";
import router from './router'
import './global.css'

export default function () {
  return <ThemeProvider attribute="class" defaultTheme='dark'>
    <div className='p-2' data-theme="green">
      <RouterProvider router={router} />
    </div>
  </ThemeProvider>
}