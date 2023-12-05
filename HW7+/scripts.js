class ViewMasterImage {
    constructor(title, imageUrl, description, author, year) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

// Create objects
const images = [
    new ViewMasterImage("Environmental Justice", "images/climate.jpg", "Environmental justice addresses the disproportionate impact of environmental pollution and climate change on marginalized communities, striving for a clean and safe environment for all.", "Percival Pumpernickel III", "October 12, 1875"),
    new ViewMasterImage("Gender Equality", "images/gender.jpg", "Gender equality advocates for equal rights and opportunities for people of all genders, including issues like pay equity, reproductive rights, and ending gender-based violence.", "Hortensia Prudence Featherbottom", "June 25, 1969"),
    new ViewMasterImage("LGBTQ+ Rights", "images/gay.jpg", "LGBTQ+ rights seek to ensure equal treatment and protection against discrimination based on sexual orientation and gender identity, covering areas such as marriage equality and healthcare access.", "Archibald Fiddlesticks McSnickerdoodle", "April 3, 1992"),
    new ViewMasterImage("Economic Inequality", "images/money.jpg", "Economic inequality concerns reducing income and wealth disparities, advocating for policies that alleviate poverty, provide fair wages, and distribute resources more equitably.", "Penelope Wobbleworth Pumpernickleberry", "August 7, 1782"),
    new ViewMasterImage("Racial Justice", "images/race.jpg", "Racial justice focuses on eliminating discrimination and inequality faced by marginalized racial and ethnic groups, addressing issues such as systemic racism and disparities in various aspects of life.", "Bartholomew Tumbleweed McFlapdoodle", "September 15, 2020")
   
    // ... more objects
];

// Function to display an image
function displayImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex];

    document.getElementById("imageTitle").textContent = image.title;
    document.getElementById("image").src = image.imageUrl;
    document.getElementById("description").textContent = image.description;
    document.getElementById("author").textContent = image.author;
    document.getElementById("year").textContent = image.year;
}

// Event listener for the button
document.getElementById("nextButton").addEventListener("click", displayImage);

// Initial display
displayImage();
