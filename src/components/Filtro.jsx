import React from 'react';

export const Filtro = ({ filtro, setFiltro }) => {
	return (
		<div className="filtros sombra contenedor">
			<form>
				<div className="campo">
					<label>Filtar Gastos</label>
					<select onChange={(e) => setFiltro(e.target.value)} value={filtro}>
						<option value="">-- Selecciona una categoria --</option>
						<option value="ahorro">Ahorro</option>
						<option value="comida">Comida</option>
						<option value="casa">Casa</option>
						<option value="varios">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="salud">Salud</option>
						<option value="suscripciones">Suscripciones</option>
					</select>
				</div>
			</form>
		</div>
	);
};
