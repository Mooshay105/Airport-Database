import { useState } from "react";
import ReactDOM from "react-dom/client";
import AirportCard from "./components/AirportCard";
import DownloadButton from "./components/DownloadButton";
import "./assets/App.css";
import imgURLs from "./assets/imgURLs.json";
import airports from "./assets/airports.json";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<div className="main">
				<h1 className="title">Airport Database</h1>
				<input type="text" placeholder="🔎 Search Airport Name Or IATA Code" onChange={(event) => setSearchQuery(event.target.value)} className="searchBar" />
				<DownloadButton />
				<div className="cards">
					{airports
						.filter((airport) => {
							return airport.name.toLowerCase().startsWith(searchQuery.toLowerCase()) || airport.iata.toLowerCase().startsWith(searchQuery.toLowerCase());
						})
						.map((airport) => {
							const imageUrl = imgURLs[airport.country as keyof typeof imgURLs];
							return <AirportCard key={airport.iata} airportName={airport.name} city={airport.city} country={airport.country} iataCode={airport.iata} icaoCode={airport.icao} imgURL={imageUrl} link={`https://www.google.com/search?q=${airport.name},${airport.city},${airport.country}`} searchQuery={searchQuery} />;
						})}
				</div>
				<button className="gotoTopButton" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
					Top
				</button>
			</div>
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
