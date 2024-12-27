document.addEventListener("DOMContentLoaded", () => {
    // === Скріпт магазин ===
    (() => {
        const infoToggle = document.querySelector(".info-toggle");
        const infoSection = document.querySelector(".info-section");

        if (infoToggle && infoSection) {
            infoToggle.addEventListener("click", () => {
                infoSection.classList.toggle("open");
            });
        } else {
            console.warn("Елементи для магазину не знайдено.");
        }
    })();
    // ==== Форма підписки === 
    (() => {
        (() => {
            const form = document.getElementById("subscribeForm");
            const notificationContainer = document.querySelector(".notification-container");

            form?.addEventListener("submit", (event) => {
                event.preventDefault();

                createNotification("Успішно! Ви підписалися на наші оновлення.");
            });

            function createNotification(message) {
                notificationContainer.innerHTML = "";

                const notification = document.createElement("div");
                notification.className = "notification";
                notification.textContent = message;

                notificationContainer.appendChild(notification);

                setTimeout(() => {
                    notification.remove();
                }, 3000);
            }
        })();
    })();
    // === Скріпт форми зворотного дзвінка ===
    (() => {
        const form = document.getElementById("callback-form");
        const notificationContainer = document.querySelector(".notification-container");

        form?.addEventListener("submit", (event) => {
            event.preventDefault();

            createNotification("Ваш запит успішно надіслано! Ми з вами зв'яжемося найближчим часом.");
        });

        function createNotification(message) {
            notificationContainer.innerHTML = "";

            const notification = document.createElement("div");
            notification.className = "notification";
            notification.textContent = message;

            notificationContainer.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
    })();

    // === Анімація відповідей ===
    (() => {
        const questions = document.querySelectorAll(".question");

        questions.forEach((question) => {
            question.addEventListener("click", (event) => {
                event.preventDefault();
                const helpItem = question.parentElement;
                const isActive = helpItem.classList.contains("active");

                document.querySelectorAll(".help-item.active").forEach((item) => {
                    item.classList.remove("active");
                    item.querySelector(".answer").style.maxHeight = null;
                });

                if (!isActive) {
                    helpItem.classList.add("active");
                    const answer = helpItem.querySelector(".answer");
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    })();

    // === Вибір мови ===
    (() => {
        const currentLanguage = document.getElementById("current-language");
        const languageDropdown = document.getElementById("language-dropdown");

        currentLanguage?.addEventListener("click", () => {
            languageDropdown.style.display =
                languageDropdown.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest(".language-selector")) {
                languageDropdown.style.display = "none";
            }
        });

        languageDropdown?.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const selectedLanguage = event.target.getAttribute("data-lang");
                currentLanguage.textContent = selectedLanguage;
                languageDropdown.style.display = "none";
            });
        });
    })();

    // === Чат ===
    (() => {
        const chatBox = document.getElementById("chat-box");
        const userInput = document.getElementById("user-message");
        const sendButton = document.getElementById("send-button");

        function addMessage(message, type) {
            const messageDiv = document.createElement("div");
            messageDiv.className = type === "user" ? "user-message" : "support-message";
            messageDiv.textContent = message;
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        sendButton?.addEventListener("click", () => {
            const message = userInput.value.trim();
            if (message) {
                addMessage(message, "user");
                userInput.value = "";

                setTimeout(() => {
                    const response = generateResponse(message);
                    addMessage(response, "support");
                    setTimeout(() => {
                        addMessage("Дякуємо, що обираєте нас!", "support");
                    }, 2000);
                }, 1000);
            }
        });

        userInput?.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                sendButton.click();
            }
        });

        function generateResponse(userMessage) {
            const responses = [
                "Дякуємо за звернення! Найближчим часом з вами зв'яжеться наш консультант.",
                "Ми розглянемо ваше питання найближчим часом.",
                "На жаль, я не зрозумів. Чи можете ви уточнити?",
                "Наші спеціалісти зв'яжуться з вами у найближчий час.",
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    })();

    // === Форма акаунта ===
    (() => {
        const form = document.getElementById("account-form");
        const logoutButton = document.querySelector(".logout-button");
        const notificationContainer = document.createElement("div");
        notificationContainer.className = "notification-container";
        document.body.appendChild(notificationContainer);

        const storedData = JSON.parse(localStorage.getItem("accountData"));

        if (storedData) {
            form["first-name"].value = storedData.firstName || "";
            form["last-name"].value = storedData.lastName || "";
            form["email"].value = storedData.email || "";
            form["phone"].value = storedData.phone || "";
        }

        form?.addEventListener("submit", (event) => {
            event.preventDefault();

            const accountData = {
                firstName: form["first-name"].value,
                lastName: form["last-name"].value,
                email: form["email"].value,
                phone: form["phone"].value,
            };

            localStorage.setItem("accountData", JSON.stringify(accountData));
            showNotification("Дані успішно оновлено!");
        });

        logoutButton?.addEventListener("click", () => {
            localStorage.removeItem("accountData");
            form.reset();
            showNotification("Ви успішно вийшли з акаунта!");
        });

        function showNotification(message) {
            const notification = document.createElement("div");
            notification.className = "notification";
            notification.textContent = message;

            notificationContainer.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
    })();
});

// === Корзина та товари ===

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function formatPrice(price) {
    return new Intl.NumberFormat('uk-UA', {
        style: 'currency',
        currency: 'UAH',
        minimumFractionDigits: 2
    }).format(price);
}

function updateCart() {
    const cartElement = document.querySelector('#cart');
    let cartContent = document.querySelector('.cart-content');

    if (!cartContent) {
        cartContent = document.createElement('div');
        cartContent.classList.add('cart-content');
        cartElement.appendChild(cartContent);

        document.querySelector('#cart-toggle').addEventListener('click', () => {
            cartContent.style.display = cartContent.style.display === 'none' || !cartContent.style.display ? 'block' : 'none';
        });
    }

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <button class="close-cart">×</button>
            <p>Кошик порожній</p>`;
    } else {
        const groupedCart = cart.reduce((acc, item) => {
            const existingItem = acc.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);

        const cartItems = groupedCart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div>
                    <h5>${item.name}</h5>
                    <p>${formatPrice(item.price.replace(/[^\d.]/g, ''))} x ${item.quantity}</p>
                </div>
            </div>
        `).join('');

        const total = groupedCart.reduce((sum, item) => {
            return sum + parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity;
        }, 0);

        cartContent.innerHTML = `
            <button class="close-cart">×</button>
            <div class="cart-items">${cartItems}</div>
            <div class="cart-total">
                <p>Загальна сума: <strong>${formatPrice(total)}</strong></p>
            </div>
            <button id="clear-cart" class="clear-cart-btn">Очистити кошик</button>
        `;
    }

    const clearCartButton = document.querySelector('#clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            cart = [];
            saveCartToLocalStorage();
            updateCart();
        });
    }

    const closeCartButton = document.querySelector('.close-cart');
    if (closeCartButton) {
        closeCartButton.addEventListener('click', () => {
            cartContent.style.display = 'none';
        });
    }
}

