import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
        <h1>HomePage</h1>
        <Link to={"/upload"}><button>Přidat inzerát</button></Link>
        </>
    )
}