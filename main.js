// package and service section reference.
const packageSection = document.getElementById('package-section');
const serviceSection = document.getElementById('services-section');
const packageBookingBtn = document.getElementById('packageBookingBtn');

// input elements reference.
const whereTo = document.getElementById('whereTo');
const persons = document.getElementById('persons');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const description = document.getElementById('description');

// error elements reference for input fields.
const whereToError = document.getElementById('whereToError');
const personsError = document.getElementById('personsError');
const startDateError = document.getElementById('startDateError');
const endDateError = document.getElementById('endDateError');
const descriptionError = document.getElementById('descriptionError');

// booking form reference
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

// functions to validate the form input fields.
function validateNotEmpty(value, errorElement, errorMessage) {
    if (!value) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validatePositiveInteger(value, errorElement, errorMessage) {
    if (value < 1) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDateNotInPast(value, currentDateValue, errorElement, errorMessage) {
    if (value < currentDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateEndDateAfterStartDate(endDateValue, startDateValue, errorElement, errorMessage) {
    if (endDateValue < startDateValue) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

function validateDescriptionLength(value, errorElement, errorMessage, minLength) {
    if (value.length < minLength) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// function to handle booking form.
function handleFormSubmit(e) {
    var currentDate = new Date().toISOString().split('T')[0];

    var isValid = true;

    if (!whereTo.value || !persons.value || !startDate.value || !endDate.value || !description.value) {
        isValid &= validateNotEmpty(whereTo.value, whereToError, "Error: Complete this field.");
        isValid &= validateNotEmpty(persons.value, personsError, "Error: Complete this field.");
        isValid &= validateNotEmpty(startDate.value, startDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(endDate.value, endDateError, "Error: Complete this field.");
        isValid &= validateNotEmpty(description.value, descriptionError, "Error: Complete this field.");
    } else {
        isValid &= validatePositiveInteger(persons.value, personsError, "Error: Please add at least one person.");
        isValid &= validateDateNotInPast(startDate.value, currentDate, startDateError, "Error: Start Date cannot be in the past.");
        isValid &= validateDateNotInPast(endDate.value, currentDate, endDateError, "Error: End Date cannot be in the past.");
        isValid &= validateEndDateAfterStartDate(endDate.value, startDate.value, endDateError, "Error: End Date cannot be prior to Start Date.");
        isValid &= validateDescriptionLength(description.value, descriptionError, "Error: Description must be at least 50 characters.", 50);
    }

    if (isValid) {
        alert(`Thank You!\nYour package has been booked successfully for ${whereTo.value}.`);
        bookingForm.reset();
    }
    e.preventDefault();
}

// function to create HTML package card.
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

// function to create HTML service card.
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

// event listener to submit the form on button click.
packageBookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleFormSubmit();
});

// event listener to submit the form on form submit.
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
    bookingForm.reset();
});

// Event listeners to remove the error message from input fields when value is updated.
document.getElementById('whereTo').addEventListener('input', function () {
    whereToError.textContent = "";
});

document.getElementById('persons').addEventListener('input', function () {
    personsError.textContent = "";
});

document.getElementById('startDate').addEventListener('input', function () {
    startDateError.textContent = "";
});

document.getElementById('endDate').addEventListener('input', function () {
    endDateError.textContent = "";
});

document.getElementById('description').addEventListener('input', function () {
    descriptionError.textContent = "";
});