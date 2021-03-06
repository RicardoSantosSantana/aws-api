
export default function exercicio(req,res) {
    const data = [
        {
         "pergunta": "Por que a AWS é mais econômica do que os datacenters tradicionais para aplicações com diferentes workloads de computação?",
         "opcoes":[
             {"A) Os custos do Amazon EC2 são cobrados mensalmente.":false},
             {"B) Os usuários mantêm acesso administrativo total às instâncias do Amazon EC2.":false},
             {"C) As instâncias do Amazon EC2 podem ser executadas sob demanda quando necessário.":true},
             {"D) Os usuários podem executar instâncias suficientes permanentemente para lidar com picos de workload.":false}
         ],
         "resposta": "C – A capacidade de executar instâncias sob demanda  quando necessário permite que os usuários executem e encerrem instâncias em resposta a uma workload variável. Essa é uma prática mais econômica do que comprar servidores on-premises suficientes para lidar com o pico de carga."
         },
                  
         {
             "pergunta": "Qual serviço da AWS simplificaria a migração de um banco de dados para a AWS?",
             "opcoes":[
                 {"A) AWS Storage Gateway":false},
                 {"B) AWS Database Migration Service (AWS DMS)":true},
                 {"C) Amazon EC2":false},
                 {"D) Amazon AppStream 2.0":false}
             ],
             "resposta": "B – O AWS DMS  ajuda os usuários a migrar bancos de dados para a AWS de forma rápida e segura. O banco de dados de origem permanece totalmente operacional durante a migração, minimizando períodos de inatividade para aplicações que dependem dele. O AWS DMS pode migrar os dados de e para os bancos de dados comerciais e de código aberto mais usados"
         },
         {
             "pergunta": "Qual oferta da AWS permite que os usuários encontrem, comprem e comecem imediatamente a usar soluções de software no ambiente da AWS?",
             "opcoes":[
                 {"A) AWS Config":false},
                 {"B) AWS OpsWorks":false},
                 {"C) SDK da AWS":false},
                 {"D) AWS Marketplace":true}
             ],
             "resposta": "D – O AWS Marketplace é um catálogo digital com milhares de ofertas de software de fornecedores independentes. Ele facilita a localização, o teste, a compra e a implantação de software executado na AWS."
         },    
         {
             "pergunta": "Qual serviço de rede da AWS permite que uma empresa crie uma rede virtual na AWS?",
             "opcoes":[
                 {"A) AWS Config":false},
                 {"B) Amazon Route 53":false},
                 {"C) AWS Direct Connect":false},
                 {"D) Amazon Virtual Private Cloud (Amazon VPC)":true}
             ],
             "resposta": "D – A Amazon VPC permite que os usuários provisionem uma seção logicamente isolada da Nuvem AWS, onde é possível executar recursos da AWS em uma rede virtual que eles mesmos definem." 
         },
         {
             "pergunta": "Qual das seguintes ações é uma responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS?",
             "opcoes":[
                 {"A) Configuração de aplicações de terceiros":false},
                 {"B) Manutenção de hardware físico":true},
                 {"C) Proteção do acesso e dos dados da aplicação":false},
                 {"D) Gerenciamento de sistemas operacionais convidados":false}
             ],
             "resposta": "B – A manutenção de hardware físico é uma responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS." 
         },
         {
             "pergunta": "Qual componente da infraestrutura global da AWS o Amazon CloudFront usa para garantir a entrega de baixa latência?",
             "opcoes":[
                 {"A) Regiões da AWS":false},
                 {"B) Locais da borda":true},
                 {"C) Zonas de disponibilidade ":false},
                 {"D) Virtual Private Cloud (VPC)":false}
             ],
             "resposta": "B – Para fornecer conteúdo a usuários com menor latência, o Amazon CloudFront usa uma rede global de pontos de presença (locais de borda e caches de borda regionais) em todo o mundo. " 
         },
         {
             "pergunta": "Como um administrador de sistema incluiria uma camada adicional de segurança de login ao Console de Gerenciamento da AWS de um usuário?",
             "opcoes":[
                 {"A) Com o Amazon Cloud Directory":false},
                 {"B) Com a auditoria de funções do AWS Identity and Access Management (IAM)":false},
                 {"C) Com a habilitação da autenticação multifator":true},
                 {"D) Com a habilitação do AWS CloudTrail":false}
             ],
             "resposta": "C – A autenticação multifator (MFA) é uma prática recomendada simples que adiciona uma camada extra de proteção ao nome de usuário e à senha. Com a MFA habilitada, quando o usuário faz login em um Console de Gerenciamento da AWS, serão solicitados o nome do usuário e a senha (o primeiro fator, o que ele sabe), bem como um código de autenticação do dispositivo MFA (o segundo fator, o que ele tem). Em conjunto, esses vários fatores fornecem maior segurança para as configurações e os recursos da conta da AWS." 
         },
         {
             "pergunta": "Qual serviço pode identificar o usuário que fez a chamada de API quando uma instância do Amazon EC2 é encerrada?",
             "opcoes":[
                 {"A) AWS Trusted Advisor":false},
                 {"B) AWS CloudTrail":true},
                 {"C) AWS X-Ray":false},
                 {"D) AWS Identity and Access Management (AWS IAM)":false}
             ],
              "resposta": "B – O AWS CloudTrail  ajuda os usuários a habilitar governança, conformidade e auditoria operacional e de risco de suas contas da AWS. As ações realizadas por um usuário, uma função ou um serviço da AWS são registradas como eventos no CloudTrail. Os eventos incluem ações realizadas no Console de Gerenciamento da AWS, na Interface da Linha de Comando (CLI) da AWS e nos SDKs e nas APIs da AWS." 
         },
         {
             "pergunta": "Qual serviço seria usado para enviar alertas com base nos alarmes do Amazon CloudWatch?",
             "opcoes":[
                 {"A) Amazon Simple Notification Service (Amazon SNS)":true},
                 {"B) AWS CloudTrail":false},
                 {"C) AWS Trusted Advisor":false},
                 {"D) Amazon Route 53":false}
             ],
             "resposta": "A – O Amazon SNS  e o Amazon CloudWatch  são integrados para que os usuários possam coletar, visualizar e analisar métricas para cada SNS ativo. Depois que os usuários configuram o CloudWatch para o Amazon SNS, eles podem obter um insight melhor sobre a performance dos tópicos, notificações por push e entregas por SMS do Amazon SNS.  "
         },    
         {
             "pergunta": "Onde um usuário pode encontrar informações sobre ações proibidas na infraestrutura da AWS?",
             "opcoes":[
                 {"A) AWS Trusted Advisor":false},
                 {"B) AWS Identity and Access Management (IAM)":false},
                 {"C) Console de Faturamento da AWS":false},
                 {"D) Política de uso aceitável da AWS":true}
             ],
             "resposta": "D – A política de uso aceitável da AWS  fornece informações sobre ações proibidas na infraestrutura da AWS. " 
         },
         {
             "pergunta": "Seu estagiário pergunta sobre o que é computação na Nuvem. Qual a melhor resposta que você pode dar para ele?",
             "opcoes":[
                 {"A) São computadores quânticos que possuem alta disponibilidade e durabilidade":false},
                 {"B) São os computadores on-premises, que você realiza acesso remoto":false},
                 {"C) É um conjunto de programas que você adquire e configura no servidor da sua empresa":false},
                 {"D) São aplicativos e/ou serviços, que estão em um datacenter fora do seu ambiente local (on-premises), respondendo às requisições vindas da Internet.":true}
             ],
             "resposta": "D – São aplicativos e/ou serviços, que estão em um datacenter fora do seu ambiente local (on-premises), respondendo às requisições vindas da Internet." 
         },
         {
             "pergunta": "Em uma reunião com a diretoria da sua empresa para apresentar o projeto de ir para a Nuvem, o gerente financeiro levanta a mão e pergunta sobre qual será a vantagem financeira. Qual o melhor argumento para responder questionamentos assim?",
             "opcoes":[
                 {"A) Teremos uma redução de curso ao longo do tempo, diminuindo o Capex e aumentando o nosso Opex":true},
                 {"B) Teremos uma redução de custo ao longo do tempo, diminuindo o Opex e aumentando o Capex":false},
                 {"C) Não teremos uma redução de custo, porque o Capex é maior que o Opex":false},
                 {"D) Não teremos uma redução de curso, porque o Opex é maior que o Capex":false}
             ],
             "resposta": "A – O Opex é uma despesa operacional e é dedutível no imposto no mesmo ano da sua realização." 
         },
         {
             "pergunta": "Na prospecção de um novo cliente, você é questionado sobre qual a vantagem de ir para a Nuvem. Qual a melhor argumentação comercial para perguntas assim?",
             "opcoes":[
                 {"A) Still Guessing:   Ir para a Nuvem é fazer várias tentaticas até encontrar o melhor poder computacional":false},
                 {"B) Go Global in minutes:   Você não precisa mais esperar a compra de um novo servidor para melhorar seu desempenho. Na Nuvem você escolhe um serviço, configura e já começa a usar.":true},
                 {"C) Slow Speed:  Ir para a Nuvem é enfrentar latência, mas é um ambiente muito seguro.":false},
                 {"D) Expensive:  Ir para a Nuvem pode ser caro no começo, mas possui vantagens competitivas.":false}
             ],
             "resposta": "B - Enquanto que em um ambiente on-premises você precisa aguardar o hardware chegar na sua empresa, na Nuvem ele está literalmente na distância de alguns cliques." 
         },
         {
             "pergunta": "Qual é o modelo computacional na Nuvem em que serei responsável pelo meu aplicativo, meus dados e o sistema operacional do computador?",
             "opcoes":[
                 {"A) Tradicional  ":false},
                 {"B) IaaS  Infraestrutura como Serviço ":true},
                 {"C) SaaS  Software como Serviço":false},
                 {"D) PaaS  Plataforma como Serviço ":false}
             ],
             "resposta": "B - No IaaS você tem acesso no sistema operacional. Exemplo de IaaS é o Amazon EC2." 
         },
         {
             "pergunta": "Quais são os modelos de implantação que a AWS quer que você conheça?",
             "opcoes":[
                 {"A) On-Premises, Hybrid, Cloud":true},
                 {"B) On-Premises, Full, Cloud":false},
                 {"C) On-Premises, Hybrid, Full":false},
                 {"D) Full, Hybrid, Cloud":false}
             ],
             "resposta": "A - No mercado eles são conhecidos como: Nuvem privada, Nuvem mista e Nuvem pública." 
         },
         {
             "pergunta": "Em uma entrevista de emprego, foi lhe perguntando o que é Escalabilidade Vertical na Nuvem.",
             "opcoes":[
                 {"A) Escalabilidade vertical é aumentar a quantidade de instâncias":false},
                 {"B) Escalabilidade vertical é aumentar o poder computacional da instância":true}            
             ],
             "resposta": "B - Correto! Exemplo é possuir um t2.micro e dar um upgrade para t2.large" 
         },
         {
             "pergunta": "O que você NÃO pode fazer de acordo com a AWS Acceptable Use Policy?",
             "opcoes":[
                 {"A) Iniciar serviços na Nuvem como código.":false},
                 {"B) Comprar um domínio com o Route 53.":false},
                 {"C) Executar o processamento analítico em dados que não lhe pertencem ou que foram vazados na internet.":true},
                 {"D) Conceder acesso de usuário e senha para os usuários.":false}
             ],
             "resposta": "C - Você não pode Executar processamento analítico em dados que não lhe pertencem ou que foram vazados na internet." 
         },
         {
             "pergunta": "O que é uma Região?",
             "opcoes":[
                 {"A) É um ponto de disponibilidade com um conjunto de regiões.":false},
                 {"B) É um ponto geográfico com um conjunto de zonas de disponibilidade.":true},
                 {"C) É um ponto de zona com um conjunto de disponibilidades.":false},
                 {"D) É um conjunto de datacenters que trabalham em cache.":false}
             ],
             "resposta": "B - Um exemplo é a região é a South-America, que dentro dela possui um conjunto de zonas de disponibilidade." 
         },
         {
             "pergunta": "Na Responsabilidade Compartilhada, qual a responsabilidade da AWS e qual a SUA responsabilidade?",
             "opcoes":[
                 {"A) While the AWS manages security IN  the cloud, you are responsible for security OF  the cloud.":false},
                 {"B) While the AWS manages security OF  the cloud, you are responsible for security IN  the cloud.":true},
                 {"C) While the AWS manages security OF  the cloud, you are responsible for security OF  the cloud.":false},
                 {"D) While the AWS manages security IN  the cloud, you are responsible for security IN  the cloud.":false}
             ],
             "resposta": "B - Essa é uma pergunta clássica de prova! Memorize isso: 'AWS = OF the Cloud e 'Você = IN the Cloud'" 
         },
         {
             "pergunta": "Você está recebendo uma equipe de auditoria na sua empresa e eles querem visitar o seu datacenter. Você explica que agora o seu datacenter está na Nuvem AWS e eles querem ir até lá por questão de compliance, segurança e conformidade. Podemos agendar uma visitar no datacenter da AWS?",
             "opcoes":[
                 {"A) Sim,   é só agendar uma visita via página da AWS. E os relatórios de conformidade podem ser obtidos no AWS Artifact.  ":false},
                 {"B) Não,   as visitar são proibidas. Porém a AWS é continuamente auditada e os relatórios de confirmidade podem ser obtidos no AWS Artifact.  ":true}
             ],
             "resposta": "B - Correto! Por questões de segurança, as visitas no datacenter da AWS são proibidas. A auditoria de conformidade dos serviços e infraestrutura AWS devem ser realizada com base nos documentos disponíveis no AWS Artifact." 
         },
         {
             "pergunta": "O que é uma conta Free Tier AWS?",
             "opcoes":[
                 {"A) São ofertas de nível gratuíto que não expiram.":false},
                 {"B) São ofertas de nível gratuíto que expiram em 12 meses.":false},
                 {"C) São ofertas de nível pago.":false},
                 {"D) São um conjunto de ofertas de nível gratuíto (que não expiram), de nível gratuito que expiram em 12 meses e de testes de curso prazo.":true}
             ],
             "resposta": "D - Sim, uma conta Free Tier  é o conjunto de três tipos de ofertas: Os do tipo sempre gratuitos, os que expiram em 12 meses e os de testes de curto prazo." 
         },
         {
             "pergunta": "O seu gerente operacional deseja ser avisado caso o orçamento da área ultrapasse os gastos na Nuvem. Qual serviço podemos utilizar para atender este pedido?",
             "opcoes":[
                 {"A) AWS Budgets":true},
                 {"B) AWS Cost Explorer":false},
                 {"C) AWS Pricing Calculator":false},
                 {"D) Savings Plans":false},
                 {"E) Nenhuma das anteriores":false}
             ],
             "resposta": "A - Sim, com este serviço você determina um valor e quando ultrapassado um email é enviado ao destinatário." 
         },
         {
             "pergunta": "Um cliente solicitou um orçamento de quanto ficará por mês para que o negócio dele vá para a Nuvem. Qual calculadora AWS você deve utilizar?",
             "opcoes":[
                 {"A) Custo Total de Propriedades (TCO).":false},
                 {"B) Calculadora de Custo Simples Mensal ou AWS Princing Calculator":true}
             ],
             "resposta": "A - Com esta calculadora você consegue orçar uma previsão de quanto será o custo mensal do seu ambiente na Nuvem." 
         },
         {
             "pergunta": "Para melhorar sua argumentação de levar o seu projeto para a Nuvem, você precisará apresentar números comparando os custos do ambiente on-premises, com os custos de execução no ambiente na Nuvem AWS. Qual calculadora AWS você deve utilizar?",
             "opcoes":[
                 {"A) Custo Total de Propriedades (TCO).":true},
                 {"B) Calculadora de Custo Simples Mensal ou AWS Princing Calculator":false}
             ],
             "resposta": "A - Essa calculadora é para compararmos o ambiente on-premises, versus o ambiente na Nuvem. Nele você terá um comparativo com os custos de servidores, armazenamento, redes e mão de obra de TI. Os impostos não são calculados." 
         },
         {
             "pergunta": "Uma empresa precisa consolidar o faturamento de todas as suas contas da AWS para facilitar o pagamento e a geração de relatórios. Qual serviço da AWS atenderá esse requisito?",
             "opcoes":[
                 {"A) AWS Billing and Cost Management":false},
                 {"B) AWS Cost Explorer":false},
                 {"C) AWS Organizations":true},
                 {"D) AWS Trusted Advisor":false}
             ],
             "resposta": "C - O AWS Organizations ajuda você a gerenciar e controlar seu ambiente de maneira centralizada à medida que os negócios e seus recursos da AWS expandem. Usando o AWS Organizations, você pode criar novas contas da AWS e alocar recursos, agrupar contas para organizar seus fluxos de trabalho, aplicar políticas a contas ou grupos para governança e simplificar o faturamento usando um único método de pagamento para todas as suas contas." 
         },
         {
             "pergunta": "O seu funcionário deseja acessar os recursos da AWS. Quais são as interfaces disponíveis de acesso?",
             "opcoes":[
                 {"A) Console de Gerencimento da AWS (HTTPS & APP).":false},
                 {"B) Command Line Interface (CLI).":false},
                 {"C) Software Development Kit (SDK).":false},
                 {"D) Todas as anteriores.":true}
             ],
             "resposta": "D - Todas as anteriores." 
         },    
         {
             "pergunta": "Você está com receio que algum usuário não autorizado esteja tentando ganhar acesso em alguns serviços no seu ambiente AWS. Qual o serviço que permite melhorar a segurança do seu aplicativo web?",
             "opcoes":[
                 {"A) Amazon Shield":false},
                 {"B) Amazon Glacier":false},
                 {"C) Amazon WAF":true},
                 {"D) Amazon VPC":false}
             ],
             "resposta": "C - Sim, o AWS WAF  é um firewall de aplicativos web." 
         },
         {
             "pergunta": "Qual serviço podemos utilizar para criar um usuário administrativo no AWS?",
             "opcoes":[
                 {"A) IAM":true},
                 {"B) Amazon EC2":false},
                 {"C) Amazon S3":false},
                 {"D) AWS Artifact":false}
             ],
             "resposta": "A - IAM  significa: Identity and Access Management." 
         },
         {
             "pergunta": "A área de desenvolvimento solicitou suporte na federação de login no aplicativo da empresa. Qual serviço da AWS você sugere utilizar?",
             "opcoes":[
                 {"A) Amazon EC2":false},
                 {"B) Route 53":false},
                 {"C) Credencial de Acesso Temporário":false},
                 {"D) Amazon Cognito":true}
             ],
             "resposta": "D - Sim, o Amazon Cognito  é para federação de login. O Amazon Cognito fornece autenticação, autorização e gerenciamento de usuários para suas aplicações Web e móveis. Seus usuários podem fazer login diretamente com um nome de usuário e uma senha ou por meio de terceiros, como o Facebook, a Amazon, o Google ou a Apple." 
         },
         {
             "pergunta": "O site da sua empresa está sofrendo constantes ataques de DDoS. Qual serviço podemos ativar para mitigar estes ataques?",
             "opcoes":[
                 {"A) Amazon Cognito":false},
                 {"B) AWS Shield":true},
                 {"C) AWS WAF":false},
                 {"D) AWS IAM":false}
             ],
             "resposta": "Sim, o AWS Shield  tem como características a proteção contra ataques DDoS. Um ataque Distributed Denial of Service (DDoS – ataques distribuídos de negação de serviço) é um ataque em que vários sistemas comprometidos lançam um flood em um destino, como uma rede de dados ou aplicações web, com tráfego. Um ataque DDoS pode evitar que usuários legítimos acessem um serviço e pode fazer com que o sistema falhe por conta do grande volume de tráfego.<p>A AWS fornece dois níveis de proteção contra ataques DDoS: AWS Shield Standard e AWS Shield Advanced.</p>" 
         },
         { 
             "pergunta": "O desenvolvedor da sua equipe perguntou quais são as linguagens de programação que estão disponíveis para começar a desenvolver no ambiente AWS. E você respondeu:",
             "opcoes":[
                 {"A) C++, Python e Ruby":false},
                 {"B) Java, JavaScript e PHP":false},
                 {"C) Go, .NET, Node.js":false},
                 {"D) Todas as anteriores":true}
             ],
             "resposta": "D - Ao total existem nove (09) linguagens disponíveis para desenvolver e gerenciar aplicativos na AWS." 
         },
         {
             "pergunta": "Qual serviço da AWS torna mais fácil para você criar e gerenciar chaves e controlar o uso de criptografia em uma ampla gama de serviços da AWS e em seus aplicativos?",
             "opcoes":[
                 {"A) AWS Shield":false},
                 {"B) AWS KMS":true},
                 {"C) AWS Secrets Manager":false},
                 {"D) AWS WAF":false}
             ],
             "resposta": "B - O AWS Key Management Service (AWS KMS)  é um serviço gerenciado que facilita a criação e o controle de chaves de criptografia usadas para criptografar dados. Para proteger e validar suas AWS KMS keys, o AWS KMS usa módulos de segurança de hardware (HSMs) de acordo com o Programa de validação de módulos criptográficos FIPS 140-2, exceto nas regiões China (Pequim) e China (Ningxia). O AWS KMS é integrado à maioria dos serviços da AWS que criptografam seus dados. O AWS KMS também é integrado ao AWS CloudTrail para registrar em log o uso das suas chaves do KMS para necessidades de auditoria, regulamentação e conformidade."
         },
         {
             "pergunta": "Após criar os acessos no seu ambiente, você criou um grupo, definiu suas permissões e adicionou os usuários. Porém, surgiu uma dúvida: É possível adicionar um grupo dentro deste grupo?",
             "opcoes":[
                 {"A) Sim":false},
                 {"B) Não":true}            
             ],
             "resposta": "B - Não é permitido criar grupo dentro de grupo." 
         },
         {
             "pergunta": "Qual é o conceito do princípio least privilege?",
             "opcoes":[
                 {"A) Na AWS, o conceito de least privilege (privilégio mínimo) significa que você fornece aos usuários apenas as permissões necessárias para realizar uma tarefa.":true},
                 {"B) Na AWS, o conceito de least privilege (privilégio mínimo) significa que você fornece aos usuários permissão total para realizarem qualquer tarefa.":false}            
             ],
             "resposta": "A - Ao criar políticas da IAM, siga a orientação de segurança padrão de concessão de privilégio mínimo ou conceda apenas as permissões necessárias para realizar uma tarefa. Determine o que os usuários (e funções) precisam fazer e crie políticas que lhes permitam executar apenas essas tarefas." 
         },
         {
             "pergunta": "Você detectou que o seu ambiente na Nuvem, tem picos de acesso. Qual o melhor modelo de instância para responder a esta demanda?",
             "opcoes":[
                 {"A) Sob Demanda":true},
                 {"B) Instâncias Spot":false},
                 {"C) Instância Reservada":false},
                 {"D) Host Dedicado":false}
             ],
             "resposta": "A - Este modelo é propício para picos de utilização." 
         },
         {
             "pergunta": "Qual o modelo de instância, que é mais barato que o modelo sob demanda?",
             "opcoes":[
                 {"A) Sob Demanda":false},
                 {"B) Host Dedicado":false},
                 {"C) Instâncias Reservadas":false},
                 {"D) Instâncias Spot":true}          
                 
             ],
             "resposta": "D - Sim, neste modelo você consegue até 90% em relação ao sob demanda. Essa é outra pergunta que caiu no meu exame." 
         },
         {
             "pergunta": "O que é um security group?",
             "opcoes":[
                 {"A) Um grupo para adicionar usuarios de segurança.":false},
                 {"B) Um serviço de armazenamento da AWS.":false},
                 {"C) Um serviço de computação na Nuvem da AWS.":false},
                 {"D) Um firewall virtual da AWS.":true}
             ],
             "resposta": "D - Sim, o Security Group  é um firewall virtual da AWS, utilizado em instâncias EC2." 
         },
         {
             "pergunta": "Quais componentes são necessários para uma carga de trabalho na Nuvem AWS?",
             "opcoes":[
                 {"A) Computação, Memória, Família e Capacidade de Rede.":false},
                 {"B) Computação, Memória, Armazenamento e Capacidade de Rede":true},
                 {"C) Computação, Memória, Suporte Endereço IPv6 e Capacidade de Rede":false},
                 {"D) Computação, Memória,Rede VPC e Capacidade de Rede":false}
             ],
             "resposta": "B - Computação, Memória, Armazenamento e Capacidade de Rede." 
         },
         {
             "pergunta": "Qual serviço da AWS permite você executar códigos sem provisionar ou gerenciar servidores?",
             "opcoes":[
                 {"A) AWS Elastic Beanstalk":false},
                 {"B) AWS Lightsail":false},
                 {"C) AWS Lambda":true},
                 {"D) AWS EC2":false}
             ],
             "resposta": "C - Sim, o AWS Lambda  permite que você execute código sem provisionar ou gerenciar servidores. Você paga apenas pelo tempo de computação consumido." 
         },
         {
             "pergunta": "Sua empresa vem utilizando a Nuvem AWS por algum tempo, e na última reunião foi decidido criar um blog empresarial do tipo WordPress. Qual destes serviços AWS atende a solicitação o mais rápido possível, com o mínimo de configuração e com baixo custo?",
             "opcoes":[
                 {"A) Amazon EC2":false},
                 {"B) Amazon Cognito":false},
                 {"C) Amazon Lightsail":true},
                 {"D) AWS Lambda":false}
             ],
             "resposta": "C - O Amazon Lightsail  é uma plataforma de nuvem fácil de usar, que oferece tudo o que você precisa para criar uma plataforma WordPress, além de um plano mensal de baixo custo." 
         },
         {
             "pergunta": "Você é um desenvolvedor de aplicação, que precisa subir uma aplicação na WEB que possua balanceamento de carga, alta disponibilidade (multi az), auto scaling group e seja seguro. Qual plataforma como serviço (PaaS) você deve utilizar?",
             "opcoes":[
                 {"A) Amazon EC2":true},
                 {"B) AWS Elastic Beanstalk":true},
                 {"C) AWS Lambda":false},
                 {"D) EC2 On-demand":false}
             ],
             "resposta": "B - Sim, o AWS Elastic Beanstalk  é um serviço gerenciado e voltado para desenvolvedores que precisam subir uma aplicação na WEB, sem se preocupar com a infraestrutura." 
         },
         {
             "pergunta": "Quais são as capacidades disponíveis no AWS ASG (Auto Scaling Group)?",
             "opcoes":[
                 {"A) Capacidade mínima":false},
                 {"B) Capacidade Desejada":false},
                 {"C) Capacidade Máxima":false},
                 {"D) Todas as Anteriores":true}
             ],
             "resposta": "D - Todas as Anteriores" 
         },
         {
             "pergunta": "Qual a durabilidade do Amazon S3?",
             "opcoes":[
                 {"A) 99,9%":false},
                 {"B) 99,99%":false},
                 {"C) 99.999999999%":true},
                 {"D) 99%":false}
             ],
             "resposta": "C - O Amazon Simple Storage Service (Amazon S3  ) é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance líderes do setor. Isso significa que clientes de todos os tamanhos e setores podem usá-lo para armazenar e proteger qualquer volume de dados em vários casos de uso, como data lakes, sites, aplicações para dispositivos móveis, backup e restauração, arquivamento, aplicações empresariais, dispositivos IoT e análises de big data. O Amazon S3  fornece recursos de gerenciamento fáceis de usar, de maneira que você possa organizar os dados e configurar os controles de acesso refinados para atender a requisitos específicos comerciais, organizacionais e de conformidade. O Amazon S3  foi projetado para  99,999999999% (11 noves)  de durabilidade e armazena dados de milhões de aplicações para empresas em todo o mundo." 
         },
         {
             "pergunta": "O técnico da sua empresa após criar um volume Amazon EBS, não conseguiu anexar na instância EC2 porque o volume desapareceu. <br>Qual é o motivo?  ",
             "opcoes":[
                 {"A) O volume EBS foi criado em uma zona de disponibilidade diferente da instância.":true},
                 {"B) O volume EBS não foi criado.":false},
                 {"C) A opção visualizar itens ocultos está marcada.":false},
                 {"D) Dependendo do tamanho do volume EBS, ele não aparece para seleção":false}
             ],
             "resposta": "A - Lembre-se de sempre criar o volume Amazon EBS  , na mesma zona de disponibilidade da sua instância." 
         },
         {
             "pergunta": "Você precisa migrar dados na escala de petabytes para a Nuvem. Qual destes serviços você utilizará?",
             "opcoes":[
                 {"A) Amazon S3":false},
                 {"B) Amazon Snowball":true},
                 {"C) Amazon EBS":false},
                 {"D) Bucket S3":false}
             ],
             "resposta": "B - O AWS Snowball  é um dispositivo de computação, migração de dados e armazenamento de borda na escala de petabytes." 
         },
         {
             "pergunta": "Um objeto foi adicionado em um bucket S3 e a URL foi compartilhada com um cliente por e-mail. Porém, o cliente informou que ao tentar acessar o arquivo é apresentado access denied. Qual pode ser o problema?",
             "opcoes":[
                 {"A) Firewall do cliente está impedindo abrir o objeto no bucket S3":false},
                 {"B) Antivírus do cliente está apresentando falso-positivo no objeto do bucket S3":false},
                 {"C) O Bucket está em privado e o objeto está em privado.":true},
                 {"D) A URL do bucket S3 enviada para o cliente está errada.":false}
             ],
             "resposta": "C - Access Denied significa que o bucket está privado e o objeto está em privado. Mude-os para público." 
         },
         {
             "pergunta": "Qual serviço na Nuvem AWS é utilizado para instalação de sistemas operacionais?",
             "opcoes":[
                 {"A) Amazon EC2":false},
                 {"B) Amazon EBS":true},
                 {"C) Amazon Snowball":false},
                 {"D) Amazon S3":false}
             ],
             "resposta": "B - O Amazon EBS  é comparado a um disco rígido que é conectado em instâncias do Amazon EC2." 
         },
         {
             "pergunta": "Qual o armazenamento da AWS que a sua recuperação NÃO é em milissegundos?",
             "opcoes":[
                 {"A) Amazon EBS":false},
                 {"B) Amazon S3 Glacier":true},
                 {"C) Bucket S3":false},
                 {"D) AWS Storage Gateway":false}
             ],
             "resposta": "B - O Amazon S3 Glacier  é para armazenamento a longo prazo, e quando solicitado a recuperação de um arquivo ele pode levar até 12 horas para recuperá-lo." 
         },
         {
             "pergunta": "Você gostaria de ter os mesmos dados acessíveis, como um drive NFS (Network File System), em todas as zonas de disponibilidade e em todas as suas instâncias EC2. O que você recomenda?",
             "opcoes":[
                 {"A) Montar um S3":false},
                 {"B) Montar um EFS":true},
                 {"C) Montar um EBS":false},
                 {"D) Montar uma Instance Store":false}
             ],
             "resposta": "B - O AWS Elastic File System  é um sistema de arquivos NFS que permite compartilhar dados em múltiplas zonas de disponibilidade da mesma região." 
         },
         {
             "pergunta": "Para economizar na fatura AWS, todas as instâncias devem ser desligadas durante a madrugada, porém isto está causando a perda de dados quando elas são novamente ligadas. Por que isto está ocorrendo?",
             "opcoes":[
                 {"A) Os dados estão sendo salvos no bucket S3":false},
                 {"B) Os dados estão sendo salvos no Amazon Glacier":false},
                 {"C) Os dados estão sendo salvos em uma Instance Store":true},
                 {"D) Os dados estão sendo salvos em um Elastic Block Store":false}
             ],
             "resposta": "C - O Instance Store  é um armazenamento efêmero (do Inglês, ephemeral storage), que não pode ser desconectado e que quando a instância é desligada, todos os dados são perdidos." 
         },
         {
             "pergunta": "Quais são os armazenamentos disponíveis no AWS Storage Gateway?",
             "opcoes":[
                 {"A) File Gateway":false},
                 {"B) Tape Gateway":false},
                 {"C) Volume Gateway":false},
                 {"D) Todas as alternativas":true}
             ],
             "resposta": "D - Todas as alternativas" 
         },
         {
            "pergunta": "No Amazon Route 53 é possível registrar domínios (como meusite.com) ?",
            "opcoes":[
                {"A) Sim, essa é uma característica do Route 53":true},
                {"B) Não, o Route 53 apenas gerencia domínios":false}            
            ],
            "resposta": "A - Você pode comprar e gerenciar nomes de domínio (como meusite.com) e o Amazon Route 53  configura automaticamente as definições de DNS para os seus domínios." 
        },
        {
            "pergunta": "Como o Amazon CloudFront contorna a latência na distribuição de conteúdos (CDN)?",
            "opcoes":[
                {"A) Ele utiliza os pontos de presença (POP) como cache.":true},
                {"B) Ele utiliza as regiões como cache.":false},
                {"C) Ele utiliza as zonas de disponibilidade como cache.":false},
                {"D) Todas as anteriores.":false}
            ],
            "resposta": "A - Sim, os ponto de presença  (POP, do inglês Point of Presence) são importantes porque eles atuam como cache." 
        },
        {
            "pergunta": "Qual o serviço da AWS que permite a criação de uma rede isolada logicamente na Nuvem?",
            "opcoes":[
                {"A) Amazon CloudFront":false},
                {"B) Amazon Route 53":false},
                {"C) Amazon VPC":true},
                {"D) Elastic Load Balacing":false}
            ],
            "resposta": "C - A Amazon Virtual Private Cloud (Amazon VPC)   permite executar os recursos da AWS em uma rede virtual definida por você. Essa rede virtual se assemelha a uma rede tradicional que você operaria no seu datacenter, com os benefícios de usar a infraestrutura dimensionável da AWS." 
        },
        {
            "pergunta": "Quais são os balanceamentos de carga disponíveis?",
            "opcoes":[
                {"A) Software Load Balancer, Network Load Balancer, Classic Load Balancer e Gateway Load Balancer":false},
                {"B) Application Load Balancer, Hardware Load Balancer, Classic Load Balancer, e Gateway Load Balancer":false},
                {"C) Application Load Balancer, Network Load Balancer, Standard Load Balancer e Gateway Load Balancer.":false},
                {"D) Application Load Balancer, Network Load Balancer, Classic Load Balancer e Gateway Load Balancer":true}
            ],
            "resposta": "D - Application Load Balancer, Network Load Balancer, Classic Load Balancer e Gateway Load Balancer"
        },
        {
            "pergunta": "Qual destes serviços é um banco relacional?",
            "opcoes":[
                {"A) Amazon Dynamo DB":false},
                {"B) Amazon RDS":true},
                {"C) Amazon EC2":false},
                {"D) Amazon EBS":false}
            ],
            "resposta": "O Amazon RDS  é um banco relacional. Sua sigla em Inglês significa: Relational Database Service" 
        },
        {
            "pergunta": "Quais são os mecanismos que o Amazon RDS suporta?",
            "opcoes":[
                {"A) Amazon Aurora e Maria DB":false},
                {"B) MySQL e PostgreSQL":false},
                {"C) Oracle e SQL Server":false},
                {"D) Todas as anteriores":true}
            ],
            "resposta": "D - Todas as anteriores." 
        },
        {
            "pergunta": "Sua empresa está organizando um evento online neste final de semana e os usuários estão reclamando que os placares dos jogadores estão demorando para aparecer. Qual destes serviços você deve utilizar, para responder às requisições dos usuários em milissegundos, pensando no menor custo para sua empresa?",
            "opcoes":[
                {"A) Mudas os serviços de região":false},
                {"B) Amazon RDS":false},
                {"C) Amazon ElastiChache":true},
                {"D) Amazon DynamoDB":false}
            ],
            "resposta": "C - Habilitar o Amazon ElastiCache  , permitirá o armazenamento de dados na memória e a responder as requisições em menos de um (01) milissegundo." 
        },
        {
            "pergunta": "Qual destes é um banco de dados com característica NoSQL?",
            "opcoes":[
                {"A) Amazon RDS":false},
                {"B) Amazon Aurora":false},
                {"C) Amazon DynamoDB":true},
                {"D) Amazon Neptune":false}
            ],
            "resposta": "C - Amazon DynamoDB.  Serviço de banco de dados NoSQL, rápido e flexível para performance abaixo de 10 milissegundos em qualquer escala." 
        },
        {
            "pergunta": "Em uma reunião técnica foi sugerido utilizar a ferramenta Trusted Advisor para avaliar o ambiente da Nuvem do cliente, porém você lembrou que dependendo do plano de suporte escolhido, nem todos os recursos ficam disponíveis. Quais são os planos de suporte que concedem acesso total no Trusted Advisor?",
            "opcoes":[
                {"A) Basic":false},
                {"B) Developer, Basic":false},
                {"C) Enterprise, Business":true},
                {"D) Business, Basic":false}
            ],
            "resposta": "C - Os planos 'mais caros', que são o Enterprise e o Business, concedem acesso completo no Trusted Advisor.  " 
        },
        {
            "pergunta": "Quais são os pilares do AWS Well-Architected?",
            "opcoes":[
                {"A) Security, Reliability, Cost optimization, Operational excellence, Performance efficiency":true},
                {"B) Security, Reliability, Cost optimization, Operational excellence, Durability":false},
                {"C) Security, Disponibility, Cost optimization, Operational excellence, Performance efficiency ":false},
                {"D) Availability, Reliability, Cost optimization, Operational excellence, Performance efficiency":false}
            ],
            "resposta": "A - Security, Reliability, Cost optimization, Operational excellence, Performance efficiency" 
        },
        {
            "pergunta": "Você precisa monitorar o desempenho das suas instâncias. Qual serviço você deve utilizar?",
            "opcoes":[
                {"A) AWS CloudWatch":true},
                {"B) AWS CloudTrail":false},
                {"C) AWS CloudFormation":false},
                {"D) AWS Trusted Advisor":false}
            ],
            "resposta": "A - Se na sua prova pedir para medir o desempenho (do Inglês, performance), associe com um cronômetro. E o serviço que realiza essa atividade é o AWS CloudWatch.  " 
        },
        {
            "pergunta": "Você faz parte de um pequeno grupo de desenvolvedores em uma startup em ascensão. Na última reunião foi definido que a responsabilidade de criar a infraestrutura na Nuvem, passaria a ser uma das suas responsabilidade para acelerar os projetos da empresa. Qual destes serviços facilitará a replicação da infraestrutura do ambiente de testes e produção?",
            "opcoes":[
                {"A) Amazon CloudFront":false},
                {"B) Amazon Cognito":false},
                {"C) AWS CloudFormation":true},
                {"D) AWS CloudTrail":false}
            ],
            "resposta": "C - CloudFormation  permite modelar, provisionar e gerenciar recursos da AWS e de terceiros ao tratar a infraestrutura como código." 
        },
        {
            "pergunta": "Uma instância computacional foi apagada e você precisa identificar quem foi que fez isso para a próxima reunião. Qual serviço podemos utilizar para auditar o ambiente?",
            "opcoes":[
                {"A) AWS CloudWatch":false},
                {"B) Amazon Cognito":false},
                {"C) AWS CloudTrail":true},
                {"D) Amazon CloudFront":false}
            ],
            "resposta": "C - AWS CloudTrail  é um serviço AWS que lhe permite administrar, manter-se compatível e realizar auditorias operacionais e de risco na sua conta AWS. As ações realizadas por um usuário, uma função ou um serviço da AWS são registradas como eventos no CloudTrail. Os eventos incluem ações realizadas em AWS Management Console, AWS Command Line Interface, e AWS SDKs e APIs." 
        },
        {
            "pergunta": "Quais são os exemplos de inscritos?",
            "opcoes":[
                {"A) Amazon S3, HTTP/S, e-mail, SMS, AWS Lambda":false},
                {"B) Amazon VPC, HTTP/S, e-mail, SMS, AWS Lambda":false},
                {"C) Amazon SQS, HTTP/S, e-mail, SMS, AWS Lambda":true},
                {"D) Amazon RDS, HTTP/S, e-mail, SMS, AWS Lambda":false}
            ],
            "resposta": "C - Lembre que os incritos irão realizar alguma ação de entrega, como colocar a mensagem em uma fila (Amazon SQS), alguma ação no servidor (HTTP/S), enviar um e-mail, um mensagem no celular ou uma função no AWS Lambda." 
        },
        {
            "pergunta": "No Amazon SNS  , quais são os dois tipos de clientes?",
            "opcoes":[
                {"A) Os editores e ou assinantes (ou incritos).":true},
                {"B) Os controladores e os assinatnes (ou incritos).":false},
                {"C) Os editores e controladores.":false},
                {"D) Os serviços e os controladores.":false}
            ],
            "resposta": "A - Os editores são os donos dos tópicos, e os assinantes (ou inscritos) realizam a assinatura em um tópico." 
        },
        {
            "pergunta": "Quais são os tipos de fila do Amazon SQS?",
            "opcoes":[
                {"A) Standard (padrão), FIFO (First-in, First-out).":true},
                {"B) Standard (padrão), Assíncrona.":false},
                {"C) Assíncrona, FIFO (First-in, First-out).":false},
                {"D) Síncrona, Assíncrona":false}
            ],
            "resposta": "A - O Amazon Simple Queue Service (Amazon SQS)  é um web service que disponibiliza a você acesso a filas de mensagens que armazenam mensagens esperando processamento. Com o Amazon SQS  , você pode criar rapidamente aplicações de enfileiramento de mensagens executáveis em qualquer computador." 
        },
        {
            "pergunta": "Qual o serviço utilizado para envio de mensagens em filas gerenciadas e permite o desacoplamento e a escalabilidade de microsserviços?",
            "opcoes":[
                {"A) Amazon RDS":false},
                {"B) Amazon SNS":false},
                {"C) Amazon EC2":false},
                {"D) Amazon SQS":true}
            ],
            "resposta": "D - O Amazon SQS  é um serviço de filas de mensagens gerenciado que permite o desacoplamento e a escalabilidade de microsserviços, sistemas distribuídos e aplicativos sem servidor." 
        },
        {
            "pergunta": "Você deseja que suas mensagens sejam processadas exatamente uma vez e em ordem. O que você precisa utilizar?",
            "opcoes":[
                {"A) SQS Standard Queue":false},
                {"B) SQL Dead Letter Queue":false},
                {"C) SQS Delay Queue":false},
                {"D) SQL FIFO Queue":true}
            ],
            "resposta": "D - As filas FIFO (First-In-First-Out)  são projetadas para aprimorar o envio de mensagens entre aplicativos quando a ordem das operações e eventos é crítica ou quando duplicatas não podem ser toleradas. As filas FIFO também fornecem processamento exatamente uma vez, mas têm um número limitado de transações por segundo (TPS)." 
        },
        {
            "pergunta": "Em um novo projeto da empresa em que você atua, a equipe de desenvolvimento está para colocar no mercado um termostato que ajusta automaticamente a temperatura do ambiente. Para isso, este termostato utilizará Internet das Coisas (IoT) para coletar dados em tempo real, processar essas informações e retornar com os ajustes da melhor temperatura do ambiente sem intervenção de um usuário. Qual serviço da AWS podemos utilizar para atender essa demanda dos desenvolvedores?",
            "opcoes":[
                {"A) Amazon SQS":false},
                {"B) Amazon SNS":false},
                {"C) Amazon Kinesis":true},
                {"D) Amazon Athena":false}
            ],
            "resposta": "C - O Amazon Kinesis  é um serviço totalmente gerenciado para processamento em tempo real de dados de streaming em altíssima escala. Você pode configurar centenas de milhares de produtores de dados que colocam dados continuamente em um stream do Amazon Kinesis. Por exemplo, dados de clickstreams de websites, logs de aplicações e feeds de mídia social. Em menos de um segundo, os dados estarão disponíveis para suas aplicações do Amazon Kinesis para leitura e processamento a partir do stream." 
        },
        {
            "pergunta": "Você precisa enviar notificações por e-mail para os seus usuários. Qual serviço podemos utilizar para entregar essa mensagem?",
            "opcoes":[
                {"A) SQS com Lambda":false},
                {"B) SNS com pub/sub":true},
                {"C) Amazon Kineses":false}            
            ],
            "resposta": "B - O Amazon SNS   utiliza do paradigma pub/sub  (publisher e subscriber), que significa Editores e Assinantes (ou inscritos). O Editor cria um tópico e os Assinantes se inscrevem (ou assinam) neste tópico para receber notificações." 
        }
      ];
      

    res.status(200).json(data)
  }
  