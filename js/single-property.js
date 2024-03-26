const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const heroContainer = document.getElementById("property-heroImage")
const propertyTitle =document.getElementById("property-title")

const propertyData = [
    {
        id: 1,
        img: "img/property-1.jpg",
        price: "EG12,345",
        name: "Golden Urban House For Sell",
        location: "جرين بلازا بجوار مطعم ابوراوية,EGYPT",
        size: "1000 Sqft",
        beds: "3 Bed",
        bath: "2 Bath",
        type: "Sell",
        propertyType: "Appartment"
    },
    {
        id: 2,
        img: "img/property-2.jpg",
        price: "EG12,345",
        name: "Golden Urban House For Sell",
        location: "جرين بلازا بجوار مطعم ابوراوية,EGYPT",
        size: "1000 Sqft",
        beds: "3 Bed",
        bath: "2 Bath",
        type: "Rent",
        propertyType: "Villa"
    },
    {
        id: 3,
        img: "img/property-3.jpg",
        price: "EG12,345",
        name: "Golden Urban House For Sell",
        location: "جرين بلازا بجوار مطعم ابوراوية,EGYPT",
        size: "1000 Sqft",
        beds: "3 Bed",
        bath: "2 Bath",
        type: "Sell",
        propertyType: "Office"
    },
    {
        id: 4,
        img: "img/property-4.jpg",
        price: "EG12,345",
        name: "Golden Urban House For Sell",
        location: "جرين بلازا بجوار مطعم ابوراوية,EGYPT",
        size: "1000 Sqft",
        beds: "3 Bed",
        bath: "2 Bath",
        type: "Rent",
        propertyType: "Building"
    },
    {
        id: 5,
        img: "img/property-5.jpg",
        price: "EG12,345",
        name: "Golden Urban House For Sell",
        location: "جرين بلازا بجوار مطعم ابوراوية,EGYPT",
        size: "1000 Sqft",
        beds: "3 Bed",
        bath: "2 Bath",
        type: "Sell",
        propertyType: "Home"
    },
    {
        id: 6,
        img: "img/property-6.jpg",
        price: "EG12,345",
        name: "Golden Urban House For Sell",
        location: "جرين بلازا بجوار مطعم ابوراوية,EGYPT",
        size: "1000 Sqft",
        beds: "3 Bed",
        bath: "2 Bath",
        type: "Rent",
        propertyType: "Shop"
    }
];

let property = propertyData.find((ele)=>ele.id == id)
console.log(property);
heroContainer.innerHTML=`
<img src="${property.img}" class="hero-image-property" alt="Property Image"/>
`
propertyTitle.innerHTML=`
<h5> ${property.name}
</h5>
<p>${property.location}</p>
<p>
<span>${property.price}</span> Max price <span> 33,656,000 EGP</span>
</p>
`