import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import 'tailwindcss/tailwind.css'

const ModelViewer = dynamic(
  () => import('@google/model-viewer/dist/model-viewer'),
  { ssr: false }
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModelViewer />
      <Component {...pageProps} />
    </>
  )
}