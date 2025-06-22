// utils/formatters.js
// utils/formatters.js
export const formatCurrency = (value) => {
  if (!value) return '';
  
  // If it's already a string, use it; otherwise, convert to string
  let strValue = typeof value === 'string' ? value : value.toString();
  
  // Remove 'R$' prefix if it exists
  strValue = strValue.replace(/^R\$\s*/i, '');
  
  // Remove any existing formatting (dots and commas)
  let numericValue = strValue.replace(/\./g, '').replace(/,/g, '');
  
  // Remove all non-digits
  numericValue = numericValue.replace(/\D/g, '');
  
  // Remove leading zeros (this is the fix for the issue)
  numericValue = numericValue.replace(/^0+/, '');
  
  // If empty after removing leading zeros, return empty or "0"
  if (!numericValue) return '';
  
  // Format with comma as decimal separator and dot as thousands separator
  // Add the decimal part
  if (numericValue.length === 1) {
    return `0,0${numericValue}`;
  } else if (numericValue.length === 2) {
    return `0,${numericValue}`;
  }
  
  // Insert the decimal comma
  const decimal = numericValue.slice(-2);
  const integer = numericValue.slice(0, -2);
  
  // Add thousands separators
  let formattedInteger = '';
  for (let i = integer.length - 1, j = 0; i >= 0; i--, j++) {
    if (j > 0 && j % 3 === 0) {
      formattedInteger = '.' + formattedInteger;
    }
    formattedInteger = integer[i] + formattedInteger;
  }
  
  return `${formattedInteger},${decimal}`;
};

export const vehiclePrice = (price) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price);

  return <span>{formattedPrice}</span>;
};

export const vehiclePriceStep3 = (price) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);

  return <span>{formattedPrice}</span>;
};


// Parse a currency string to a numeric value (for calculations if needed)
export const parseCurrency = (value) => {
  if (!value) return 0;
  
  // If it's already a string, use it; otherwise, convert to string
  let strValue = typeof value === 'string' ? value : value.toString();
  
  // Remove 'R$' prefix and all non-numeric characters except the decimal separator
  strValue = strValue.replace(/^R\$\s*/i, '');
  strValue = strValue.replace(/\./g, '').replace(/,/g, '.');
  
  // Parse to a float
  return parseFloat(strValue) || 0;
};

// utils/formatters.js (add this function to your existing formatters file)

export const formatPhone = (value) => {
  if (!value) return '';
  
  // Remove all non-digits
  const digits = value.replace(/\D/g, '');
  
  // Format based on the number of digits
  if (digits.length <= 2) {
    return `(${digits}`;
  } else if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  } else if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  } else {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  }
};
