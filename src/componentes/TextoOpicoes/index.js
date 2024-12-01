import './estilo.css'
const textoOpicoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function TextoOpicoes (){
return(
<ul className='opcoes'>
          {textoOpicoes.map( (texto) => ( 
            <li className='opcao'><p>{texto}</p></li>
            )
          )}
        </ul>
)
}
export default TextoOpicoes;