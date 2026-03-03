// Main Application Script
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    initializeTabs();
    renderFeedbackCards('all');
    animateOnScroll();
});

// Initialize page with statistics
function initializePage() {
    const stats = getStatistics();

    // Update stat cards
    document.getElementById('totalResponses').textContent = stats.totalResponses;
    document.getElementById('winningLogo').textContent = stats.winningLogo;
    document.getElementById('avgRating').textContent = stats.overallAvg;

    // Animate vote bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.vote-fill, .rating-fill').forEach(bar => {
        observer.observe(bar);
    });
}

// Tab functionality
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Render filtered cards
            const filter = btn.dataset.tab;
            renderFeedbackCards(filter);
        });
    });
}

// Render feedback cards
function renderFeedbackCards(filter) {
    const grid = document.getElementById('feedbackGrid');
    grid.innerHTML = '';

    const filteredData = filter === 'all'
        ? formData
        : formData.filter(item => item.chosenLogo === `Logo ${filter}`);

    filteredData.forEach((item, index) => {
        const avgRating = (item.ratings.reduce((a, b) => a + b, 0) / 4).toFixed(1);
        const sentimentEmoji = getSentimentEmoji(item.reason + ' ' + item.meaning);

        const logoEmojis = {
            'Logo A': '🌹',
            'Logo B': '🌴',
            'Logo C': '🌅',
            'Logo D': '🔲'
        };

        // Check if notes are valid
        const hasValidNotes = item.notes &&
            item.notes !== '-' &&
            item.notes !== '-----' &&
            item.notes !== 'Tidak ada' &&
            item.notes !== 'no komen' &&
            item.notes !== 'Sudah cukup' &&
            item.notes.length > 5;

        // Determine note type emoji
        let noteEmoji = '💭';
        if (hasValidNotes) {
            const lowerNote = item.notes.toLowerCase();
            if (lowerNote.includes('warna') || lowerNote.includes('kontras')) noteEmoji = '🎨';
            else if (lowerNote.includes('saran') || lowerNote.includes('mungkin')) noteEmoji = '💡';
            else if (lowerNote.includes('simple') || lowerNote.includes('polos')) noteEmoji = '✨';
            else if (lowerNote.includes('bagus') || lowerNote.includes('baik')) noteEmoji = '👍';
        }

        const card = document.createElement('div');
        card.className = 'feedback-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="feedback-header">
                <div class="feedback-logo">
                    <span class="feedback-logo-badge">${item.chosenLogo}</span>
                    <span class="feedback-emoji">${logoEmojis[item.chosenLogo]}</span>
                </div>
                <div class="feedback-sentiment">${sentimentEmoji}</div>
            </div>
            <div class="feedback-content">
                <h4>💬 Alasan Memilih:</h4>
                <p class="feedback-reason">${item.reason}</p>
                <h4>✨ Makna yang Dilihat:</h4>
                <p class="feedback-meaning">${item.meaning}</p>
                ${hasValidNotes ? `
                <h4>${noteEmoji} Catatan & Saran:</h4>
                <p class="feedback-notes">${item.notes}</p>
                ` : ''}
            </div>
            <div class="feedback-ratings">
                <span class="rating-pill">Aspek 1: <span>${item.ratings[0]}/5</span></span>
                <span class="rating-pill">Aspek 2: <span>${item.ratings[1]}/5</span></span>
                <span class="rating-pill">Aspek 3: <span>${item.ratings[2]}/5</span></span>
                <span class="rating-pill">Aspek 4: <span>${item.ratings[3]}/5</span></span>
            </div>
        `;

        grid.appendChild(card);
    });

    // If no results
    if (filteredData.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 60px; grid-column: 1/-1;">
                <div style="font-size: 4rem; margin-bottom: 16px;">🤷</div>
                <p style="color: var(--text-secondary);">Belum ada respons untuk logo ini</p>
            </div>
        `;
    }
}

// Render notes
function renderNotes() {
    const grid = document.getElementById('notesGrid');
    grid.innerHTML = '';

    const validNotes = formData.filter(item =>
        item.notes &&
        item.notes !== '-' &&
        item.notes !== '-----' &&
        item.notes !== 'Tidak ada' &&
        item.notes !== 'no komen' &&
        item.notes !== 'Sudah cukup' &&
        item.notes.length > 5
    );

    validNotes.forEach(item => {
        const sentimentEmoji = getSentimentEmoji(item.notes);

        // Determine note type emoji
        let typeEmoji = '💭';
        const lowerNote = item.notes.toLowerCase();
        if (lowerNote.includes('warna') || lowerNote.includes('kontras')) typeEmoji = '🎨';
        else if (lowerNote.includes('saran') || lowerNote.includes('mungkin')) typeEmoji = '💡';
        else if (lowerNote.includes('simple') || lowerNote.includes('polos')) typeEmoji = '✨';
        else if (lowerNote.includes('bagus') || lowerNote.includes('baik')) typeEmoji = '👍';

        const card = document.createElement('div');
        card.className = 'note-card';

        card.innerHTML = `
            <div class="note-emoji">${typeEmoji}</div>
            <div class="note-text">${item.notes}</div>
        `;

        grid.appendChild(card);
    });
}

// Scroll animations
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stat-card, .logo-card, .rating-card, .note-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Duplicate marquee content for infinite scroll effect
const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentElement.appendChild(clone);
}

// Add hover effects for cards
document.querySelectorAll('.feedback-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Console Easter egg
console.log('%c🌾 Peradaban Moyudan 🌾', 'font-size: 24px; font-weight: bold; color: #c9a962;');
console.log('%cKKN UGM 2026 - Terima kasih! 💚', 'font-size: 14px; color: #a5d6a7;');
