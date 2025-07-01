import cidadesAC from '../cidade/cidadesAC';
import cidadesAL from '../cidade/cidadesAL';
import cidadesAP from '../cidade/cidadesAP';
import cidadesAM from '../cidade/cidadesAM';
import cidadesBA from '../cidade/cidadesBA';
import cidadesCE from '../cidade/cidadesCE';
import cidadesDF from '../cidade/cidadesDF';
import cidadesES from '../cidade/cidadesES';
import cidadesGO from '../cidade/cidadesGO';
import cidadesMA from '../cidade/cidadesMA';
import cidadesMT from '../cidade/cidadesMT';
import cidadesMS from '../cidade/cidadesMS';
import cidadesMG from '../cidade/cidadesMG';
import cidadesPA from '../cidade/cidadesPA';
import cidadesPB from '../cidade/cidadesPB';
import cidadesPR from '../cidade/cidadesPR';
import cidadesPE from '../cidade/cidadesPE';
import cidadesPI from '../cidade/cidadesPI';
import cidadesRJ from '../cidade/cidadesRJ';
import cidadesRN from '../cidade/cidadesRN';
import cidadesRS from '../cidade/cidadesRS';
import cidadesRO from '../cidade/cidadesRO';
import cidadesRR from '../cidade/cidadesRR';
import cidadesSC from '../cidade/cidadesSC';
import cidadesSP from '../cidade/cidadesSP';
import cidadesSE from '../cidade/cidadesSE';
import cidadesTO from '../cidade/cidadesTO';

export function getCidadesPorEstado(estadoSelecionado) {
  switch (estadoSelecionado) {
    case 'AC':
      return cidadesAC['#options'];
    case 'AL':
      return cidadesAL['#options'];
    case 'AP':
      return cidadesAP['#options'];
    case 'AM':
      return cidadesAM['#options'];
    case 'BA':
      return cidadesBA['#options'];
    case 'CE':
      return cidadesCE['#options'];
    case 'DF':
      return cidadesDF['#options'];
    case 'ES':
      return cidadesES['#options'];
    case 'GO':
      return cidadesGO['#options'];
    case 'MA':
      return cidadesMA['#options'];
    case 'MT':
      return cidadesMT['#options'];
    case 'MS':
      return cidadesMS['#options'];
    case 'MG':
      return cidadesMG['#options'];
    case 'PA':
      return cidadesPA['#options'];
    case 'PB':
      return cidadesPB['#options'];
    case 'PR':
      return cidadesPR['#options'];
    case 'PE':
      return cidadesPE['#options'];
    case 'PI':
      return cidadesPI['#options'];
    case 'RJ':
      return cidadesRJ['#options'];
    case 'RN':
      return cidadesRN['#options'];
    case 'RS':
      return cidadesRS['#options'];
    case 'RO':
      return cidadesRO['#options'];
    case 'RR':
      return cidadesRR['#options'];
    case 'SC':
      return cidadesSC['#options'];
    case 'SP':
      return cidadesSP['#options'];
    case 'SE':
      return cidadesSE['#options'];
    case 'TO':
      return cidadesTO['#options'];
    default:
      return [];
  }
}