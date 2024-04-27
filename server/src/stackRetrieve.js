const { GoogleGenerativeAI } = require('@google/generative-ai');
const config = require('./config.json')
const API = config.API_KEY

async function talkToGemini(prompt) {
  const genAI = new GoogleGenerativeAI(API);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;


  text = response.text()
  return text
}

userInput = `Website Concept: "Wildlife Explorer"
Overview:
"Wildlife Explorer" is an interactive website where users can test their knowledge of animals and compete with others to become top explorers. The website will showcase different animal species and challenge users to identify specific characteristics or behaviors.
Key Features:
User Registration and Profiles:
Users can create accounts with a unique username, email, and password.
Upon registration, users have personalized profiles displaying their username, profile picture, and high scores.
Users can log in to track their progress, view achievements, and compete on leaderboards.
Gameplay:
The main gameplay revolves around identifying animals based on given clues or attributes.
Users start the game by selecting a category (e.g., mammals, birds, reptiles) or a specific quiz type (e.g., "Can it fly?").
An image or description of an animal is displayed, and users must quickly determine if the animal matches the given criteria (e.g., "Can it fly?").
Users press and hold the space bar while an animal is displayed. If the animal meets the criterion (e.g., it can fly), they release the space bar briefly and hold again to continue.
If the user correctly identifies the animal, they earn points and proceed to the next challenge. Incorrect answers result in a decrease in score.
Leaderboards and High Scores:
The website maintains a global leaderboard showcasing top scores and rankings.
Users can see their own high scores and compare them with others.
Achieving high scores unlocks achievements and badges.
Social Features:
Users can follow each other and engage in friendly competition.
Social sharing options allow users to share their achievements and high scores on social media.
A chat or messaging feature enables users to interact and discuss wildlife topics.
Educational Content:
Alongside the game, the website offers educational resources about various animal species.
Users can access articles, videos, or interactive content to learn more about animals and conservation efforts.
Community Challenges:
Periodic challenges or events encourage users to participate and compete for special rewards.
Challenges could include themed quizzes, time-limited events, or collaborative tasks.`

async function get_stack(userInput) {

    // Example usage
    // talkToGemini("Hello, how can I help you today?")
    //   .then(() => console.log("Conversation ended"))
    //   .catch((error) => console.error(error));

    // Step 1: Extract functional requriements and core technologies
    //  Step 2: Extract tech stack

    const stepTwoPrompt = "As per the Given the required configuration above, suggest functional requirements and core functionalities and  possible technical stack and architecture for building this application. Provide how and why that specific tech stack was chosen in  paragraph manner, specify required languages too."
    var promptForStepTwo = userInput + "\n" + stepTwoPrompt
    finalResponse = await talkToGemini(promptForStepTwo)
    return [ finalResponse , userInput + "\n" + "\n" +finalResponse  ]
}

module.exports = { get_stack , talkToGemini};

