import type { AppProps } from "next/app"
import "@/styles.css"
import Link from "next/link"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="top-nav">
      <Link className="nav-text-large" href="/">Experimental Site</Link>
      
        <ul className="nav-list">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}
