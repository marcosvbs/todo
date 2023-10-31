import "./global.css";
import styles from "./App.module.css";

import todoLogo from "./assets/todo-logo.png";
import clipboard from "./assets/clipboard.png";

import { PlusCircle } from "phosphor-react";
import { TaskCard } from "./components/TaskCard";
import { ChangeEvent, FormEvent, useState } from "react";

interface Task {
  id: number;
  isDone: boolean;
  description: string;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function generateIdBasedOnCurrentTime() {
    const currentTime = Date.now();

    return currentTime;
  }

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();

    const newTask = {
      id: generateIdBasedOnCurrentTime(),
      isDone: false,
      description: newTaskDescription,
    };

    setTasks(() => [...tasks, newTask]);
    setNewTaskDescription("");
  }

  function onChangeNewTaskDescription(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskDescription(event?.target.value);
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksWithoutDeleteTask);
  }

  function changeTaskStatus(taskId: number) {
    const changedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
        return task;
      } else {
        return task;
      }
    });

    setTasks([...changedTasks]);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} />
      </header>

      <main className={styles.main}>
        <form
          className={styles.createNewTaskForm}
          onSubmit={handleCreateNewTask}
        >
          <input
            type="text"
            placeholder="Adicione um nova tarefa"
            required
            value={newTaskDescription}
            onChange={onChangeNewTaskDescription}
          />

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

          {tasks.length !== 0 ? (
            <div className={styles.taskList}>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  isDone={task.isDone}
                  description={task.description}
                  deleteTask={deleteTask}
                  changeTaskStatus={changeTaskStatus}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyTaskList}>
              <img src={clipboard} alt="Icone de prancheta" />

              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
