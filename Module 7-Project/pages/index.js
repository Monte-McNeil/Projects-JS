import Head from 'next/head'
import  Navbar  from '../components/Navbar';
import  Landing  from '../components/Landing';
import React from 'react';

export default class Home extends React.Component {
  render() {
  return (
    <div>
      <Head>
        <title>Launch Library 2</title>
      </Head>
      
      <Navbar />
      <Landing />
    </div>
  )
  }
}
