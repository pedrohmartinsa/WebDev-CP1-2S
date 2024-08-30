import './styles.css'
import LogoFace from './assets/facebook.png'
import LogoInsta from './assets/instagram.png'
import LogoYoutube from './assets/youtube.png'
import LogoTiktok from './assets/tiktok.png'
import Box from '../../Box'

function Boxes() {

    const infosBox = [
        {
            classeNomePai: "box-youtube",
            numero: "01",
            logo: LogoYoutube, 
            textoAlternativo: "imagem do ícone do Youtube",
            nomeDaRede: "Youtube",
            textoDaRede: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
        },
        {
            classeNomePai: "box-tiktok",
            numero: "02",
            logo: LogoTiktok, 
            textoAlternativo: "imagem do ícone do TikTok",
            nomeDaRede: "TikTok",
            textoDaRede: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
        },
        {
            classeNomePai: "box-facebook",
            numero: "03",
            logo: LogoFace, 
            textoAlternativo: "imagem do ícone do Facebook",
            nomeDaRede: "Facebook",
            textoDaRede: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
        },
        {
            classeNomePai: "box-instagram",
            numero: "04",
            logo: LogoInsta, 
            textoAlternativo: "imagem do ícone do Instagram",
            nomeDaRede: "Instagram",
            textoDaRede: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
        }
    ]



    return ( 
        <div className="container-boxes">
            <Box data={infosBox}/>
            
                     
        </div>

     );
}

export default Boxes;