import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery';
import ToDoList from './components/ToDoList';
import Profile from './components/Profile';

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }


function App() {

  return (
    <>
      {/* Done with how to write your first React component */}
       <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>

      {/* Done with when and how to create multi-component files */}
      <Gallery/>

      {/* Done with how to add markup to JavaScript with JSX */}
      {/* Done with how to use curly braces with JSX to access JavaScript functionality from your components */}
      <ToDoList/>

      {/* Done with how to configure components with props */}
      <Profile/>

    </>
  )
}

export default App
