import Transition from "../components/Transition"

import { Provider } from "../context/MenuContext"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </Provider>
  )
}

export default MyApp
