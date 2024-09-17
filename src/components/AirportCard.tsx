interface AirportCardProps {
	airportName: string;
	city: string;
	country: string;
	iataCode: string;
	icaoCode: string;
	link: string;
	imgURL: string;
}

function AirportCard({ airportName, city, country, iataCode, icaoCode, imgURL, link }: AirportCardProps) {
	return (
		<div className="card" onClick={() => window.open(link, "_blank")}>
			<img src={imgURL} draggable="false" />
			<div className="content">
				<h2>{airportName}</h2>
				<p>
					{city}, {country}
				</p>
				<p>IATA Code: {iataCode}</p>
				<p>ICAO Code: {icaoCode}</p>
			</div>
		</div>
	);
}

export default AirportCard;
