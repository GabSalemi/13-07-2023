import Head from "next/head";
import styles from "@/components/hero/hero.module.scss"
import { useContext } from "react";
import { DATA } from "@/layouts/defaultLayout/defaultLayout";
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "select_city": {
        
            return {selected: "city"}
        }
        case "select_sea": {
            return {selected: "sea"}
        }
        case "select_mountain": {
            return {selected: "mountain"}
        }
    }
  }


const Hero = () => {
    const sectionData = useContext(DATA)
    const [state, dispatch] = useReducer(reducer, { selected: "none"});
    console.log(state.selected)
    

return <>
            <div className={styles.hero__section}>
                <h1>Hero Section</h1>
                <div className={state.selected === "city" ? styles.section__selected : styles.img__section} onClick={() => {dispatch({ type: 'select_city' })}}>
                    <img src={sectionData.heroImg[0].imgUrl} alt={sectionData.heroImg[0].value} />
                    <h2>{sectionData.heroImg[0].name}</h2>
                </div>
                <div className={state.selected === "sea" ? styles.section__selected : styles.img__section} onClick={() => {dispatch({ type: 'select_sea' })}}>
                    <img src={sectionData.heroImg[1].imgUrl} alt={sectionData.heroImg[1].value} />
                    <h2>{sectionData.heroImg[1].name}</h2>
                </div>
                <div className={state.selected === "mountain" ? styles.section__selected : styles.img__section} onClick={() => {dispatch({ type: 'select_mountain' })}}>
                    <img src={sectionData.heroImg[2].imgUrl} alt={sectionData.heroImg[2].value} />
                    <h2>{sectionData.heroImg[2].name}</h2>
                </div>
            </div>
        </>
}

export default Hero;