async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    try {
        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );

        const data = await response.json();

        const rate = data.rates[to];
        const result = amount * rate;

        document.getElementById("result").innerText =
            `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    } catch (error) {
        document.getElementById("result").innerText =
            "Error fetching exchange rates";
    }
}