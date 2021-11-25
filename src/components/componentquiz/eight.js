import React, { useState } from 'react' ;
import { Link } from "react-router-dom";
import './eight.css';

export default function App() {
  const questions = [
    {
      questionText: 'ในช่วง 1 เดือนที่ผ่านมา เคยคิดอยากตาย หรืออยากหายไปจากโลกนี้ยังจะดีสะกว่า',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'ในช่วง 1 เดือนที่ผ่านมา คิดอยากทำร้ายร่างกายตนเอง หรือพยายามทำให้ตนเองบาดเจ็บ',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'ในช่วง 1 เดือนที่ผ่านมา เคยคิดเกี่ยวกับการฆ่าตัวตาย',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'ในช่วง 1 เดือนที่ผ่านมา เคยวางแผนที่จะฆ่าตัวตาย',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'ในช่วง 1 เดือนที่ผ่านมา ได้เตรียมการที่จะทำร้ายตนเอง หรือ เตรียมการจะฆ่าตัวตาย โดยหวังจะให้ตายจริงๆ',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'ในช่วง 1 เดือนที่ผ่านมา ทำร้ายตนเองให้เกิดอาการบาดเจ็บ แต่ไม่ตั้งใจที่จะให้ตายจริงๆ',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'ในช่วง 1 เดือนที่ผ่านมา ได้พยายามฆ่าตัวตาย โดยหวังและตั้งใจที่จะตายจริงๆ',
      answerOption: [
        {answerText: 'ไม่มีเลย', isScore: 0},
        {answerText: 'มีบาง ( 1-2 วัน )', isScore: 1},
        {answerText: 'เป็นบ่อย ( > 7วัน ) ', isScore: 2},
        {answerText: 'เป็นทุกวัน', isScore: 3}
      ]
    },
    {
      questionText: 'ในช่วงชีวิตที่ผ่านมา ท่านเคยพยายามฆ่าตัวตาย',
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