'use client'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.js'

import { useState } from "react";

export default function Home() {

  const [name, setName] = useState<string>('')
  return (
    <>
      <input type="text" placeholder="name" value={name} className='text-black' onChange={e => setName(e.target.value)} />
      <button onClick={async (e) => {
        try {
          e.preventDefault();
          console.log("Hello Kenil...");
          setName('John');
          const res = await addDoc(collection(db, 'users'), { name });
          console.log('Document written with ID: ', res);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }}>Set Name</button>
    </>
  );
}
