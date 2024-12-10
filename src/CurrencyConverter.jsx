import React, { useState } from "react";

const currencies = [
    { name: "Nepalese Rupees", code: "NP", symbol: "NPR" },
    { name: "US Dollar", code: "US", symbol: "USD" },
    { name: "Euro", code: "EU", symbol: "€" },
    { name: "British Pound", code: "GB", symbol: "£" },
    { name: "Indian Rupee", code: "IN", symbol: "₹" },
    { name: "Australian Dollar", code: "AU", symbol: "AUD" },
    { name: "Japanese Yen", code: "JP", symbol: "¥" },
    { name: "Swiss Franc", code: "CH", symbol: "CHF" },
    { name: "Canadian Dollar", code: "CA", symbol: "CAD" },
    { name: "Chinese Yuan", code: "CN", symbol: "¥" },
    { name: "Singapore Dollar", code: "SG", symbol: "SGD" },
    { name: "South Korean Won", code: "KR", symbol: "₩" },
    { name: "Russian Ruble", code: "RU", symbol: "₽" },
    { name: "Brazilian Real", code: "BR", symbol: "R$" },
    { name: "Mexican Peso", code: "MX", symbol: "MXN" },
    { name: "Turkish Lira", code: "TR", symbol: "₺" },
    { name: "South African Rand", code: "ZA", symbol: "R" },
    { name: "New Zealand Dollar", code: "NZ", symbol: "NZD" },
    { name: "Thai Baht", code: "TH", symbol: "฿" },
    { name: "Malaysian Ringgit", code: "MY", symbol: "RM" },
  ];
  
  const exchangeRates = {
    US: 1, // Base currency
    NP: 119,
    EU: 0.94,
    GB: 0.78,
    IN: 83,
    AU: 1.49,
    JP: 147,
    CH: 0.89,
    CA: 1.35,
    CN: 7.26,
    SG: 1.37,
    KR: 1320,
    RU: 96,
    BR: 4.88,
    MX: 17.11,
    TR: 27.9,
    ZA: 18.72,
    NZ: 1.59,
    TH: 35.47,
    MY: 4.66,
  };
  

const CurrencyConverter = () => {
    const [fromCurrency, setFromCurrency] = useState("US");
    const [toCurrency, setToCurrency] = useState("NP");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
    const [fromFlag,setFromFlag]=useState("https://flagcdn.com/us.svg")
    const [toFlag,seToFlag]=useState("https://flagcdn.com/np.svg")

    function handleConvert(amount ,fromCurrency ,toCurrency) {

        if (amount && fromCurrency && toCurrency) {
        const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        return(parseFloat(parseFloat(amount) * rate));
        }
    };

    const handleCalculation = (e)=>{
        setAmount(e.target.value);
       const value=e.target.value;
     

       if(value==="" || value<0){
        setResult("")
      }else{
        let outputValue = handleConvert( value,fromCurrency,toCurrency);

        setResult(outputValue)
      }
  
        
    }



    const handleReset = () => {
        setAmount("");
        setResult("");
        setFromCurrency("US");
        setToCurrency("NP");
    };


    return (
        <div className="container mt-3 pt-1">
        <h2 className="text-center">Currency Converter <span><i class="fa-solid fa-money-bill"></i></span></h2>
        <div className="row mt-3 justify-content-center">
            <div className="col-md-3">
            <div className="mb-2">
                <label htmlFor="from" className="form-label">
                From:  
                <img src={fromFlag} alt="" height={"50px"} width={"50px"} />
                </label>
                <div className="custom-dropdown">
                <select 
                    onChange={(e) => {
                        setFromCurrency(e.target.value)

                        let flag= e.target.value

                        setFromFlag(`https://flagcdn.com/${flag.toLowerCase()}.svg`)

                        let output= handleConvert(
                            amount,
                            e.target.value,
                            toCurrency
                        );
                        setResult(output)
                    }} 
                    defaultValue={fromCurrency}
                >
                    {currencies.map((currency) => (
                    <option  value={currency.code} key={currency.symbol}>
                        {currency.name} ({currency.symbol})
                    </option>
                    ))}
                </select>
                </div>
                <input
                type="number"
                id="from"
                className="form-control mt-2"
                placeholder="Enter Value"
                value={amount}
                onChange={handleCalculation}
                />
            </div>

            <h2><i class="fa-solid fa-right-left"></i></h2>
            <br />
            <div className="mb-3">
                <label htmlFor="to" className="form-label">
                To:
                <img src={toFlag} alt="" height={"50px"} width={"50px"} />
                </label>
                <div className="custom-dropdown">
                <select 
                    onChange={(e) => {
                        setToCurrency(e.target.value)
                        let flag= e.target.value

                        seToFlag(`https://flagcdn.com/${flag.toLowerCase()}.svg`)

                        let output= handleConvert(
                            amount,
                            fromCurrency,
                            e.target.value
                        );
                        setResult(output)
                    }} 
                    defaultValue={toCurrency}
                >
                    {currencies.map((currency) => (
                    <option  value={currency.code} key={currency.symbol}>
                        {currency.name} ({currency.symbol})
                    </option>
                    ))}
                </select>
                </div>
                <input
                type="text"
                id="to"
                className="form-control mt-2"
                placeholder="Result"
                value={result}
                readOnly
                />
            </div>
            <button className="btn btn-danger w-100" onClick={handleReset}>
                Reset
            </button>
            </div>
        </div>
        </div>
    );
};

export default CurrencyConverter;
