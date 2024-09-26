import { useState } from "react";
import ReactDOM from "react-dom/client";
import AirportCard from "./components/AirportCard";
import DownloadButton from "./components/DownloadButton";
import TopButton from "./components/TopButton";
import imgURLs from "./assets/imgURLs.json";
import airports from "./assets/airports.json";
import "./assets/App.css";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<div className="App">
				<h1 className="title">Airport Database</h1>
				<div className="searchBarContainer">
					<input value={searchQuery} type="text" placeholder="🔎 Search Airport Name Or IATA Code" onChange={(event) => setSearchQuery(event.target.value)} className="searchBar" />
					<button className="clearButton" onClick={() => setSearchQuery("")}>
						clear
					</button>
				</div>
				<DownloadButton />
				<div className="cards">
					{airports
						.filter((airport) => {
							return airport.name.toLowerCase().startsWith(searchQuery.toLowerCase()) || airport.iata.toLowerCase().startsWith(searchQuery.toLowerCase());
						})
						.map((airport) => {
							const imageUrl = imgURLs[airport.country as keyof typeof imgURLs];
							return <AirportCard key={airport.iata} airportName={airport.name} state={airport.state} country={airport.country} iataCode={airport.iata} icaoCode={airport.icao} imgURL={imageUrl} link={`https://www.google.com/search?q=${airport.name},${airport.state},${airport.country}`} searchQuery={searchQuery} />;
						})}
				</div>
				<TopButton />
			</div>
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
