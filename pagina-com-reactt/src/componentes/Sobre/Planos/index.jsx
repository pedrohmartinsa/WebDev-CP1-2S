import './styles.css'
import MulherCelular from './assets/mulherecelular.png'

function Planos() {
    return ( 
        <section class="planos">
        <h2>Planos</h2>

        <div class="cards">
            <div class="card">
                <div class="card-top card-top-individual">
                    <p>Individual</p>
                </div>
                <div class="card-middle">
                    <div class="preco-usuario preco-usuario-individual">
                        <p>1 usuário</p>
                        <select name="videos" id="videos">
                            <option>10 vídeos R$15</option>
                        </select>
                    </div>
                    <button class="card-button card-button-individual">Cadastrar</button>
                </div>
            </div>

            <div class="card">
                <div class="card-top">
                    <p>Profissional - Times</p>
                </div>
                <div class="card-middle">
                    <div class="preco-usuario">
                        <p>1-10 Usuários</p>
                        <select name="videos" id="videos">
                            <option>Vídeos ilimitados R$40</option>
                        </select>

                        <p>+10 Usuários</p>
                        <select name="videos" id="videos">
                            <option>Vídeos ilimitados R$20</option>
                        </select>
                    </div>
                    <button class="card-button">Cadastrar</button>
                </div>
            </div>

            <div class="card">
                <div class="card-top">
                    <p>Corporativos</p>
                </div>
                <div class="card-middle">
                    <img src={MulherCelular} alt="Mulher apontando um celular maior que ela"/>
                    <button class="card-button">Entre em contato</button>
                </div>
            </div>
        </div>
    </section>
     );
}

export default Planos;