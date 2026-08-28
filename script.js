// Database ya Makala
const articles = [
    {
        id: 1,
        title: "Jinsi ya Kuanza Biashara Online",
        description: "Mwongozo kamili wa kuanzisha biashara yako online na kumfanya iwe yenye mafanikio.",
        content: "Kuanzisha biashara online sio vigumu kama inavyosemekana. Hapa kuna hatua muhimu za kufuata...",
        date: "2026-08-20",
        author: "ADS Chat"
    },
    {
        id: 2,
        title: "Elimu ya Digital Marketing",
        description: "Ujifunze teknolohia za kisasa za kuuza bidhaa kwenye mtandao.",
        content: "Digital marketing ni muhimu sana kwa biashara za sasa. Jifunze stratehia za kufikia wageni...",
        date: "2026-08-18",
        author: "ADS Chat"
    },
    {
        id: 3,
        title: "Jinsi ya Kuzalisha Pesa Kutoka YouTube",
        description: "Karibu hatua kwa hatua ya kuzalisha mapato makubwa kutoka kwa YouTube.",
        content: "YouTube ni njia nzuri ya kupata pesa. Tunahitaji followers wengi na content nzuri...",
        date: "2026-08-15",
        author: "ADS Chat"
    },
    {
        id: 4,
        title: "E-commerce: Biashara ya Mtandao",
        description: "Eleza kuhusu biashara za mtandao na jinsi ya kumfanya iwe yenye mafanikio.",
        content: "E-commerce ina furaha na changamoto. Jifunze jinsi ya kuongeza mauzo yako online...",
        date: "2026-08-12",
        author: "ADS Chat"
    },
    {
        id: 5,
        title: "Social Media Marketing Kwa Biashara",
        description: "Jinsi ya kutumia Facebook, Instagram na TikTok kwa ajili ya kuuza bidhaa.",
        content: "Social media ni zana nzuri sana. Kwa ujumbe mzuri, unaweza kufikia wazimu wengi...",
        date: "2026-08-10",
        author: "ADS Chat"
    },
    {
        id: 6,
        title: "Kujenga Brand Yako Online",
        description: "Hatua za kujenga brand imara kwenye mtandao na kuwa na msaada wa wageni.",
        content: "Brand ni muhimu sana. Wageni wanataka kujua ni nani unaye na nini unayotoa...",
        date: "2026-08-08",
        author: "ADS Chat"
    }
];

// Data ya Analytics
const analyticsData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    visitors: [1200, 1900, 3000, 2500, 2200, 3800, 4200, 5100],
    sales: [800, 1200, 1800, 1400, 1600, 2200, 2800, 3400]
};

// Stats
const stats = [
    { label: 'Wageni', value: '25,450' },
    { label: 'Makala', value: '150+' },
    { label: 'Uzamili', value: '5,200' },
    { label: 'Rating', value: '4.8/5' }
];

// Load Blog Articles
function loadBlogArticles() {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';

    articles.forEach(article => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-card-header">
                <h3>${article.title}</h3>
            </div>
            <div class="blog-card-body">
                <p>${article.description}</p>
                <p class="blog-date">📅 ${formatDate(article.date)} | Mwandishi: ${article.author}</p>
                <button class="btn" onclick="readArticle(${article.id})">Soma Zaidi</button>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('sw-TZ', options);
}

// Read Article
function readArticle(id) {
    const article = articles.find(a => a.id === id);
    if (article) {
        alert(`📖 ${article.title}\n\n${article.content}`);
    }
}

// Load Analytics Chart
function loadAnalyticsChart() {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: analyticsData.months,
            datasets: [
                {
                    label: 'Wageni',
                    data: analyticsData.visitors,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Mauzo',
                    data: analyticsData.sales,
                    borderColor: '#764ba2',
                    backgroundColor: 'rgba(118, 75, 162, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '';
                        }
                    }
                }
            }
        }
    });
}

// Load Stats
function loadStats() {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = '';

    stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        statCard.innerHTML = `
            <h3>${stat.value}</h3>
            <p>${stat.label}</p>
        `;
        statsGrid.appendChild(statCard);
    });
}

// Smooth Scroll
function scrollTo(section) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    loadBlogArticles();
    loadAnalyticsChart();
    loadStats();

    // Contact Form Submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = '✅ Ujumbe umetumwa! Asante kwa mawasiliano!';
            formMessage.style.color = 'green';
            
            // Clear form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }
});

// Navigation Links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1);
        scrollTo(target);
    });
});
