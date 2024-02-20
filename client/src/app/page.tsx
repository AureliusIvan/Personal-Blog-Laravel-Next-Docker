"use client";
import axios from 'axios';
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  axios.get('http://localhost:9000/api/test').then((res) => {
    console.log(res.data.message);
    setMessage(res.data.message);
  });
  return (<div>
    <h1>
      {message}
      this is message
    </h1>
  </div>)
}