function addToCart(product) {
    cart.push(product);
    saveCartToLocalStorage();
    updateCart();

    const cartContent = document.querySelector('.cart-content');
    if (cartContent) {
        cartContent.style.display = 'block';
    }
}

function renderProducts(category) {
    const productsList = document.querySelector('.products-list');
    productsList.innerHTML = '';

    category.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <span>${product.price}</span>
            <button class="add-to-cart">Додати у кошик</button>`;
        productsList.appendChild(productItem);

        productItem.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
        });
    });
}

function initPage() {
    const path = window.location.pathname.split('/').pop();

    if (path === 'wearable.html') {
        renderProducts(wearables);
    } else if (path === 'headphones.html') {
        renderProducts(headphones);
    } else if (path === 'laptops.html') {
        renderProducts(laptops);
    } else if (path === 'phones.html') {
        renderProducts(phones);
    }

    initFilters();
    updateCart();
}

// === Фільтри ===

function filterProducts(products) {
    const filters = {
        brand: Array.from(document.querySelectorAll("input[id^='brand-']:checked")).map(el => el.id.split('-').pop().toLowerCase()), // Бренд
        price: parseInt(document.getElementById("price").value, 10),
    };

    return products.filter(product => {
        const productPrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
        return (
            (!filters.brand.length || filters.brand.some(brand => product.name.toLowerCase().includes(brand))) &&
            productPrice <= filters.price
        );
    });
}

function applyFilters() {
    const path = window.location.pathname.split('/').pop();
    let products = [];

    if (path === 'wearable.html') {
        products = wearables;
    } else if (path === 'headphones.html') {
        products = headphones;
    } else if (path === 'laptops.html') {
        products = laptops;
    } else if (path === 'phones.html') {
        products = phones;
    }

    const filteredProducts = filterProducts(products);
    renderProducts(filteredProducts);
}

function initFilters() {
    const filterInputs = document.querySelectorAll(".sidebar-filters input, .filter-price input");
    filterInputs.forEach(input => input.addEventListener("change", applyFilters));

    const priceInput = document.getElementById("price");
    const priceValue = document.querySelector(".filter-price .value");
    if (priceInput && priceValue) {
        priceInput.addEventListener("input", () => {
            priceValue.textContent = priceInput.value;
        });
    }
}

document.addEventListener('DOMContentLoaded', initPage);

