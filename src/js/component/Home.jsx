import React from "react"; //1. Import React
import rigoImage from "../../img/rigo-baby.jpg";//incluyo imagenes
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx"; //Componente con EXPORT const

//2.create your first component with PascalName.
const Home = () => {
//3. Code JS


//4. Retorno un solo y solo un elemento HTML

	return (
		<div className="text-center">
			<Navbar/>
			<Footer/>
			
		</div>
	);
};


//5. Exporto mi componente
export default Home;

//6. En el archivo donde voy a utilizar el componente
//importar el componente
//7 importarlo