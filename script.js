// Email form
const f = document.getElementById('emailForm');
const i = document.getElementById('emailInput');
const m = document.getElementById('formMsg');

f.addEventListener('submit', e => {
  e.preventDefault();
  const email = i.value.trim();

  if (email === "") {
    m.textContent = "Email cannot be empty.";
    m.style.color = "crimson";
    return;
  }

  if (email.length < 6) {
    m.textContent = "Email is too short.";
    m.style.color = "crimson";
    return;
  }

  if (!email.includes("@")) {
    m.textContent = "Email must contain '@'.";
    m.style.color = "crimson";
    return;
  }

  if (!/\.(com|net|org|edu|gov)$/i.test(email)) {
    m.textContent = "Email must end with .com, .net, .org, .edu, or .gov.";
    m.style.color = "crimson";
    return;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    m.textContent = "Please enter a valid email address.";
    m.style.color = "crimson";
    return;
  }

  m.textContent = "Thanks! We'll contact you soon.";
  m.style.color = "green";
  f.reset();
});
const taskCards = document.querySelectorAll('.task-card');

taskCards.forEach(card => {
  card.addEventListener('click', () => {
    taskCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

 
