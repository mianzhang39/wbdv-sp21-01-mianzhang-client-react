import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                    <ol>
                <TrueFalseQuestion
                    question={question}/>
                    </ol>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <ol>
                <MultipleChoiceQuestion
                    question={question}/>
                </ol>
            }
            <br/>
        </div>
    )
}

export default Question;