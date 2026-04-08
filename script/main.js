const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const subject = document.getElementById("subject").value.trim();
	const message = document.getElementById("message").value.trim();

	let errors = [];

	const nameRegex = /^[a-zA-Z\s]+$/;
	if (name.length < 3) {
		errors.push("Nama minimal 3 karakter");
	} else if (!nameRegex.test(name)) {
		errors.push("Nama hanya boleh huruf dan spasi");
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		errors.push("Format email tidak valid");
	}

	if (subject.length < 5) {
		errors.push("Subject minimal 5 karakter");
	}

	const wordCount = message.split(/\s+/).filter((word) => word.length > 0).length;
	if (wordCount < 10) {
		errors.push("Pesan minimal 10 kata");
	}
	if (errors.length > 0) {
		alert(errors.join("\n"));
		return;
	}

	console.log("Form Data:", { name, email, subject, message });

	alert("Pesan berhasil dikirim!");
	form.reset();
});

const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("#sidebar a");

toggleBtn.addEventListener("click", () => {
	sidebar.classList.toggle("active");
	overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		sidebar.classList.remove("active");
		overlay.classList.remove("active");
	});
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 1024) {
		sidebar.classList.remove("active");
		overlay.classList.remove("active");
	}
});
