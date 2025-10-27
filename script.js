async function getPapers() {
    try {
        const response = await fetch('https://upadhayay.github.io/db.json');
        const data = await response.json();
        const papersDiv = document.getElementById('papers');

        for (let books of data.books) {
            const paperDiv = document.createElement('div');
            paperDiv.classList.add('paper');

            if (books.published) {
                books.published = "Published"
            } else {
                books.published = "Unpublished"
            }

            paperDiv.innerHTML = `
                <img src="paper.jpg" alt="Paper Stock Image">
                <p>${books.title}</p>
                <p>${books.year}</p>
                <p>${books.published}</p>`
            ;

            papersDiv.appendChild(paperDiv)
            
            papersDiv.classList.add(".paper")
        }

    } catch (error) {
        console.error('Error:', error);

    }

}
getPapers();