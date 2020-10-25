import Head from 'next/head'

// import Layout from '../components/Layout'

const IndexPage = () => (
  <div className="flex flex-col h-screen">
    {/* <Head>
      <title>AshCo's Text Formatter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}

    <nav className="h-12 bg-gray-500 text-white font-medium text-xl flex items-center justify-around">
      <h1 className="">TRANSFORMER</h1>
    </nav>
    <main className="h-full sm:flex">
      <div className="bg-black min-h-1/2 w-full">
        Input
      </div>
      <div className="bg-white min-h-1/2 w-full">
        Output
      </div>
    </main>
    {/* <Layout>

    </Layout> */}
  </div>

)

export default IndexPage