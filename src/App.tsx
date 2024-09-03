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
				{airports.map((airport) => {
					const imageUrl = imgURLs[airport.country];

					return <AirportCard key={airport.iata} airportName={airport.name} city={airport.city} country={airport.country} iataCode={airport.iata} icaoCode={airport.icao} imgURL={imageUrl} />;
				})}
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
