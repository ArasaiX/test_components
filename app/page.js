

export default function Home() {
  const titleStyle = {
    display: "flex",
    justifyContent: "center",
  }

  const imageStyle = {
    display: "flex",
    justifyContent: "center",
  }

  return (
    <div><h1 style={titleStyle}>No se muy bien que está pasando... ¿Y tú?</h1>
    <div style={imageStyle} >
    <img src="/futureGod.jpg" alt="Image description"/>
    </div>
    </div>
  )
}
