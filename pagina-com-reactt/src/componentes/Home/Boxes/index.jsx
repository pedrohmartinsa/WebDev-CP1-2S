import './styles.css'
import LogoFace from './assets/facebook.png'
import LogoInsta from './assets/instagram.png'
import LogoYoutube from './assets/youtube.png'
import LogoTiktok from './assets/tiktok.png'

function Boxes() {

    function CardInfo( { box } ) {

        const infosBox = [
            {
                classeNomePai: ,
                classeNomeNumEIMG: ,
                numero: ,
                logo: ,
                textoAlternativo: ,
                nomeDaRede: ,
                textoDaRede: ,

            }
        ]

    }


    return ( 
        <div className="container-boxes">
                    <div className="box-youtube">
                        <div className="numero-icone">
                            <h1>01</h1>
                            <img src={LogoYoutube} alt="imagem do ícone do Youtube"/>
                        </div>
                        
                        <h2>Youtube</h2>
                        <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
                    </div>
                    <div className="box-tiktok">
                        <div className="numero-icone">
                            <h1>02</h1>
                            <img src={LogoTiktok} alt="imagem do ícone do TikTok"/>
                        </div>
                        
                        <h2>TikTok</h2>
                        <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
                    </div>
                    <div className="box-facebook">
                        <div className="numero-icone">
                            <h1>03</h1>
                            <img src={LogoFace} alt="imagem do ícone do Facebook"/>
                        </div>
                        
                        <h2>Facebook</h2>
                        <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
                    </div>
                    <div className="box-instagram">
                        <div className="numero-icone">
                            <h1>04</h1>
                            <img src={LogoInsta} alt="imagem do ícone do Instagram"/>
                        </div>
                        
                        <h2>Instagram</h2>
                        <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
                    </div>
                </div>

     );
}

export default Boxes;