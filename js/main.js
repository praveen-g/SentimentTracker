var mainDict=[]
var sentimentScores = []

var sentiment = require('sentiment')

function sentimentAnalysis(socialObject){
    var messageScore = sentiment(socialObject["text"])
    return sentimentAndTime = {
        "sentiment": messageScore, "time": socialObject["time"]
    }
}

function startAnalysing(){
	var facebookMessages = facebookAnalysis();
	var twitterMessges = twitterAnalysis();
    //var insta = instagramAnalysis();
    console.log(facebookMessages.length)
    console.log(twitterMessges.length)
    mainDict=facebookMessages+twitterMessges

    for (var i = 0; i<mainDict.length; i--) {
        sentimentScores = sentimentScores.concat(sentimentAnalysis(mainDict[i]))
    };
}