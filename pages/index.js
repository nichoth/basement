import Head from 'next/head'
import { useState } from 'react';
import { Button } from '../components/Button'
import { Grid } from '../components/Grid'
import { TextHr } from '../components/TextHr'
import { Field } from '../components/Field'

export default function Home() {

  const [loginState, setLoginState] = useState({
    isResolving: false,
    loggedInWith: null
  });

  function submit (ev) {
    ev.preventDefault()
    console.log('login with email and pw')
    console.log('email', ev.target.elements.email.value)
    console.log('password', ev.target.elements.password.value)
  }

  function loginProvider (type) {
    return function (ev) {
      ev.preventDefault()
      console.log('login with ' + type)

      setLoginState({...loginState, isResolving: true })

      // wait 2 seconds
      setTimeout(() => {
        console.log('done loggin in')
        setLoginState({
          isResolving: false,
          loggedInWith: type
        })
      }, 2000)
    }
  }

  function active (state, type) {
    return state === type
  }

  return (<div>
    <div className="container">
      <Head>
        <title>Sign up to BaseGit</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>

      <main>
        <div>
          <img src="/mark.svg" />
        </div>
        <h1 className="title">
            Sign up to BaseGit
        </h1>

        <p className="description">
            BaseGit is the best way to store information.
        </p>

        <h2 className="provider">Continue with a provider</h2>

        <Grid>
          <Button active={active(loginState.loggedInWith, 'fb')}
            onClick={loginProvider('fb')}
            disabled={loginState.isResolving}
          >
            <img src="/fb.svg"></img>
          </Button>

          <Button active={active(loginState.loggedInWith, 'twitter')}
            onClick={loginProvider('twitter')}
            disabled={loginState.isResolving}
          >
            <img src="/twit.svg"></img>
          </Button>

          <Button active={active(loginState.loggedInWith, 'gh')}
            onClick={loginProvider('gh')}
            disabled={loginState.isResolving}
          >
            <img src="/gh.svg"></img>
          </Button>
        </Grid>

        <TextHr>
          Or with your work email
        </TextHr>

        <form className="sign-in-form" onSubmit={submit}>
          <Field type="email" name="email" placeholder="name@domain.com"
            maxlength="64" label="Email address" />

          <Field name="password" placeholder="password" type="password"
            label="Password" />

          <div className="form-submit-btn">
            <button type="submit" disabled={loginState.isResolving}>
              Sign up
            </button>
          </div>
        </form>

      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer> */}

      <style jsx>{`
        .container {
          background-color: white;
          min-height: 100vh;
          padding: 0 3rem;
          padding-bottom: 6rem;
          display: flex;
          flex-direction: column;
          width: 50%;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

    <div className="image">
      <img src="/static/rocket.png" />
    </div>

  </div>)
}
