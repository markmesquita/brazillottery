import Head from 'next/head'
import BackButton from '../components/BackButton'

const PoliticaPrivacidade: React.FC = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade - Brazil Lottery</title>
        <meta name="description" content="Política de Privacidade do Brazil Lottery - Gerador de jogos para loterias da Caixa Econômica Federal" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton />

          <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Política de Privacidade
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações Gerais</h2>
                <p className="text-gray-700 mb-4">
                  O Brazil Lottery ("nós", "nosso" ou "aplicação") é um gerador de jogos aleatórios para loterias da Caixa Econômica Federal.
                  Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você utiliza nossa aplicação.
                </p>
                <p className="text-gray-700">
                  Ao usar o Brazil Lottery, você concorda com a coleta e uso de informações de acordo com esta política.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
                <p className="text-gray-700 mb-4">
                  O Brazil Lottery é uma aplicação que funciona inteiramente no seu dispositivo. Nós <strong>NÃO coletamos</strong>:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Informações pessoais (nome, email, telefone)</li>
                  <li>Dados de localização</li>
                  <li>Informações de dispositivos</li>
                  <li>Histórico de navegação</li>
                  <li>Jogos gerados ou números escolhidos</li>
                </ul>
                <p className="text-gray-700">
                  Todos os dados gerados pela aplicação permanecem localmente no seu dispositivo e não são transmitidos para nossos servidores.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos as Informações</h2>
                <p className="text-gray-700 mb-4">
                  Como não coletamos dados pessoais, não há uso de informações pessoais. A aplicação:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Gera números aleatórios localmente no seu dispositivo</li>
                  <li>Exibe os resultados na interface da aplicação</li>
                  <li>Não armazena ou transmite nenhum dado</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
                <p className="text-gray-700">
                  O Brazil Lottery não utiliza cookies ou tecnologias de rastreamento. A aplicação funciona de forma independente
                  sem necessidade de armazenamento de dados no navegador ou dispositivo.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de Informações</h2>
                <p className="text-gray-700">
                  Não compartilhamos, vendemos ou alugamos suas informações pessoais, pois não as coletamos.
                  Todos os dados gerados pela aplicação permanecem privados e locais ao seu dispositivo.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Segurança dos Dados</h2>
                <p className="text-gray-700 mb-4">
                  Embora não coletemos dados pessoais, implementamos as seguintes medidas de segurança:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Processamento local de todos os dados</li>
                  <li>Nenhuma transmissão de dados para servidores externos</li>
                  <li>Uso de HTTPS para conexões seguras (quando aplicável)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Seus Direitos</h2>
                <p className="text-gray-700 mb-4">
                  Como não coletamos dados pessoais, os direitos relacionados à proteção de dados não se aplicam.
                  No entanto, você tem o direito de:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Usar a aplicação sem fornecer informações pessoais</li>
                  <li>Desinstalar a aplicação a qualquer momento</li>
                  <li>Entrar em contato conosco para esclarecimentos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Alterações nesta Política</h2>
                <p className="text-gray-700">
                  Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações
                  publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização".
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contato</h2>
                <p className="text-gray-700 mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>GitHub:</strong> <a href="https://github.com/markmesquita" className="text-blue-600 hover:text-blue-800">@markmesquita</a></li>
                  <li><strong>Projeto:</strong> <a href="https://github.com/markmesquita/brazillottery" className="text-blue-600 hover:text-blue-800">Brazil Lottery</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Aplicabilidade</h2>
                <p className="text-gray-700">
                  Esta Política de Privacidade se aplica apenas ao Brazil Lottery. Se você acessar links para sites de terceiros
                  através da nossa aplicação, recomendamos que leia as políticas de privacidade desses sites.
                </p>
              </section>

              <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Importante:</strong> O Brazil Lottery é apenas um gerador de números aleatórios para fins de entretenimento.
                  Não garantimos ganhos em loterias e não temos afiliação com a Caixa Econômica Federal.
                  Jogue com responsabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PoliticaPrivacidade 