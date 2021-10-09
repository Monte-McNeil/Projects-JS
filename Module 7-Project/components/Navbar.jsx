import React from 'react'


export default class Navbar extends React.Component {
    render() {
    return (
    <div className='text-center text-4xl bg-blue-400 py-10'>
      <header>
        <h2>Launch Library 2</h2>
      </header>
      <a href='https://thespacedevs.com/llapi' target_blank>
        <button className='bg-gray-400 rounded-sm text-sm'>Link To API</button>
      </a>
    </div> 
  );
  }
};