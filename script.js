// List of images with their correct labels (grouped by label)
const imagesData = [
    { label: '600i', paths: ['images/600i1.webp', 'images/600i2.webp', 'images/600i3.webp'], hint: 'A luxury exploration ship' }, 
    { label: 'Defender', paths: ['images/Defender1.webp', 'images/Defender2.webp', 'images/Defender3.webp', 'images/Defender4.webp'], hint: '2-seat light xeno fighter.' },
    { label: 'Starfarer', paths: ['images/farer1.webp', 'images/farer2.webp', 'images/farer3.webp'], hint: 'Premier refuelling vessel of UEE.' },
    { label: 'Starlancer MAX', paths: ['images/lancer.webp'], hint: '224 SCU of cargo.' },
    { label: 'Mercury', paths: ['images/Mercury1.webp', 'images/Mercury2.webp', 'images/Mercury3.webp', 'images/Mercury4.webp'], hint: '114 SCU and more' },
    { label: 'Spirit', paths: ['images/Spirit1.webp', 'images/Spirit2.webp'], hint: 'Comes in 3 varieties for all needs.' },
    { label: 'Hercules', paths: ['images/Hercules.webp', 'images/Hercules2.webp', 'images/Hercules3.webp'], hint: 'Comes in 3 varieties for all needs.' },
	{ label: 'Constellation', paths: ['images/Constellation.webp', 'images/Constellation2.webp', 'images/Constellation3.webp'], hint: 'A classic medium vessel in the verse.' },
	{ label: '300i', paths: ['images/300.webp', 'images/3002.webp'], hint: 'Single seater with an array of options.' },
	{ label: 'Buccaneer', paths: ['images/Buccaneer.webp', 'images/Buccaneer2.webp'], hint: 'Scrappy light fighter.' },
	{ label: 'Cutlass', paths: ['images/Cutlass.webp', 'images/Cutlass2.webp'], hint: '4 variants of this hull exist.' },
	{ label: 'F7C Lightning', paths: ['images/F7CLightning.webp', 'images/F7CLightning2.webp'], hint: 'Premier space superiority fighter of the UEE' },
	{ label: 'Hurricane', paths: ['images/Hurricane.webp', 'images/Hurricane2.webp', 'images/Hurricane3.webp'], hint: 'Heavy fighter that punches above its weight class.' },
	{ label: 'Redeemer', paths: ['images/Redeemer.webp'], hint: 'Gunship that can deliver armed soldiers' },
	{ label: 'Polaris', paths: ['images/Polaris.webp', 'images/Polaris2.webp', 'images/Polaris3.webp'], hint: 'Designed for use as both a naval patrol ship and to serve as the flagship of civilian militia operations.' },
	{ label: 'Scorpius', paths: ['images/Scorpius.webp', 'images/Scorpius2.webp', 'images/Scorpius3.webp', 'images/Scorpius4.webp'], hint: 'Heavy fighter that punches above its weight class.' },
	{ label: 'Scythe', paths: ['images/Scythe.webp', 'images/Scythe2.webp'], hint: 'A common target for every human pilot.' },
	{ label: 'Vanguard', paths: ['images/Vanguard.webp', 'images/Vanguard2.webp', 'images/Vanguard3.webp'], hint: 'Long range deep space heavy fighter.' },
	{ label: 'Intrepid', paths: ['images/Intrepid.webp', 'images/Intrepid2.webp', 'images/Intrepid3.webp', 'images/Intrepid4.webp', 'images/Intrepid5.webp'], hint: '8 SCU of cargo' },
	{ label: 'Gladiator', paths: ['images/Gladiator.webp', 'images/Gladiator2.webp'], hint: 'Older UEE bomber design' },
	{ label: 'Caterpillar', paths: ['images/caterpillar.webp', 'images/caterpillar2.webp', 'images/caterpillar3.webp'], hint: '576 SCU' },
	{ label: 'Glaive', paths: ['images/Glaive.webp', 'images/Glaive2.webp', 'images/Glaive3.webp', 'images/Glaive4.webp'], hint: 'Flown by more experienced enemies of humanity.' },
	{ label: 'Blade', paths: ['images/blade.webp', 'images/blade2.webp', 'images/blade3.webp', 'images/blade4.webp'], hint: 'Often used as scouts and first wave assault crafts.' },
	{ label: 'Hammerhead', paths: ['images/HH.webp', 'images/HH2.webp'], hint: 'Sub-capital patrol gunship' },
	{ label: 'Hornet', paths: ['images/Hornet.webp', 'images/Hornet2.webp', 'images/Hornet3.webp'], hint: 'Classic carrier-based fighter of the UEE' },
	{ label: 'Pisces', paths: ['images/Pisces.webp', 'images/Pisces2.webp'], hint: 'Small scout ship to accompany its bigger partner' },
	{ label: 'Arrow', paths: ['images/Arrow.webp', 'images/Arrow2.webp', 'images/Arrow3.webp', 'images/Arrow4.webp', 'images/Arrow5.webp'], hint: 'Highly manoeuvrable modern light fighter' },
	{ label: 'Prowler', paths: ['images/prowler.webp', 'images/prowler2.webp', 'images/prowler3.webp'], hint: 'Modernised version of an infamous armoured personnel carrier' },
	{ label: '100i', paths: ['images/100i.webp', 'images/100i2.webp', 'images/100i3.webp', 'images/100i4.webp'], hint: 'Entry level ship with attention to comfort' },
	{ label: 'Fury', paths: ['images/Fury.webp', 'images/Fury2.webp', 'images/Fury3.webp'], hint: 'Well armed snub fighter' },
	{ label: 'Mole', paths: ['images/Mole.webp', 'images/Mole2.webp', 'images/Mole3.webp', 'images/Mole4.webp'], hint: 'Medium mining vessel' },
	{ label: 'Firebird', paths: ['images/Firebird.webp', 'images/Firebird2.webp', 'images/Firebird3.webp', 'images/Firebird4.webp'], hint: 'Missiles' },
	{ label: 'Retaliator', paths: ['images/Retaliator.webp', 'images/Retaliator2.webp', 'images/Retaliator3.webp', 'images/Retaliator4.webp'], hint: 'UEEs answer to large enemy vessel.' },
	{ label: 'Reliant', paths: ['images/Reliant.webp', 'images/Reliant2.webp', 'images/Reliant3.webp', 'images/Reliant4.webp'], hint: 'Combining human and Xian design.' },
	{ label: 'Gladius', paths: ['images/Gladius.webp', 'images/Gladius2.webp', 'images/Gladius3.webp', 'images/Gladius4.webp'], hint: 'A classic light fighter for an upcoming pilot.' },
	{ label: 'Khartu-al', paths: ['images/Khartu.webp', 'images/Khartu2.webp', 'images/Khartu3.webp', 'images/Khartu4.webp', 'images/Khartu5.webp', 'images/Khartu6.webp'], hint: 'Fast scout fighter.' },
	{ label: 'Terrapin', paths: ['images/Terrapin.webp', 'images/Terrapin2.webp', 'images/Terrapin3.webp', 'images/Terrapin4.webp', 'images/Terrapin5.webp'], hint: 'Armoured scout ship.' },
	{ label: 'Santok.yai', paths: ['images/SanTokYai.webp', 'images/SanTokYai2.webp', 'images/SanTokYai3.webp'], hint: 'Medium fighter made for human pilots.' },
	{ label: 'Ares', paths: ['images/Ares.webp', 'images/Ares2.webp', 'images/Ares3.webp', 'images/Ares4.webp'], hint: 'Twin fighters made to bring down larger vessels.' },
	{ label: 'Hawk', paths: ['images/Hawk.webp', 'images/Hawk2.webp', 'images/Hawk3.webp', 'images/Hawk4.webp', 'images/Hawk5.webp'], hint: 'Single seater with space for a guest.' },
	{ label: 'Carrack', paths: ['images/Carrack.webp', 'images/Carrack2.webp', 'images/Carrack3.webp', 'images/Carrack4.webp'], hint: 'A coveted exploration vessel.' },
	{ label: 'Corsair', paths: ['images/Corsair.webp', 'images/Corsair2.webp', 'images/Corsair3.webp', 'images/Corsair4.webp'], hint: 'Officially made to explore.' },
	{ label: 'Eclipse', paths: ['images/Eclipse.webp', 'images/Eclipse2.webp', 'images/Eclipse3.webp'], hint: 'Stealth' },
	{ label: 'Mustang', paths: ['images/Mustang.webp', 'images/Mustang2.webp', 'images/Mustang3.webp'], hint: 'Comes in 5 variants.' },
	{ label: 'MPUV', paths: ['images/MPUV.webp', 'images/MPUV2.webp', 'images/MPUV3.webp', 'images/MPUV4.webp'], hint: 'Workhorse of the UEE.' },
	{ label: 'Vulture', paths: ['images/Vulture.webp', 'images/Vulture2.webp', 'images/Vulture3.webp', 'images/Vulture4.webp'], hint: 'Single seater profession starter.' },
	{ label: '85x', paths: ['images/85x.webp', 'images/85x2.webp', 'images/85x3.webp', 'images/85x4.webp'], hint: 'Racer' },
	{ label: 'Aurora', paths: ['images/Aurora.webp', 'images/Aurora2.webp', 'images/Aurora3.webp'], hint: 'Enabling citizens everywhere to reach the stars.' },
	{ label: 'Mantis', paths: ['images/Mantis.webp', 'images/Mantis2.webp'], hint: 'Law enforcement.' },
	{ label: 'Nomad', paths: ['images/Nomad.webp', 'images/Nomad2.webp', 'images/Nomad3.webp'], hint: 'Competent starter cargo hauler' },
	{ label: 'RAFT', paths: ['images/RAFT.webp', 'images/RAFT2.webp', 'images/RAFT3.webp', 'images/RAFT4.webp', 'images/RAFT5.webp'], hint: '96 SCU of easy access cargo' },
	{ label: 'Valkyrie', paths: ['images/Valkyrie.webp', 'images/Valkyrie2.webp', 'images/Valkyrie3.webp', 'images/Valkyrie4.webp', 'images/Valkyrie5.webp'], hint: 'Well armed troop transport.' },
	{ label: 'm50', paths: ['images/m50.webp', 'images/m502.webp', 'images/m503.webp'], hint: 'A luxury exploration ship from Origin.' },
	{ label: 'Prospector', paths: ['images/Prospector.webp', 'images/Prospector2.webp', 'images/Prospector3.webp', 'images/Prospector4.webp'], hint: 'Starter profession ship' },
	{ label: 'Zeus', paths: ['images/Zeus.webp', 'images/Zeus2.webp', 'images/Zeus3.webp'], hint: 'Reinvention of a spacefaring classic' },
	{ label: 'Hull A', paths: ['images/HULLA.webp', 'images/HULLA2.webp', 'images/HULLA3.webp'], hint: '64 SCU of easy access cargo' },
	{ label: '400i', paths: ['images/400i.webp', 'images/400i2.webp', 'images/400i3.webp'], hint: 'Medium ship focusing on comfort' },
	{ label: 'Guardian', paths: ['images/Guardian.webp', 'images/Guardian2.webp', 'images/Guardian3.webp', 'images/Guardian4.webp'], hint: 'Heavy fighter meant to hunt bigger vessels.' },
	{ label: 'SRV', paths: ['images/SRV.webp', 'images/SRV2.webp', 'images/SRV3.webp', 'images/SRV4.webp'], hint: 'A welcome sight for a stranded crew.' },
	{ label: 'Freelancer DUR', paths: ['images/FreelancerDUR.webp', 'images/FreelancerDUR2.webp', 'images/FreelancerDUR3.webp', 'images/FreelancerDUR4.webp'], hint: 'Deepspace explorer.' },
	{ label: 'Freelancer MAX', paths: ['images/FreelancerMAX.webp', 'images/FreelancerMAX2.webp', 'images/FreelancerMAX3.webp', 'images/FreelancerMAX4.webp'], hint: '120 SCU' },
	{ label: 'Hull C', paths: ['images/HullC.webp', 'images/HullC2.webp', 'images/HullC3.webp', 'images/HullC4.webp', 'images/HullC5.webp'], hint: 'Workhorse of the empire.' },
	{ label: 'Merlin', paths: ['images/Merlin.webp', 'images/Merlin2.webp', 'images/Merlin3.webp'], hint: 'Snub craft' },
	{ label: 'Talon', paths: ['images/Talon.webp', 'images/Talon2.webp', 'images/Talon3.webp'], hint: 'Light figter' }
	
];

