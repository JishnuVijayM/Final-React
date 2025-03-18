import React, { useState } from 'react';
import './Home.css'
import Heading from './components/Heading';
import Button from './components/Button';


function App() {
  const [data, setData] = useState()

  const loadData = () => 
    setData([
      { data: "one", color: "yellow" },
      { data: "two", color: "green" },
      { data: "three", color: "blue" }
    ])
  

  return (
    <>
      <Button onClick={loadData} />

      {data && data?.map((item, i) => (
        <div className='d-flex gap-3'>
          <h1>{i + 1}. </h1>  <Heading content={item.data} theme={item.color} />
        </div>
      ))}

    </>
  );
}

export default App;