const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu')
    toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle', 'nav-menu')


let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
  })
}

//Java Script LAB1
function loginUser() {
  var username = prompt('Enter your username');
  var user;

  if (username == "admin") {
    let password = prompt('Enter password');
    if (password == "123456") {
      user = "Admim";
    } else {
      user = "Guest";
    }
  } else {
    user = "Guest";
  }

  alert('Welcome ' + user);
}


//Java Script LAB2
let calculator = {
  read() {
    this.a = prompt('Enter number 1');
    this.b = prompt('Enter number 2');
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return this.a * this.b;
  }
};

function calculateSum() {
  calculator.read();
  alert(calculator.sum());
}

function calculateMul() {
  calculator.read();
  alert(calculator.mul());
}


//Java Script LAB3
var myObject = {};

function createObject() {
  var myObject = {}; // Ensure that myObject is declared before using it

  while (true) {
    var key = prompt("(Enter a fruit name or 'stop' to finish):");
    if (key.toLowerCase() === 'stop') {
      break;
    }
    var value = prompt("Enter value:");

    if (value >= 2) {
      let objective = key + 's';
      myObject[objective] = value;
    } else {
      myObject[key] = value;
    }
  }

  console.log(myObject);
  alert("Object created. Check the console for details."); // Add an alert after logging to the console
}


//Java Script LAB4
const daysToSeconds = days => days * 24 * 60 * 60;

function convertDaysToSeconds() {
  const numberOfDays = prompt("Enter the number of days:");
  const seconds = daysToSeconds(numberOfDays);

  console.log(`${numberOfDays} days is equal to ${seconds} seconds`);
  alert(`${numberOfDays} days is equal to ${seconds} seconds`);
}

//Java Script LAB5
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

function convertTemperature() {
  const temperatureInFahrenheit = prompt("Enter temperature in Fahrenheit:");
  const temperatureInCelsius = fahrenheitToCelsius(parseFloat(temperatureInFahrenheit));
  alert(`${temperatureInFahrenheit} degrees Fahrenheit is equal to ${temperatureInCelsius.toFixed(2)} degrees Celsius`);
}

//API 
document.getElementById('apiButton').addEventListener('click', async function () {
  const url = 'https://opencritic-api.p.rapidapi.com/game/search?criteria=the%20witcher%203';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '315fd06726mshf1170d97ef3e690p1f54bajsnf6e8130686fb',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result455 = await response.text();
    alert(result455);
    // Handle the result as needed
  } catch (error) {
    console.error(error);
    // Handle errors
  }
});


//API 2
        // Function to fetch a random GIF from Giphy API
        async function getRandomGif() {
            const apiKey = 'LeAY0OSXO4kc91fDhmQ93JUThGqivIWGY4MycRtmoxU'; // Replace with your Giphy API key
            const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();

                if (data.data && data.data.image_original_url) {
                    const imageUrl = data.data.image_original_url;
                    document.getElementById('random-gif').src = imageUrl;
                } else {
                    console.error('Error fetching GIF');
                }
            } catch (error) {
                console.error('Error fetching GIF:', error);
            }
        }

        // Initial load
        getRandomGif();

        // Event listener to change the GIF on button click
        document.getElementById('random-gif').addEventListener('click', getRandomGif);



//API 3
document.getElementById('apiButton3').addEventListener('click', async function () {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Display the result in a container
    const bitcoinPriceContainer = document.getElementById('bitcoinPriceContainer');
    bitcoinPriceContainer.innerHTML = '<h2>Bitcoin Price</h2>';

    if (data && data.bpi && data.bpi.USD) {
      const price = data.bpi.USD.rate;
      bitcoinPriceContainer.innerHTML += `<p>Current Bitcoin Price: ${price}</p>`;
    } else {
      bitcoinPriceContainer.innerHTML += '<p>Unable to fetch Bitcoin price.</p>';
    }
  } catch (error) {
    console.error(error);
    // Handle errors
  }
});


// Function to fetch cryptocurrency prices from the Coinbase API
async function fetchPrices() {
  try {
    const response = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=USDT');
    const data = await response.json();

    // Display prices and last update time
    displayPrices(data.data.rates);
    displayLastUpdateTime();
  } catch (error) {
    handleFetchError(error);
  }
}

// Function to display cryptocurrency prices
function displayPrices(rates) {
  const currencies = ['1INCH', 'AAVE', 'ABT', 'ACH', 'ACS', 'ADA', 'AED', 'BTC', 'ETH'];
  const pricesHtml = `
    <br>
    <ul class='list-group list-group-numbered'>${currencies.map(currency => `<li class='list-group-item'>${currency} : ${rates[currency] || 'N/A'}</li>`).join('')}</ul>
`;
  document.getElementById('prices').innerHTML = pricesHtml;
}
// Function to handle fetch errors
function handleFetchError(error) {
  console.error('Error fetching data:', error);
  alert('Error fetching data. Please try again.');
}
// Function to display the last update time
function displayLastUpdateTime() {
  const updateTimeDiv = document.getElementById('lastUpdateTime');
  const currentTime = new Date().toLocaleTimeString();

  updateTimeDiv.innerHTML = `<label>Last Update Time: ${currentTime}</label>`;
}
// Initial fetch and display
fetchPrices();
// Set interval to fetch and update prices every 30 seconds
setInterval(fetchPrices, 1000);


