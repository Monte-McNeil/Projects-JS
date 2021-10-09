import Head from 'next/head'
import  Navbar  from '../components/Navbar';
import Events from '../components/Events'

export default class Home extends React.Component {
  render() {
  return (
    <div>
      <Head>
        <title>Launch Library 2 Event Page</title>
      </Head>
      <Navbar />
      <Events />
    </div>
  )
  }
}