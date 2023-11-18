const packageSection = document.getElementById('package-section');
const serviceSection = document.getElementById('services-section');
const packageBookingBtn = document.getElementById('packageBookingBtn');

const whereTo = document.getElementById('whereTo');
const persons = document.getElementById('persons');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const description = document.getElementById('description');

const bookingForm = document.getElementById('bookingForm');

const packages = [
    {
        image: "https://images.pexels.com/photos/2748019/pexels-photo-2748019.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Italy",
        subTitle: "Italy is great place to visit.",
        price: 300,
        rating: 4.7
    },
    {
        image: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Singapore",
        subTitle: "Singapore is great place to visit.",
        price: 200,
        rating: 4.9
    },
    {
        image: "https://images.pexels.com/photos/707677/pexels-photo-707677.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Japan",
        subTitle: "Japan is great place to visit.",
        price: 300,
        rating: 4.7
    },
]

const services = [
    {
        name: "Affordable Hotel",
        description: "Booking and reservation services for hotels, resorts, lodges, and vacation rentals"
    },
    {
        name: "Food & Drinks",
        description: "Engage travelers in interactive and educational experiences related to food and beverages"
    },
    {
        name: "Safety Guide",
        description: "Be aware of your surroundings and trust your instincts"
    },
    {
        name: "Travel Insurance",
        description: "Offer travel insurance options to ensure travelers' safety and security during their trips"
    },
    {
        name: "Transportation Assistance",
        description: "Arrangement of airport transfers, car rentals, and transportation between destinations"
    },
    {
        name: "Wellness & Spa",
        description: "Wellness retreats and spa for relaxation and rejuvenation"
    },
]

function handleFormSubmit() {
    console.log(Date.now().toLocaleString());
    console.log(startDate.value);
    if(!whereTo.value || !persons.value || !startDate.value || !endDate.value || !description.value) {
        alert("Error: Please enter value in all the fields.")
        return
    }
    if(persons.value < 1) {
        alert("Error: Please add at least one person.");
        return
    }
    if(startDate.value < Date.now()) {
        alert("Error: Start Date cannot be in the past.");
        return
    }
    if(endDate.value < Date.now()) {
        alert("Error: End Date cannot be cannot be in the past.");
        return
    }
    if(startDate.value > endDate.value) {
        alert("Error: Start Date cannot be after End Date.");
        return
    }
    if(description.value.length < 50) {
        alert("Error: Description length must be at least 50 characters.");
        return
    }
    else {
        alert(`Thank You! for using Travel.com. Your package has been booked successfully for ${whereTo.value}.`);

    }
};

function createPackage() {
    packages.map((package) => {
        let packageCard = document.createElement('div');
        let packageCardContent = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h3');
        let subTitle = document.createElement('p');
        let price = document.createElement('p');
        let rating = document.createElement('p');
        let button = document.createElement('button');

        image.src = package.image;
        image.alt = package.title;
        title.textContent = package.title;
        subTitle.textContent = package.subTitle;
        price.textContent = `Price - $${package.price}`;
        rating.textContent = `Rating - ${package.rating}`;
        button.textContent = 'Book';

        packageCard.classList.add('package-card');
        packageCardContent.classList.add('card-content');
        packageCardContent.appendChild(title);
        packageCardContent.appendChild(subTitle);
        packageCardContent.appendChild(price);
        packageCardContent.appendChild(rating);
        packageCardContent.appendChild(button);
        button.classList.add('btn');
        button.classList.add('btn-warning');
        packageCard.appendChild(image);
        packageCard.appendChild(packageCardContent);
        packageSection.appendChild(packageCard)
    })
};

function createService() {
    services.map((service) => {
        let serviceCard = document.createElement('div');
        serviceCard.classList.add('service-item');
    
        let serviceName = document.createElement('h3');
        serviceName.textContent = service.name;
        let serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceCard.appendChild(serviceName);
        serviceCard.appendChild(serviceDescription);
        serviceSection.appendChild(serviceCard);
    })
};

createPackage();
createService();

packageBookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleFormSubmit();
});
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
    bookingForm.reset();
});