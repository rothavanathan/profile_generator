const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

// What's your name? Nicknames are also acceptable :)
rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  // TODO: Log the answer in a database
  console.log(`Nice to meet you, ${name}`);
  answers.name = name;
  // What's an activity you like doing?
  rl.question('What\'s an activity you like doing? ', (activity) => {
    // TODO: Log the answer in a database
    answers.activity = activity;
    // What do you listen to while doing that?
    rl.question('What do you listen to while doing that? ', (music) => {
      // TODO: Log the answer in a database
      answers.music = music;
      // Which meal is your favourite (eg: dinner, brunch, etc.)
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (faveMeal) => {
        // TODO: Log the answer in a database
        answers.faveMeal = faveMeal;
        // What's your favourite thing to eat for that meal?
        rl.question('What\'s your favourite thing to eat for that meal? ', (faveFood) => {
          // TODO: Log the answer in a database
          answers.faveFood = faveFood;
          // Which sport is your absolute favourite?
          rl.question('Which sport is your absolute favourite? ', (faveSport) => {
            // TODO: Log the answer in a database
            answers.faveSport = faveSport;
            // What is your superpower? In a few words, tell us what you are amazing at!
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              // TODO: Log the answer in a database
              answers.superpower = superpower;
              console.log(`Thanks for taking part. Here's your bio for your profile:`);
              console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.faveFood} for ${answers.faveMeal}, prefers ${answers.faveSport} over any other sport, and is amazing at ${answers.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});





