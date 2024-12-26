
  document.addEventListener("DOMContentLoaded", function() {
      // Find the image elements by their IDs
      let imageElement1 = document.getElementById("slideshowImage1");
      let imageElement2 = document.getElementById("slideshowImage2");
      let imageElement3 = document.getElementById("slideshowImage3");
      
      // Check if the image elements exist
      if (imageElement1 || imageElement2 || imageElement3) {
          // Set the image's src to your desired URL
          imageElement1.src = "https://images.squarespace-cdn.com/content/674b5e68873ca25dc3245f36/9a7c9551-9f0d-4db1-86d8-679d153b3b54/1.jpg?content-type=image%2Fjpeg";
          imageElement2.src = "https://images.squarespace-cdn.com/content/674b5e68873ca25dc3245f36/1a8be564-6f33-4b0c-a681-002a6b171af5/2.jpg?content-type=image%2Fjpeg";
          imageElement3.src = "https://images.squarespace-cdn.com/content/674b5e68873ca25dc3245f36/a68616e7-f76d-4282-94cf-a92183afc93c/3.jpg?content-type=image%2Fjpeg";
      } else {
          console.log("Image element not found.");
      }

      let slideIndex = 0;
      let slideTimeout;

      // Function to show the slides
      function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}  
          slides[slideIndex-1].style.display = "block";
          
          // Set the timeout for the next slide change
          slideTimeout = setTimeout(showSlides, 7000); // Change image every 7 seconds
      }

      // Start the slideshow initially
      showSlides();
    
  });