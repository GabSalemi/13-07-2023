import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./defaultLayout.module.scss"


const DefaultLayout = ({ children }) => {

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
        <Link href={"/Home"}><img src="https://img.logoipsum.com/253.svg" alt="Logo" /></Link>
        <ul className={styles.navbar__list}>
            {links.map((link) => <li key={link.id}><Link href={link.value}>{link.name}</Link></li> )}
        </ul>
    </div>
    {children}
    </>
}

export default DefaultLayout;