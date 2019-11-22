$("#menu").mouseenter(function (e) {
    $("#menu").css({"width":"300px", "height": "210px"})
    $("#menu_options").css({"display":"block"})
})
$("#menu").mouseleave(function (e) {
    $("#menu").css({"width":"", "height": ""})
    $("#menu_options").css({"display":"none"})
})
$( window ).bind("resize", function(){
	$("#imgMsf").css({"top": "calc(50% - " + ($("#imgMsf").css('height').replace("px", "")) / 2 + "px)"})
})
var elementobusca;
function mudarConteudo(event, elemento){

	$("#conteudo").css({"display": "block"})
	if (elemento == "mudar1"){
		elementobusca = "mudar1"
		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',
 				'<h1>O que é o Microsoft Solutions Framework (MSF)</h1>',
 				'<p>O Microsoft Solutions Framework é uma ferramenta eficaz para as organizações que desejam desenvolver com rapidez soluções de tecnologia de alta qualidade e que sejam relevantes para seus negócios. Sua flexibilidade permite uma adaptação fácil para a maioria dos projetos de tecnologia, ajudando as equipes a se comunicar efetivamente e a coordenar atividades críticas.</p>',
 				'<p>O MSF concentra-se em:</p>',
 				'<p>•	Alinhar os objetivos de negócios e de tecnologia</p>',
 				'<p>•	Estabelecer objetivos, funções e responsabilidades do projeto com clareza</p>',
 				'<p>•	Implantar um processo iterativo, baseado em etapas/pontos de verificação</p>',
 				'<p>•	Gerenciar riscos de forma proativa</p>',
 				'<p>•	Responder a mudanças de forma efetiva</p>',
 				'</div>',


            ].join("\n");
        $("#voltar").css({"display": "none"})
		$("#proximo").css({"display": "block"})
	}else if (elemento == "mudar2"){
		elementobusca = "mudar2"
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})
		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',            
 				'<h1>Os principais elementos do MSF são:</h1>',
 				'<p>•	Os Princípios Fundamentais e as Mentalidades do MSF para orientar e direcionar as equipes e seus membros em relação a como trabalhar em conjunto para entregar uma solução</p>',
 				'<p>•	O Modelo de Equipe do MSF permite o redimensionamento dos projetos, garante que as equipes atendam a uma variedade de necessidades dos participantes e defina funções e responsabilidades baseadas em objetivos</p>',
 				'<p>•	O Modelo de Governança do MSF (formalmente chamado de Modelo de Processo do MSF) produz resultados rápidos e de alta qualidade por meio de um ciclo de vida de projeto comprovado e capaz de identificar as principais atividades do projeto</p>',
            	'</div>',
            ].join("\n");
    }else if (elemento == "mudar3"){
    	elementobusca = "mudar3"

		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',
 				'<h1>Os princípios fundamentais e as mentalidades do MSF</h1>',
 				'<p>A essência do Microsoft Solution Framework (MSF) é formada pelos princípios e mentalidades que representam anos de experiência. Destilados em conceitos que se aplicam a vários modelos, processos e disciplinas do MSF, esses princípios e mentalidades representam a base do MSF. Embora sejam conceitos de senso comum, entendê-los e implantá-los corretamente pode ser um verdadeiro desafio. No entanto, depois de entendidos, a equipe será capaz de produzir produtos de qualidade em conjunto.</p>',
            ].join("\n");
 		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})     
    }else if (elemento == "mudar4"){
    	elementobusca = "mudar4"
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})
		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',            
 				'<h1>Princípios fundamentais</h1>',
 				'<p>Os princípios e conceitos do MSF ilustrados abaixo visam orientar as equipes de projetos na entrega de soluções de qualidade. Todos os membros da equipe devem entender e aplicar esses princípios em suas interações com os outros membros, com a organização e com os participantes do projeto. A essência do MSF é composta por nove princípios básicos:</p>',
 				'<p>1.	Promover uma comunicação aberta. Para que a equipe seja efetiva e eficiente, você e sua equipe precisam compartilhar níveis apropriados de informações com os membros da equipe, bem como com toda a empresa. A equipe precisa entender a natureza das necessidades a serem atendidas e como os membros da equipe e os contatos externos se comunicam. A parte difícil é determinar um nível apropriado para cada relação e quais informações precisam ser compartilhadas.</p>',
 				'<p>2.	Trabalhar em busca de uma visão compartilhada. Ter uma visão compartilhada capacita os membros da equipe e lhes proporciona agilidade para que possam tomar decisões fundamentadas com rapidez para alcançar uma visão. Uma visão compartilhada também ajuda os membros da equipe a preencher as lacunas relacionadas a requisitos à medida que são descobertas.</p>',
 				'<p>3.	Capacitar os membros da equipe. Capacitar os membros da equipe não é só uma das muitas maneiras de sobreviver em um ambiente em constante mudança, mas os membros da equipe também devem aprender a encontrar maneiras criativas para serem bem-sucedidos e ajudarem uns aos outros. Se os membros da equipe não tiverem permissão para obter o seu melhor, além de terem sua criatividade diminuída, também sofrerão de falta de confiança e se sentirão incapazes de ajudar a criar uma equipe de alto desempenho.</p>',
 				'<p>4.	Estabelecer responsabilidades com clareza e de forma compartilhada. Os membros da equipe capacitados geralmente se sentem mais responsáveis por suas decisões e são mais propensos a serem corresponsáveis por um projeto. Quanto maior for a responsabilidade do membro da equipe, maior será a qualidade obtida. </p>',
 				'<p>5.	Entregar valor incremental. Há duas facetas na entrega de valor incremental:</p>',
 				'<p style="text-indent: 4.3em">	1.	Assegurar que a entrega possua o valor ideal para os participantes.</p>',
 				'<p style="text-indent: 4.3em">	2.	Determinar os incrementos ideais para entregar o valor ou a "frequência de entrega".</p>',
 				'<p>6.	Ficar em estado de alerta, prever e se adaptar à mudança. Uma vez que as mudanças podem ocorrer com frequência e no pior momento possível, a agilidade em respondê-las ajuda a minimizar as interrupções comuns causadas por elas. Ficar em estado de alerta significa que uma organização está pronta para a mudança e é capaz de se adaptar e se ajustar sem dificuldades.</p>',
 				'<p>7.	Investir na qualidade. Muitas organizações prezam pela qualidade – termo muitas vezes vagamente definido – mas pecam pela falta de compreensão de como quantificá-la. A qualidade é algo que deve ser incorporado de forma proativa no ciclo de vida da entrega da solução. Ela não acontece por acaso.</p>',
 				'<p>8.	Aprender com todas as experiências. Se todos os níveis de uma organização não conseguirem aprender com o que já foi feito e não funcionou, como será possível esperar melhorar da próxima vez? Os membros da equipe devem entender e reconhecer que a aprendizagem ocorre em todos os níveis:</p>',
 				'<p style="text-indent: 4.3em">	-	Em nível de projeto, por exemplo, ao refinar um processo que abrange todo o projeto</p>',
 				'<p style="text-indent: 4.3em">	-	Em nível individual, por exemplo, ao interagir melhor com os outros membros da equipe</p>',
 				'<p style="text-indent: 4.3em">	-	Em nível organizacional, por exemplo, ao ajustar as métricas de qualidade coletadas para cada projeto</p>',
 				'<p>9.	Estabelecer parcerias com clientes internos e externos. É possível aumentar a possibilidade de sucesso quando o cliente trabalha em conjunto com a equipe do projeto. Isso não quer dizer que os clientes devem fazer o trabalho da equipe. No entanto, quando os clientes trabalham próximos e de forma incremental com a equipe de entrega, a solução obtida atende melhor às suas expectativas. A parceria com clientes traz benefícios mútuos, pois ajuda a reduzir a incerteza, diminui o tempo para solucionar dúvidas quanto a requisitos e aumenta a compreensão da equipe em relação às propostas de valor da solução por meio de contatos regulares.</p>',
 				'</div>',
            ].join("\n");
    }else if (elemento == "mudar5"){
    	elementobusca = "mudar5"

		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',            
 				'<h1>Mentalidades</h1>',
 				'<p>Enquanto os princípios fundamentais discutidos acima dizem respeito a como a equipe deve ser orientada para maximizar o sucesso, a orientação dos membros da equipe como indivíduos para maximizar seu sucesso é chamada de mentalidade. As mentalidades ajudam os membros da equipe a se aproximarem do atendimento à entrega da solução específica deles. O ideal é que os membros da equipe fiquem tão à vontade com as mentalidades que as usem no trabalho e fora dele. Alguns exemplos de mentalidades que todos os membros da equipe devem incorporar são apresentados abaixo:</p>',
 				'<p>•	Promover uma equipe de colegas. Se sua organização for capaz de incorporar os princípios fundamentais do MSF, especialmente em relação à capacitação e à responsabilidade, fará realmente sentido executar um projeto com uma estrutura de projeto hierárquica? Se todos conseguirem entender a missão e seus objetivos de modo a estabelecer uma visão compartilhada, funções e responsabilidades para a entrega de uma solução, todos agirão como colegas e poderão ser tratados sem diferenças. </p>',
 				'<p>•	Concentrar no valor comercial. O sucesso é medido em termos de entrega de valor comercial. Isso não significa apenas entregar algo que os clientes precisam, mas sim o que desejam e valorizam. Para entregar valor, cada membro de uma equipe precisa entender o que os clientes consideram valioso. </p>',
 				'<p>•	Manter a perspectiva da solução. Em função do tamanho e complexidade da maioria dos projetos, quando uma solução for vista pela ótica de suas partes acionáveis, os membros da equipe, por vezes, preocupam-se em detalhes tão pequenos que se esquecem de manter o foco na solução final. </p>',
 				'<p>•	Ter orgulho do trabalho realizado. Não apenas a equipe deve investir na qualidade, como os membros também devem se considerar tão responsáveis pela qualidade quanto os outros membros da equipe.</p>',
 				'<p>•	Aprender de forma contínua. Às vezes, ter orgulho das habilidades que você e sua equipe possuem não é suficiente para cumprir o objetivo final. Os membros da equipe precisam aprender novas habilidades para se tornarem colegas melhores em sua equipe. Considerando que a maioria dos projetos, equipes e ambientes são únicos, todo projeto apresenta oportunidades de aprendizagem, experimentação e refinamento de habilidades, processos e procedimentos. </p>',
 				'<p>•	Incorporar as qualidades de serviço. As qualidades de serviço (QoS) definem as características operacionais esperadas de uma solução, tal como o nível esperado de disponibilidade da solução. </p>',
 				'<p>•	Praticar a boa cidadania. Do ponto de vista do desenvolvimento de software, a boa cidadania significa ser confiável, honesto, responsável e respeitoso em todos os aspectos do trabalho. Isso inclui, entre outras formas, como você:</p>',
 				'<p style="text-indent: 4.3em">	-	Interage com seus colegas de equipe, com uma organização ou com os participantes</p>',
 				'<p style="text-indent: 4.3em">	-	Participa de um projeto e ajuda a entregar uma solução, incluindo ser o encarregado pela proteção de recursos corporativos, computacionais e de projeto. Isso inclui compartilhar, de forma aberta e voluntária, recursos, informações e conhecimento. Os bons cidadãos agem em prol de um bem maior e estão conscientes disso.</p>',
 				'<p>•	Cumprir os compromissos. Apesar das várias verificações e balanços incorporados, o MSF é executado com base na confiança e na capacitação, que são obtidas, em parte, pelos membros da equipe que cumprem seus compromissos. O MSF estabelece um ambiente no qual os membros da equipe e os participantes são capazes de confiar que seus colegas de equipe entregarão o que disseram que entregariam. </p>',
				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})            
    }else if (elemento == "mudar6"){
    	elementobusca = "mudar6"
		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',           
 				'<h1>O Modelo de Equipe do MSF</h1>',
 				'<p>O Modelo de Equipe do MSF segmenta atividades e responsabilidades típicas de entrega de solução em sete grupos de defesa. Esses grupos são interdependentes e multidisciplinares. Como representado na tabela abaixo, para ajudar a alcançar uma abordagem equilibrada, essas funções trazem uma perspectiva única do que é necessário, o que deve ser defendido e quais devem ser os objetivos associados à entrega de uma solução. Essas funções podem ser combinadas para situações de equipes pequenas e expandidas para situações de equipes grandes</p>',
            	'<table>',
                '<thead>',
                '<tr>',
                '<th>Função</th>',
                '<th>Objetivos</th>',
                '<th>Áreas funcionais</th>',                
                '</tr>',
                '</thead>',
                '<tbody>',
                '<tr>',
                '<td>Gerenciamento do produto</td>',
                '<td>•	Garantir que a solução agregue valor comercial<br>•	Definir a solução dentro das restrições do projeto<br>•	Garantir que as necessidades e expectativas dos clientes sejam atendidas</td>',
                '<td>•	Comunicações de marketing/corporativas<br>•	Análise de negócios<br>•	Planejamento do produto</td>',
                '</tr>',
                '<tr>',
                '<td>Gerenciamento de programas</td>',
                '<td>•	Entregar a solução dentro das restrições do projeto<br>•	Configurar os meios pelos quais as necessidades e expectativas do responsável são atendidas</td>',
                '<td>•	Gerenciamento do projeto<br>•	Gerenciamento de programas<br>•	Gerenciamento de recursos<br>•	Controle de processos<br>•	Gerenciamento da qualidade do projeto<br>•	Operações do projeto</td>',
                '</tr>',
                '<tr>',
                '<td>Arquitetura</td>',
                '<td>•	Projetar uma solução para atender aos objetivos comerciais dentro das restrições do projeto</td>',
                '<td>•	Arquitetura da solução<br>•	Arquitetura técnica<br></td>',
                '</tr>',
                '<tr>',
                '<td>Desenvolvimento</td>',
                '<td>•	Criar a solução de acordo com a especificação</td>',
                '<td>•	Desenvolvimento da solução<br>•	Consultoria em tecnologia</td>',
                '</tr>',
                '<tr>',
                '<td>Experiência do Usuário</td>',
                '<td>•	Maximizar a usabilidade da solução<br>•	Aprimorar a preparação e eficácia do usuário<br>•	Garantir que as necessidades e expectativas dos usuários sejam atendidas</td>',
                '<td>•	Acessibilidade<br>•	Internacionalização<br>•	Comunicações de suporte técnico<br>•	Treinamento<br>•	Usabilidade<br>•	Design da interface do usuário</td>',
                '</tr>',
                '<tr>',
                '<td>Teste</td>',
                '<td>•	Aprovar a solução para liberação apenas depois de verificar se todos os aspectos da solução atendem ou excedem os níveis de qualidade definidos</td>',
                '<td>•	Teste de regressão<br>•	Teste funcional<br>•	Teste de usabilidade<br>•	Teste do sistema</td>',
                '</tr>',
                '<tr>',
                '<td>Versão/operações</td>',
                '<td>•	Implantação e transição suaves para operações<br>•	Garantir que as necessidades e expectativas das Operações de TI/Negócios sejam atendidas</td>',
                '<td>•	Gerenciamento de versão<br>•	Infraestrutura da entrega<br>•	Operações<br>•	Gerenciamento da compilação<br>•	Administração de ferramentas</td>',
                '</tr>',
                '</tbody>',
            	'</table>',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})
    }else if (elemento == "mudar7"){
    	elementobusca = "mudar7"
		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',            
 				'<h1>O Modelo de Governança do MSF</h1>',
 				'<p>O Modelo de Governança é um componente flexível do MSF que foi usado com êxito para melhorar o controle do projeto, minimizar o risco, aprimorar a qualidade da solução e aumentar a velocidade de desenvolvimento. Como o MSF é totalmente personalizável, espera-se que uma organização se adapte ao Modelo de Governança de forma a adequar seus processos de negócios e abordagens de entrega de solução existentes.</p>',
 				'<p>Os principais aspectos do Modelo de Governança do MSF incluem a sobreposição das trilhas de atividades, a sincronização dos pontos de verificação e uma abordagem incremental para fornecer valor ao cliente.</p>',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})          
    }else if (elemento == "mudar8"){
    	elementobusca = "mudar8"
		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [

            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',            
 				'<h1>Trilhas</h1>',
 				'<p>As trilhas usam análises e pontos de sincronização, chamados de pontos de verificação, as trilhas servem para ajudar a determinar se os objetivos estão sendo atendidos. Além disso, pontos de verificação principais são usados para encerrar cada trilha, o que permite uma transferência de responsabilidade no direcionamento de várias atividades e incentiva a equipe a obter uma nova perspectiva mais apropriada para os objetivos da próxima trilha.</p>',
 				'<p>O Modelo de Governança do MSF consiste em cinco sobreposições de trilhas de aprovação e uma trilha de governança contínua que abrange todas as trilhas de aprovação.</p>',
 				'<h1>Diagrama da trilha de governança</h1>',
 				'<img id="img01" src="../Imagens/1.png" />',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})            
    }else if (elemento == "mudar9"){
    	elementobusca = "mudar9"

		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',            
 				'<h1>Trilha de Governança</h1>',
 				'<p>A Trilha de Governança se concentra no equilíbrio do uso eficiente e efetivo dos recursos do projeto e na entrega de uma solução de acordo com um conjunto de restrições passível a mudanças. Além disso, a Trilha de Governança preza pelo aperfeiçoamento contínuo do processo.</p>',
 				'<p>Os objetivos da Trilha de Governança são os seguintes:</p>',
 				'<p>•	Orientar atividades de aprovação para entregar uma solução com resultados repetíveis e confiáveis</p>',
 				'<p>•	Otimizar e melhorar continuamente o desempenho e o rendimento da equipe, a qualidade da solução e a melhoria do processo</p>',
 				'<p>•	Garantir a aprovação de:</p>',
 				'<p style="text-indent: 4.3em">	-	Usuários para que uma solução atenda às suas necessidades e possa ser usada de modo suficiente</p>',
 				'<p style="text-indent: 4.3em">	-	Operações para que uma solução esteja pronta para ser implantada</p>',
 				'<p style="text-indent: 4.3em">	-	Cliente para que um projeto seja concluído</p>',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})            
    }else if (elemento == "mudar10"){
    	elementobusca = "mudar10"

		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',            
 				'<h1>Trilhas de Aprovação</h1>',
 				'<p>A aprovação do processo é a sequência detalhada de etapas pelas quais uma solução é definida, compilada e implantada. Basicamente, as trilhas de aprovação ajudam uma equipe a: chegar a um acordo de alto nível sobre o que é idealizado e criar opções de abordagem para cumprir essa visão (Trilha de Idealização); avaliar essas opções e planejar a opção selecionada (Trilha de Planejamento); compilar a solução (Trilha de Compilação); assegurar que a solução seja entregue conforme o esperado (Trilha de Estabilização); e, por fim, implantar a solução (Trilha de Implantação).</p>',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})            
    }else if (elemento == "mudar11"){
    	elementobusca = "mudar11"

		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',  
 				'<h1>Pontos de verificação</h1>',
 				'<p>Os pontos de verificação, os quais constituem um tema fundamental no MSF, são usados para planejar e monitorar o andamento e evocar a conclusão das entregas e das atividades. Pontos de verificação são usados por vários motivos, por exemplo, para:</p>',
 				'<p>•	Ajudar a sincronizar os elementos de trabalho.</p>',
 				'<p>•	Fornecer visibilidade externa do andamento e da qualidade.</p>',
 				'<p>•	Permitir correções durante o percurso.</p>',
 				'<p>•	Concentrar as análises em objetivos e entregas.</p>',
 				'<p>•	Fornecer pontos de aprovação do trabalho antes de avançar.</p>',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})            
    }else if (elemento == "mudar12"){
    	elementobusca = "mudar12"

		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',  
 				'<h1>Abordagem iterativa</h1>',
 				'<p>Uma solução não fornece valor comercial até que seja implantada na produção e usada de forma eficaz. Por esse motivo, o ciclo de vida do Modelo de Governança do MSF inclui o desenvolvimento incremental e a implantação da solução na produção, garantindo, assim, a concretização do valor comercial e da visão e objetivos estratégicos globais da equipe. </p>',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "block"})            
    }else if (elemento == "mudar13"){
    	elementobusca = "mudar13"

		var container_dados = document.getElementById("conteudo");
            container_dados.innerHTML = [
            	'<button id="fechar" onclick="fecharconteudo()">Fechar</button>',
            	'<button id="proximo" onclick="proximo()">>></button>',
            	'<button id="voltar" onclick="voltar()"><<</button>',
            	'<div id="conteudo1">',  
 				'<h1 style="text-align: center">Pergunta</h1>',
 				'<p style="text-align: center">O conceito de MSF é composto por 9 princípios básicos. Qual o objetivo desses princípios?</p>',
 				'<h1 style="text-align: center">Referências Bibliográficas</h1>',
 				'<a href="https://www.microsoft.com" style="text-align: center">https://www.microsoft.com<a/>',
 				'</div>',
            ].join("\n");
		$("#voltar").css({"display": "block"})
		$("#proximo").css({"display": "none"})            
    }
}
function fecharconteudo(){
	$("#conteudo").css({"display": "none"})	
}
function proximo() {
 	if (elementobusca == "mudar1"){
 		mudarConteudo(event, 'mudar2')
 	}else if (elementobusca == "mudar2"){
 		mudarConteudo(event, 'mudar3')
 	}else if (elementobusca == "mudar3"){
 		mudarConteudo(event, 'mudar4')
 	}else if (elementobusca == "mudar4"){
 		mudarConteudo(event, 'mudar5')
 	}else if (elementobusca == "mudar5"){
 		mudarConteudo(event, 'mudar6')
 	}else if (elementobusca == "mudar6"){
 		mudarConteudo(event, 'mudar7')
 	}else if (elementobusca == "mudar7"){
 		mudarConteudo(event, 'mudar8')
 	}else if (elementobusca == "mudar8"){
 		mudarConteudo(event, 'mudar9')
 	}else if (elementobusca == "mudar9"){
 		mudarConteudo(event, 'mudar10')
 	}else if (elementobusca == "mudar10"){
 		mudarConteudo(event, 'mudar11')
 	}else if (elementobusca == "mudar11"){
 		mudarConteudo(event, 'mudar12')
 	}else if (elementobusca == "mudar12"){
 		mudarConteudo(event, 'mudar13')
 	}
}
function voltar() {
 	if (elementobusca == "mudar13"){
 		mudarConteudo(event, 'mudar12')
 	}else if (elementobusca == "mudar12"){
 		mudarConteudo(event, 'mudar11')
 	}else if (elementobusca == "mudar11"){
 		mudarConteudo(event, 'mudar10')
 	}else if (elementobusca == "mudar10"){
 		mudarConteudo(event, 'mudar9')
 	}else if (elementobusca == "mudar9"){
 		mudarConteudo(event, 'mudar8')
 	}else if (elementobusca == "mudar8"){
 		mudarConteudo(event, 'mudar7')
 	}else if (elementobusca == "mudar7"){
 		mudarConteudo(event, 'mudar6')
 	}else if (elementobusca == "mudar6"){
 		mudarConteudo(event, 'mudar5')
 	}else if (elementobusca == "mudar5"){
 		mudarConteudo(event, 'mudar4')
 	}else if (elementobusca == "mudar4"){
 		mudarConteudo(event, 'mudar3')
 	}else if (elementobusca == "mudar3"){
 		mudarConteudo(event, 'mudar2')
 	}else if (elementobusca == "mudar2"){
 		mudarConteudo(event, 'mudar1')
 	}
}