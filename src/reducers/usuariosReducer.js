<<<<<<< HEAD
import { LLAMAR, EXITOSO, FALLO, EDITNAME } from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	nombre: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case LLAMAR: return { ...state, error: '', cargando: true };
		case EXITOSO: return { ...state, error: '', cargando: false, usuarios: action.payload };
		case FALLO: return { ...state, error: action.payload, cargando: false };
		case EDITNAME: return { ...state, nombre: action.payload };
		default: return state;
	}
=======
import { LLAMAR, EXITOSO, FALLO, EDITNAME } from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	nombre: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case LLAMAR: return { ...state, error: '', cargando: true };
		case EXITOSO: return { ...state, error: '', cargando: false, usuarios: action.payload };
		case FALLO: return { ...state, error: action.payload, cargando: false };
		case EDITNAME: return { ...state, nombre: action.payload };
		default: return state;
	}
>>>>>>> 7c1d0f17a8b753048d80c3ab8536f6879f391dca
}