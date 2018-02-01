/*global angular */
(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = cars;
    });
    var cars = [{
        type: 'Sedan',
        description: '...',
        price: 30.00,
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "images/sedan.png",
        }]
    }, {
        type: 'SUV',
        description: '...',
        price: 40.00,
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "images/suv.png",
        }]
    }, {
        type: 'Coupe',
        description: '...',
        price: 60.00,
        canPurchase: true,
        soldOut: false,
        images: [{
            full: "images/coupe.png",
        }]
    }];
})();