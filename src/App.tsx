import { PlusCircle, Clipboard } from "phosphor-react";

export function App() {
  return (
    <>
      <header>
        <img src="" alt="" />
      </header>

      <main>
        <form>
          <input type="text" placeholder="Adicione um nova tarefa" />

          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div>
          <div className="taskListSummary">
            <span className="createdTasksSummary">Tarefas criadas</span>
            <span className="counter">0</span>

            <span className="doneTasksSummary">Concluídas</span>
            <span className="counter">0</span>
          </div>

          <div className="taskList">
            <Clipboard size={56} />
            Você ainda não tem tarefas cadastradas <br />
            Crie tarefas e organize seus itens a fazer
          </div>
        </div>
      </main>
    </>
  );
}
