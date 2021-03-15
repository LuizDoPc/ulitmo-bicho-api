export type OldResult = {
  date: string;
  d1: string;
  d2: string;
  d3: string;
  d4: string;
  d5: string;
}

export type FullResult = {
  resultadoAtual: Array<string>,
  resultadosAntigos: Array<OldResult>
}
