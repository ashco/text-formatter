import Head from 'next/head'

import Nav from '../components/Nav'
import Container from '../components/Container'
import Button from '../components/Button'
import Textarea from '../components/Textarea'

const IndexPage = () => (
  <div className="flex flex-col h-screen">
    {/* <Head>
      <title>AshCo's Text Formatter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}

    <Nav/>
    <main className="h-full sm:flex">
      <Container mode="input">
        <Textarea />
        <Button>
          TOGGLE
        </Button>
      </Container>
      <Container mode="output">
        <Textarea />
        <Button type='primary'>
          COPY
        </Button>
      </Container>
    </main>
  </div>

)

export default IndexPage