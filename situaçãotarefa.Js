// noinspection CommaExpressionJS,ThisExpressionReferencesGlobalObjectJS,BadExpressionStatementJS,JSUnresolvedReference

let enumSituacaoTarefa;
// noinspection BadExpressionStatementJS
enumSituacaoTarefa

function PENDENTE(pendente) {

}

function CONCLUIDA() {
    return undefined;
}

PENDENTE("Pendente"),
     CONCLUIDA();

let privatefinalStringrotulo;
// noinspection BadExpressionStatementJS
privatefinalStringrotulo;

function SituacaoTarefa(Stringrotulo) {

}

SituacaoTarefa(Stringrotulo)
    this.rotulo = rotulo;


publicStringgetRotulo()
    // noinspection BadExpressionStatementJS
returnrotulo;

let publicclassMain, StringcodigoBusca, Tarefaencontrada, PrioridadeTarefaprioridade, StringentradaPrioridade, Stringresponsavel, Stringdescricao, Stringcodigo, opcao;
publicclassMain

function publicstaticvoidmain(Stringargs) {

}

function Stringargs() {

}

publicstaticvoidmain(Stringargs)!== 7
    Systemoutprintln("\n=== ORGANIZADOR DA FEIRA DE PROJETOS ===");
    Systemoutprintln("1. Cadastrar uma tarefa");
    Systemoutprintln("2. Listar todas as tarefas");
    Systemoutprintln("3. Buscar uma tarefa pelo código");
    Systemoutprintln("4. Marcar uma tarefa como concluída");
    Systemoutprintln("5. Listar apenas as tarefas pendentes");
    Systemoutprintln("6. Exibir o total de tarefas pendentes e concluídas");
    Systemoutprintln("7. Sair do programa");
    Systemoutprint("Escolha uma opção: ");

    Stringentrada = scanner.nextLine().trim();
    try {
    opcao = Integer.parseInt(entrada);
} catch (NumberFormatExceptione) {
    System.out.println("Entrada inválida. Digite um número de 1 a 7.");
    // noinspection JSAnnotator
        continue;
}

switch (opcao) {
    case 1:
        Systemoutprint("Código único da tarefa: ");
        Stringcodigo = scanner.nextLine();
        Systemoutprint("Descrição: ");
        Stringdescricao = scanner.nextLine();
        Systemoutprint("Nome do responsável: ");
        Stringresponsavel = scanner.nextLine();
        Systemoutprint("Prioridade (baixa, média ou alta): ");
        StringentradaPrioridade = scanner.nextLine();

        PrioridadeTarefaprioridade = PrioridadeTarefa.fromEntrada(entradaPrioridade);

        if (codigo.isBlank() || descricao.isBlank() || responsavel.isBlank()) {
            System.out.println("Erro: Código, descrição e responsável são obrigatórios.");
        } else if (prioridade == null) {
            System.out.println("Erro: Prioridade inválida. Use baixa, média ou alta.");
        } else if (gerenciador.cadastrarTarefa(codigo, descricao, responsavel, prioridade)) {
            System.out.println("Tarefa cadastrada com sucesso!");
        } else {
            System.out.println("Erro: Já existe uma tarefa com esse código.");
        }
        break;

    case 2:
        gerenciador.listarTodas();
        break;

    case 3:
        Systemoutprint("Digite o código da tarefa: ");
        StringcodigoBusca = scanner.nextLine();
        Tarefaencontrada = gerenciador.buscarPorCodigo(codigoBusca);
        if (encontrada != null) {
            encontrada.exibirDetalhes();
            System.out.println("--------------------------------------------------");
        } else {
            System.out.println("Tarefa não encontrada para o código informado.");
        }
        break;

    case 4:
        Systemoutprint("Digite o código da tarefa para concluir: ");
        scanner.nextLine();
        gerenciador.marcarConcluida(codigoConcluir);
        break;

    case 5:
        gerenciador.listarPendentes();
        break;

    case 6:
        gerenciador.exibirTotais();
        break;

    case 7:
        Systemoutprintln("Encerrando o programa...");
        break;

    default:
        Systemoutprintln("Opção inválida. Escolha entre 1 e 7.");


}
