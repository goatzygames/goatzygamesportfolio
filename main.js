document.addEventListener('DOMContentLoaded', () => {
  // Existing code for active link
  const navLinks = document.querySelectorAll('.primary-nav .nav-list a');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Existing contact form code
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      status.textContent = 'Sending...';
      setTimeout(() => {
        status.textContent = 'Message sent! I will get back to you soon.';
        form.reset();
      }, 1000);
    });
  }

  // NEW: nav toggle code
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.site-header');

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');

if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}



const bounceBtn = document.querySelector('.bounce-btn');

if (bounceBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      bounceBtn.classList.add('hidden');
    } else {
      bounceBtn.classList.remove('hidden');
    }
  });
}

  
 // First scroll stuff
let firstScrollDone = false;
const target = document.getElementById('aboutMeScroll');

function handleFirstScroll(e) {
  if (firstScrollDone) return;

  // Stop default scroll behaviour
  e.preventDefault();

  firstScrollDone = true;

  // Smooth scroll to target
  target.scrollIntoView({ behavior: 'smooth' });

  // Remove listeners after first trigger
  window.removeEventListener('wheel', handleFirstScroll, false);
  window.removeEventListener('touchstart', handleFirstScroll, false);
}

// Listen for the *intention* to scroll
window.addEventListener('wheel', handleFirstScroll, { passive: false });
window.addEventListener('touchstart', handleFirstScroll, { passive: false });

	
document.addEventListener("DOMContentLoaded", () => {

//Projects Array
window.projects = [
  {
    name: "Flappy VHS",
    tags: ["flappy bird", "arcade", "vhs", "1", "day", "project"],
    date: "2025-08-13",
    type: "game dev",
    price: 0,
    description: "Flappy VHS is an 1 Day Project which I singlehandedly with some assets and textures borrowed from sketchfab and google made, just to show what I can make in a single day. I do not plan to really continue this.",
    videoUrl: "https://www.youtube.com/embed/xMnPQxotlio",
    images: [
      "/pics/flappyvhs-image1.png",
      "/pics/flappyvhs-image2.png",
      "/pics/flappyvhs-image3.png"
    ],
	downloadUrl: "https://drive.google.com/file/d/1O5K4_76QB5_tsD1SdasyLQnY-DndHd3x/view?usp=sharing"
  },
  {
    name: "Portfolio Website",
    tags: ["web dev", "portfolio"],
    date: "2025-08-15",
    type: "web dev",
    price: 0,
    description: "This is the website you're currently on, this is my proudest web development work yet.",
    videoUrl: "",
    images: ["/pics/goatzy.games-image1.png"],
	downloadUrl: "https://www.goatzy.games"
  },
  {
    name: "The Last Customer",
    tags: ["the", "last", "customer", "horror"],
    date: "2024-10-25",
    type: "game dev",
    price: 5,
    description: "The Last Customer is a survival horror game where you play as a gas station clerk facing nightmarish creatures disguised as customers. Make quick decisions, manage resources, and uncover dark secrets to survive. Test your instincts and unravel the mystery before it's too late.<br><br>This also is my first big project ever, so I am not saying this is my proudest work ever, but it really helped me learn game dev more as it has a lot of different mechanics I think no one has yet discovered. ",
    videoUrl: "https://www.youtube.com/embed/m9KdQ1deXlo",
    images: [
      "/pics/thelastcustomer-image1.jpg",
      "/pics/thelastcustomer-image2.jpg",
	  "/pics/thelastcustomer-image3.jpg"
    ],
	downloadUrl: "https://store.steampowered.com/app/3249630/The_Last_Customer"
  },
  {
    name: "+1 Speed Per Second",
    tags: ["plus", "one", "speed", "second"],
    date: "2025-01-13",
    type: "game dev",
    price: 0,
    description: "<em>+1 Speed Per Second</em> is a scrap project I made earlier this year as a scrap project just to try making different mechanisms to replicate a <em>ROBLOX</em> game which is somewhat similar to what I made.",
    videoUrl: "",
    images: [
      "/pics/plusonesps-image1.png",
      "/pics/plusonesps-image2.png",
	  "/pics/plusonesps-image3.png"
    ],
	downloadUrl: "/contact"
  },
  {
    name: "Invert Nest",
    tags: ["invert", "nest"],
    date: "2025-07-09",
    type: "web dev",
    price: 0,
    description: "A web development project I made mainly for fun to try to create this cool local marketplace for my area for selling animal supplies, and as the name suggests, mainly pet invertebrate supplies. It really didn't caught on as well as I expected honestly. The website is <strong>not</strong> being maintained and does not work at the moment. ",
    videoUrl: "",
    images: [
      "/pics/invertnest-image1.png",
      "/pics/invertnest-image2.png",
	  "/pics/invertnest-image3.png"
    ],
	downloadUrl: "https://invertnest.eu"
  }
]});
//Projects Array End

function renderProjects(list) {
  const container = document.getElementById("projectList");
  container.innerHTML = "";

  list.forEach(project => {
    const el = document.createElement("div");
    el.className = "project";

    // Get the first image if available
    let firstImageHTML = "";
    if (project.images && project.images.length > 0) {
      firstImageHTML = `
        <div class="project-image">
          <img src="${project.images[0]}" alt="${project.name}" />
        </div>
      `;
    }

    el.innerHTML = `
      ${firstImageHTML}
      <h2>${project.name}</h2>
      <p><strong>Type:</strong> ${project.type}</p>
      <p><strong>Date:</strong> ${project.date}</p>
      <p><strong>${project.price}€</strong></p>
      <p><strong>Tags:</strong> ${project.tags.join(", ")}</p>
    `;

    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      // Redirect to project.html with name as a URL parameter
      window.location.href = `/project?id=${encodeURIComponent(project.name)}`;
    });

    container.appendChild(el);
  });
}


function filterAndSort() {
  const searchElem = document.getElementById("search");
  const filterElem = document.getElementById("filterType");
  const sortElem = document.getElementById("sort");

  if (!searchElem || !filterElem || !sortElem) return;

  const searchValue = searchElem.value.toLowerCase();
  const filterValue = filterElem.value;
  const sortValue = sortElem.value;

  let filtered = projects.filter(p =>
    (p.name.toLowerCase().includes(searchValue) || 
     p.tags.some(tag => tag.toLowerCase().includes(searchValue))) &&
    (filterValue ? p.type === filterValue : true)
  );

  filtered.sort((a, b) => {
    switch (sortValue) {
      case "date-newest":
        return new Date(b.date) - new Date(a.date);
      case "date-oldest":
        return new Date(a.date) - new Date(b.date);
      case "price-lowest":
        return a.price - b.price;
      case "price-highest":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  renderProjects(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("search");
  const filterType = document.getElementById("filterType");
  const sort = document.getElementById("sort");

  if (search) search.addEventListener("input", filterAndSort);
  if (filterType) filterType.addEventListener("change", filterAndSort);
  if (sort) sort.addEventListener("change", filterAndSort);

  // Run immediately after DOM is ready
  filterAndSort();
});
