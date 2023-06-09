import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from "@/components/Layouts/Layouts";
import {ChakraProvider} from "@chakra-ui/provider";

export default function App({ Component, pageProps }: AppProps) {

  return(
      <ChakraProvider>
            <Layouts>
              <Component {...pageProps} />
            </Layouts>
      </ChakraProvider>
  )
}
