import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
//import "./index.css";

Survey.StylesManager.applyTheme("modern");

var json = { pages: [
    {questions: [
        { type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
            columns: [{ value: 2, text: "Disagree" }, 
                      { value: 3, text: "Neutral" }, 
                      { value: 4, text: "Agree" }, 
                     ],
            rows: [{ value: "affordable", text: "Product is affordable" }, 
                   { value: "does what it claims", text: "Product does what it claims" },
                   { value: "easy to use", text: "Product is easy to use" }]},
        { type: "rating", name: "satisfaction", title: "How satisfied are you with the Product?", 
            mininumRateDescription: "Not Satisfied", maximumRateDescription: "Completely satisfied" },
        { type: "rating", name: "recommend friends", visibleIf: "{satisfaction} > 3", 
            title: "How likely are you to recommend the Product to a friend or co-worker?", 
            mininumRateDescription: "Will not recommend", maximumRateDescription: "I will recommend" },
        { type: "comment", name: "suggestions", title:"What would make you more satisfied with the Product?", }
    ]},
    {questions: [
        { type: "radiogroup", name: "price to competitors", 
            title: "Compared to our competitors, do you feel the Product is",
            choices: ["Less expensive", "Priced about the same", "More expensive", "Not sure"]},
        { type: "radiogroup", name: "price", title: "Do you feel our current price is merited by our product?",
            choices: ["correct|Yes, the price is about right", 
                    "low|No, the price is too low for your product", 
                    "high|No, the price is too high for your product"]},
        { type: "multipletext", name: "pricelimit", title: "What is the... ",
            items: [{ name: "mostamount", title: "Most amount you would every pay for a product like ours" },
                    { name: "leastamount", title: "The least amount you would feel comfortable paying" }]}
    ]},
    { questions: [
            { type: "html", name: "sure",  html:"<button onclick='window.goToStart()'>go to first page</button>"}
        ]}
]
};

class SurveyComponent extends Component {
    constructor() {
        super();        
    }

    render() {           
        const localStorageName = "SaveLoadSurveyCreatorExample";
        const jsonForModel = window.localStorage.getItem(localStorageName) || json;
        const survey = new Survey.Model(jsonForModel);

        survey
            .onComplete
            .add(function (result) {
                document
                    .querySelector('#surveyResult')
                    .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
        });

        return (
                <Survey.Survey model={survey} />
            );
    }
}

export default SurveyComponent;

