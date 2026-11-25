document.documentElement.classList.add('js')
document.getElementById('year').textContent = new Date().getFullYear()

// Project filters
const buttons = document.querySelectorAll('.filters button')
const projects = document.querySelectorAll('.project')
buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter
    buttons.forEach((b) => b.classList.toggle('on', b === btn))
    projects.forEach((p) => {
      p.hidden = f !== 'all' && !p.dataset.tags.split(' ').includes(f)
    })
  }),
)

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }),
  { threshold: 0.12 },
)
document.querySelectorAll('section, .project').forEach((el) => io.observe(el))