// Flatten the `imagesData` into individual image objects (to use in the quiz)
const images = imagesData.flatMap(group =>
    group.paths.map(path => ({ src: path, label: group.label }))
);

// Store the last 5 images that have been used
let recentlyUsedImages = [];

// Function to shuffle an array (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to generate a question
function generateQuestion() {
    let questionImage;

    // Ensure the image chosen hasn't been recently used
    do {
        shuffleArray(images); // Shuffle the images for randomness
        questionImage = images[0];
    } while (recentlyUsedImages.includes(questionImage.src)); // Ensure no repetition

    // Update recently used images
    recentlyUsedImages.push(questionImage.src);
    if (recentlyUsedImages.length > 5) {
        recentlyUsedImages.shift(); // Keep the array within the limit
    }

    const correctLabel = questionImage.label;
    const hint = imagesData.find(group => group.label === correctLabel).hint;

    return {
        questionImage,
        correctLabel,
        hint // Add hint to the question object
    };
}

let currentQuestion;
const quizContainer = document.getElementById('quiz-container');
const feedback = document.getElementById('feedback');
const quizImage = document.getElementById('quiz-image');
const inputContainer = document.getElementById('input-container');
const submitButton = document.getElementById('submit-button');
const userInput = document.getElementById('user-input');

// Enable "Enter" key to trigger the submit button
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('submit-button').click();
    }
});

