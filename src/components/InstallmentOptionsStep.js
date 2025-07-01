// components/InstallmentOptionsStep.jsx
import BestInstallmentCards from './BestInstallmentCards';
// import { vehiclePrice } from '../utils/formatters';
import CarImageComponent  from './CarImageComponent';
import { vehiclePriceStep3 } from '../utils/formatters';

const InstallmentOptionsStep = ({ 
  sanitizedData,
  goToPreviousStep,
  submitResponse,
  isSubmitting,
  submitError,
 }) => {

  return (
    <div>
      {submitError && <p style={{color: 'red'}}>{submitError}</p>}

      <div className='best-installment-main-card final-step'>

        <CarImageComponent
          title={sanitizedData.vehicle.title}
          transmission={sanitizedData.vehicle.transmission}
          price={vehiclePriceStep3(sanitizedData.vehicle.price)}
          carImage={sanitizedData.vehicle.carImage}
        />

        <BestInstallmentCards
          bestOptions={submitResponse}
          isSubmitting={isSubmitting}
        />

      </div>

      <div className='modal-actions final-step-btn'>
        <button type="button" className="btn-back" onClick={goToPreviousStep}>Voltar</button>
        <a className="btn-submit whatsapp" href="https://wa.me/+5519978175588" rel="noreferrer" target="_blank">Fale Conosco</a>
      </div>

    </div>
  );
};

export default InstallmentOptionsStep;
