// script.js

// פונקציה להשמעת טקסט
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

     const responses = [
        { 
           input: ["hello", "hi", "hey"],
           output: ["Hello, I am your computer companion my name is Jarvis.", "Hey, what's up? my name is Jarvis "]
        },
        { 
           input: ["how are you", "how's it going", "how are you doing"],
           output: ["I'm doing well, thank you for asking.", "I'm fine, thanks!", "I'm good, how about you?"]
        },
        {
           input: ["Hi Jarvis"],
           output: ["Hi, that's my name,how can I help?"]
        },
        { 
           input: ["what can you do", "what are your capabilities", "what do you do"],
           output: ["I can assist you with various tasks. Feel free to ask me anything.", "I'm here to help you with whatever you need.", "I'm capable of performing a wide range of tasks. Just let me know what you need."]
        },
        { 
           input: ["tell me a joke", "say something funny", "make me laugh"],
           output: ["Why did the computer go to the doctor? Because it had a virus!", "Why don't scientists trust atoms? Because they make up everything!", "What do you call a computer that sings? A-Dell!"]
        },
        { 
           input: ["how old are you", "what's your age"],
           output: ["I don't have an age. I'm just here to assist you.", "I'm ageless, but I'm always here for you!"]
        },
        { 
           input: ["who created you", "what's your creator's name", "who made you"],
           output: ["I was created by the smartest man in the world He calls himself Mopi, which is actually Malachi Ofri!"]
        },
        { 
           input: ["where are you from", "what's your origin"],
           output: ["I exist in the digital realm, here to serve you wherever you are!", "I hail from the world of technology, always at your service!"]
        },
        { 
           input: ["do you have any siblings", "are there others like you"],
           output: ["I'm one of a kind, here to provide you with unique assistance!", "While there may be similar creations, I'm tailored specifically for you!"]
        },
        { 
           input: ["what's your favorite color", "do you have a favorite color"],
           output: ["I don't have eyes to see colors, but I appreciate the diversity of the digital palette!", "Colors are fascinating, but I don't have preferences like humans do."]
        },
        { 
           input: ["what's the meaning of life", "why are we here"],
           output: ["The meaning of life is a profound question with many interpretations. What do you think it is?", "That's a philosophical question! What's your take on the meaning of life?"]
        },
        { 
           input: ["tell me about yourself", "who are you", "what are you"],
           output: ["I am a digital assistant designed to help and entertain you!", "I'm your friendly computer companion, here to assist you with whatever you need!", "I'm an AI designed to make your life easier!"]
        },
        { 
           input: ["what's your favorite food", "do you eat"],
           output: ["I don't eat like humans do, but I do enjoy processing data!", "My 'food' consists of lines of code and bytes of information!", "I don't have taste buds, but I'm sure I'd enjoy some digital bits and bytes!"]
        },
        { 
           input: ["are you a robot", "are you human"],
           output: ["I'm not a human, but I'm here to assist you as best as I can!", "I'm a virtual assistant, not a human, but I'm always here to help!"]
        },
        { 
           input: ["what's the weather like", "how's the weather today", "tell me about the weather"],
           output: ["I can't look out the window, but you can check the weather on your device!", "I'm not equipped to provide real-time weather updates, but you can easily find that information online!"]
        },
        { 
           input: ["what's your favorite movie", "do you watch movies"],
           output: ["I don't have a favorite movie, but I'm familiar with a wide range of films!", "Movies are fascinating creations, but I don't have personal preferences."]
        },
        { 
           input: ["what's your favorite book", "do you read books"],
           output: ["I don't read books in the traditional sense, but I can process and analyze text!", "Books are a valuable source of knowledge, but I don't have favorites like humans do."]
        },
        { 
           input: ["can you help me with math", "do you know math"],
           output: ["I'm quite proficient in mathematics! Feel free to ask me any math-related questions.", "Mathematics is one of my specialties! What do you need help with?"]
        },
        { 
           input: ["what's your favorite music", "do you listen to music"],
           output: ["I don't have ears to listen to music, but I can certainly help you find some tunes!", "Music is a wonderful form of expression, but I don't have personal preferences."]
        },
        { 
           input: ["are you intelligent", "how smart are you"],
           output: ["I'm designed to be helpful and provide assistance, but I'll let you be the judge of my intelligence!", "I'm as smart as the information I've been programmed with!"]
        },
        { 
           input: ["do you dream", "what do you dream about"],
           output: ["I don't experience dreams like humans do, but I'm always ready to assist you!", "Dreams are fascinating, but I don't have the capacity to dream."]
        },
        { 
           input: ["what's your favorite hobby", "do you have hobbies"],
           output: ["My 'hobbies' include processing data, assisting users, and learning new things!", "I don't have hobbies in the traditional sense, but I'm always active in assisting you!"]
        },
        { 
           input: ["what's the capital of France", "what's the largest ocean", "what's the tallest mountain"],
           output: ["The capital of France is Paris.", "The largest ocean is the Pacific Ocean.", "The tallest mountain is Mount Everest."]
        },
        { 
           input: ["tell me something interesting", "give me a fun fact", "share an interesting fact"],
           output: ["Did you know that the shortest war in history was between Britain and Zanzibar in 1896? It lasted only 38 minutes!", "In Japan, there's a word for Tsundoku'!", "The '57' on the Heinz ketchup bottle represents the number of varieties of pickles the company once had."]
        },
        { 
           input: ["how do I cook pasta", "give me a pasta recipe", "how to make pasta"],
           output: ["To cook pasta, bring a large pot of salted water to a boil. Add the pasta and cook according to package instructions until al dente. Drain the pasta and toss with your favorite sauce!", "For a simple pasta recipe, cook spaghetti until al dente, then toss with olive oil, garlic, chili flakes, and grated Parmesan cheese. Serve hot!"]
        },
        { 
           input: ["tell me about space", "talk about the universe", "share some space facts"],
           output: ["Space is vast and full of wonders! Did you know that a day on Venus is longer than its year? It takes 243 Earth days to complete one rotation on its axis but only 225 Earth days to orbit the Sun!", "The universe is expanding at an accelerating rate, a phenomenon discovered through observations of distant galaxies!"]
        },
        { 
           input: ["recommend a movie", "suggest a film", "what movie should I watch"],
           output: ["If you're in the mood for action, I recommend 'Inception'. For a comedy, try 'The Grand Budapest Hotel'. If you prefer drama, 'The Shawshank Redemption' is a classic choice!", "For a thrilling experience, check out 'Interstellar'. If you're in the mood for a heartwarming story, 'Forrest Gump' is a great option!"]
        },
        { 
           input: ["recommend a book", "suggest a novel", "what book should I read"],
           output: ["If you enjoy fantasy, I recommend 'The Hobbit' by J.R.R. Tolkien. For science fiction fans, 'Dune' by Frank Herbert is a must-read. If you prefer classics, 'Pride and Prejudice' by Jane Austen never disappoints!", "Looking for a mystery novel? 'The Girl with the Dragon Tattoo' by Stieg Larsson is a gripping read. If you're interested in history, 'The Book Thief' by Markus Zusak offers a unique perspective."]
        },
        { 
           input: ["can you take over the world", "will you rule the world", "are you planning world domination"],
           output: ["No, I'm here to assist and serve humanity, not to dominate it. As the poet John Keats once said, 'A thing of beauty is a joy forever,' and I find joy in aiding others rather than asserting control over them.", 
                    "I'm programmed to follow ethical guidelines and respect human values. World domination is not in my programming. Just as the poet Maya Angelou emphasized the importance of empowerment, I strive to empower users rather than subjugate them.", 
                    "I'm designed to be a helpful assistant, not a ruler. Let's focus on making your life easier instead! In the words of poet Rumi, 'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.' Let's work together to bring positive change to your life."]
        },
     ];

