export const getId = () => {
	const random = Math.random().toString(35).substring(2);
	const fecha = Date.now().toString(35);

	return random + fecha;
};

export const formatearFecha = (fecha) => {
	const fechaNueva = new Date(fecha);
	const opciones = {
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	};
	return fechaNueva.toLocaleDateString('es-ES', opciones);
};
