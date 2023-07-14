import '@/styles/globals.scss'
import DefaultLayout from '@/layouts/defaultLayout'



export default function App({ Component, pageProps }) {
  return  <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
}
