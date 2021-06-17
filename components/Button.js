// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import styles from './Button.module.css'

export function Button ({ children, onClick }) {
  return (<button
      type="button"
      onClick={onClick}
      // Note how the "error" class is accessed as a property on
      // the imported `styles` object.
      className={styles.btn}
    >
      {children}
  </button>)
}

