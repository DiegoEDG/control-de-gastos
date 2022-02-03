import React from 'react';

export const PresupuestoForm = () => {
	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form className="formulario">
				<div className="campo">
					<label>Define tu presupuesto</label>
					<input className="nuevo-presupuesto" type="text" placeholder="$$$" />
				</div>
				<input type="submit" value="Agregar" />
			</form>
		</div>
	);
};
