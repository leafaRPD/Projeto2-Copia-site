import "./style.css"

import logo from '../../imgs/logo.jpg'

export function Main(){
    return(
        <div id="main">
            <div id="image">
                <img src={logo} alt="Desenho de uma pessoa com uma camisa amarela com móveis" />
            </div>
            
            <h1>Transformando <span>espaço</span>, <br />Criando <span>história</span> </h1>
            <p> Nós criamos ambientes <strong>exclusívos</strong> e <strong>únicos</strong>, com muito bom gosto e profissionalismo, investimos tempo e <span class="alaranjado">dedicação no seu projeto</span>. Nosso compromisso vai além de simplesmente decorar. </p> <p> Tenha <span class="alaranjado">ambientes limpos</span> e bem decorados, transmitindo <strong>elegância</strong> e <strong>finesse</strong> para todo aquele que estiver ali. Sua história visual começa aqui!</p>
        </div>
    )
}