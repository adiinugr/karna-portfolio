import { Provider } from "../context/MenuContext"

import Transition from "../components/animation/Transition"

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
