interface AirportCardProps {
	airportName: string;
	state: string;
	country: string;
	iataCode: string;
	icaoCode: string;
	link: string;
	imgURL: string;
	searchQuery: string;
}

function AirportCard({ airportName, state, country, iataCode, icaoCode, imgURL, link, searchQuery }: AirportCardProps) {
	return (
		<div className="card" onClick={() => window.open(link, "_blank")}>
			<img src={imgURL} draggable="false" />
			<div className="content">
				<h2 dangerouslySetInnerHTML={{ __html: selectivelyBoldText(airportName, searchQuery, true) }} className="h2NotBold" />
				<p>
					{state}, {country}
				</p>
				<p>
					IATA Code: <span dangerouslySetInnerHTML={{ __html: selectivelyBoldText(iataCode, searchQuery) }} />
				</p>
				<p>ICAO Code: {icaoCode}</p>
			</div>
		</div>
	);
}

export default AirportCard;

function selectivelyBoldText(text: string, mask: string, isH2: boolean = false) {
	let boldText = "";
	mask = mask.toLowerCase();

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const shouldBold = mask.includes(char.toLowerCase());

		if (shouldBold) {
			if (isH2) {
				boldText += `<b class="h2Bold">${char}</b>`;
			} else {
				boldText += `<b>${char}</b>`;
			}
		} else {
			boldText += char;
		}
	}

	return boldText;
}
