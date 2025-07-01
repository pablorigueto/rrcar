import React from 'react';

function ProgressIndicator({ wizardStep }) {
  return (
    <div className="wizard-progress">
      <div className={`wizard-step ${wizardStep >= 1 ? 'active' : ''}`}>
        <div className="step-number">1</div>
        <div className="step-label">Dados do Veículo</div>
      </div>
      <div className={`progress-line ${wizardStep > 1 ? 'line-active' : ''}`}></div>
      <div className={`wizard-step ${wizardStep >= 2 ? 'active' : ''}`}>
        <div className="step-number">2</div>
        <div className="step-label">Seus Dados</div>
      </div>
      <div className={`progress-line ${wizardStep >= 3 ? 'line-active' : ''}`}></div>
      <div className={`wizard-step ${wizardStep >= 3 ? 'active' : ''}`}>
        <div className="step-number">3</div>
        <div className="step-label">Confirmação</div>
      </div>
    </div>
  );
}

export default ProgressIndicator;
