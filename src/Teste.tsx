import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string //?para ser opcional o uso dessa tipagem
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  cursor: pointer;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
` //oq esta acontecendo aqui é que estamos meio quer herdando o Botao feito acima e aqui fazendo outro botao um de perigo e pra funcionar precimaos colocar o principal ao lado pois como eu disse é como se fosse uma herança do btn principal,mas ele pega as funçoes feitas aqui neve novo btn
function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
//npx prettier --write quando der algum erro no site
//quando colocamos esse styled. nos da varias opçoes devido a importaçao desse styled-components
//Type para BotaoProps com isso atribuimos o valor que principal vai ser um boleano dai podemos colocar la no stylde.button esse type para o botao recochecer
//com props fizemos um ternario para que se props princiapal for chmado é verde e por isso fizemos os types
//coloquei ali o font size dentro da const btn pra ele saber quando tiver props.fontSize(quando eu espeificar q tamanho de fonte quero) se n tem fica 16px
