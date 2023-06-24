import TestBox from "../components/TestBox";

const texts = [
    "A representation of the older titles",
    "Newest boring things, the same of all day",
    "All life with shity winds",
    "No quiero saber nada más",
    "Quien quiere nada"
]

export default function boring() {
    const bodyStyles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }
    return (
        <div style={bodyStyles}>
            <TestBox title="En el inicio"  text={texts[0]} route="infinito" imageUrl="/1bb63b38c2dea16caf47cbbaaab27c3e.jpg" />
            <TestBox title="Favoritos"  text={texts[1]} imageUrl="" isFixed={true}/>
            <TestBox title="¿Quién eres?"  text={texts[2]} imageUrl="/7fa329543796468461645477c041e7ac.jpg"/>
            <TestBox title="Lugares de interés" text={texts[3]} isFixed={true}/>
            <TestBox title="Sombras oscuras"  text={texts[4]} imageUrl="/e2aef657b2faac87de8c27ee392bc5ca.jpg"/>
            <TestBox title="Imposible"  text="Cuantas ganas tienes de tener ganas" isFixed={true}/>
            <TestBox title="Sombras oscuras"  text={texts[4]} imageUrl="/956faeaf0ec525a0f8a2aea1d705f84a.jpg"/>
            <TestBox title="Sombras oscuras"  text={texts[3]} isFixed={true}/>
            <TestBox title="Sombras oscuras"  text={texts[0]} imageUrl="/e2aef657b2faac87de8c27ee392bc5ca.jpg"/>
            <TestBox title="Sombras oscuras"  text={texts[1]} isFixed={true}/>
            <TestBox title="Sombras oscuras"  text={texts[2]} imageUrl="/66af84de59e46d6de04cb62406d9c43e.jpg"/>
            <TestBox title="Sombras oscuras"  text={texts[3]} isFixed={true}/>
        </div>
        
    )
}