// Function to load a new question
function loadQuestion() {
    feedback.textContent = ''; // Clear feedback
    hint.style.display = 'none'; // Hide hint initially
    hint.textContent = ''; // Clear hint text

    currentQuestion = generateQuestion();

    quizImage.src = currentQuestion.questionImage.src;
    userInput.value = ''; // Clear input field
    userInput.focus(); // Focus input field
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = userInput.value.trim(); // Get the user's input and trim extra spaces
    if (userAnswer.toLowerCase() === currentQuestion.label.toLowerCase()) {
        // Correct answer
        feedback.textContent = 'Chris blesses your voyages!';
        feedback.style.color = 'green';

        // After 1.5 seconds, load the next question
        setTimeout(loadQuestion, 1500);
    } else {
        // Incorrect answer
        feedback.textContent = `Incorrect - Chris frowns upon you. The correct answer is "${currentQuestion.label}"`;
        feedback.style.color = 'red';

        // After 1.5 seconds, load the next question
        setTimeout(loadQuestion, 1500);
    }
}

/// Add event listener to the submit button
submitButton.addEventListener('click', () => {
    console.log('Submit button clicked'); // Debug log
    checkAnswer();
});

// Add event listener for Enter key
userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed'); // Debug log
        event.preventDefault(); // Prevent default behavior
        checkAnswer(); // Call the checkAnswer function
    }
});

// Function to check the answer
function checkAnswer() {
    console.log('checkAnswer called'); // Debug log
    const userAnswer = userInput.value.trim();
    if (userAnswer.toLowerCase() === currentQuestion.correctLabel.toLowerCase()) {
        feedback.textContent = 'Next voyage blessed by Chris'
        feedback.style.color = 'green';

        setTimeout(loadQuestion, 1500);
    } else {
        feedback.textContent = `Incorrect - Chris frowns upon you. The correct answer is "${currentQuestion.correctLabel}"`;
        feedback.style.color = 'red';

        setTimeout(loadQuestion, 1500);
    }
}

// Handle the "Show Hint" button click
document.getElementById('hint-button').onclick = () => {
    const hint = document.getElementById('hint');
    hint.textContent = currentQuestion.hint; // Display the hint for the current question
    hint.style.display = 'block'; // Make the hint visible
};

// Start the quiz
loadQuestion();
