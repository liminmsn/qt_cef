import { RouterProvider } from 'react-router'
import { ThemeProvider } from "next-themes";
import router from './router'

export default function () {
  return <ThemeProvider
    enableSystem>
    <div className='h-svh'>
      <RouterProvider router={router} />
    </div>
  </ThemeProvider>
}