import ReactDOM from "react-dom/client";
import AirportCard from "./components/AirportCard";
import "./assets/App.css";

function App() {
	return (
		<div>
			<h1>Airports</h1>
			<div className="cards">
				<AirportCard airportName="London" city="London" country="United Kingdom" iataCode="LON" icaoCode="EGLL" imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/510px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" />
				<AirportCard airportName="New York" city="New York" country="United States" iataCode="JFK" icaoCode="KJFK" imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/510px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" />
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
