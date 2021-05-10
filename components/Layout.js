import Link from "next/link";

const Layout = ({ children, title }) => (
  <div className="root">
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hire Me</a>
      </Link>
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; 2021</footer>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      header {
        width: 100%;
        font-size: 1.2em;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 90px;
        background: indigo;
      }

      header a {
        color: darkgray;
        text-decoration: none;
      }
      header a:hover {
        color: lightgray;
        font-weight: bold;
      }

      footer {
        padding: 1em;
      }
    `}</style>
    <style global jsx>
      {`
        body {
          font-size: 110%;
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
          background: #f0f0f0;
        }
      `}
    </style>
  </div>
);

export default Layout;
