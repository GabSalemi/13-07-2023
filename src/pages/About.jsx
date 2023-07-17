import Head from "next/head";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { DATA } from "@/layouts/defaultLayout/defaultLayout";

const About = () => {

  const sectionData = useContext(DATA)
  const [hotels, setHotels] = useState([])
  console.log(sectionData)

  useEffect(() => {
    fetch("https://api.npoint.io/a8298843d4a1a5adab2f")
    .then((res) => res.json())
    .then((data) => setHotels(data))
}, [])

    return <>
        <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h1>Our partners:</h1>
        {hotels.map((hotel) => <div className="hotels__card" key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <h3>{hotel.location}</h3>
          <div>
            <h4>{hotel.rating}</h4>
            <p>{hotel.website}</p>
          </div>
          <div>
            <img src={hotel.imageLocation} alt={hotel.name} />
          </div>
        </div>)}
      </div>
    </>
}

export default About;