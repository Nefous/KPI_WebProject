const laptops = [
    {
        name: "Ноутбук Apple MacBook Pro 16",
        price: "105,999 грн",
        image: "../image/MacBookPro.png",
        description: "Apple M2 Pro, 16 ГБ RAM, 1 ТБ SSD, Liquid Retina XDR дисплей",
    },
    {
        name: "Ноутбук Lenovo IdeaPad 3",
        price: "22,999 грн",
        image: "../image/LenovoThinkPad1.png",
        description: "Intel Core i5-1235U, 8 ГБ RAM, 512 ГБ SSD, 15.6\" Full HD дисплей",
    },
    {
        name: "Ноутбук Asus ROG Strix G15",
        price: "49,999 грн",
        image: "../image/AsusRog1.png",
        description: "AMD Ryzen 7 6800H, 16 ГБ RAM, 1 ТБ SSD, NVIDIA GeForce RTX 3060",
    },
    {
        name: "Ноутбук Asus TUF F15",
        price: "59,999 грн",
        image: "../image/AsusTuf1.png",
        description: "Intel Core i7-12700H, 16 ГБ RAM, 1 ТБ SSD, NVIDIA GeForce RTX 3070",
    },
    {
        name: "Ноутбук Acer Nitro 5",
        price: "54,999 грн",
        image: "../image/AcerNitro2.png",
        description: "AMD Ryzen 5 5600H, 16 ГБ RAM, 512 ГБ SSD, NVIDIA GeForce RTX 4070",
    },
    {
        name: "Ноутбук Acer Nitro 7",
        price: "51,999 грн",
        image: "../image/AcerNitro1.png",
        description: "Intel Core i7-11800H, 16 ГБ RAM, 1 ТБ SSD, NVIDIA GeForce RTX 4060",
    },
    {
        name: "Lenovo Legion 5 15",
        price: "57,999 грн",
        image: "../image/LenovoLegion1.png",
        description: "AMD Ryzen 7 5800H, 16 ГБ RAM, 512 ГБ SSD, NVIDIA GeForce RTX 3070",
    },
    {
        name: "Ноутбук HP Victus 15",
        price: "89,999 грн",
        image: "../image/Victus.png",
        description: "Intel Core i7-13700H, 16 ГБ RAM, 1 ТБ SSD, NVIDIA GeForce RTX 4080",
    }
];

const headphones = [
    {
        name: "Навушники Sony WH-CH520",
        price: "4,999 грн",
        image: "../image/WH-Ch520.png",
        description: "Безпровідні, до 50 годин роботи, підтримка Bluetooth 5.2, зручний дизайн",
    },
    {
        name: "Навушники Logitech G435",
        price: "3,999 грн",
        image: "../image/G435.png",
        description: "Легкі безпровідні навушники, Bluetooth і Lightspeed підключення, до 18 годин роботи",
    },
    {
        name: "Навушники Apple AirPods Pro 2",
        price: "12,999 грн",
        image: "../image/PodsPro2.png",
        description: "Активне шумозаглушення, прозорий режим, до 6 годин автономної роботи, адаптивний звук",
    },
    {
        name: "Навушники Apple AirPods Max",
        price: "29,999 грн",
        image: "../image/AirPodsMax.png",
        description: "Hi-Fi якість звуку, активне шумозаглушення, до 20 годин автономної роботи, преміум дизайн",
    },
    {
        name: "Навушники Apple AirPods 4",
        price: "8,999 грн",
        image: "../image/AirPods4.png",
        description: "Легкі безпровідні навушники, просте підключення, до 6 годин автономної роботи",
    },
    {
        name: "Навушники Apple AirPods 3",
        price: "6,999 грн",
        image: "../image/AirPods3.png",
        description: "Прості у використанні, до 6 годин автономної роботи, простий дизайн",
    },
    {
        name: "Навушники Logitech G Pro X",
        price: "5,999 грн",
        image: "../image/GProX.png",
        description: "Професійні ігрові навушники, мікрофон з шумозаглушенням, міцна конструкція",
    },
    {
        name: "Навушники Logitech G733",
        price: "6,999 грн",
        image: "../image/G733.png",
        description: "Стильні безпровідні навушники, RGB підсвічування, до 29 годин автономної роботи",
    },
    {
        name: "Навушники JBL T450BT",
        price: "1,999 грн",
        image: "../image/JblT450.png",
        description: "Безпровідні навушники з чистим звуком JBL Pure Bass, до 11 годин автономної роботи",
    }
];

