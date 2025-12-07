🌤️ SkyCast Weather Dashboard

SkyCast Weather Dashboard is a simple, responsive web application built using HTML, CSS, and JavaScript. It allows users to fetch real-time weather details for any city and also supports automatic current-location weather using the Geolocation API. The app retrieves temperature, humidity, pressure, and weather descriptions using the OpenWeatherMap API and displays them in a clean, user-friendly interface.

📁 Project Structure

The project consists of three main files:

index.html
- Contains the search bar, input field, button, and the weather display section.  
- Acts as the backbone of the UI.

index.css
- Styles the container, text, input fields, and result layout.  
- Uses simple and clean design principles for readability.

index.js
- Fetches weather data from the OpenWeatherMap API.  
- Uses `async/await` for API calls.  
- Gets current location using `navigator.geolocation`.  
- Dynamically updates the DOM with the weather details.

⚙️ How the App Works

1️⃣ City Weather Search
- User enters a city name.
- The app builds an API request URL with the city parameter.
- Fetches weather data using `fetch()`.
- Displays:
  - Temperature  
  - Humidity  
  - Pressure  
  - Weather condition (in text)

2️⃣ Current Location Weather
- On page load, the app asks for location access.
- If permission is granted:
  - Retrieves latitude & longitude.
  - Sends coordinates to the API.
  - Shows weather instantly without typing.

3️⃣ Error Handling
- Alerts for:
  - Invalid city name
  - Failed requests
  - Location denied errors

4️⃣ DOM Updates
- Weather information is inserted into the HTML dynamically.
- Text is formatted for a clean visual appearance.

🎨 Design Overview (UI/UX)

- Clean and minimal interface with a centered layout.
- Blue-toned UI for a weather-themed appearance.
- Highlighted headings for better visibility.
- Large inputs and buttons for easy interaction.
- Responsive design ensures compatibility with laptops and mobiles.

 Key Design Elements:
- Center-aligned container
- Readable font sizes
- Soft color contrast for text
- Clear hierarchy for information display

▶️ How to Run the Project

1. Download or clone the repository.
2. Open the `index.js` file and add your OpenWeatherMap API key: ```js
const API_KEY = "YOUR_API_KEY";
3. Save the file.
4. Open index.html in any browser.
5. Allow location access to fetch weather automatically.


