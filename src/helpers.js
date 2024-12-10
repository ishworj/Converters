const getFactor = (type) => {
    switch (type) {
      case "feet":
        return 1 / 3.28084;
        break;
      case "inch":
        return 1 / 39.37008;
        break;
      case "km":
        return 1000;
        break;
      case "m":
        // code block
        return 1;
        break;
      case "cm":
        // code block
        return 1 / 100;
        break;
      case "mm":
        return 1 / 1000;
      case "nm":
        return 1 / 1000000000;
        break;
      default:
        return 1;
      // code block
    }
  };
  export const calculateLength = (from, to, ipValue) => {
    const fromFactor = getFactor(from);
    const toFactor = getFactor(to);
    const output = parseFloat(fromFactor / toFactor) * parseFloat(ipValue);
    return output;
  };



  


  const getTimeFactor = (type) => {
    switch (type) {
      case "week":
        return 7 * 24 * 60;
      case "day":
        return 60*24;
      case "hr":
        return 60; 
      case "min":
        return 1; 
      case "s":
        return 1 / 60; 
      case "ms":
        return 1/(60*1000)
      default:
        return 1;
    }
  };
  
  export const calculateTime = (from, to, ipValue) => {
    if (isNaN(ipValue) || ipValue === "") {
      return 0; // Handle invalid input
    }
  
    const fromFactor = getTimeFactor(from);
    const toFactor = getTimeFactor(to);
  
    const output = (parseFloat(ipValue) * fromFactor) / toFactor;
    return output;
  };
  


  


const exchangerates={
  "Venezuelan Bolivar": 3139952.307851,
  "Iranian Rial": 27096.489747,
  "Indonesian Rupiah": 10211.365177,
  "Colombian Peso": 2854.931215,
  "South Korean Won": 922.961147,
  "Argentine Peso": 652.658442,
  "Chilean Peso": 627.646218,
  "Kazakhstani Tenge": 326.639378,
  "Hungarian Forint": 250.590922,
  "Sri Lankan Rupee": 187.142698,
  "Pakistani Rupee": 179.302228,
  "Japanese Yen": 96.90573,
  "Icelandic Krona": 88.808202,
  "Nepalese Rupee": 87.369078,
  "Russian Ruble": 63.865314,
  "Indian Rupee": 54.580089,
  "Philippine Peso": 37.381244,
  "Mauritian Rupee": 30.030277,
  "Turkish Lira": 22.436003,
  "Thai Baht": 21.785135,
  "Taiwan New Dollar": 20.898129,
  "Czech Koruna": 15.298216,
  "Mexican Peso": 12.970357,
  "South African Rand": 11.51592,
  "Botswana Pula": 8.736336,
  "Norwegian Krone": 7.153407,
  "Swedish Krona": 7.02254,
  "Hong Kong Dollar": 5.009963,
  "Chinese Yuan Renminbi": 4.683037,
  "Danish Krone": 4.54528,
  "Trinidadian Dollar": 4.375704,
  "Brazilian Real": 3.940173,
  "Libyan Dinar": 3.14997,
  "Romanian New Leu": 3.030486,
  "Malaysian Ringgit": 2.850924,
  "Polish Zloty": 2.595618,
  "Saudi Arabian Riyal": 2.416423,
  "Emirati Dirham": 2.366484,
  "Qatari Riyal": 2.345541,
  "Israeli Shekel": 2.293691,
  "Bulgarian Lev": 1.192093,
  "New Zealand Dollar": 1.098318,
  "Canadian Dollar": 0.911101,
  "Bruneian Dollar": 0.862949,
  "Singapore Dollar": 0.862949,
  "US Dollar": 0.64438,
  "Euro": 0.609508,
  "Swiss Franc": 0.566679,
  "British Pound": 0.504367,
  "Omani Rial": 0.248086,
  "Bahraini Dinar": 0.242287,
  "Kuwaiti Dinar": 0.198008
}
