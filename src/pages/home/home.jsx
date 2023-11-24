import React from "react";
import {
  HomeHeader,
  HomeIcon,
  HomeForm,
  HomeMain,
  HomeTitle,
  HomeLabel,
  HomeInput,
  HomeFormContainer,
  HomeContainer,
  HomeImage,
  HomeIconImage,
  HomeButton,
  HomeFooter,
  HomeTeam,
  HomeTeamContainer,
} from "./home.styles";

export default function Home() {
  return (
    <div>
      <HomeHeader>
        <HomeIcon className="fa-solid fa-globe"></HomeIcon>
        <h1>We Care</h1>
      </HomeHeader>
      <HomeImage src="images/hospitalwallpaper.jpg" alt="" />
      <HomeMain>
        <HomeContainer>
          <div>
            <h1>Seja bem-vindo à We Care!</h1>
            <p>
              Somos especialistas da saúde, tendo unidades em todo o mundo,
              feitas para auxiliar com qualquer dúvida relacionada à sua saúde.
            </p>
            <p>
              Aqui vamos auxiliá-lo a tratar da sua saúde com maestria,
              preenchendo esse formulário um de nossos profissionais entrará em
              contato com você para passar a avaliação e indicações médicas.
            </p>
            <p>Também temos algumas dicas abaixo de saúde!</p>
          </div>
        </HomeContainer>
        <hr />
        <h1>Rotina de um dia saudável para pessoas com diabetes</h1>
        <HomeContainer>
          <div>
            <h2>Manhã - Início do Dia (06:30 - 08:00)</h2>
            <p>
              Desperte com determinação para um dia saudável! Comece com um copo
              de água morna para reidratar o corpo. Realize a medição da glicose
              e registre no seu diário.
            </p>
          </div>
          <HomeIconImage src="images/hospital.jpeg" alt="Hospital" />
        </HomeContainer>
        <HomeContainer>
          <HomeIconImage src="images/hospital2.jpeg" alt="Hospital" />
          <div>
            <h2>Café da Manhã Energizante (08:00 - 09:00)</h2>
            <p>
              Nutra-se com um café da manhã equilibrado. Opte por aveia, frutas
              frescas e proteínas magras. Mantenha as porções controladas. Após
              a refeição, faça uma curta caminhada para estimular a circulação.
            </p>
          </div>
        </HomeContainer>
        <HomeContainer>
          <div>
            <h2>Meio da Manhã - Atividade Revigorante (10:00 - 11:00)</h2>
            <p>
              Faça uma pausa para um lanche saudável, como uma porção de frutas
              ou um punhado de nozes. Realize exercícios de respiração para
              reduzir o estresse e melhorar o foco.
            </p>
          </div>
          <HomeIconImage src="images/hospital9.jpeg" alt="Hospital" />
        </HomeContainer>
        <HomeContainer>
          <HomeIconImage src="images/hospital7.jpeg" alt="Hospital" />
          <div>
            <h2>Almoço Sustentável (12:30 - 13:30)</h2>
            <p>
              Desfrute de um almoço balanceado, com vegetais, proteínas magras e
              grãos integrais. Evite alimentos processados e açúcares
              adicionados. Após a refeição, faça uma breve caminhada para
              auxiliar na digestão.
            </p>
          </div>
        </HomeContainer>
        <HomeContainer>
          <div>
            <h2>Tarde - Hidratação e Monitoramento (15:00 - 16:00)</h2>
            <p>
              Hidrate-se! Beba um copo de água e monitore seus níveis de
              glicose. Anote qualquer observação no seu diário. Considere fazer
              uma atividade leve, como alongamentos.
            </p>
          </div>
          <HomeIconImage src="images/hospital5.jpeg" alt="Hospital" />
        </HomeContainer>
        <HomeContainer>
          <HomeIconImage src="images/hospital6.jpeg" alt="Hospital" />
          <div>
            <h2>Atividade Física Revigorante (17:30 - 18:30)</h2>
            <p>
              Envolva-se em uma atividade física. Pode ser uma caminhada,
              natação, ou qualquer exercício que você goste. Certifique-se de
              manter uma intensidade que seja segura para você.
            </p>
          </div>
        </HomeContainer>
        <HomeContainer>
          <div>
            <h2>Jantar Nutritivo (19:30 - 20:30)</h2>
            <p>
              Prepare um jantar saudável com uma variedade de vegetais,
              proteínas magras e carboidratos complexos. Evite grandes porções e
              opte por alimentos de baixo índice glicêmico.
            </p>
          </div>
          <HomeIconImage src="images/hospital7.jpeg" alt="Hospital" />
        </HomeContainer>
        <HomeContainer>
          <HomeIconImage src="images/hospital.jpeg" alt="Hospital" />
          <div>
            <h2>Noite - Relaxamento e Reflexão (21:30 - 22:30)</h2>
            <p>
              Dedique algum tempo para relaxar. Leia um livro, ouça música suave
              ou pratique a meditação. Isso ajuda a reduzir o estresse,
              promovendo uma boa qualidade de sono.
            </p>
          </div>
        </HomeContainer>
        <HomeContainer>
          <div>
            <h2>Antes de Dormir (23:00)</h2>
            <p>
              Faça uma última verificação da glicose antes de dormir.
              Certifique-se de que está dentro da faixa recomendada. Reflita
              sobre o seu dia e prepare-se para um descanso reparador.
            </p>
          </div>
          <HomeIconImage src="images/hospital9.jpeg" alt="Hospital" />
        </HomeContainer>
        <HomeForm>
          <HomeTitle>
            Preencha o formulário para cuidarmos da sua saúde
          </HomeTitle>
          <HomeFormContainer>
            <HomeLabel>Nome</HomeLabel>
            <HomeInput type="text" />
          </HomeFormContainer>
          <HomeFormContainer>
            <HomeLabel>Idade</HomeLabel>
            <HomeInput type="text" />
          </HomeFormContainer>
          <HomeFormContainer>
            <HomeLabel>Sexo</HomeLabel>
            <HomeInput type="text" />
          </HomeFormContainer>
          <HomeFormContainer>
            <HomeLabel>Data de Nascimento</HomeLabel>
            <HomeInput type="date" />
          </HomeFormContainer>
          <HomeFormContainer>
            <HomeLabel>E-mail</HomeLabel>
            <HomeInput type="text" />
          </HomeFormContainer>
          <HomeFormContainer>
            <HomeLabel>Telefone</HomeLabel>
            <HomeInput type="text" />
          </HomeFormContainer>
          <HomeFormContainer>
            <HomeLabel>Endereço</HomeLabel>
            <HomeInput type="text" />
          </HomeFormContainer>
          <HomeButton>Enviar formulário</HomeButton>
        </HomeForm>
      </HomeMain>
      <HomeFooter>
        <h2>Conheça o nosso time:</h2>
        <HomeTeamContainer>
          <HomeTeam>
            <HomeIconImage src="images/cadu.jpg" />
            <h3>Carlos Eduardo Guedes</h3>
            <h4>RM:94787</h4>
          </HomeTeam>
          <HomeTeam>
            <HomeIconImage src="images/alef.jpg" />
            <h3>Alef</h3>
            <h4>RM:99487</h4>
          </HomeTeam>
          <HomeTeam>
            <HomeIconImage src="images/renan.jpg" />
            <h3>Renan Vieira de Jesus</h3>
            <h4>RM:551813</h4>
          </HomeTeam>
          <HomeTeam>
            <HomeIconImage src="images/matheus.jpg" />
            <h3>Matheus Estevo</h3>
            <h4>RM:550913</h4>
          </HomeTeam>
          <HomeTeam>
            <HomeIconImage src="images/cayque.jpg" />
            <h3>Cayque Pereira dos Santos</h3>
            <h4>RM:551353</h4>
          </HomeTeam>
        </HomeTeamContainer>
      </HomeFooter>
    </div>
  );
}
