import React, { Component } from "react";

import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";

import 'bootstrap/dist/css/bootstrap.css';
import "survey-knockout/survey.css";
import "survey-creator/survey-creator.css";
import "./index.css";

SurveyCreator.StylesManager.applyTheme("bootstrap");

class SurveyBuilder extends Component {
    constructor() {
        super();        
    }
    
    componentDidMount() {
    
        var creatorOptions = { showTestSurveyTab: false, showJsonEditor: false };
        var creator = new SurveyCreator.SurveyCreator("creatorElement", creatorOptions);
        creator.showToolbox = "right";
        creator.showPropertyGrid = "right";
        creator.rightContainerActiveItem("toolbox");
    
        //Automatically save survey definition on changing. Hide "Save" button
        creator.isAutoSave = true;
        
        //Show state button here
        creator.showState = true;
        var localStorageName = "SaveLoadSurveyCreatorExample";
        
        //Setting this callback will make visible the "Save" button
        creator.saveSurveyFunc = function(saveNo, callback) {
        
            //save the survey JSON
            console.log(creator.text);
            
            //You can store in your database JSON as text: creator.text  or as JSON: creator.JSON
            window.localStorage.setItem(localStorageName, creator.text);
            
            //We assume that we can't get error on saving data in local storage
            //Tells creator that changing (saveNo) saved successfully.
            //Creator will update the status from Saving to saved
            callback(saveNo, true); 
    }

    var defaultJSON = { pages: [{ name:'page1', questions: [{ type: 'text', name:"q1"}]}]};
    creator.text = window.localStorage.getItem(localStorageName) || JSON.stringify(defaultJSON);
    
    //If you get JSON from your database then you can use creator.JSON property
    //creator.JSON = yourJSON;
    
    }
    
    render() {
        return (
            <div id="creatorElement" />
        );
    }
}

export default SurveyBuilder;