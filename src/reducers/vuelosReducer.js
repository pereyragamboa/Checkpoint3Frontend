import * as Types from '../types/vuelosTypes';

const INITIAL_STATE = {
  cargando: false,
  error: null,
  vuelos: [],
  IDVuelo: 0,
  matriculaID: 0,
  fechaSalida: null,
  fechaLlegada: null,
  origen: '',
  destino: '',
  ruta: '',
  estados: {},
  aerolineas: [],
  matriculas: [],
  manifiesto: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LLAMAR: return { ...state, error: null, cargando: true };
    case Types.EXITOSO: return { ...state, error: null, cargando: false };
    case Types.FALLO: return { ...state, cargando: false, error: action.payload };

    case Types.TRAER_MANIF:console.log(action.payload, 's') ;
    return {
      ...state, manifiesto: action.payload
    };
    case Types.CONSULTA_TODOS_VUELOS:
      return {
      ...state, vuelos: action.payload
    };
    case Types.CONSULTA_VUELOS: return {
      ...state,
      matriculaID: action.payload.matriculaID,
      fechaSalida: action.payload.fechaSalida,
      fechaLlegada: action.payload.fechaLlegada,
      origen: action.payload.origen,
      destino: action.payload.destino,
      ruta: action.payload.ruta
    };
    case Types.AGREGAR_VUELO: return {
      ...state,
      vuelos: [...state.vuelos, action.payload]
    };
    case Types.MODIFICAR_VUELO:
      const idVueloModificado = state.vuelos.findIndex(v => v.IDVuelo === action.payload.IDVuelo);
      if (idVueloModificado >= 0) {
        state.vuelos.splice(idVueloModificado, 1, action.payload);
      }
      return state;
    case Types.CONSULTA_ESTADOS:
      return { ...state, estados: action.payload };
    case Types.CONSULTA_AEROLINEAS:
      return { ...state, aerolineas: action.payload };
    case Types.CONSULTA_MATRICULAS:
      return { ...state, matriculas: action.payload };
    default: return state;
  }
};