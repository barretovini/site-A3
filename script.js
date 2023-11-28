const testimonials = [
    {
        id: 1,
        name: 'Celia Regina Arduim',
        testimonial: 'É um bom produto e um ótimo atendimento.',
        date: '10 de Outubro, 2023'
    },
    {
        id: 2,
        name: 'Lucenir B. Arantes',
        testimonial: 'Eu achei maravilhoso, continuem com o trabalho de vocês, ele é maravilhoso',
        date: '12 de Outubro, 2023'
    },
    {
        id: 3,
        name: 'Stefânia Nascimento',
        testimonial: 'Continue publicando seus livros …amooo!!!',
        date: '15 de Outubro, 2023'
    },
    {
        id: 4,
        name: 'Eidi Santos Cassas',
        testimonial: 'Excelente qualidade!',
        date: '15 de Outubro, 2023'
    },
    {
        id: 5,
        name: 'Airan Maria Mendonça dos Reis',
        testimonial: 'Ótimo, livros e as palestras maravilhosos',
        date: '15 de Outubro, 2023'
    }


];


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

// Supondo que 'testimonials' seja uma variável global ou esteja definida em algum lugar acessível

// Carregar Depoimentos
function loadTestimonials() {
    const carousel = document.getElementById('testimonialCarousel');
    if (carousel) {
        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.className = "carousel-item";

            testimonialDiv.innerHTML = `
                <h3>${testimonial.name}</h3>
                <p>"${testimonial.testimonial}"</p>
                <p><small>${testimonial.date}</small></p>
            `;

            carousel.appendChild(testimonialDiv);
        });

        startAutoTestimonialCarousel();
    }
}


function startAutoTestimonialCarousel() {
    const carousel = document.getElementById('testimonialCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    setInterval(() => {
        // Ocultar todos os itens
        items.forEach(item => {
            item.style.display = 'none';
        });

        // Exibir o item atual
        items[currentIndex].style.display = 'block';
        
        // Atualizar o índice para o próximo item
        currentIndex = (currentIndex + 1) % items.length;
    }, 5000); // 5000 milissegundos = 5 segundos
}


// Carregar Carrossel
function loadBookCarrossel() {
    const carrossel = document.getElementById("bookCarousel");

    // Defina os caminhos das suas imagens aqui
    const imagePaths = [
        'assets/images/Carousel01.jpg',
        'assets/images/Carousel02.jpg',
        'assets/images/Carousel03.jpg',
        'assets/images/Carousel04.jpg'
    ];

    imagePaths.forEach(path => {
        const slideDiv = document.createElement("div");
        slideDiv.className = "carousel-slide";

        const img = document.createElement("img");
        img.src = path;
        img.alt = "Carrossel Imagem";
        img.className = "carousel-image";

        slideDiv.appendChild(img);
        carrossel.appendChild(slideDiv);
    });

    // Inicia o carrossel automático
    startAutoCarousel();
}


function startAutoCarousel() {
    const carrossel = document.getElementById("bookCarousel");
    const slides = document.querySelectorAll("#bookCarousel .carousel-slide");
    let currentIndex = 0;

    setInterval(() => {
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        // Adiciona animação suave
        carrossel.style.transition = 'scroll-left 0.5s ease-in-out';
        carrossel.scrollLeft = slides[currentIndex].offsetLeft;

        currentIndex++;
    }, 3000); // Muda o slide a cada 3 segundos
}

window.onload = function() {
    console.log("Página carregada");

    if (window.location.href.includes('about.html')) {
        var videoPopup = document.getElementById('videoPopup');
        var closeBtn = document.getElementById('closeBtn');

        console.log("Popup e botão encontrados:", videoPopup, closeBtn);

        if (videoPopup && closeBtn) {
            videoPopup.style.display = 'flex';

            // Usando addEventListener para tratar o evento de clique
            closeBtn.addEventListener('click', function() {
    console.log("Tentando fechar o popup"); // Para depuração
    videoPopup.style.display = 'none';

    // Pausa o vídeo
    var video = document.querySelector("#videoPopup video");
    if (video) {
        video.pause();
        video.currentTime = 0; // Resetar o vídeo para o início
    }
});

        }
    }
};

function addWhatsAppWidget() {
    const whatsappLink = document.createElement('a');
    whatsappLink.href = 'https://api.whatsapp.com/send?phone=5511991314512&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20compra%20de%20livros.';
    whatsappLink.textContent = 'Compre conosco pelo WhatsApp';
    whatsappLink.className = 'whatsapp-widget';
    whatsappLink.target = '_blank'; // Isso faz com que o link abra em uma nova aba


    const footer = document.getElementById('footer'); // Adicione o ID do seu rodapé aqui
    if (footer) {
        footer.appendChild(whatsappLink);
    }
}




// Carregamento inicial
document.addEventListener("DOMContentLoaded", function() {
    addWhatsAppWidget();
    if (document.getElementById("bookList")) {
        loadBookCatalog();
    }
    if (document.getElementById("presentationList")) {
        loadUpcomingPresentations();
    }
    if (document.getElementById("faqList")) {
        loadFAQs();
    }
    if (document.getElementById("bookCarrossel")) {
        loadBookCarrossel();
    }
    if (document.getElementById("testimonialCarousel")) {
        loadTestimonials();
    }
});

