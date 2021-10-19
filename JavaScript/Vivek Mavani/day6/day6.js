function getdata() {

    fetch("http://127.0.0.1:5500/JavaScript/Vivek%20Mavani/day6/data.json")



        .then(result =>

            result.json()

        )



        .then(function (res) {

            console.log("set Data: ", res.products);



            localStorage.setItem("StoreJson", JSON.stringify(res.products));



            var local = localStorage.getItem("StoreJson");



            console.log('Data : ', JSON.parse(local));



        })

}
// function getdata() {

//    fetch('http://127.0.0.1:5500/Day6/Practice/Data.json')



// .then(response=> response.json())



// .then(function(data)

// {

// console.log(data);



// var obj=data;

// var local = localStorage.setItem("product",JSON.stringify(obj.products));

// for(i=0;i<obj.products.length;i++){

// console.log("Name of te product is "+data.products[i].Name+', Product Price is '+data.products[i].Price+'$ , Product Location '+data.products[i].Location);

// }

// })



// }

//getdata();

getdata();