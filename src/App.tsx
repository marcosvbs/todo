import "./global.css";
import styles from "./App.module.css";

import todoLogo from "./assets/todo-logo.png";
import clipboard from "./assets/clipboard.png";

import { PlusCircle } from "phosphor-react";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} />
      </header>

      <main className={styles.main}>
        <form className={styles.createNewTaskForm}>
          <input type="text" placeholder="Adicione um nova tarefa" required />

          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.content}>
          <div className={styles.taskListSummary}>
            <div>
              <span className={styles.createdTasksSummary}>
                Tarefas criadas
              </span>
              <span className={styles.counter}>0</span>
            </div>

            <div>
              <span className={styles.doneTasksSummary}>Concluídas</span>
              <span className={styles.counter}>0</span>
            </div>
          </div>

          <div className={styles.taskList}>
            <img src={clipboard} alt="Icone de prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </div>
        </div>
      </main>
    </>
  );
}
