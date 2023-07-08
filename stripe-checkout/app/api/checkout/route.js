const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async(req,res) => {
    let lineItems = []
    console.log(req.body.items)
    const items = req.body.items
    items.forEach((item) => {
        lineItems.push({price:item.id,quantity:item.quantity})
    })

    const session = await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url:'http://localhost:3000/sucess',
        cancel_url:'http://localhost:3000/cancel'
    })

    res.send(JSON.stringify({
        url:session.url
    }))
}