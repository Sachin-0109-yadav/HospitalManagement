document.addEventListener("DOMContentLoaded", function () {
    // Handle Appointment Booking
    document.querySelector("#appointmentForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Appointment Booked Successfully!");
        saveAppointment();
    });

    // Handle Adding Doctor
    document.querySelector("#doctorForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        addDoctor();
    });

    // Handle Adding Patient
    document.querySelector("#patientForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        addPatient();
    });

    loadDoctors();
    loadPatients();
});

// Save Appointment Data
function saveAppointment() {
    let patientName = document.querySelector("#patientName").value;
    let doctor = document.querySelector("#doctor").value;
    let date = document.querySelector("#date").value;
    let time = document.querySelector("#time").value;

    let appointment = { patientName, doctor, date, time };
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
}

// Add Doctor
function addDoctor() {
    let doctorName = document.querySelector("#doctorName").value;
    let specialization = document.querySelector("#specialization").value;

    let doctor = { doctorName, specialization };
    let doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    doctors.push(doctor);
    localStorage.setItem("doctors", JSON.stringify(doctors));

    loadDoctors();
}

// Load Doctors
function loadDoctors() {
    let doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    let doctorList = document.querySelector("#doctorList");
    if (doctorList) {
        doctorList.innerHTML = "";
        doctors.forEach(doctor => {
            let li = document.createElement("li");
            li.textContent = `${doctor.doctorName} - ${doctor.specialization}`;
            doctorList.appendChild(li);
        });
    }
}

// Add Patient
function addPatient() {
    let patientName = document.querySelector("#patientName").value;
    let age = document.querySelector("#age").value;
    let condition = document.querySelector("#condition").value;

    let patient = { patientName, age, condition };
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));

    loadPatients();
}

// Load Patients
function loadPatients() {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    let patientList = document.querySelector("#patientList");
    if (patientList) {
        patientList.innerHTML = "";
        patients.forEach(patient => {
            let li = document.createElement("li");
            li.textContent = `${patient.patientName}, Age: ${patient.age}, Condition: ${patient.condition}`;
            patientList.appendChild(li);
        });
    }
}
