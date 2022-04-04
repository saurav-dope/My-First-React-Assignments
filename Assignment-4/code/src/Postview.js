import React, { useEffect, useState } from 'react';
import './Postview.css';
import Card from './components/Card';
import Spinner from './components/Spinner';
import Header from './components/Header';

const url = 'http://localhost:3004/user';

const Postview = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    setPeople(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <Header></Header>
        <Card people={people}></Card>
      </>
    );
  }
  // return <div className="site-container"></div>;
};

export default Postview;
