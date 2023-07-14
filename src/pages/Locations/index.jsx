import Head from "next/head";
import LocationsCards from "@/components/locationsCards";
import { roomList } from "@/mocks/roomlist";
import { useState } from "react";
import { useRouter } from "next/router";

export default function(props) {

  const [locations, setLocations] = useState(roomList)

   const Router = useRouter()

    const onHandleClick = (id) => Router.push(`/Locations/${id}`);

    return <>
        <Head>
        <title>Locations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="locations__page">
        {props.data.map((room) => <LocationsCards data={room} id={room.id}/>)}
    </div>
    </>
}

export async function getServerSideProps() {
  const res = await fetch("https://api.npoint.io/a8298843d4a1a5adab2f");
  const data = res.status === 200 ? await res.json() : {};
 

  return {
    props: {
      data: data
    }
  }

}