import React from "react";

const DownloadButton = () => {
	const fileUrl = "https://raw.githubusercontent.com/Mooshay105/Airport-Database/main/src/assets/airports.json";
	const fileName = "airports.json";

	const handleDownload = async () => {
		const response = await fetch(fileUrl);
		const blob = await response.blob();
		const link = document.createElement("a");
		link.href = window.URL.createObjectURL(blob);
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button onClick={handleDownload} className="downloadButton">
			<h1>Download</h1>
		</button>
	);
};

export default DownloadButton;
