document.addEventListener("DOMContentLoaded", () => {
    // Flashcards with questions, answers, and images
    const flashcards = [
      { question: "What is the capital of France?", answer: "Paris", image: "https://fastwaytours.com/wp-content/uploads/2023/10/paris-1.jpg" },
      { question: "What is 2 + 2?", answer: "4", image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg" },
      { question: "What is the largest planet in our solar system?", answer: "Jupiter", image: "https://dq0hsqwjhea1.cloudfront.net/Solar-system-NASA_S.jpg" },
      { question: "Who wrote 'Hamlet'?", answer: "Shakespeare", image: "https://media.shakespeare.org.uk/images/Sarah_Bernhardt_as_Hamlet_Ade.6c0fd55a.fill-1200x600-c75.jpg" },
      { question: "What is the speed of light?", answer: "299,792 km/s", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYFFdoUdUFhkuWLAa4t3wyD0pDu1SoiEeEg&s" },
      { question: "What is the chemical symbol for water?", answer: "H2O", image: "https://www.freeiconspng.com/uploads/chemical-icon-png-20.png" },
      { question: "Who developed the theory of relativity?", answer: "Einstein", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwR3iNKkh3jnVFhJvxGP2IRrfeELKj40VaVg&s" },
      { question: "What is the atomic number of oxygen?", answer: "8", image: "https://cdn1.byjus.com/wp-content/uploads/2018/07/Notation-of-Atom-700x268.png" },
      { question: "What is the currency of Japan?", answer: "Yen", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Reserve_currencies_symbols_4.svg" },
      { question: "What is the largest mammal?", answer: "Blue whale", image: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/discovering-mammals-870x494.jpg" }
    ];
  
    let currentIndex = 0;
    const totalCards = flashcards.length;
  
    // Elements
    const cardContent = document.getElementById("card-content");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
    const cardInfo = document.getElementById("card-info");
    const cardContainer = document.getElementById("card");
  
    // Display total cards and initial card
    cardInfo.textContent = `This is a set of flashcards. Total cards: ${totalCards}`;
    displayCard(flashcards[currentIndex]);
  
    // Helper function to get a random hex color
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Display a flashcard with its image and question
    function displayCard(card) {
      // Reset the card content
      cardContent.innerHTML = "";
      // Create and add the image element
      const img = document.createElement("img");
      img.src = card.image;
      img.classList.add("card-image");
      cardContent.appendChild(img);
  
      // Create and add the question text
      const questionText = document.createElement("p");
      questionText.textContent = card.question;
      cardContent.appendChild(questionText);
    }
  
    // Show answer when the card content is clicked (the answer is shown, but no color change here)
    cardContent.addEventListener("click", () => {
      cardContent.innerHTML = "";
      const answerText = document.createElement("p");
      answerText.textContent = flashcards[currentIndex].answer;
      cardContent.appendChild(answerText);
    });
  
    // When the Next button is clicked, update the card and change its background color.
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalCards;
      displayCard(flashcards[currentIndex]);
      // Change the card container's background color to a new random color.
      cardContainer.style.backgroundColor = getRandomColor();
    });
  
    // When the Previous button is clicked, update the card and change its background color.
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      displayCard(flashcards[currentIndex]);
      // Change the card container's background color to a new random color.
      cardContainer.style.backgroundColor = getRandomColor();
    });
  });
  