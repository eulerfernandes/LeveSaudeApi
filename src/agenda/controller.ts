import { getAgendas } from "./service";

export const getAgendasHandler = async (event) => {
    const agendas = getAgendas();
    return {
        statusCode: 200,
        body: JSON.stringify({ medicos: agendas}),
    };
};