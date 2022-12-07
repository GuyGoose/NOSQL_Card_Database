use cardmarket

// Create

db.createCollection("Seller")

db.Seller.insert( { 
    _id : "s1",
    seller_name : "Anthony O'Keeffe",
    region : "Ireland",
    contact : "ant@okeeffe.ie"

    }
);

db.Seller.insertMany ( [ 

    {_id : "s2", seller_name : "John Norman", region : "North America", contact : "J@Norm.com"},
    {_id : "s3", seller_name : "Hanz Spielen", region : "Germany", contact : "Han@Speil.com"},
    {_id : "s4", seller_name : "Cian Farrell", region : "Ireland", contact : "cfarrell@email.ie"}

    ]
)

db.createCollection("Card")

db.Card.insert({

    _id : "c1",
    price : 0.90,
    seller_id : "s1",
    condition : "Near Mint",

    description : {
        name : "D.D. Crow",
        level : 1,
        type : "Dark",
        attribute : "Winged Beast",
        attack : 100,
        defence : 100
    }

    }
)

db.Card.insertMany ( [ 

    {   _id : "c2",
        price : 0.65,
        seller_id : "s1",
        condition : "Mint",
    
        description : {
            name : "Sanwitch",
            level : 6,
            type : "Dark",
            attribute : "Spellcaster",
            attack : 2100,
            defence : 1800
        }   },

    {   _id : "c3",
        price : 0.02,
        seller_id : "s1",
        condition : "Good",
    
        description : {
            name : "Sonic Duck",
            level : 3,
            type : "Wind",
            attribute : "Winged Beast",
            attack : 1700,
            defence : 700
        }   },

    {   _id : "c4",
        price : 1.20,
        seller_id : "s2",
        condition : "Near Mint",
    
        description : {
            name : "Frostosaurus",
            level : 6,
            type : "Water",
            attribute : "Dinosaur",
            attack : 2600,
            defence : 1700
        }   },

    {   _id : "c5",
        price : 0.35,
        seller_id : "s2",
        condition : "Near Mint",
    
        description : {
            name : "The Legendary Fisherman III",
            level : 7,
            type : "Water",
            attribute : "Warrior",
            attack : 2500,
            defence : 2000
        }   },

    {   _id : "c6",
        price : 0.10,
        seller_id : "s3",
        condition : "Poor",
    
        description : {
            name : "X-Krawler Synaphysis",
            level : 2,
            type : "Earth",
            attribute : "Insect",
            attack : 1800,
            defence : 0
        }   },

    {   _id : "c7",
        price : 3.50,
        seller_id : "s4",
        condition : "Mint",
    
        description : {
            name : "Contact C",
          level : 6,
            type : "Earth",
            attribute : "Insect",
            attack : 1500,
            defence : 2200
        }   },

    {   _id : "c8",
        price : 0.25,
        seller_id : "s4",
        condition : "Near Mint",
    
        description : {
            name : "Gunkan Suship Uni-Class Super-Dreadnought",
            level : 5,
            type : "Fire",
            attribute : "Aqua",
            attack : 2900,
            defence : 500
        }   },

    
    ]
) 

db.createCollection("Order")

db.Order.insertMany ( [ 
    { _id : "o1",
    sent_date : ISODate("2022-10-21T00:00:00Z"),
    arrival_date : ISODate("2022-10-28T00:00:00Z"),

    description : [

        {   product_id : "c1",
            quantity : 3
        },

        {   product_id : "c4",
            quantity : 2
        },

        {   product_id : "c6",
            quantity : 2
        },
    ]
    
    },

    { _id : "o2",
    sent_date : ISODate("2022-11-01T00:00:00Z"),
    arrival_date : ISODate("2022-11-15T00:00:00Z"),

    description : [
        
        {   product_id : "c8",
            quantity : 3
        },

        {   product_id : "c7",
            quantity : 1
        },

        {   product_id : "c5",
            quantity : 3
        },

        {   product_id : "c3",
            quantity : 3
        },
    ]
    
    },

    { _id : "o3",
    sent_date : ISODate("2022-10-21T00:00:00Z"),
    arrival_date : ISODate("2022-11-04T00:00:00Z"),

    description : [
        
        {   product_id : "c1",
            quantity : 3
        },

        {   product_id : "c2",
            quantity : 1
        },
    ]

    },

    { _id : "o4",
    sent_date : ISODate("2022-11-03T00:00:00Z"),
    arrival_date : ISODate("2022-11-09T00:00:00Z"),

    description : [
        
        {   product_id : "c8",
            quantity : 1
        },

        {   product_id : "c7",
            quantity : 2
        },
    ]

    },

    ] 
)

db.createCollection("Buyer")

db.Buyer.insertMany ( [ 
        {
            _id : "b1",
            first_name : "John",
            last_name : "Buymen",
            phone : 0871011001,
            email : "Buyman@Johnmail.ie",

            shipping_address : {
                line_1 : "John Street",
                line_2 : "Waterford",
                country : "Ireland",
                eircode : "X00 X001"
            },

            payment_details : {
                card_type : "Debit",
                card_name : "JohnBuymen",
                card_number : "1000 2000 3333 4000",
                card_expiry : ISODate("2024-10-01T00:00:00Z")
            }
        },

        {
            _id : "b2",
            first_name : "Conor",
            last_name : "Gleeson",
            phone : 0870680000,
            email : "Conor@Glee.ie",

            shipping_address : {
                line_1 : "Down Street",
                line_2 : "Kilkenny",
                country : "Ireland",
                eircode : "X00 X002"
            },

            payment_details : {
                card_type : "Debit",
                card_name : "ConorGleeson",
                card_number : "1100 3450 3333 0900",
                card_expiry : ISODate("2024-03-30T00:00:00Z")
            }
        },

        {
            _id : "b3",
            first_name : "Roy",
            last_name : "Chan",
            phone : 0949090909,
            email : "Roy@chanmail.com",

            shipping_address : {
                line_1 : "Nine Street",
                line_2 : "Hong Kong",
                country : "China",
                eircode : "X77 X777"
            },

            payment_details : {
                card_type : "Credit",
                card_name : "RoyChan",
                card_number : "7070 0707 4444 7070",
                card_expiry : ISODate("2023-01-01T00:00:00Z")
            }
        },

        {
            _id : "b4",
            first_name : "Jeremy",
            last_name : "Elbertson",
            phone : 0979999999,
            email : "Jerman985@twitch.tv",

            shipping_address : {
                line_1 : "Green Street",
                line_2 : "Las Vegas",
                country : "North America",
                eircode : "AAE EOOO"
            },

            payment_details : {
                card_type : "Debit",
                card_name : "MrGreen",
                card_number : "0001 0001 1111 0001",
                card_expiry : ISODate("2030-01-01T00:00:00Z")
            }
        },

    ]
)

db.createCollection("Bundle")

db.Bundle.insertMany( [
    
    {
        _id : "bu1",
        ordered_date : ISODate("2022-10-19T00:00:00Z"),
        buyer_id : "b1",

        order_line : [
            
            {   order_id : "o1",
            },

            {   order_id : "o3",
            },
        ]
    },

    {
        _id : "bu2",
        ordered_date : ISODate("2022-10-30T00:00:00Z"),
        buyer_id : "b2",

        order_line : [
            
            {   order_id : "o2",
            },
        ]
    },

    {
        _id : "bu3",
        ordered_date : ISODate("2022-11-02T00:00:00Z"),
        buyer_id : "b3",

        order_line : [
            
            {   order_id : "o4",
            },
        ]
    },
    ]
)

