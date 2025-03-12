document.addEventListener("DOMContentLoaded", () => {
    const trendsList = document.getElementById("trends-list");
    const languageSelector = document.getElementById("language-selector");
    const title = document.getElementById("title");
    const trendsTitle = document.getElementById("trends-title");
    
    const translations = {
        "pt": { "title": "Dashboard de Tendências", "trends": "Tendências Atuais" },
        "en": { "title": "Trends Dashboard", "trends": "Current Trends" },
        "es": { "title": "Panel de Tendencias", "trends": "Tendencias Actuales" }
    };
    
    const trendsData = ["#Tech", "#Innovation", "#AI", "#Coding", "#Startups"];
    
    function updateTrends() {
        trendsList.innerHTML = "";
        trendsData.forEach(trend => {
            const li = document.createElement("li");
            li.textContent = trend;
            trendsList.appendChild(li);
        });
    }
    
    function updateLanguage() {
        const lang = languageSelector.value;
        title.textContent = translations[lang].title;
        trendsTitle.textContent = translations[lang].trends;
    }
    
    languageSelector.addEventListener("change", updateLanguage);
    
    updateTrends();
    updateLanguage();
    
    const ctx = document.getElementById("trendsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: trendsData,
            datasets: [{
                label: "Popularity",
                data: [12, 19, 3, 5, 2],
                backgroundColor: "rgba(0, 123, 255, 0.5)",
                borderColor: "rgba(0, 123, 255, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});