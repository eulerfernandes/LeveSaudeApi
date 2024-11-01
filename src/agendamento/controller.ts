import { postAgendamento } from "./service";

export const postAgendamentoHandler = async (event) => {
    const { medico_id, paciente_nome, data_horario} = JSON.parse(event.body);

    if (!medico_id || !paciente_nome || !data_horario) {
        return {
            statusCode: 400,
            body: JSON.stringify({ mensagem: 'Dados Invalidos.'}), 
        };
    }

    const agendamentos = postAgendamento(medico_id, paciente_nome, data_horario);

    return {
        statusCode: 200,
        body: JSON.stringify({
            mensagem: 'Agendamento realizado com sucesso', 
            agendamentos,
        }),
    };
};