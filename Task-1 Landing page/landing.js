const menuList = document.getElementById('menu-list');

const menuItems = [
    { name: 'Cappuccino', price: '$3.50' },
    { name: 'Latte', price: '$3.75' },
    { name: 'Mocha', price: '$4.00' },
    { name: 'Americano', price: '$3.00' },
    { name: 'Espresso', price: '$2.50' },
    { name: 'Hot Chocolate', price: '$3.25' },
    { name: 'Croissant', price: '$1.50' },
    { name: 'Blueberry Muffin', price: '$2.25' },
    { name: 'Ham and Cheese Sandwich', price: '$4.50' },
];

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} <span>${item.price