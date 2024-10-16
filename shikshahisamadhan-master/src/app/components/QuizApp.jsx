import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import  './Quiz.css';

const QuizApp = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [attemptedCount, setAttemptedCount] = useState(0);

  // Function to fetch the Excel file and parse it
  const loadQuiz = (quizPath) => {
    fetch(quizPath)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0]; // Use the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Parse the Excel rows into question objects
        const parsedQuizData = jsonData.map((row) => ({
          question: row[0],              // First column is the question
          options: row.slice(1, 5),      // Next four columns are the options
          correctAnswer: row[5],         // The sixth column contains the correct answer
        }));

        setQuizData(parsedQuizData);
      });
  };

  // Load quiz data based on file path (quiz1.xlsx for example)
  useEffect(() => {
   loadQuiz("/assets/Quiz1.xlsx");   // Change path to quiz2.xlsx or other quizzes as needed
  }, []);

  // Function to handle answer selection
  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedOption,
    });
  };

  // Function to handle quiz submission
  const handleSubmitQuiz = () => {
    let correct = 0;
    let attempted = 0;

    quizData.forEach((q, index) => {
      if (selectedAnswers[index] !== undefined) { // If the user attempted the question
        attempted++;
        if (selectedAnswers[index] === q.correctAnswer) {
          correct++;
        }
      }
    });

    setCorrectCount(correct);
    setAttemptedCount(attempted);
    setShowResult(true);
  };

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  // Function to handle moving to the previous question
  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="quizapp">
      <h1>Quiz App</h1>
      {quizData.length === 0 ? (
        <div>
          <h3>Loading Quiz...</h3>
        </div>
      ) : showResult ? (
        <div>
          <h3>Quiz Report</h3>
          <p>Total Questions: {quizData.length}</p>
          <p>Attempted Questions: {attemptedCount}</p>
          <p>Correct Answers: {correctCount}</p>
          <p>Wrong Answers: {attemptedCount - correctCount}</p>
          <p>Unattempted Questions: {quizData.length - attemptedCount}</p>
        </div>
      ) : (
        <div>
          <h3>Question {currentQuestion + 1} : {quizData[currentQuestion].question}</h3>
          {quizData[currentQuestion].options.map((option, idx) => (
            <div className="options" key={idx}>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={selectedAnswers[currentQuestion] === option}
                onChange={() => handleAnswerSelect(currentQuestion, option)}
              />
              {option}
            </div>
          ))}

          <div>
            {currentQuestion > 0 && (
              <button className="prev" onClick={handlePreviousQuestion}>Previous</button>
            )}
            {currentQuestion < quizData.length - 1 ? (
              <button className="next" onClick={handleNextQuestion}>Next</button>
            ) : (
              <button onClick={handleSubmitQuiz}>Submit Quiz</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
