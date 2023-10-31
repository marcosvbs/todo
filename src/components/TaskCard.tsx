import { Circle, Trash, CheckCircle } from "phosphor-react";

import styles from "./TaskCard.module.css";

interface TaskCardProps {
  id: number;
  isDone: boolean;
  description: string;
  deleteTask: (taskId: number) => void;
  changeTaskStatus: (taskId: number) => void;
}

export function TaskCard({
  id,
  isDone,
  description,
  deleteTask,
  changeTaskStatus,
}: TaskCardProps) {
  function handleDeleteTask() {
    deleteTask(id);
  }

  function handleChangeTaskStatus() {
    changeTaskStatus(id);
  }

  return isDone ? (
    <div className={styles.doneContainer}>
      <button className={styles.uncheckButton} onClick={handleChangeTaskStatus}>
        <CheckCircle size={24} weight="fill" />
      </button>
      <p className={styles.doneDescription}>{description}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  ) : (
    <div className={styles.container}>
      <button className={styles.checkButton} onClick={handleChangeTaskStatus}>
        <Circle size={24} />
      </button>
      <p className={styles.description}>{description}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
