// Toggle the visibility of the lessons section
function toggleLessonsSection() {
    const lessonsSection = document.getElementById('lessons');
    lessonsSection.classList.toggle('hidden');
  }
  
  // Add an event listener to the courses section to toggle the lessons section when a course is clicked
  document.getElementById('courses').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      toggleLessonsSection();
    }
  });