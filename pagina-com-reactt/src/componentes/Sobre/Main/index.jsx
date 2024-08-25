import './styles.css'
import Tela1 from './assets/tela1.png'
import Tela2 from './assets/tela2.png'

function Main() {
    return ( 
    <main>
        <div class="texto">
            <h1>Bem-vindo à revolução dos vídeos!</h1>
            <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
            <button>Baixe o app</button>
        </div>
        <div class="telas">
            <div class="tela1">
                <img src={Tela1} alt="Imagem de um celular com o editor de video aberto"/>
            </div>
            <div class="tela2">
                <img src={Tela2} alt="Imagem de um celular mostrando que a edição do video foi um sucesso"/>
            </div>
        </div>
    </main>
     );
}

export default Main;