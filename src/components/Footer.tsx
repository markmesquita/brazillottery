import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-white py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-900">
              © {new Date().getFullYear()} Brazil Lottery. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Gerador de jogos para loterias da Caixa Econômica Federal
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <Link
              href="/politica-privacidade"
              className="text-sm text-gray-900 hover:text-white transition-colors duration-200"
            >
              Política de Privacidade
            </Link>

            <a
              href="https://github.com/markmesquita/brazillottery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>

            <a
              href="https://github.com/markmesquita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 hover:text-white transition-colors duration-200"
            >
              Desenvolvedor
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-800 text-center">
            <strong>Aviso:</strong> Este aplicativo é apenas um gerador de números aleatórios para fins de entretenimento.
            Não garantimos ganhos em loterias e não temos afiliação com a Caixa Econômica Federal.
            Jogue com responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 