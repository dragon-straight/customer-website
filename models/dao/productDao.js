
const Product = require('../product');
const Category = require('../category');
const Manufacturer = require('../manufacturer');
const Customer = require('../customer');
const Order = require('../order');
const Admin = require('../admin');

//Get product list by manufacturer id
exports.get_Product_By_Manufacturer = id =>{
    let product = Manufacturer.find({_id: id, isDeleted: false}).then(manufacturerObject => {
       return Product.find({manufacturer: manufacturerObject, isDeleted: false}, '_id name img price');
    });
    return product;
};

//Get product list by category id
exports.get_Product_By_Category = id =>{
    let product = Category.find({_id: id, isDeleted: false}).then(categoryObject => {
        return Product.find({category: categoryObject, isDeleted: false}, '_id name img price');
    });
    return product;
};


//Get top 3 most sold product list
exports.get_Most_Sold = () => {
    return Product.find({isDeleted: false}, '_id name img price').sort({sale: -1}).limit(3);
};

//Get top 3 most viewed product list
exports.get_Most_Viewed = () => {
    return Product.find({isDeleted: false}, '_id name img price').sort({viewed: -1}).limit(3);
};

function getRandom(min, max){
  return Math.ceil(Math.random() * (max-min) + min);
};

//Slider
exports.get_Random_Product = () =>{
    let product = Product.countDocuments({}).then(count => {
            const skipRecord = getRandom(count - 7, count - 2);
            return Product.find({isDeleted: false}, '_id name price img').skip(skipRecord);
        });
    return product;
};

//get 7 Latest Product
exports.get_LatestProduct = () => {
    return Product.find({isDeleted: false}, '_id name img price').sort({releaseDate: -1}).limit(7);
};

//Get manufacturer
exports.get_Manufacturer = () =>{
    return Manufacturer.find({isDeleted: false}, '_id name img');
};

//Get category
exports.get_Category = () => {
  return Category.find({isDeleted: false}, '_id name');
};

//Get Product by id
exports.get_Product_By_Id = id => {
   return Product.find({_id: id, isDeleted: false}, '_id name img manufacturer price info');
};

//Get related product
exports.get_Related_Products =  manufacturerObject =>{
    console.log(manufacturerObject);
  return Product.find({manufacturer: manufacturerObject, isDeleted: false}, '_id name img price');
};




