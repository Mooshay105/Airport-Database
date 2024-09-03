interface AirportCardProps {
	airportName: string;
	city: string;
	country: string;
	iataCode: string;
	icaoCode: string;
	imgURL: string;
}

function AirportCard({ airportName, city, country, iataCode, icaoCode, imgURL }: AirportCardProps) {
	return (
		<div className="card">
			<img src={imgURL} draggable="false" />
			<h2>{airportName}</h2>
			<p>
				{city}, {country}
			</p>
			<p>IATA Code: {iataCode}</p>
			<p>ICAO Code: {icaoCode}</p>
		</div>
	);
}

export default AirportCard;
