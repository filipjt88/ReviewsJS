// Arr users
let reviews = [
    {
        id: 1,
        name: "Andrea Ayew",
        job: "graphics designer",
        img: "img/person-1.jpeg",
        info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et consequatur, deleniti natus placeat veniam repellat est expedita, excepturi voluptatum laboriosam cumque sequi corporis quasi recusandae aliquid eligendi laudantium voluptatem, tempora enim odit ut sit dolores. Repellat sapiente ipsa iste."
    },
    {
        id: 2,
        name: "Anita Henry",
        job: "Web designer",
        img: "img/person-2.jpg",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque, voluptatem architecto, quos nemo doloribus voluptatibus dignissimos cum quis, debitis culpa minima soluta! Incidunt corporis officia obcaecati alias fugit ea exercitationem tempore. Earum consequuntur nemo eaque blanditiis, laborum quia corporis?"
    },
    {
        id: 3,
        name: "Anna Johnson",
        job: "fullstack developer",
        img: "img/person-3.jpg",
        info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis error corporis dolorum inventore veniam unde ipsam odit minima sequi laboriosam laborum corrupti illum, modi nihil rerum ratione tenetur cupiditate reprehenderit vel accusantium sapiente voluptatum doloremque deserunt. Porro, doloribus deleniti."
    },
    {
        id: 4,
        name: "Olive Anderson",
        job: "Web developer",
        img: "img/person-4.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut nisi rerum corrupti eum, dolorum adipisci ex nam nobis velit eveniet nemo quo ad modi sequi sed asperiores aliquam hic distinctio sint? Odit, culpa sit. Assumenda officiis labore in obcaecati vero molestiae at accusamus ut!"
    }
];


// Select items
const img      = document.querySelector("img");
const author = document.querySelector("#author");
const job      = document.querySelector("#job");
const info     = document.querySelector("#info");

const prevBtn     = document.querySelector(".prev-btn");
const nextBtn     = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// Set starting item

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',() => {
    showPerson();
});


// Show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.info;
}

// Show next person
nextBtn.addEventListener("click", () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// Show prev person
prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});


// Show random person
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});

