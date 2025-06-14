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