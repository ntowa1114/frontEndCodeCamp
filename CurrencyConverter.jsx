const { useState, useMemo } = React;

const currencies = ["USD", "EUR", "GBP", "JPY"];

const rates = {
  USD: { USD: 1.0, EUR: 0.92, GBP: 0.78, JPY: 156.7 },
  EUR: { USD: 1.09, EUR: 1.0, GBP: 0.85, JPY: 170.3 },
  GBP: { USD: 1.28, EUR: 1.18, GBP: 1.0, JPY: 200.9 },
  JPY: { USD: 0.0064, EUR: 0.0059, GBP: 0.0050, JPY: 1.0 }
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const allResultsFromBase = useMemo(() => {
    return rates[fromCurrency];
  }, [fromCurrency]);

  const finalResult = (amount * allResultsFromBase[toCurrency]).toFixed(2);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Currency Converter</h1>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          {fromCurrency} to {toCurrency} Conversion
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Start Currency:
        </label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Target Currency:
        </label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: "20px", fontSize: "1.2em", fontWeight: "bold" }}>
        <label>
          Converted Amount:
          <span style={{ color: "#007bff", marginLeft: "10px" }}>
            {finalResult} {toCurrency}
          </span>
        </label>
      </div>
    </div>
  );
}