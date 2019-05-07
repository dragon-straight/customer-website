const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://dragon-straight:8910JQKA@cluster0-dqpzz.mongodb.net/e-commerce';

const Product = require('./models/product');
const Category = require('./models/category');
const Manufacturer = require('./models/manufacturer');
const Customer = require('./models/customer');
const Order = require('./models/order');
const Admin = require('./models/admin');

mongoose.connect(mongoDB, function(error){
    if(error)
        throw error;

    console.log('Successfully connected');

    const mvcCategory = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: 'TF'
    });

    mvcCategory.save(function (error) {
        if(error) throw error;
        console.log('Category successfully saved');
    });

    const mvcManufacturer = new Manufacturer({
        _id: new mongoose.Types.ObjectId(),
        name: 'Pan'
    });

    mvcManufacturer.save(function(error){
        if(error) throw error;
        console.log('Manufacturer successfully saved');
    });

    const mvcProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: 'Pan Vigor 8 TF',
        manufacturer: mvcManufacturer._id,
        category: mvcCategory._id,
        img: '/abc',
        price: 400000,
        status: true,
        info:'Giày chính hãng\n Chất lượng cao'
    });

    mvcProduct.save(function (error) {
        if(error) throw error;
        console.log('Product successfully saved');
    });

    const mvcAdmin = new Admin({
        username: 'admin',
        password: '123',
        info:{
            name: 'Phạm Hoàng Minh',
            sdt: '0329093399',
            email: 'shine020198@gmail.com'
        }
    });

    mvcAdmin.password = mvcAdmin.generateHash(mvcAdmin.password);

    mvcAdmin.save(function (error) {
        if(error) throw error;
        console.log('Admin successfully saved');
    });

    const mvcCustomer = new Customer({
        username: 'dragon-straight',
        password: '78910JQKA',
        info:{
            name: 'Sảnh Rồng',
            address:'C306',
            sdt:'345678910',
            email:'sanhrong306@gmail.com'
        },
    });
    mvcCustomer.password = mvcCustomer.generateHash(mvcCustomer.password);

    mvcCustomer.save(function (error) {
        if(error) throw error;
        console.log('Customer successfully saved');
    });

    const mvcOrder = new Order({
       _id: new mongoose.Types.ObjectId(),
       infoCustomer: {
           name: 'Lưu Tuấn Nguyên',
           address: '170 Giang Tô',
           sdt: '12345678',
           email: 'nguyenluu211198@gmail.com',
       },
        payment: 'Ship COD',
        totalPrice: 500000,
        created: new Date('2019-05-01'),
        productList: [
            {
                name: 'Adidas Messi',
                price: 300000,
                quantity: 1
            },
            {
                name: 'Pan Vigor 8 TF',
                price: 200000,
                quantity: 1
            }
        ]
    });

    mvcOrder.save(function (error) {
        if(error) throw error;
        console.log('Order successfully saved');
    });
});


