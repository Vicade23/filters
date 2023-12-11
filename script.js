const menu = [
    {
        id: 1,
        cartegory: 'Lunch',
        title: 'Diner Double',
        img: '/item-2.jpeg'
    },
    {
        id: 2,
        cartegory: 'Breakfast',
        title: 'Country Delight',
        img: '/item-4.jpeg'
    },
    {
        id: 3,
        cartegory: 'Lunch',
        title: 'Egg Attack',
        img: '/item-5.jpeg'
    },
    {
        id: 4,
        cartegory: 'Shakes',
        title: 'Oreo Dream',
        img: '/item-6.jpeg'
    },
    {
        id: 5,
        cartegory: 'Breakfast',
        title: 'Bacon Overflow',
        img: '/item-7.jpeg'
    },
    {
        id: 6,
        cartegory: 'Lunch',
        title: 'American Classic',
        img: '/item-8.jpeg'
    },
    {
        id: 7,
        cartegory: 'Shakes',
        title: 'Quarantine Buddy',
        img: '/item-9.jpeg'
    },
    {
        id: 8,
        cartegory: 'Dinner',
        title: 'Steak Dinner',
        img: '/item-10.jpeg'
    }
];

const sectionCenter = document.querySelector('.section');
const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded',()=>{
    displayMenuItems(menu)
})


filterBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const cartegory = e.currentTarget.dataset.id;
        const menuCartegory = menu.filter((menuItem)=>{
            if(menuItem.cartegory === cartegory) {
                return menuItem;
            }
        })
        if(cartegory === 'All') {
            displayMenuItems(menu);
        }
        else {
            displayMenuItems(menuCartegory)
        }
    })
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item)=>{
return `
<div class="card">
<div class="img">
    <img src=${item.img} alt=${item.title}>
    <h5>${item.title}</h5>
</div>
</div>
`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}