import React, {  useEffect } from 'react';
import '../styles/policy.css';

const LgpdPage = ({onClose}) => {

    useEffect(() => {
        const handleClickOutsidePolicy = (event) => {
            const modal = document.querySelector('.privacy-policy');
            if (modal && !modal.contains(event.target)) {
            onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutsidePolicy);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsidePolicy);
        };
    }, [onClose]);

  return (
    <div className='containerPolicy'>
        <div className="privacy-policy">

        <div className='policy-title'><h1>POLITICA DE PRIVACIDADE</h1><span onClick={onClose} className='close'>X</span></div>
        
		<p>Um dos fundamentos da Lei Geral de Proteção de Dados (LGPD) é o respeito à privacidade. A privacidade dos nossos TITULARES ("você", "titular") é muito importante para nossa empresa e, por esta razão, não medimos esforços para proteger os dados pessoais que tratamos. Desse modo, o presente Termos de Privacidade ("Termos") tem o propósito de explicar de forma simples, clara e objetiva que tipo de dados serão coletados, bem como o momento e como serão utilizados.</p>

		<p>Importante destacar que os Termos se aplicam a quaisquer marcas e serviços de nossa empresa . Consequentemente, compreendem e se aplicam a todos os seus produtos.</p>

		<p>Quando nos referimos aos dados pessoais, consideramos qualquer dado relacionado à pessoa natural identificada ou identificável, inclusive números identificativos, dados de localização ou identificadores eletrônicos, quando estes estiverem relacionados a uma pessoa. Em resumo, qualquer informação pessoal que possa identificar o seu titular. Isso se aplica desde informações como nome e endereço a questões como gênero, religião ou posicionamento político.</p>

		<p><b>ANTES DE ACEITAR NOSSOS TERMOS DE PRIVACIDADE, VOCÊ DEVERÁ LER INTEGRALMENTE SEU CONTEÚDO.</b> Ao aceitar nossos Termos, você reconhece que leu, entendeu e concorda com o seu teor.</p>

		<h3>1. DAS INFORMAÇÕES GERAIS</h3>

		<table class="table-unbordered">
			<tbody>
				<tr>
					<td>1.1. </td>
					<td>
						<p>Dos dados da RR Multimarcas</p>
						<p>RR Multimarcas, pessoa jurídica de direito privado, com sede na , doravante simplesmente "".</p>
					</td>
				</tr>
				<tr>
					<td>1.2. </td>
					<td>
						<p>Dos termos e definições</p>
						<table class="table-unbordered">
							<tbody><tr>
								<td>I.</td>
								<td>Autoridade Nacional de Proteção de Dados (ANPD): órgão da administração pública federal, integrante da Presidência da República a qual compete, sem limitação, zelar pela proteção dos dados pessoais, fiscalizar e aplicar sanções em caso de tratamento de dados realizado em descumprimento à legislação, nos termos da Lei Geral de Proteção de Dados (LGPD);</td>
							</tr>
							<tr>
								<td>II.</td>
								<td>Cookies: são pequenas unidades de dados armazenados pelo seu navegador no disco rígido do seu computador. Os cookies podem ser necessários para o uso do .</td>
							</tr>
							<tr>
								<td>III.</td>
								<td>Controlador: pessoa natural ou jurídica, de direito público ou privado, a quem compete as decisões referentes ao tratamento de dados pessoais; </td>
							</tr>
							<tr>
								<td>IV.</td>
								<td>Dado pessoal: (você, Titular ou Titulares) informação relacionada à pessoa natural identificada ou identificável;</td>
							</tr>
							<tr>
								<td>V.</td>
								<td>Dado pessoal sensível: dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural;</td>
							</tr>
							<tr>
								<td>VI.</td>
								<td>Grupo econômico: empresas que, mesmo guardando cada uma sua autonomia, façam parte de um grupo econômico ou financeiro.</td>
							</tr>
							<tr>
								<td>VII.</td>
								<td>Lei Geral de Proteção de Dados (LGPD): é a lei que dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, independentemente do meio, do país de sua sede ou do país onde estejam localizados os dados, desde que (i) a operação de tratamento seja realizada no território nacional; (ii) a atividade de tratamento que tenha por objetivo a oferta ou o fornecimento de bens ou serviços ou o tratamento de dados de indivíduos localizados no território nacional; ou (iii)  os dados pessoais objeto do tratamento tenham sido coletados no território nacional.</td>
							</tr>
							<tr>
								<td>VIII.</td>
								<td>Operação de dados pessoais: o mesmo que tratamento.</td>
							</tr>
							<tr>
								<td>IX.</td>
								<td>Operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador; </td>
							</tr>
							<tr>
								<td>X.</td>
								<td>Política de Segurança da Informação e Privacidade (PSIP): documento no qual a  assume o compromisso com a proteção das informações de sua propriedade e/ou sob sua guarda, devendo ser cumprida por todos os seus colaboradores e operadores. Seu propósito é estabelecer as diretrizes a serem seguidas pela  e os operadores no que diz respeito à adoção de procedimentos e mecanismos relacionados à segurança da informação.</td>
							</tr>
							<tr>
								<td>XI.</td>
								<td>Propriedade intelectual: compreende os direitos relativos à propriedade industrial e aos direitos autorais, entendendo-se sob esta denominação os direitos de autor e os que lhes são conexos;</td>
							</tr>
							<tr>
								<td>XII</td>
								<td>Tratamento: toda operação realizada com dados pessoais, como as que se referem à coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração;</td>
							</tr>
							<tr>
								<td>XIII</td>
								<td>Titular: pessoa natural, também "titular", "você", "ele" ou "Titulares" que apenas acessa o , bem como aquele que preenche o formulário de cadastro e concorda com os Termos de Privacidade.</td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr>
					<td>1.3.</td>
					<td>Dos dados coletados e a sua finalidade</td>
				</tr>
				<tr>
					<td>1.3.1. </td>
					<td>
						<p>Os dados são coletados de duas formas pela :</p>
						<table class="table-unbordered">
							<tbody><tr>
								<td>(a)</td>
								<td>
									<p>Dados pessoais fornecidos pelo Titular: o titular que utilizar o formulário de contato encaminhará, além do teor da mensagem, os seguintes dados: </p>

									<p>Dados pessoais: Nome, CPF, RG, Data de Nascimento, Nome da Mãe, Nome do Pai, Naturalidade, Estado Civil, Sexo, Endereço, E-mail, Telefone</p>

									<p>Estes são dados necessários para atingir as finalidades legítimas serão tratados pela .</p>

								</td>
							</tr>
							<tr>
								<td>(b)</td>
								<td><p> Dados coletados sem a intervenção do Titular: o  coleta automaticamente, sem qualquer influência do titular, os seguintes dados: características do dispositivo de acesso, do navegador, IP (com data, hora e UTC), informações sobre cliques, páginas acessadas. Os dados são coletados com o propósito de auxiliar e melhorar a navegação do Titular, a  utiliza tecnologias de mercado em suas aplicações web como cookies, pixel tags e beacons. </p></td>
							</tr>
						</tbody></table>
					</td>
				</tr>
				<tr>
					<td>1.3.2.</td>
					<td>
						<p>Os seguintes dados pessoais serão tratados pela :</p>
						<theader>
								</theader><table className="table-bordered">
							<tbody><tr><th>Classificação do dado</th>
								<th>Tipo de dado</th>
								<th>Finalidade do uso</th>
								<th>Base Legal</th>
							
							</tr></tbody><tbody>
								<tr>
									<td><p>Dados Simples</p></td>
									<td>
										<ul>
											<li>Nome</li>
											<li>Data de nascimento</li>
											<li>CPF</li>
											<li>RG</li>
											<li>Nome da mãe</li>
											<li>Nome do pai</li>
											<li>Naturalidade</li>
											<li>Estado civil</li>
											<li>Sexo</li>
											<li>Endereço</li>
											<li>E-mail</li>
											<li>Telefone</li>
										</ul>
									</td>
									<td>
										<ul>
											<li>Identificar o Titular</li>
											<li>Portabilidade dos dados cadastrais para outro Controlador do mesmo ramo de nossa atuação, caso solicitado pelo Titular;</li>
											<li>Cumprir as obrigações decorrentes do uso de nossa aplicação;</li>
											<li>Informar sobre novidades, funcionalidades, conteúdos, notícias e demais eventos relevantes para a manutenção do relacionamento com o Titular;</li>
											<li>Promover nossos produtos;</li>
											<li>Responder às solicitações e pedidos de informações do Titular;</li>
											<li>Cumprimento de obrigações legais e regulatórias.</li>
										</ul>
									</td>
									<td>
										<ul>
											<li>Para a execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual seja parte o titular, a pedido do titular dos dados;</li>
											<li>Para atender aos interesses legítimos do controlador.</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>
										<p>Dados Comportamentais</p>
									</td>
									<td>
										<ul>
											<li>Endereço IP</li>
											<li>Registros de interações com este website</li>
											<li>Telas acessadas, dispositivo (versão do sistema operacional, geolocalização, aplicativos instalados, se necessário)</li>
											<li>Session ID</li>
											<li>Cookies</li>
										</ul>
									</td>
									<td>
										<ul>
											<li>Cumprir obrigação estabelecida pelo Marco Civil da Internet – Lei nº 12.965/2014;</li>
											<li>Cumprir obrigação estabelecida na Lei Geral de Proteção de Dados – Lei nº 13.709/2018;</li>
											<li>Identificar o Titular;</li>
											<li>Avaliação do uso e utilidade dos serviços que prestamos no ;</li>
											<li>Fins estatísticos e de segurança;</li>
											<li>Cumprimento de obrigações legais e regulatórias.</li>
										</ul>
									</td>
									<td>
										<ul>
											<li>Para atender o legítimo interesse do controlador visando ao uso para a situação concreta de Auxiliar no diagnóstico e solução de problemas, desenvolver novas funcionalidades e melhorias.</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td>1.3.3.</td>
					<td>Ao aceitar estes Termos de Privacidade, o Titular declara: (a) que a  poderá efetuar a operação dos seus dados pessoais que foram coletados no momento do acesso e/ou preenchimento do formulário com seus dados e a forma como  e os operadores cooperam durante a operação de tratamento desses dados; (b) ser maior de 18 (dezoito) anos e que fez a leitura completa e atenta das regras destes termos, estando plenamente ciente do seu teor e conferindo sua manifestação livre, informada e inequívoca pela qual concorda com o tratamento de seus dados pessoais para uma das finalidades estabelecidas no item 1.1.3.2. Caso não esteja de acordo com o conteúdo destes termos, não poderá acessar o ; (c) se for representante legal de uma empresa, possuir os poderes necessários e específicos para aceitar estes Termos de Privacidade.</td>
				</tr>
				<tr>
					<td>1.3.4.</td>
					<td>O Titular é o único responsável pela exatidão e veracidade dos dados que informar no ato de preenchimento do formulário de cadastro.</td>
				</tr>
				<tr>
					<td>1.3.5.</td>
					<td>Caso identificada falsidade de informações cadastradas, a  solicitará ao Titular esclarecimentos, podendo, suspender ou bloquear seu acesso se julgá-las inadequadas, se assim for necessário.</td>
				</tr>
				<tr>
					<td>1.3.6.</td>
					<td>Caso a  identifique o mau uso do  ou a violação de direitos da propriedade intelectual de sua propriedade ou de terceiros será solicitado ao Titular esclarecimentos, podendo bloquear ou encerrar seu acesso e tomar as medidas jurídicas e administrativas cabíveis.</td>
				</tr>
				<tr>
					<td>1.3.7.</td>
					<td>Na hipótese de mudanças da finalidade para o tratamento de dados pessoais não compatíveis com o consentimento original, a  informará previamente o Titular sobre as mudanças de finalidade por meio do e-mail informado no momento do cadastramento. Caso o tratamento dos dados seja realizado com fundamento na base legal "com consentimento", o titular poderá revogá-lo caso discorde das alterações. No mesmo ato, a  informará as consequências caso o Titular não concorde com a nova finalidade de tratamento de seus dados pessoais.</td>
				</tr>
				<tr>
					<td>1.3.8.</td>
					<td>O Titular se declara ciente de que os dados coletados e as atividades registradas poderão ser compartilhados: (a) Com autoridades judiciais, administrativas ou governamentais competentes, sempre que houver determinação legal, requerimento, requisição ou ordem judicial; (b) de forma automática em caso de operações societárias como fusão, aquisição e incorporação; (c) para operadores que efetuarão o tratamento de dados pessoais do Titular e/ou (d) empresas do grupo econômico do qual a  é parte integrante.</td>
				</tr>
				<tr>
					<td>1.3.9.</td>
					<td>O Titular se declara ciente de que a base de dados formada por meio da coleta de dados no  é de propriedade e responsabilidade da .</td>
				</tr>
				<tr>
					<td>1.3.10.</td>
					<td>A  não irá comercializar, alugar, ceder, emprestar os dados pessoais dos Titulares.</td>
				</tr>
				<tr>
					<td>1.3.11.</td>
					<td>O Titular se declara ciente de que seu login e senha são de uso pessoal e intransferível e que deverá mantê-los sob sigilo e em ambiente seguro. O Titular que utilizar login e senha de outra pessoa ou cedê-la a outrem para que dela se utilize poderá incorrer no crime tipificado no art. 308, do Código Penal.</td>
				</tr>
				<tr>
					<td>1.3.12.</td>
					<td>A  e as empresas do grupo econômico do qual integra garantem que somente os empregados devidamente autorizados terão acesso aos dados pessoais coletados e sempre respeitando os princípios de proporcionalidade, necessidade e relevância para os objetivos do , além do compromisso de confidencialidade e preservação da privacidade nos termos deste Termos de Privacidade.</td>
				</tr>
			</tbody>
		</table>


		<h3>2. DA FORMA DE ARMAZENAMENTO E PRAZO</h3>

		<table class="table-unbordered">
			<tbody>
				<tr>
					<td>2.1</td>
					<td><p>Os dados coletados e os registros de atividades serão armazenados em ambiente seguro e controlado pelo prazo mínimo estipulado conforme o exemplo abaixo:</p></td>
				</tr>
				<tr>
					<td colspan="2">
						<theader>
								</theader><table class="table-bordered">
							<tbody><tr><th>DADOS PESSOAIS</th>
								<th>PRAZO DE ARMAZENAMENTO</th>
								<th>FUNDAMENTO LEGAL</th>
							
							</tr></tbody><tbody>
								<tr>
									<td><b>Dados Cadastrais</b></td>
									<td>5 anos após o término da relação com o Titular</td>
									<td>Art. 27 do Código de Defesa do Consumidor</td>
								</tr>
								<tr>
									<td><b>Dados comportamentais</b></td>
									<td>6 meses</td>
									<td>Art. 15 do Marco Civil da Internet</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td>2.2.</td>
					<td>Caso haja solicitação do Titular, os dados poderão ser eliminados antes dos prazos fixados no item 2.1. </td>
				</tr>
				<tr>
					<td>2.2.1.</td>
					<td>A  fará todos os esforços para que a solicitação do Titular seja cumprida o mais breve possível; mas, o titular se declara ciente de que existem fatores que fogem ao controle da  e que poderão impactar no prazo para eliminação do dado ou até impedir o pronto atendimento da solicitação.</td>
				</tr>
				<tr>
					<td>2.2.2.</td>
					<td>O Titular se declara ciente de que sua solicitação poderá ser recusada pela  caso seja, por exemplo, impossível de verificar sua identidade.</td>
				</tr>
				<tr>
					<td>2.3.</td>
					<td>O Titular se declara ciente de que a  se reserva no direito de manter os dados descritos no item 1.1.3.2 por prazo superior para (i) cumprimento de obrigação legal ou regulatória, (ii) estudo por órgão de pesquisa previsto no seu objetivo social ou estatutário, garantida, sempre que possível, a anonimização dos dados pessoais; (iii) transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos na LGPD; (iv) uso dos dados pessoais para prevenção à fraude (art. 11, II, "a", da LGPD); (v) uso dos dados pessoais para proteção ao crédito (art. 7º, X, LGPD) e (vi) atender outros interesses legítimos, em conformidade com o artigo 10 da LGPD. Findo o prazo e a necessidade legal, a  excluirá, por meio de método de descarte seguro, os dados descritos no item 1.1.3.2 ou os manterá para seu uso exclusivo, vedado seu acesso por terceiro, e desde que anonimizados os dados.</td>
				</tr>
				<tr>
					<td>2.3.1.</td>
					<td>O Titular se declara ciente de que em algumas situações a eliminação do dado pessoal será tecnicamente inviável, pois alguns sistemas não permitem a exclusão integral do dado ou, no caso do suporte físico, acabaria por danificar a unidade de registro do dado. Desse modo, com base no art. 113, §2º, do Código Civil, para efeitos deste Termo "Eliminação será considerado o ato de excluir o dado do titular da base da dados da organização. Se a operação não for realizada em decorrência de limitações técnicas, a desabilitará/ocultará no banco de dados o dado do titular e não permitirá mais o seu uso. Tratando-se de dado registrado em suporte físico, a unidade de registro será (i) eliminada caso contenha somente os dados do titular ou (ii) será arquivada caso envolva dados de outros titulares".</td>
				</tr>
				<tr>
					<td>2.4.</td>
					<td>O Titular se declara ciente de que o  poderá ser acessado em qualquer país e, por esta razão, a  poderá transferir seus dados para operadores localizados em outros países ou jurisdições do mundo que proporcionem grau de proteção de dados pessoais adequado ao previsto na LGPD.</td>
				</tr>
				<tr>
					<td>2.5.</td>
					<td>Os dados coletados serão armazenados em datacenter localizados nos Estados Unidos da América por meio da tecnologia denominada cloud computing. Nesse caso, o Titular se declara ciente de que ocorrerá a transferência de seus dados pessoais para país estrangeiro com a finalidade de tratamento de seus dados, especialmente para armazenamento.</td>
				</tr>
				<tr>
					<td>2.5.1.</td>
					<td>Caso a operação com dados pessoais seja realizada por um prestador de serviços localizado em outro país, a  indicará nos instrumentos contratuais as diretrizes necessárias para proteger os dados pessoais.</td>
				</tr>
				<tr>
					<td>2.6.</td>
					<td>Visando à proteção da privacidade do Titular, a  poderá utilizar recursos criptográficos na operação com dados pessoais antes de enviá-los aos provedores de hospedagem para fins de armazenamento. A  declara que apenas os provedores de hospedagem que passaram na sua verificação de segurança e confiabilidade realizarão o tratamento dos dados pessoais do Titular.</td>
				</tr>
				<tr>
					<td>2.7.</td>
					<td>O Titular se declara ciente de que a  poderá transmitir seus dados pessoais a outras empresas pertencentes ao grupo econômico do qual é integrante.</td>
				</tr>
			</tbody>
		</table>

		<h3>3. DOS DIREITOS DO TITULAR E O CANAL DE COMUNICAÇÃO</h3>

		<table class="table-unbordered">
			<tbody>
				<tr>
					<td>3.1.</td>
					<td>O Titular tem direito a obter da , em relação aos seus dados pessoais por nós tratados, a qualquer momento e mediante requisição gratuita: (a) confirmação da existência de tratamento; (b) acesso aos dados; (c) correção de dados incompletos, inexatos ou desatualizados; (d) anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD; (e) portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, observados os segredos comercial e industrial; (f) eliminação dos dados pessoais tratados com o seu consentimento, exceto nas hipóteses previstas no item 2.3; (g) informação das entidades públicas e privadas com as quais a  realizou uso compartilhado de dados; (h) informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa; (j) revogação do consentimento, nos termos do art.8º, § 5º, da LGPD.</td>
				</tr>
				<tr>
					<td>3.2.</td>
					<td>O Encarregado da , estará disponível para receber e atender as requisições dos titulares dos dados pessoais, bem como para esclarecer suas dúvidas, por meio dos seguintes canais:
						<ul>
							<li>(i) Website: por meio da URL:  "/contato";</li>
							<li>(ii) Email: duzziauto@uol.com.br;</li>
						</ul>	
					</td>
				</tr>
				<tr>
					<td>3.2.1.</td>
					<td>Caso a base legal de tratamento utilizada pela  seja a com "consentimento", a revogação pelo Titular poderá afetar o desempenho do  e tornar alguns dos serviços e funcionalidades indisponíveis.</td>
				</tr>
				<tr>
					<td>3.2.2.</td>
					<td>Caso o Titular não conceda seu consentimento para as finalidades facultativas, relacionadas ao envio de informações, novidades, conteúdos, notícias e demais eventos relevantes para a manutenção do relacionamento, os serviços e funcionalidades do  continuarão sendo disponibilizados regularmente.</td>
				</tr>
				<tr>
					<td>3.3.</td>
					<td>O Titular reconhece que na comunicação de atos, divulgação e/ou prestação de serviços, transmissão de documentos ou para mantê-lo sempre informado sobre qualquer assunto será utilizado, preferencialmente, o meio eletrônico, exceto nos casos em que for impossível a utilização desse meio.</td>
				</tr>
				<tr>
					<td>3.3.1.</td>
					<td>Os prazos para que se cumpra ou se deixe de cumprir determinado ato, constante na mensagem eletrônica encaminhada pela  serão contados a partir do comprovado recebimento.</td>
				</tr>
				<tr>
					<td>3.3.2.</td>
					<td>Considera-se recebida a mensagem eletrônica quando o Titular receber a notificação, encaminhada pelo sistema da , que a mensagem foi entregue.</td>
				</tr>
				<tr>
					<td>3.3.3.</td>
					<td>O Titular deverá habilitar a função para o encaminhamento automático da confirmação de recebimento de mensagem eletrônica.</td>
				</tr>
				<tr>
					<td>3.4.</td>
					<td>O Titular deverá incluir o e-mail da  na lista de remetentes confiáveis.</td>
				</tr>
				<tr>
					<td>3.5.</td>
					<td>Para fins de auditoria, segurança, controle de fraudes e preservação de direitos, a  poderá manter o histórico de registro dos dados do Titular por prazo maior nas hipóteses que a lei ou norma regulatória assim estabelecer ou para preservação de direitos, nos termos do item 2.3.</td>
				</tr>
			</tbody>
		</table>

		<h3>4. DA COLETA DOS DADOS COMPORTAMENTAIS</h3>

		<table class="table-unbordered">
			<tbody>
				<tr>
					<td>4.1.</td>
					<td>A  poderá utilizar "Cookies" com a finalidade de facilitar o uso da aplicação pelo Titular.</td>
				</tr>
				<tr>
					<td>4.2.</td>
					<td>Os cookies são necessários para oferecer funcionalidades básicas enquanto o Titular navega .Além disso, os Cookies possuem a finalidade de exibir publicidade específica para alguns dos produtos e serviços ofertados pela </td>
				</tr>
				<tr>
					<td>4.3.</td>
					<td>Os Cookies podem ser bloqueados, recusados ou eliminados pelo Titular a qualquer momento por meio dos recursos disponibilizados pelo seu browser.</td>
				</tr>
				<tr>
					<td>4.4.</td>
					<td>O Titular se declara ciente de que, ao bloquear o uso de Cookies, alguns serviços web poderão ser, parcial ou totalmente, afetados e comprometer a navegação no website.</td>
				</tr>
				<tr>
					<td>4.5.</td>
					<td>A  poderá utilizar os seguintes tipos de Cookies:</td>
				</tr>
				<tr>
					<td>4.5.1.</td>
					<td>Cookies de sessão: são cookies temporários, que permanecerão no dispositivo do Titular até que o Titular saia do .</td>
				</tr>
				<tr>
					<td>4.5.2.</td>
					<td>Cookies persistentes: permanecem no dispositivo por muito mais tempo ou até que sejam excluídos manualmente pelo Titular (o tempo de permanência deste tipo de Cookies nos dispositivos vai depender da duração ou da "vida" do cookie específico).</td>
				</tr>
				<tr>
					<td>4.5.3.</td>
					<td>A  poderá utilizar as seguintes modalidades de Cookies:</td>
				</tr>
				<tr>
					<td>4.5.3.1.</td>
					<td>Cookies de Preferências: coletam informações sobre suas escolhas e preferências, permitindo-nos recordar o idioma ou outras configurações locais, e personalizar o Site de acordo com as mesmas, como: (i) Cookies de localização: armazena o endereço aproximado do Titular (cidade, estado, país, código postal), conforme determinado pelo endereço IP, é armazenado para permitir selecionar automaticamente o país, mostrando assim quais os estabelecimentos mais próximos do Titular.Meios que a  poderá utilizar: (a) Site: Titular pode decidir se quer compartilhar informações de localização e, caso aceite, o site poderá apresentar conteúdos específicos; (b) Check-in: check-in do Titular na rede social por meio da disponibilização pela empresa de wi-fi gratuito ou da criação de uma fanpage bem estruturada; (c) Geofencing: é o conteúdo apresentado em tempo real conforme a movimentação do internauta detectada pelo GPS; (d) Geotargeting: é a segmentação, por meio do endereço IP, de público pela localização; ou, (ii) Cookies de idioma: usados para armazenar a língua que o Titular selecionou e para mostrar as opções corretas.</td>
				</tr>
				<tr>
					<td>4.5.3.1.</td>
					<td>Cookies de Plug-ins Sociais: utilizados para detectar o Titular – ou não – de redes de mídias sociais para análise de pesquisa de mercado e desenvolvimento de produtos.</td>
				</tr>
				<tr>
					<td>4.5.3.2.</td>
					<td>Etiquetas De Pixels (Tag de pixel): é um tipo de tecnologia utilizada em um site ou no corpo de um e-mail com a finalidade de rastrear determinadas atividades, como visualizações de um site ou quando um e-mail é aberto.As tags de pixel costumam ser usadas juntamente com cookies e as informações de utilização do website e/ou  pelos Titulares podem ser compartilhadas com um operador como, por exemplo, uma agência de publicidade para que ela possa direcionar anúncios nos banners no website.</td>
				</tr>
				<tr>
					<td>4.5.4.</td>
					<td>Google Analytics: Serviço de análise web fornecido pela Google, Inc.("Google").O Google Analytics coleta cookies primários, dados relacionados ao dispositivo/navegador, ao endereço IP e às atividades no site/aplicativo para avaliar e informar estatísticas sobre as interações dos Titulares nos sites e/ou aplicativos que usam o Google Analytics.A informação gerada pelo Cookie acerca da sua utilização do site será transmitida e armazenada em um servidor da Google nos EUA.A  ativou o método de coleta "analytics.js" ou "gtag.js" para controlar o uso dos cookies para armazenar um identificador de cliente pseudônimo ou aleatório.As informações armazenadas no cookie primário local são reduzidas a um identificador aleatório (por exemplo, 12345.67890).</td>
				</tr>
				<tr>
					<td>4.5.5.</td>
					<td>Google Ads: Google Ads (que era conhecido como Google AdWords e Google AdWords Express) é uma solução de publicidade on-line que a  poderá utilizar para promover os seus produtos e serviços na Pesquisa Google, no YouTube e em outros sites na web.A ferramenta também permite que a  escolha metas específicas para os anúncios, como gerar mais chamadas telefônicas ou visitas ao site.A  poderá interromper a exibição de anúncios quando desejar.</td>
				</tr>
				<tr>
					<td>4.5.5.1.</td>
					<td>As informações obtidas através dos Cookies de conversão têm como objetivo criar estatísticas para os clientes Ads que utilizam o rastreamento de conversões.Por meio das estatísticas geradas pelo Google Ads, será possível para a  descobrir o número de Titulares que clicaram no anúncio exibido pela Google e que acessaram a página assinalada pela etiqueta de rastreamento de conversões.</td>
				</tr>
				<tr>
					<td>4.5.5.2.</td>
					<td>A  poderá utilizar a função de remarketing da Google Ads.O remarketing nada mais é que uma ferramenta do Google Ads que marca e identifica os Titulares que já visitaram o site da  e passa a exibir seus anúncios com mais frequência quando o Titular visitar sites que aceitam anúncios na rede de display do Google.Isto é, por meio da função de remarketing a  poderá apresentar anúncios a Titulares que visitaram o seu website adicionando-lhe a etiqueta global do site para remarketing e fragmentos de eventos.Uma vez instalada a etiqueta global do site, ela irá capturar informações sobre as páginas visualizadas pelos Titulares do website da .Essas informações incluem o URL e o título da página e são utilizadas para criar listas de remarketing. O fragmento do evento pode ser utilizado para transmitir dados específicos para o Google Ads acerca dos visitantes do website da  e das ações que realizam no seu site, como, por exemplo, a visualização de um produto, a realização de compras, o preenchimento de formulários online e a configuração do registro. Os dados transmitidos para o fragmento do evento também podem ser utilizados para criar listas de remarketing.</td>
				</tr>
				<tr>
					<td>4.6.</td>
					<td>Ao usar o , o Titular permite a introdução das ferramentas acima listadas e, consequentemente, a coleta, o armazenamento e o uso dos seus dados de uso na forma acima descrita e para os fins especificados. Além disso, aceita que seus dados sejam armazenados em Cookies mesmo depois de encerrar sessão no navegador e que seja possível, por exemplo, acessá-los novamente na sua próxima visita ao site. O Titular poderá revogar este consentimento a qualquer momento.</td>
				</tr>
			</tbody>
		</table>


		<h3>5. DA SEGURANÇA</h3>

		<table class="table-unbordered">
			<tbody>
				<tr>
					<td>5.1.</td>
					<td>A segurança de suas informações pessoais é importante para a . A  adota os padrões e de boas práticas de mercado para proteção dos dados pessoais desde o momento da coleta até a sua eliminação, mas não se limitando a essas operações.</td>
				</tr>
				<tr>
					<td>5.2.</td>
					<td>A  emprega as medidas razoáveis â€‹â€‹e apropriadas para proteger os dados pessoais contra perda, uso indevido e acesso não autorizado, divulgação, alteração e destruição, levando em consideração os riscos envolvidos no processamento e a natureza dos dados pessoais. A  implementou medidas técnicas e organizacionais apropriadas e projetadas para assegurar a proteção de dados. Sempre que possível e/ou necessário, os dados pessoais poderão ser criptografados com algoritmos de criptografia adequados e fortes.</td>
				</tr>
				<tr>
					<td>5.3.</td>
					<td>O Titular se declara ciente de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. A  se compromete a realizar os melhores esforços para proteger os dados pessoais do Titular; no entanto, a  não pode garantir a segurança absoluta. Caso suas informações pessoais sejam comprometidas com uma violação da segurança, a  notificará, no prazo razoável, o(s) Titular(es) afetados e a ANPD, conforme determina a LGPD.</td>
				</tr>
				<tr>
					<td>5.4.</td>
					<td>Se o Titular tiver alguma dúvida sobre a segurança de seus dados pessoais ou a ferramenta utilizada pela , deve entrar em contato por meio dos canais indicados no item 3.2.</td>
				</tr>
			</tbody>
		</table>


		<h3>6. DA ATUAÇÃO PERANTE À AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS</h3>

		<table class="table-unbordered">
			<tbody><tr>
				<td>6.1.</td>
				<td>A  atuará em conjunto com a Autoridade Nacional de Proteção de Dados para zelar pela proteção de dados pessoais nos limites da legislação vigente.</td>
			</tr>
			<tr>
				<td>6.2.</td>
				<td>O Titular se declara ciente de que a  revisará suas diretrizes e procedimentos sempre que a ANPD exigir.</td>
			</tr>
			<tr>
				<td>6.3.</td>
				<td>Todas as solicitações e/ou questionamentos da ANPD serão prontamente respondidas pelo Encarregado.</td>
			</tr>
			<tr>
				<td>6.4.</td>
				<td>Sempre que a ANPD solicitar a instauração de procedimento para averiguar qualquer situação envolvendo dados pessoais, como, mas não se limitando, ao descumprimento da LGPD, o Encarregado contará com o suporte do Comitê de Segurança da Informação e Respostas a Incidentes e será o responsável pela coordenação desse grupo.</td>
			</tr>
			<tr>
				<td>6.5.</td>
				<td>Caberá somente ao Encarregado manter contato com a ANPD.</td>
			</tr>
		</tbody></table>

		<h3>7. DISPOSIÇÕES GERAIS</h3>

		<table class="table-unbordered">
			<tbody><tr>
				<td>7.1. </td>
				<td>Nenhuma tecnologia utilizada pela  infringe qualquer legislação vigente e estes Termos de Privacidade, além de ter o objetivo de proteger os dados pessoais e garantir a privacidade do Titular.</td>
			</tr>
			<tr>
				<td>7.2. </td>
				<td>A  não utilizará método de tratamento automatizado de dados pessoais que afetem os interesses do Titular, incluídas as decisões destinadas a definir o perfil pessoal, profissional, de consumo e de crédito ou os aspectos de sua personalidade.</td>
			</tr>
			<tr>
				<td>7.3. </td>
				<td>O Titular se declara ciente de que a  possui o direito de alterar o teor destes Termos de Privacidade a qualquer momento, conforme a finalidade ou necessidade, tal qual para adequação e conformidade à disposição de lei ou norma que tenha força jurídica equivalente. Cabe ao Titular verificar o conteúdo destes Termos sempre que acessar o website da . A  encaminhará para o endereço eletrônico indicado pelo Titular no ato de cadastramento um aviso para informar que estes Termos foram modificados.</td>
			</tr>
			<tr>
				<td>7.3.1.</td>
				<td>Ocorrendo atualizações neste documento e que demandem nova coleta de consentimento, caso a  utilize essa base legal para o tratamento, o Titular será notificado por meio dos contatos que forneceu no cadastro. </td>
			</tr>
			<tr>
				<td>7.4. </td>
				<td>A  exige dos operadores com os quais compartilha os dados pessoais de seus Titulares, ou seja, as empresas terceirizadas que realizarem o processamento de quaisquer dados que coleta, que implementem uma Política de Segurança e Privacidade (PSIP) que deverá conter as diretrizes que especificar como, por exemplo, os meios tecnológicos para assegurar a proteção dos dados. Se os dados forem classificados pela  como "críticos", o(s) operador(es) será(ão) auditado(s) para verificação do cumprimento das diretrizes estabelecidas na Política de Segurança da Informação e Privacidade. Caso não seja possível auditar o(s) operador(es), a  lhe(s) exigirá a emissão de certificado declarando que cumpriu as exigências previstas na PSIP.</td>
			</tr>
			<tr>
				<td>7.5. </td>
				<td>Caso a Autoridade Nacional de Proteção de Dados ou uma decisão judicial repute que qualquer uma das disposições destes Termos sejam inadequadas, inapropriadas ou contrárias a legislação vigente, as demais condições permanecerão em pleno vigor e efeito.</td>
			</tr>
		</tbody></table>

		<h3>8. DA LEI APLICÁVEL E JURISDIÇÃO</h3>
		<table class="table-unbordered">
			<tbody><tr>
				<td>8.1</td>
				<td>O presente Termos de Privacidade será regido e interpretado segundo a legislação brasileira, no idioma português, sendo eleito o Foro da Comarca de domicílio do Titular para dirimir qualquer litígio ou controvérsia envolvendo o presente documento, salvo ressalva específica de competência pessoal, territorial ou funcional pela legislação aplicável.</td>
			</tr>
		</tbody></table>

		<p><b>Atualização:</b> 21 de agosto de 2023.</p>
	</div>

      <p>
        Para mais informações, acesse o site: <a href="https://www.gov.br/anpd/pt-br">ANPD website</a>.
      </p>
    </div>
  );
};

export default LgpdPage;
