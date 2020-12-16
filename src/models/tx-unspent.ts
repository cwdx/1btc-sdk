export interface UnspentOutput {
  tx_hash: string;
  tx_hash_big_endian: string;
  tx_output_n: number;
  script: string;
  value: number;
  value_hex: string;
  confirmations: number;
  tx_index: number;
}

export interface TxUnspent {
  notice: string;
  unspent_outputs: UnspentOutput[];
}

export interface TxInput {
  hash: string;
  index: number;
  nonWitnessUtxo: string;
  value: number;
}
