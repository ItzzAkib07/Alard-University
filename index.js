// Function to parse UTM parameters from the URL
function getUTMParameters() {
  const params = new URLSearchParams(window.location.search);
  const utmParams = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
    if (params.has(param)) {
      utmParams[param] = params.get(param);
    }
  });
  console.log('Parsed UTM Parameters:', utmParams); // Debugging log
  return utmParams;
}

// Store UTM parameters in localStorage
function storeUTMParameters() {
  try {
    const utmParams = getUTMParameters();
    if (Object.keys(utmParams).length > 0) {
      localStorage.setItem('utmParams', JSON.stringify(utmParams));
      console.log('UTM Parameters stored in localStorage.');
    }
  } catch (error) {
    console.error('Error storing UTM parameters in localStorage:', error);
  }
}

// Populate UTM parameters into the form
function populateUTMParametersInForm() {
  try {
    const utmParams = JSON.parse(localStorage.getItem('utmParams') || '{}');
    const form = document.getElementById('lead-form');
    for (const [key, value] of Object.entries(utmParams)) {
      if (!form.querySelector(`input[name="${key}"]`)) {
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = key;
        hiddenInput.value = value;
        form.appendChild(hiddenInput);
      }
    }
  } catch (error) {
    console.error('Error populating UTM parameters in the form:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Store UTM parameters
  storeUTMParameters();

  // Populate UTM parameters into the form
  populateUTMParametersInForm();

  // Handle form submission
  const form = document.getElementById('lead-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Merge with UTM parameters
    const utmParams = JSON.parse(localStorage.getItem('utmParams') || '{}');
    const finalData = { ...data, ...utmParams };

    try {
      // Store in localStorage
      localStorage.setItem('formData', JSON.stringify(finalData));
      console.log('Form submitted successfully. Data:', finalData);

      // Display a confirmation or reset the form
      alert('Form submitted successfully!');
      form.reset();
    } catch (error) {
      console.error('Error storing form data in localStorage:', error);
      alert('There was an error saving the form data. Please try again.');
    }
  });

const scrollContainer = document.getElementById('scrollContainer');

// For desktop (wheel event)
scrollContainer.addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault(); // Prevent default vertical scroll
    scrollContainer.scrollBy({
      left: e.deltaY > 0 ? 100 : -100, // Scroll 100px left or right
      behavior: 'smooth'
    });
  }
});

// For mobile (touch events)
let startX;

scrollContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

scrollContainer.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const deltaX = startX - touch.clientX;

  scrollContainer.scrollBy({
    left: deltaX, // Scroll by the difference in X coordinates
    behavior: 'smooth'
  });

  startX = touch.clientX; // Update startX for continuous scrolling
});


  // Handle scroll tracker
  const scrollTracker = document.getElementById('scrollTracker');
  const totalWidth = scrollContainer.scrollWidth - window.innerWidth;
  scrollContainer.addEventListener('scroll', () => {
    const currentScroll = scrollContainer.scrollLeft;
    const scrollPercentage = (currentScroll / totalWidth) * 100;
    scrollTracker.style.width = `${scrollPercentage}%`;
  });
});


function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  // SVG for Down icon
  const downSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // SVG for Up icon
  const upSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    icon.innerHTML = upSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerHTML = downSVG;
  }
}

function toggleAccordion1(index) {
  const content = document.getElementById(`content1-${index}`);
  const icon = document.getElementById(`icon1-${index}`);

  // SVG for Down icon
  const downSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // SVG for Up icon
  const upSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    icon.innerHTML = upSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerHTML = downSVG;
  }
}

function toggleAccordion2(index) {
  const content = document.getElementById(`content2-${index}`);
  const icon = document.getElementById(`icon2-${index}`);

  // SVG for Down icon
  const downSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // SVG for Up icon
  const upSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    icon.innerHTML = upSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerHTML = downSVG;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video');
  const playButton = document.getElementById('play-button');

  playButton.addEventListener('click', () => {
    video.play();
    playButton.classList.add('opacity-0'); // Hide the play button with a fade effect
  });

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.classList.add('opacity-0');
    } else {
      video.pause();
      playButton.classList.remove('opacity-0'); // Show the play button again
    }
  });

  video.addEventListener('ended', () => {
    playButton.classList.remove('opacity-0'); // Show the play button when video ends
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const selects = document.querySelectorAll('.choices');
  selects.forEach(select => {
    new Choices(select, {
      searchEnabled: true,
      itemSelectText: '',
    });
  });
});




function openModalBtn(){
  document.getElementById("leadModal").style.display = "flex";
}

// Close the modal when the close button (×) is clicked
function closeModalBtn() {
  document.getElementById("leadModal").style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target === document.getElementById("leadModal")) {
      document.getElementById("leadModal").style.display = "none";
    }
}

