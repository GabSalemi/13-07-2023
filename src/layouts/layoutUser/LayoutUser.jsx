
import { useState, useEffect } from "react";
import Form from "../../components/form";
import Link from "next/link";
import styles from "./layoutUser.module.scss"

const LayoutUser = ({ children }) => {
  

  const [isLogged, setLogged] = useState(false);
  const [loggedUsername, setLoggedUsername] = useState("")
  const [loggedEmail, setLoggedEmail] = useState("")
  const [loggedItinerary, setLoggedItinerary] = useState("")
  const [loggedUserImg, setLoggedUserImg] = useState("")


  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
    setLoggedUsername(localStorage.getItem("username"));
    setLoggedEmail(localStorage.getItem("email"));
    setLoggedItinerary(JSON.parse(localStorage.getItem("itinerary")))
    setLoggedUserImg(localStorage.getItem("userimg")
        )
  }, []);

    return <div>
                <div className={styles.layoutUser}>
                {isLogged === true ? <div className="user__sidebar">
                    <img src={loggedUserImg} alt={loggedUsername} />
                    <h2>{loggedUsername}</h2>
                    <h4>{loggedEmail}</h4>
                </div> : <span>Login to see your dashboard!</span>}
                <div className="itinerary__div">
                    {loggedItinerary && loggedItinerary.map((element) => <div>
                        <img src={element.img} alt={element.name} />
                        <h4>{element.name}</h4>
                    </div>)}
                </div>
                <div className="buttons__div">
                    <button><Link href={"/"}>Return to Home</Link></button>
                    <button><Link href={"/Locations"}>Return to Locations</Link></button>
                </div>
                </div>
                {children}
            </div>
        
}

export default LayoutUser;