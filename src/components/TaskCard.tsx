import { Circle, Trash, CheckCircle } from "phosphor-react";

import styles from "./TaskCard.module.css";

interface TaskCardProps {
  isDone: boolean;
  description: string;
}

export function TaskCard({ isDone, description }: TaskCardProps) {
  return isDone ? (
    <div className={styles.doneContainer}>
      <button className={styles.uncheckButton}>
        <CheckCircle size={24} weight="fill" />
      </button>
      <p className={styles.doneDescription}>{description}</p>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  ) : (
    <div className={styles.container}>
      <button className={styles.checkButton}>
        <Circle size={24} />
      </button>
      <p className={styles.description}>{description}</p>
      <button className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
}
