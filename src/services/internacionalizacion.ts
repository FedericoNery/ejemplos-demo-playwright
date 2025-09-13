export const getLocalizedCountryNames = (locale: "en" | "es" | "fr") => {
    console.log("Locale en servicio: " + locale);
  const regionNames = new Intl.DisplayNames([locale], { type: "region" });

  const countryCodes = [
    "US",
    "FR",
    "ES",
    "JP",
    "AR",
    "DE",
    "BR",
    "CN",
    "IT",
    "CA",
  ];

  return countryCodes.map((code) => ({
    code,
    name: regionNames.of(code),
  }));
};


