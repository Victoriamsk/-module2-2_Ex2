import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	const toForward = () => {
		if (activeIndex < steps.length - 1) {
			setActiveIndex(activeIndex + 1);
		}
	};

	const toBack = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const toStart = () => {
		setActiveIndex(0);
	};

	const onFirstStep = activeIndex === 0;
	const onLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={step.id}
								className={`${styles['steps-item']} ${index < activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								Шаг {index + 1}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={toBack}
							disabled={onFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={onLastStep ? toStart : toForward}
						>
							{onLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
