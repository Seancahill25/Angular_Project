/*global angular */
(function() {
    var app = angular.module('store', []);
    
    app.controller('StoreController', function() {
        this.products = cars;
    });
    
    var cars = [
        {
        type: 'Sedan',
        description: '...',
        price: 30.00,
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: "images/sedan.png",
                thumb: "",
            },
            {
                full: "images/suv.png",
                thumb: "",
            },
            {
                full: "",
                thumb: "",
            }]
    },
    {type: 'SUV',
        description: '...',
        price: 40.00,
        canPurchase: true,
        soldOut: false,
    }
];    
})();
