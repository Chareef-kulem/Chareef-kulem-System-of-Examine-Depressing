import React, { useState } from 'react' ;
import { Link } from "react-router-dom";
import './nineq.css';

export default function App() {
  const questions = [
    {
      questionText: 'ท่านรู้สึกเบื่อ ไม่สนใจที่อยากจะทำอะไร',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'รู้สึกท้อแท้ หดหู ไม่สบายใจ',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'มีอาการหลับยาก หลับๆตื่นๆ หรือหลับเป็นเวลานานเกิน',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'รู้สึกเหนื่อยง่าย หรือไม่มีแรงที่จะทำอะไร',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'รู้สึกเบื่ออาหาร หรือกินอาหารมากเกินไป',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'รู้สึกไม่ดีกับตัวเอง คิดว่า ตัวเองล้มเหลว หรือ ทำให้ตนเอง หรือ ครอบครัวผิดหวัง',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้ หรือ กระสับกระส่าย ไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'คิดทำร้ายตัวเอง หรือคิดว่า ถ้าตายไปคงจะดี',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    }
  ]

  const averageScore = [
    { answerScore :'มีอาการของโรคซึมเศร้า ระดับรุนแรง',type:4},
    { answerScore :'มีอาการของโรคซึมเศร้า ระดับปานกลาง',type:3},
    { answerScore :'มีอาการของโรคซึมเศร้า ระดับน้อย',type:2},
    { answerScore :'ไม่มีอาการของโรคซึมเศร้าหรือมีอาการของโรคซึมเศร้าระดับน้อยมาก',type:1}
  ]

  // ประกาศ การโชว์คะแนน และ การให้คะแนน
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore, ] = useState(0);

  //วิธีคำนวนคะแนน
  const handleAnswerOptionClick = (isScore) => {
    
    setScore(score + isScore);

    //เมื่อตอบ ให้ไปคำถามถัดไป
    const nextQuestion = currentQuestion +1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }

  };

  //ประเมินความเสี่ยง
  const average = ()=> {
    if (score >=19 ) {
      average ='มีอาการของโรคซึมเศร้า ระดับรุนแรง';
    } 
    if (score >=13 ) {

    }
    if (score >=7 ){

    } else {

    }
  };
  
  return (
  
    <div className='app'>
			{showScore ? (
        //ผลจากการคำนวน ว่าอยู่ในระดับไหน
				<div className='score-section'>
					คะแนนรวม {score}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOption.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isScore)}>

                {answerOption.answerText}

              </button>
						))}
					</div>
				</>
			)}
		</div>
	);
}