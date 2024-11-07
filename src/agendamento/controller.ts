export const marcarAgendamentos = async (event) => {
  const { medico_id, paciente_nome, data_horario } = JSON.parse(event.body);

  return {
    statusCode: 201,
    body: JSON.stringify({
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: "Dr. João Silva",
        paciente: paciente_nome,
        data_horario: data_horario,
      },
    }),
  };
};
