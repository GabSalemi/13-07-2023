import styles from "./form.module.scss"
import { useState } from "react"
import Input from "../input/Input"
import { auth } from "../../mocks/auth"
import { useRouter } from "next/router"

const Form = ({type}) => {
    const Router = useRouter()
    

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const onHandleSubmit = (e) => {
        e.preventDefault();
        Router.push("/Dashboard")

        try {
            if (auth.email === email && auth.password === password ) {
                ;
                localStorage.setItem("auth", true)
                localStorage.setItem("username", auth.username)
                localStorage.setItem("email", auth.email)
                localStorage.setItem("itinerary", JSON.stringify(auth.itinerary))
                localStorage.setItem("userimg", auth.profileImg)
            }
            throw new Error("Credenziali non valide")
        } catch (error) {
            console.log(error)
        }
        
    }

    return <div>{type === "login" ? <div className={styles.form__section}>
            <h1>Login form</h1>
            <label htmlFor="">Your Username</label>
            <Input type={"text"} setState={setUsername}/>
            <label htmlFor="">Your E-mail</label>
            <Input type={"email"} setState={setEmail}/>
            <label htmlFor="">Your password</label>
            <Input type={"password"} setState={setPassword}/>
            <input type="submit" value="submit" onClick={(e) => onHandleSubmit(e)} className={styles.submit__button}/>
        </div> : <div className={styles.message__form}>
                <h1>Send us a message!</h1>
                <label htmlFor="">Your Name</label>
                <Input type={"text"}/>
                <label htmlFor="">Your E-mail</label>
                <Input type={"email"}/>
                <label htmlFor="">Your Message</label>
                <Input type={"textarea"}/>
                <input type="submit" value="submit" className={styles.submit__button}/>
            </div>}
            </div>
}

export default Form;