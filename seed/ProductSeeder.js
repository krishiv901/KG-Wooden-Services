var Product= require('../models/product')
var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/shoppingdb', { useNewUrlParser: true });
var products= [
    new Product({
         imagePath:'https://s3.ap-south-1.amazonaws.com/www.cimg.in/images/2018/03/08/02/141615541_15204945821_large.png',
        title:'Bed',
        description:'Madrid Queen bed with black and grey variants!!',
        price:20000}),

        new Product({
            imagePath:'https://www.sleepnumber.com/medias/?context=bWFzdGVyfGltYWdlc3wxMzY2NTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ5L2hiMS84ODQzMjU2NjU5OTk4LmpwZ3w0ODZlNjRiNDQ3MzBiOTQ5NjQ4M2ViMTY0ZmM1OTU0MjIzNDcwYjM0NDY4ODE0OGEwNzgzNzM0MmFhNWJiYzg0',
            title:'Bed',
            description:'sleepIQ bed for kids with adjustable feature!!',
            price:25000
        }),

        new Product({
            imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAphFqsDV4-kAMyk1VoYqS8-uRk34d9HyXzeq0_z8vl2Cnyg6muA',
            title:'Bed',
            description:'otio double bed with free side lamp!!!!',
            price:22000
        }),

        new Product({
            imagePath:'https://www.athome.com/dw/image/v2/AAYZ_PRD/on/demandware.static/-/Sites-AtHome/default/dwe012a4c9/images/124256912.jpg?sw=280&sh=280&sm=fit',
            title:'chair',
            description:'comfortable purple colour chair with silver and black variants',
            price:5000
        }),

        new Product({
            imagePath:'https://hivemodern.com/public_resources/wiggle-chair-frank-gehry-vitra-1.jpg',
            title:'chair',
            description:'wiggle chair that makes you feel as if you are way way into the future',
            price:6500
        }),

        new Product({
            imagePath:'https://cdn-images.article.com/products/SKU343/2890x1500/image34798.jpg?w=2890',
            title:'Sofa',
            description:'timber pebble grey sofa',
            price:8000
        }),

        new Product({
            imagePath:'https://hniesfp.imgix.net/8/images/detailed/123/2cr1.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress',
            title:'Sofa',
            description:'charm corner sofa',
            price:8500
        }),

        new Product({
            imagePath:'https://i.pinimg.com/236x/c4/52/07/c45207c014232e4e338544fa75fb2d9e--study-tables-study-desk.jpg',
            title:'StudyTable',
            description:'a wonderful study table that makes your child to study',
            price:9000
        }),

        new Product({
            imagePath:'https://ii1.pepperfry.com/media/catalog/product/g/e/494x544/genius-study-table-in-walnut-finish-by-godrej-interio-genius-study-table-in-walnut-finish-by-godrej--10snfz.jpg',
            title:'StudyTable',
            description:'walnut colour study table',
            price:11000
        })
    ]
    var done=0;
    for(var i=0;i<products.length;i++)
    {
        products[i].save(function(){
            done++;
            if(done===products.length)
             exit();
        })
    }
    function exit(){
        mongoose.disconnect()
    }
// Product.deleteMany({},function(err){
//     if(!err)
//     console.log("hello");
// });

// //mongoose.disconnect()