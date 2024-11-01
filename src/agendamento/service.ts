interface Agendamento {
    medico: number;
    paciente: string;
    data_horario: string;
}

const mockAgendamentos: Agendamento[] = [];

export const postAgendamento = (medicoId: number, pacienteNome: string, dataHorario: string) => {
    const novoAgendamento: Agendamento = {
        medico: medicoId,
        paciente: pacienteNome,
        data_horario: dataHorario,
    };
    
    mockAgendamentos.push(novoAgendamento);
    return novoAgendamento;
}
