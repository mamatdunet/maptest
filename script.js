document.addEventListener('DOMContentLoaded', (event) => {
    const continents = document.querySelectorAll('.continent');
    const container = document.body;
    const positions = [];

    continents.forEach((continent) => {
        let overlap = true;
        let count = 0; // Compteur pour éviter une boucle infinie

        while (overlap && count < 1000) {
            count++;

            // Position aléatoire à l'intérieur de la fenêtre
            const top = Math.random() * (window.innerHeight - continent.offsetHeight);
            const left = Math.random() * (window.innerWidth - continent.offsetWidth);

            // Vérification des superpositions avec les autres continents déjà positionnés
            overlap = positions.some((pos) => {
                const verticalOverlap = (top > pos.top && top < pos.top + pos.height) || (pos.top > top && pos.top < top + continent.offsetHeight);
                const horizontalOverlap = (left > pos.left && left < pos.left + pos.width) || (pos.left > left && pos.left < left + continent.offsetWidth);
                return verticalOverlap && horizontalOverlap;
            });

            if (!overlap) {
                continent.style.top = `${top}px`;
                continent.style.left = `${left}px`;
                positions.push({top, left, width: continent.offsetWidth, height: continent.offsetHeight});
            }
        }
    });
});
