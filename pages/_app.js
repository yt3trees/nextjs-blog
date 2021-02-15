//グローバルなスタイリングを可能にするためのファイル
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }