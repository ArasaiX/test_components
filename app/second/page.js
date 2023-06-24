import { ContentBox } from "../components/ContentBox";
import styles from "../../styles/ContentBox.module.css";

export default function second() {
    const titleStyle = {
        display: "flex",
        justifyContent: "center",
    } 

    return (
        <div><h1 style={titleStyle}>Relato generado con chatGPT</h1>
        <ContentBox style={styles.content}/>
        </div>
    )
}
