// Carregar Catálogo de Livros
function loadBookCatalog() {
    const bookList = document.getElementById("bookList");
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book-item";
        
        const textDiv = document.createElement("div");
        textDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>Sinopse: ${book.synopsis}</p>
        `;
        
        const img = document.createElement("img");
        img.src = `${book.image}`;
        img.alt = `${book.title}`;
        img.style.width = "100px";
        img.style.height = "150px";
        
        bookDiv.appendChild(img);
        bookDiv.appendChild(textDiv);
        bookList.appendChild(bookDiv);
    });
}

// Carregar Próximas Palestras
function loadUpcomingPresentations() {
    const presentationList = document.getElementById("presentationList");
    presentations.forEach(presentation => {
        const listItem = document.createElement("li");
        listItem.textContent = presentation;
        presentationList.appendChild(listItem);
    });
}

// Carregar FAQs
function loadFAQs() {
    const faqList = document.getElementById("faqList");
    faqs.forEach(faq => {
        const faqDiv = document.createElement("div");
        const questionButton = document.createElement("button");
        const answerDiv = document.createElement("div");
        
        questionButton.textContent = faq.question;
        answerDiv.textContent = faq.answer;
        answerDiv.style.display = "none";
        
        questionButton.addEventListener("click", () => {
            answerDiv.style.display = answerDiv.style.display === "none" ? "block" : "none";
        });
        
        faqDiv.appendChild(questionButton);
        faqDiv.appendChild(answerDiv);
        faqList.appendChild(faqDiv);
    });
}

// Evento de pesquisa no Catálogo de Livros
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase();
        const bookList = document.getElementById("bookList");
        bookList.innerHTML = "";
        
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
        filteredBooks.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.className = "book-item";
            
            const textDiv = document.createElement("div");
            textDiv.innerHTML = `
                <h3>${book.title}</h3>
                <p>Autor: ${book.author}</p>
                <p>Sinopse: ${book.synopsis}</p>
            `;
            
            const img = document.createElement("img");
            img.src = `${book.image}`;
            img.alt = `${book.title}`;
            img.style.width = "100px";
            img.style.height = "150px";
            
            bookDiv.appendChild(img);
            bookDiv.appendChild(textDiv);
            bookList.appendChild(bookDiv);
        });
    });
}

// Carregar Depoimentos
function loadTestimonials() {
    const testimonialsList = document.getElementById("testimonials-list");  // Altere esta linha
    if (testimonialsList) {
        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.className = "testimonial-item";
            
            testimonialDiv.innerHTML = `
                <h3>${testimonial.name}</h3>
                <p>"${testimonial.testimonial}"</p>
                <p><small>${testimonial.date}</small></p>
            `;
            
            testimonialsList.appendChild(testimonialDiv);
        });
    }
}


// Carregamento inicial
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("bookList")) {
        loadBookCatalog();
    }
    if (document.getElementById("presentationList")) {
        loadUpcomingPresentations();
    }
    if (document.getElementById("faqList")) {
        loadFAQs();
    }
    if (document.getElementById("testimonials-list")) {
        loadTestimonials();
    }
});

