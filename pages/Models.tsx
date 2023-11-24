import React from 'react';

const Models = () => {
  const models = ['model1.usdz', 'model2.usdz', 'model3.usdz', 'model4.usdz', 'model5.usdz'];

  return (
    <div className="flex flex-wrap justify-center">
      {models.map((model, index) => (
        <div key={index} className="m-4">
          <model-viewer src={`/models/${model}`} auto-rotate camera-controls></model-viewer>
          <p className="text-center">{model}</p>
        </div>
      ))}
    </div>
  );
};

export default Models;