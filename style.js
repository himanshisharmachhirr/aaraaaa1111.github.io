const WHATSAPP_NUMBER = "919785770641";


function openWhatsApp(message) {

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}


/* FLIGHT SEARCH */

function searchFlight(event) {

    event.preventDefault();

    let from =
        document.getElementById("from")?.value ||
        document.getElementById("flightFrom")?.value;

    let to =
        document.getElementById("to")?.value ||
        document.getElementById("flightTo")?.value;

    let date =
        document.getElementById("date")?.value ||
        document.getElementById("flightDate")?.value;

    let passengers =
        document.getElementById("passengers")?.value ||
        document.getElementById("flightPassengers")?.value;

    const message =
        "Hello Himanshi Flights,%0A%0A" +
        "I want to enquire about a flight.%0A%0A" +
        "From: " + encodeURIComponent(from) + "%0A" +
        "To: " + encodeURIComponent(to) + "%0A" +
        "Date: " + encodeURIComponent(date) + "%0A" +
        "Passengers: " + encodeURIComponent(passengers);

    window.open(
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message,
        "_blank"
    );
}


/* SELECT ROUTE */

function selectRoute(from, to) {

    const message =
        "Hello Himanshi Flights,%0A%0A" +
        "I am interested in a flight from " +
        from +
        " to " +
        to +
        ".%0A%0APlease provide available options.";

    window.open(
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message,
        "_blank"
    );
}


/* OFFERS */

function offerMessage(offer) {

    const message =
        "Hello Himanshi Flights,%0A%0A" +
        "I am interested in the " +
        offer +
        " offer.%0A%0APlease provide more details.";

    window.open(
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message,
        "_blank"
    );
}


/* BOOKING */

function submitBooking(event) {

    event.preventDefault();

    const name =
        document.getElementById("passengerName").value;

    const phone =
        document.getElementById("passengerPhone").value;

    const email =
        document.getElementById("passengerEmail").value;

    const from =
        document.getElementById("bookingFrom").value;

    const to =
        document.getElementById("bookingTo").value;

    const date =
        document.getElementById("bookingDate").value;

    const passengers =
        document.getElementById("bookingPassengers").value;

    const message =
        "Hello Himanshi Flights,%0A%0A" +

        "BOOKING REQUEST%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +
        "%0A" +

        "Phone: " +
        encodeURIComponent(phone) +
        "%0A" +

        "Email: " +
        encodeURIComponent(email) +
        "%0A" +

        "From: " +
        encodeURIComponent(from) +
        "%0A" +

        "To: " +
        encodeURIComponent(to) +
        "%0A" +

        "Date: " +
        encodeURIComponent(date) +
        "%0A" +

        "Passengers: " +
        encodeURIComponent(passengers);

    window.open(
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message,
        "_blank"
    );
}


/* CONTACT */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("contactName").value;

    const phone =
        document.getElementById("contactPhone").value;

    const email =
        document.getElementById("contactEmail").value;

    const message =
        document.getElementById("contactMessage").value;

    const whatsappMessage =
        "Hello Himanshi Flights,%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +
        "%0A" +

        "Phone: " +
        encodeURIComponent(phone) +
        "%0A" +

        "Email: " +
        encodeURIComponent(email) +
        "%0A" +

        "Message: " +
        encodeURIComponent(message);

    window.open(
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        whatsappMessage,
        "_blank"
    );
}


/* FAQ */

function toggleFAQ(button) {

    const item =
        button.parentElement;

    item.classList.toggle("active");

    const symbol =
        button.querySelector("span");

    if (item.classList.contains("active")) {
        symbol.textContent = "−";
    } else {
        symbol.textContent = "+";
    }
      }
