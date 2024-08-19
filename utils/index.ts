export const toCurrency = (number: number, country = "en-NG") => {
  const formatter = new Intl.NumberFormat(country, {
    style: "currency",
    currency: country === "en-NG" ? "NGN" : "GBP",
  });

  return formatter.format(number).split(".00")[0];
};

export const capitalize = (value: string) => {
  const valArr = value.split("");
  const firstLetter = valArr.shift();
  return [firstLetter!.toUpperCase(), ...valArr].join("");
};
