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

      <h2>A melhor opção para você</h2>
      <div className='best-installment-main-card'>

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

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <button type="button" className="btn-back" onClick={goToPreviousStep}>Voltar</button>
      </div>

    </div>
  );
};

export default InstallmentOptionsStep;
