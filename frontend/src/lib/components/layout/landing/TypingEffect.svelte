<script>
   import { onMount } from "svelte";

   // The words to type
   let words = ["Math", "Science", "English", "History"];

   // State variables
   let currentWordIndex = 0;
   let currentText = "";
   let isDeleting = false;

   let typeSpeed = 150;
   let deleteSpeed = 75;
   let delayBetweenWords = 2000;

   // Typing effect logic
   function type() {
      let currentWord = words[currentWordIndex];
      if (isDeleting) {
         currentText = currentWord.substring(0, currentText.length - 1);
      } else {
         currentText = currentWord.substring(0, currentText.length + 1);
      }

      if (!isDeleting && currentText === currentWord) {
         setTimeout(() => {
            isDeleting = true;
            type();
         }, delayBetweenWords);
         return;
      } else if (isDeleting && currentText === "") {
         isDeleting = false;
         currentWordIndex = (currentWordIndex + 1) % words.length;
      }

      setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
   }

   onMount(() => {
      type();
   });
</script>

<!-- Content -->
<span class="text-primary">{currentText}</span>
<span class="cursor bg-primary">&nbsp;</span>

<style>
   .cursor {
      display: inline-block;
      margin-left: -10px;
      width: 3px;
      animation: blink 1s step-end infinite;
   }

   @keyframes blink {
      50% {
         background-color: transparent;
      }
   }
</style>
