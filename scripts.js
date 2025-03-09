function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value;
    const engine = document.getElementById('searchEngine').value;

    // Add DeepSeek cases
    if (engine === 'deepseek-chat') {
        showDeepSeekChat(query);
        return;
    }
    if (engine === 'deepseek-search') {
        showDeepSeekSearch(query);
        return;
    }
    ...
}

// New DeepSeek functions
async function showDeepSeekChat(query) {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{role: "user", content: query}]
        })
    });
    
    const data = await response.json();
    displayAIResponse(data.choices[0].message.content);
}

function displayAIResponse(content) {
    const results = document.getElementById('embeddedResults');
    results.innerHTML = `
        <div class="ai-response">
            <h3>DeepSeek Response</h3>
            <p>${content}</p>
        </div>
    `;
}