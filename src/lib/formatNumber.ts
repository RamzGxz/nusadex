const formatNumber = (value: number) => {
  const formatValue = (num: number, maxLength: number) => {
    const str = num.toString();
    // Potong string sesuai panjang maksimum tanpa pembulatan
    const [integerPart, decimalPart] = str.split(".");
    if (decimalPart && str.length > maxLength) {
      return integerPart + "." + decimalPart.slice(0, maxLength - integerPart.length - 1);
    }
    return str;
  };

  if (value >= 1_000_000_000) {
    return formatValue(value / 1_000_000_000, 5) + "B"; // Maks panjang 5 karakter (termasuk desimal)
  } else if (value >= 1_000_000) {
    return formatValue(value / 1_000_000, 5) + "M"; // Maks panjang 5 karakter (termasuk desimal)
  } else if (value >= 1_000) {
    return formatValue(value / 1_000, 5) + "K"; // Maks panjang 5 karakter (termasuk desimal)
  }

  return formatValue(value, 5); // Maks panjang 5 karakter
};

export default formatNumber;
