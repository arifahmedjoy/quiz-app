import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'বঙ্গবন্ধুর জন্মতারিখটি কি তুমি জানো?',
			answerOptions: [
				{ answerText: '১৭ই জানুয়ারি ১৯২০', isCorrect: false },
				{ answerText: '১৭ই মার্চ ১৯২০', isCorrect: true },
				{ answerText: '১৭ই আগস্ট ১৯২০', isCorrect: false },
				{ answerText: '১৭ই ডিসেম্বর ১৯২০', isCorrect: false },
			],
		},
		{
			questionText: 'তুমি কি জানো, কে বঙ্গবন্ধুর শেখ বংশের গোড়াপত্তন করেন?',
			answerOptions: [
				{ answerText: 'শেখ লুৎফুর রহমান', isCorrect: false },
				{ answerText: 'শেখ মুজিবুর রহমান', isCorrect: false },
				{ answerText: 'শেখ আবু নাসের', isCorrect: false },
				{ answerText: 'শেখ বোরহানউদ্দিন', isCorrect: true },
			],
		},
		{
			questionText: 'তুমি কি জানো, কে শেখ মুজিবুর রহমানের গৃহশিক্ষক ছিলেন?',
			answerOptions: [
				{ answerText: 'কাজী আবদুল হামিদ', isCorrect: true },
				{ answerText: 'মওলানা আজাদ', isCorrect: false },
				{ answerText: 'শেখ আবদুল মজিদ', isCorrect: false },
				{ answerText: 'হুমায়ুন কবির', isCorrect: false },
			],
		},
		{
			questionText: 'তুমি কি জানো, “শেখ মুজিবুর রহমান” নামকরণটি কে করেন?',
			answerOptions: [
				{ answerText: 'কাজী আবদুল হামিদ', isCorrect: false },
				{ answerText: 'শেখ লুৎফুর রহমান', isCorrect: false },
				{ answerText: 'সায়েরা খাতুন', isCorrect: false },
				{ answerText: 'শেখ আবদুল মজিদ', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					তুমি {questions.length} এর মাঝে {score} পেয়েছ।
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>প্রশ্ন {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
