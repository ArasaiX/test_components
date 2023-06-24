import { ButtonCustom } from "./button";
import styles from "../../styles/HeaderCustom.module.css"

export function HeaderCustom() {
    return (
        <div className={styles.header}>
            <section  className={styles.imageContainer}>
            <img src="/2.jpg" alt="header" />
            <img src="/2.jpg" alt="header" />
            </section>
        <h1>This is the most impresive header of the fucking world</h1>
        <nav className={styles.navigationBar}>
            <ButtonCustom name="Home" route="/"/>
            <ButtonCustom name="First awesome button" route="firstPage"/>
            <ButtonCustom name="Second amazing button" route="second"/>
            <ButtonCustom name="Third fucking button" route="third"/>
            <ButtonCustom name="Clicking is boring" route="boring"/>
            <ButtonCustom name="At least this ends" route="final"/>
        </nav>
        </div>
    )
}
