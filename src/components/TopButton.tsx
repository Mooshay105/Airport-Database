function TopButton() {
	return (
		<button className="topButton" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
			Top
		</button>
	);
}

export default TopButton;
