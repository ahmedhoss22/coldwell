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

const container = document.getElementById("property-list-container")

function drawPropertyData(){

    propertyData.forEach((ele) => {
        container.innerHTML += `
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="property-item rounded overflow-hidden">
            <div class="position-relative overflow-hidden">
                <a href="single-property.html?id=${ele.id}"><img class="img-fluid" src="${ele.img}" alt=""></a>
                <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For ${ele.type}</div>
                <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${ele.propertyType}</div>
            </div>
            <div class="p-4 pb-0">
                <h5 class="text-primary mb-3">${ele.price}</h5>
                <a class="d-block h5 mb-2" href="">${ele.name}</a>
                <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${ele.location}</p>
            </div>
            <div class="d-flex border-top">
                <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${ele.size}</small>
                <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${ele.beds}</small>
                <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${ele.bath}</small>
            </div>
        </div>
    </div>
        `
    })
    container.innerHTML += `<div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
        <a class="btn btn-primary py-3 px-5" href="">Browse More Property</a>
    </div>`
    
}


drawPropertyData()