const phones = [
    {
        name: "Смартфон Apple iPhone 16 Pro Max",
        price: "55,999 грн",
        image: "../image/16ProMax.png",
        description: "6.9\" OLED, Apple A18 Pro, 256 ГБ, 48 МП камера, батарея 4685 мАг",
    },
    {
        name: "Смартфон Apple iPhone 15 Pro",
        price: "49,999 грн",
        image: "../image/15pro.png",
        description: "6.1\" Super Retina XDR, Apple A17 Pro, 128 ГБ, 48 МП камера, до 23 годин відео",
    },
    {
        name: "Смартфон Samsung Galaxy S24 Ultra",
        price: "49,999 грн",
        image: "../image/SamsungS24.png",
        description: "6.8\" Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 256 ГБ, 200 МП камера, 5000 мАг",
    },
    {
        name: "Смартфон Samsung Galaxy A15",
        price: "10,999 грн",
        image: "../image/SamsungA15.png",
        description: "6.6\" PLS LCD, Exynos 1280, 64 ГБ, 50 МП камера, 5000 мАг",
    },
    {
        name: "Смартфон Apple iPhone 16",
        price: "49,999 грн",
        image: "../image/Iphone16.png",
        description: "6.1\" Super Retina XDR, Apple A18 Bionic, 128 ГБ, 48 МП камера",
    },
    {
        name: "Смартфон Xiaomi Redmi Note 13",
        price: "12,999 грн",
        image: "../image/RedmiNote13.png",
        description: "6.67\" AMOLED, MediaTek Dimensity 6100+, 128 ГБ, 108 МП камера, 5000 мАг",
    },
    {
        name: "Смартфон Xiaomi 14 Ultra",
        price: "39,999 грн",
        image: "../image/Xiaomi14Ultra.png",
        description: "6.73\" AMOLED, Snapdragon 8 Gen 3, 512 ГБ, 50 МП камера, 5000 мАг",
    },
    {
        name: "Смартфон Xiaomi 13 Lite",
        price: "14,999 грн",
        image: "../image/Xiaomi13Lite.png",
        description: "6.55\" AMOLED, Snapdragon 7 Gen 1, 128 ГБ, 50 МП камера, 4500 мАг",
    },
    {
        name: "Смартфон Google Pixel 6",
        price: "19,999 грн",
        image: "../image/Pixel6.png",
        description: "6.4\" AMOLED, Google Tensor, 128 ГБ, 50 МП камера, 4614 мАг",
    },
    {
        name: "Смартфон Google Pixel 9 Pro",
        price: "39,999 грн",
        image: "../image/Pixel9Pro.png",
        description: "6.7\" LTPO OLED, Google Tensor G3, 256 ГБ, 50 МП камера, 5000 мАг",
    },
    {
        name: "Смартфон Google Pixel 7",
        price: "27,999 грн",
        image: "../image/Pixel7.png",
        description: "6.3\" AMOLED, Google Tensor G2, 128 ГБ, 50 МП камера, 4355 мАг",
    }
];

const wearables = [
    {
        name: "Смарт-годинник Apple Watch Series 8",
        price: "14,999 грн",
        image: "../image/Watch8.png",
        description: "GPS, 45mm, пульсометр, захист від води, до 18 годин роботи",
    },
    {
        name: "Фітнес-браслет Xiaomi Mi Band 7",
        price: "1,499 грн",
        image: "../image/MiBand7.png",
        description: "1.62\" AMOLED-дисплей, до 14 днів автономної роботи, пульсометр, моніторинг сну",
    },
    {
        name: "Смарт-годинник Samsung Galaxy Watch 5",
        price: "10,999 грн",
        image: "../image/GalaxyWatch5.png",
        description: "1.4\" AMOLED-дисплей, 44mm, GPS, захист від води (5 ATM), до 50 годин роботи",
    },
    {
        name: "Смарт-годинник Apple Watch Series 9",
        price: "18,999 грн",
        image: "../image/Watch9.png",
        description: "1.9\" Retina-дисплей, GPS, 44mm, пульсометр, до 36 годин роботи, захист від води (IPX7)",
    }
];
