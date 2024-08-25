import Boxes from './Boxes';
import ConteudoPrincipal from './ContPrincipalHome';
import './styles.css'





function Home() {
    return (
        <>
            <div className='container-principal'>
                <ConteudoPrincipal/>
                <Boxes/>
            </div>
        </>
     );
}

export default Home;