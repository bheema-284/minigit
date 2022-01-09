

async function getUser(user){
    try{
        let res = await fetch(`https://api.github.com/users/${user}`);

        let data = await res.json()
        return data
    }
    catch(el){
        console.log(el)
    }
}

export default getUser


// function appendData(data, location) {
//   data.forEach(({ title, image }) => {
//     let div = document.createElement('div');
//     let p = document.createElement('p');
//     p.innerText = title;
//     let img = document.createElement('img');
//     img.src = image;

//     div.append(img, p);

//     location.append(div);
//   });
// }

// export { getData, appendData };



// async function getUser(user) {
//   try {
//     let res = await fetch(`https://api.github.com/users/${user}`);

//     let data = await res.json();
//     return data;
//   } catch (el) {
//     console.log(el);
//   }
// }

// function appendData(response) {
//   let div = document.createElement('div');  
//   let img = document.createElement('img');
//   img.src = response.avatar_url;
//   img.height = '100%';
//   img.width = '100%';

//   div.append(img);

//   data_div.append(div);
// }
 


//  export default { getUser, appendData };