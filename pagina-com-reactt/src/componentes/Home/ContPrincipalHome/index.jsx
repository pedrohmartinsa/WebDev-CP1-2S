import './styles.css'
import VideoFake from './assets/video.png'

function ConteudoPrincipal() {
    return ( 
            <div className="container-conteudo">
                    <div className="container-conteudo-texto">
                        <h1>Crie seus vídeos online</h1>
                        <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                        <button className="botao-comecar-agora" onclick="">Começar agora!</button>
                    </div>
                    <div className="container-conteudo-img">
                        <img src={VideoFake} alt="vídeo do cara que talvez esteja dançando"/>
                    </div>
            </div>

     );
}

export default ConteudoPrincipal;