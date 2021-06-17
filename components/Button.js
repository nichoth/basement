// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import styles from './Button.module.css'

export function Button ({ children }) {
  return (<button
      type="button"
      // Note how the "error" class is accessed as a property on
      // the imported `styles` object.
      className={styles.btn}
    >
      {children}
  </button>)
}

