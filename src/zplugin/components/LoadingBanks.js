
// Importe todas as imagens dos bancos
import bradescoPng from '../assets/colored/bradescoc.png';
import bvcPng from '../assets/colored/bvc.png';
import c6cPng from '../assets/colored/c6c.png';
import creditascPng from '../assets/colored/creditasc.png';
import itauPng from '../assets/colored/itauc.png';
import pancPng from '../assets/colored/panc.png';
import portocPng from '../assets/colored/portoc.png';
import safracPng from '../assets/colored/safrac.png';
import santanderPng from '../assets/colored/santanderc.png';

// Componente de loading rotativo
function LoadingBanks () {
  const bankImages = [
    bradescoPng, bvcPng, c6cPng, creditascPng, itauPng, 
    pancPng, portocPng, safracPng, santanderPng
  ];

  // Duplicamos o array para criar um efeito infinito mais suave
  const allBankImages = [...bankImages, ...bankImages];

  return (
    <div className="loading-wrapper">
      <div className="bank-loader-container">
        <p className="textcentered pulsante">Consultando os bancos...</p>
        <div className="bank-loading-spinner">
          {allBankImages.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Bank logo ${index}`} 
              className="bank-logo-spinning"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingBanks;
