// // Download Image Or file
// const linksButton =  document.querySelectorAll("[data-download]");


// linksButton.forEach(button =>{
//     const id = button.dataset.download;
//     const image = document.getElementById(id)
//     const a = document.createElement('a');


//     a.href = image.src;
//     a.download='';
//     a.style.display = 'none';
//     console.log(a)


//     button.addEventListener('click' , function(){
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     })
// });




const LinksFile = document.querySelectorAll("[data-download]")
console.log(LinksFile)

LinksFile.forEach(button =>{
    const id = button.dataset.download;
    const file = document.getElementById(id);

    file.download ="";
    file.style.display = "none";

    button.addEventListener('click' , function(){
        document.body.appendChild(file)
        file.click();
        document.body.removeChild(file)
    })
});