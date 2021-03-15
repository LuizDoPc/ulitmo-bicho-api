import got from 'got'
import cheerio from 'cheerio'
import { OldResult, FullResult } from '@models/ResultadoType'

class ResultadosController {
  static async getResultado (req, res): Promise<FullResult> {
    const url = 'https://www.ojogodobicho.com/deu_no_poste.htm'
    return got(url).then(response => {
      const $ = cheerio.load(response.body)

      const tables = $('table tbody tr')

      const data = tables.text().split('\n')

      const resultadoAtual = []
      for (let i = 2; i < 23; i += 5) {
        resultadoAtual.push(data[i].split('-')[0].replace(/ /g, ''))
      }

      const resultadosAntigos : OldResult[] = []
      for (let i = 36; i < 77; i += 40) {
        const result : OldResult = {
          date: data[i].replace(/ /g, ''),
          d1: data[i + 2].replace(/ /g, ''),
          d2: data[i + 3].replace(/ /g, ''),
          d3: data[i + 4].replace(/ /g, ''),
          d4: data[i + 5].replace(/ /g, ''),
          d5: data[i + 6].replace(/ /g, '')
        }
        resultadosAntigos.push(result)
      }

      const fullResult: FullResult = {
        resultadoAtual,
        resultadosAntigos
      }

      return res.status(200).send(fullResult)
    })
      .catch((error) => {
        return res.status(500).send(error)
      })
  }
}

export default ResultadosController
