// src/utils/sanitizeLeadData.js

export const sanitizeLeadData = (data) => {

  const sanitizeCurrency = (value) => {
    if (!value) return null;
    return parseFloat(value.replace(/\./g, '').replace(',', '.'));
  };

  const sanitizeCPF = (value) => {
    return value.replace(/[^\d]/g, '');
  };

  const sanitizePhone = (value) => {
    return value.replace(/[^\d]/g, '');
  };

  const sanitizeDate = (value) => {
    const [day, month, year] = value.split('/');
    return `${year}-${month}-${day}`;
  };

  return {
    customer: {
      fullName: data.customer.fullName,
      email: data.customer.email,
      cpfCnpj: sanitizeCPF(data.customer.cpfCnpj),
      phone: sanitizePhone(data.customer.phone),
      state: data.customer.state,
      city: data.customer.city,
      gender: data.customer.gender,
      birthDate: sanitizeDate(data.customer.birthDate),
      hasCNH: data.customer.hasCNH.toLowerCase() === 'sim',
      down_payment: sanitizeCurrency(data.customer.down_payment),
    },
    vehicle: {
      make: data.vehicle.make,
      model: data.vehicle.model,
      title: data.vehicle.title,
      condition: data.vehicle.condition,
      fuel: data.vehicle.fuel,
      year: data.vehicle.year,
      transmission: data.vehicle.transmission,
      color: data.vehicle.color,
      price: sanitizeCurrency(data.vehicle.price),
      down_payment: sanitizeCurrency(data.vehicle.down_payment),
      carImage: data.vehicle.carImage,
    },
    siteName: data.siteName,
    submittedAt: data.submittedAt,
  };
};
