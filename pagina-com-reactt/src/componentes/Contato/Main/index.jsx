import './styles.css'
import LogoInsta from './assets/instagram-icon.png'
import LogoDc from './assets/discord-icon.png'
import LogoTwitter from './assets/twitter-icon.png'


function Main() {
    return (
            <main>
                <div class="text">
                    <h1>Dúvidas e suporte, entre em contato:</h1>
                    <div class="social-media">
                        <img src={LogoTwitter} alt=""/>
                        <img src={LogoInsta} alt=""/>
                        <img src={LogoDc} alt=""/>
                    </div>
                </div>

                <div class="vertical-line"></div>

                <form class="contact-form">
                    <div>
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" class="input-base"/>
                    </div>

                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" class="input-base"/>
                    </div>

                    <div>
                        <label for="msg">Mensagem:</label><br/>
                        <textarea name="msg" id="msg" class="input-base input-msg"></textarea>
                    </div>

                    <input type="submit" value="Enviar" id="submit-btn"/>
                </form>
            </main>
        
     );
}

export default Main;