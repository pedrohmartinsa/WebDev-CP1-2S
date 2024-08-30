import Boxes from "../componentes/Home/Boxes";
import ConteudoPrincipal from "../componentes/Home/ContPrincipalHome";

export default function Home() {
    return (
        <>
            <div className='container-principal'>
                <ConteudoPrincipal/>
                <Boxes/>
            </div>
        </>
     );
}