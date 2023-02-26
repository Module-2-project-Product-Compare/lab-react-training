import React from "react";

function Greetings(props)  {

	const {lang, children} = props;

	const greet = (lang) => {
		if (lang === "de") {
			return "Hallo";
		}
		if (lang === "en") {
			return "Hello";
		}
		if (lang === "es") {
			return "Hola"
		}
		if (lang === "fr") {
			return "Bonjour";
		}
	}

	return (<p className="card-user" >{greet(lang)} {children}</p>)
}

export default Greetings;
