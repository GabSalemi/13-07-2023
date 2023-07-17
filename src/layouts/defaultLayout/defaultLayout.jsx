import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./defaultLayout.module.scss"
import { createContext, useContext, useReducer } from "react";

export const DATA = createContext({
  heroImg: [{
    id: 1,
    name: "⧎",
    value: "city",
    imgUrl: "https://cdn.pixabay.com/photo/2020/05/17/21/17/road-5183608_640.jpg"
    },
    {
    id: 2,
    name: "▽",
    value: "sea",
    imgUrl: "https://cdn.pixabay.com/photo/2017/04/06/17/43/water-2208931_640.jpg"
    },
    {
    id: 3,
    name: "△",
    value: "mountain",
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/02/18/42/nature-3284751_1280.jpg"
    }
    ]

}) 


const DefaultLayout = ({ children }) => {

  const dataContext = useContext(DATA)
  
  
  
  const [isLogged, setLogged] = useState(false);
  

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

    const links = [
        {
          id: 1,
          name: "Locations",
          value: "/Locations",
        },
        {
          id: 2,
          name: "About",
          value: "/About",
        },
        {
          id: 3,
          name: "Contacts",
          value: "/Contacts",
        }, 
        {
          id: 4,
          name: "👤",
          value: "/Login",
        }
      ];

    return <>
    <div className={styles.navbar}>
        <Link href={"/"}><img src="https://img.logoipsum.com/253.svg" alt="Logo" /></Link>
        <ul className={styles.navbar__list}>
            {links.map((link) => <li key={link.id}><Link href={link.value}>{link.name}</Link></li> )}
        </ul>
    </div>
    {children}
    </>
}

export default DefaultLayout;

