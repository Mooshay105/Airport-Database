import ReactDOM from "react-dom/client";
import AirportCard from "./components/AirportCard";
import "./assets/App.css";
import imgURLs from "./assets/imgURLs.json";
import airports from "./assets/airports.json";

function App() {
	return (
		<div className="App">
			<h1>Airports</h1>
			<div className="cards">
				{airports.map((airport) => (
					<AirportCard key={airport.iata} airportName={airport.name} city={airport.city} country={airport.country} iataCode={airport.iata} icaoCode={airport.icao} imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/510px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" />
				))}
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