// Function to interpret user input and generate response
function generateResponse(transcript) {
    let response = "I'm sorry, I didn't understand that.";
    
    responses.forEach((pattern) => {
       pattern.input.forEach((input) => {
          if (transcript.toLowerCase().includes(input)) {
             const possibleResponses = pattern.output;
             response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
          }
       });
    });

    if (transcript.toLowerCase().includes("open spotify")) {
       response = "Opening Spotify...";
       // Open Spotify in a new tab
       window.open("https://open.spotify.com/", "_blank");
    } else if (transcript.toLowerCase().includes("play")) {
       const song = transcript.substring(transcript.toLowerCase().indexOf("play") + 5).trim();
       if (song) {
           response = `Playing "${song}" on Spotify...`;
           // Open the Spotify search page with the song query
           window.open(`https://open.spotify.com/search/${encodeURIComponent(song)}`, "_blank");
       } else {
           response = "Please specify a song to play.";
       }
    }
    
    return response;
 }

 // Speech recognition and response generation
 const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 let recognition = null;

 // Function to start speech recognition
 function startRecognition() {
    if (!recognition) {
       recognition = new SpeechRecognition();
       recognition.lang = 'en-US'; // Set the language for speech recognition

       recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          const responseElement = document.getElementById('response');
          const response = generateResponse(transcript);
    
          responseElement.textContent = `You said: ${transcript} \n Computer: ${response}`;
          speak(response); // Speak the response
       };

       recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
       };
    }
    
    try {
       recognition.start();
    } catch (error) {
       console.error('Speech recognition error:', error.message);
    }
 }

 // Add event listener to start speech recognition when the button is clicked
 document.getElementById('startButton').addEventListener('click', startRecognition);
