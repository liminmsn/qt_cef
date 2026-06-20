import { RouterProvider } from 'react-router'
import { ThemeProvider } from "next-themes";
import router from './router'

export default function () {
  return <ThemeProvider enableSystem={false}
    attribute="data-theme"
    defaultTheme="">
    <div className='p-2'>
      <RouterProvider router={router} />
    </div>
  </ThemeProvider>
}