import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {

  const [isLogged, setLogged] = useState(false);
  const [loggedUsername, setLoggedUsername] = useState("")
  const [loggedEmail, setLoggedEmail] = useState("")
  const [loggedItinerary, setLoggedItinerary] = useState([])


  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
    setLoggedUsername(localStorage.getItem("username"));
    setLoggedEmail(localStorage.getItem("email"));
    setLoggedItinerary(JSON.parse(localStorage.getItem("itinerary")))
  }, []);

  return <div className="Dashboard">
            <div className="title__div">
              <h1>Your Profile</h1>
              <Link href={"/Home"}><h3>Return to home</h3></Link>
            </div>
            <h2>{loggedUsername}</h2>
            <p>{loggedEmail}</p>
            <h2>Itineraies</h2>
            {loggedItinerary.map((element) => <div>
                              <img src={element.img} alt={element.name} />
                              <h4>{element.name}</h4>
                          </div>)}
          </div> 
} 