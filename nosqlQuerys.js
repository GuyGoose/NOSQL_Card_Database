// Read

// Finds Cards with the type 'Water'
db.Card.find(
    { "description.type" : { $eq : "Water" } } 
).pretty()

// Finds all Orders that arrived after 30/10/2022
db.Order.find(
    { 
        arrival_date : { $gt : ISOdate("2022-10-30T00:00:00Z") } 
    }
).pretty()

// Finds the number of Buyers whos id is not 'b1', does not have a Credit card
db.Buyer.find(
    {$or: [
        {_id: { $ne: "b1" } },
        {payment_details: { card_type: { $nin: ["Credit"] } } }
    ]}
).count()

// Finds all Orders that don't have any ordered cards in quantity 3 and sorts the output in ascending order
db.Order.find( 
    { 
        "description.quantity" : {$ne : 3} 
    }
).sort({"description.quantity": 1}).pretty()

    

// Update

// Updates Buyer 1's name, email and payment details
db.Buyer.update(
    {
        _id: 'b1'
    },
    {
        $set:{last_name: 'Sellmen', email : "Sellman@Johnmail.ie", payment_details : {card_name : "JohnSellmen"}}
    }
)

// Attempts to update a Seller 5 and if it can not it will instead upsert one
db.Seller.update(
    {
        _id: 's5'
    },
    {
        _id: 's5',
        seller_name: 'John Sellmen',
        region: 'Ireland',
        contact: 'Sellman@Johnmail.ie'
    },
    {upsert:true}

)
    

// Delete

// Removes Seller 2
db.Seller.remove( { _id : 's2' } )

// Removes Cards with the name "D.D. Crow"
db.Card.remove( { "description.name" : { $eq : "D.D. Crow" } } )

// Aggregate

// Shows each seller and the cards they sell in a field called "inventory_details"
db.Seller.aggregate([
    {
      $lookup:
        {
          from: "Card",
          localField: "_id",
          foreignField: "seller_id",
          as: "inventory_details"
        }
   }
]).pretty()

// Shows each cards name, defence and attack then sorts the output in decending order of the "attack value"
db.Card.aggregate([
    { $project: {
        _id: 0,
        description: {name: 1, attack: 1, defence: 1}
    } },
    { "$sort": { "description.attack": -1} }
])

// Groups together all sellers and returns the regions they belong to
db.Seller.aggregate([
    { $group: {
        _id : "$region"
    } }
])

db.Buyer.aggregate([
    { $group: {
        _id : "$shipping_address.country"
    } }
])