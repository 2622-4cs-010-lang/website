let currentType = "lost";

        const lostItems = [
            {
                name: "Black Wallet",
                description: "Black leather wallet lost near the university library.",
                person: "Ali Raza",
                phone: "0300-1234567",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGMWjOWWZL-daUMw0ENhWOLmmsPTB5VnJmL-tRZQElEZhyCpvrKFkeLWs&s=10"
            },

            {
                name: "Blue Backpack",
                description: "Blue backpack containing books and a notebook.",
                person: "Hina Khan",
                phone: "0312-7654321",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
            },

            {
                name: "Silver Watch",
                description: "Silver wristwatch lost near the cafeteria.",
                person: "Usman Tariq",
                phone: "0333-9876543",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_nJ0p9JfUWBISyfuyYVPBXpHSmp7BFiwmjZdYdj20g&s=10"
            }
        ];


        const foundItems = [
            {
                name: "Black iPhone",
                description: "Black iPhone found near the main gate.",
                person: "Maham Noor",
                phone: "0301-5555555",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            },

            {
                name: "Car Keys",
                description: "A set of car keys found in the parking area.",
                person: "Ahmed Hassan",
                phone: "0321-4444444",
                image: "https://media.istockphoto.com/id/1169344855/vector/car-key-security-icon-vector-illustration-in-flat-style.jpg?s=612x612&w=0&k=20&c=QZdmcjO-qLEAcvx1nfN1BF-qKwexFfkF9dCYo4ld8fM="
            },

            {
                name: "Student ID Card",
                description: "Student ID card found outside the cafeteria.",
                person: "Sara Malik",
                phone: "0345-2222222",
                image: "https://png.pngtree.com/png-clipart/20240806/original/pngtree-id-card-for-college-students-vector-template-design-png-image_15712346.png"
            }
        ];


        /* Open Lost Items */

        function openLostItems() {

            currentType = "lost";

            document.getElementById("home").style.display = "none";
            document.getElementById("dashboard").style.display = "block";

            document.getElementById("pageTitle").innerText =
                "Lost Items";

            displayItems();
        }


        /* Open Found Items */

        function openFoundItems() {

            currentType = "found";

            document.getElementById("home").style.display = "none";
            document.getElementById("dashboard").style.display = "block";

            document.getElementById("pageTitle").innerText =
                "Found Items";

            displayItems();
        }


        /* Go Home */

        function goHome() {

            document.getElementById("dashboard").style.display = "none";
            document.getElementById("home").style.display = "flex";
        }


        /* Display Items */

        function displayItems() {

            const container =
                document.getElementById("itemsContainer");

            container.innerHTML = "";

            let items =
                currentType === "lost"
                ? lostItems
                : foundItems;


            items.forEach(function(item) {

                let buttonText =
                    currentType === "lost"
                    ? "I Found It"
                    : "I Lost It";


                container.innerHTML += `

                    <div class="item-card">

                        <img src="${item.image}"
                             alt="${item.name}">

                        <div class="item-info">

                            <h2>${item.name}</h2>

                            <p>
                                ${item.description}
                            </p>

                            <p class="posted-by">
                                Posted by: ${item.person}
                            </p>

                            <button
                                onclick="showContact(
                                    '${item.person}',
                                    '${item.phone}'
                                )">

                                ${buttonText}

                            </button>

                        </div>

                    </div>

                `;

            });

        }


        /* Search Items */

        function searchItems() {

            let search =
                document
                .getElementById("searchInput")
                .value
                .toLowerCase();


            let items =
                currentType === "lost"
                ? lostItems
                : foundItems;


            const container =
                document.getElementById("itemsContainer");

            container.innerHTML = "";


            items
            .filter(item =>
                item.name
                .toLowerCase()
                .includes(search)
            )
            .forEach(function(item) {

                let buttonText =
                    currentType === "lost"
                    ? "I Found It"
                    : "I Lost It";


                container.innerHTML += `

                    <div class="item-card">

                        <img src="${item.image}"
                             alt="${item.name}">

                        <div class="item-info">

                            <h2>${item.name}</h2>

                            <p>${item.description}</p>

                            <p class="posted-by">
                                Posted by: ${item.person}
                            </p>

                            <button onclick="showContact(
                                '${item.person}',
                                '${item.phone}'
                            )">

                                ${buttonText}

                            </button>

                        </div>

                    </div>

                `;

            });

        }


        /* Show Contact */

        function showContact(name, phone) {

            document.getElementById("contactName")
                .innerText = "Name: " + name;

            document.getElementById("contactPhone")
                .innerText = "Phone: " + phone;

            document.getElementById("contactPopup")
                .style.display = "flex";
        }


        /* Close Contact */

        function closeContact() {

            document.getElementById("contactPopup")
                .style.display = "none";
        }


        /* Open Add Post */

        function openPostForm() {

            document.getElementById("postPopup")
                .style.display = "flex";
        }


        /* Close Add Post */

        function closePostForm() {

            document.getElementById("postPopup")
                .style.display = "none";
        }


        /* Add New Post */

        function addPost() {

            const name =
                document.getElementById("itemName").value;

            const description =
                document.getElementById("itemDescription").value;

            const phone =
                document.getElementById("contactInfo").value;

            const imageInput =
                document.getElementById("itemImage");


            if (!name || !description || !phone) {

                alert("Please fill all fields.");
                return;

            }


            let newItem = {

                name: name,

                description: description,

                person: "Current User",

                phone: phone,

                image: imageInput.files.length
                    ? URL.createObjectURL(imageInput.files[0])
                    : "https://via.placeholder.com/400"

            };


            if (currentType === "lost") {

                lostItems.push(newItem);

            } else {

                foundItems.push(newItem);

            }


            closePostForm();

            displayItems();

        }

/* ================= TASK 2: MOBILE MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", navigation.classList.contains("open"));
});
navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* ================= TASK 2: DARK MODE ================= */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "Light mode" : "Dark mode";
});
