/**
 * Free Currency Exchange Rates API
 * Source: https://github.com/fawazahmed0/exchange-api
 * */
document.addEventListener("DOMContentLoaded", function(){
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(typeof(data));
        console.log(data);

        // Loop through the 'currencies' object
        const currencies = data;
        Object.keys(currencies).forEach(key => {
            let currencyData    = `${key} : ${currencies[key]}`;
            let currencyEl      = document.createElement('li');
                currencyEl.innerHTML = currencyData;

            console.log(currencyEl);

            document.querySelector('body').appendChild(currencyEl);
        });
    })
    .catch(error => {
        console.log('Error:', error)
    });
}); 