const counter = document.querySelectorAll(".counter .num");
let inbut = document.querySelectorAll(".real");
const btn = document.querySelectorAll(".btn");
let dec = 0;

// console.log(parseInt(inbut) +2)

// console.log(btn)

// console.log(btn)


// inbut.innerHTML =('566')
    counter.forEach((count) => {
        console.log(this);
        count.onclick = function () {
            
            count.innerHTML = parseInt(count.innerHTML - 1)
            if (count.innerHTML <= 0) {
                count.classList.add("done");
                count.innerHTML = 0     
            }

            
        }

        // dec = dec+1;
        // this.innerHTML = `${dec}`
        // if (ele.innerHTML !== counter.innerHTML) {
        //     console.log("yes");
        //     dec+=1
        //     inbut.innerHTML = `${dec}`

        //     inbut.innerHTML = counter.innerHTML
        //     // inbut.value = counter
        // }
        //  else {
        //     console.log(inbut.innerHTMl)
        //     // console.log(dec)
        //     dec+=1
        //     inbut.innerHTML = `${dec}`
        // }
    });



// btn.forEach((ele) => {
//     ele.onclick = change
//     // console.log(this);
//     // console.log(inbut);


//     // parseInt(counter) + 1
//     // parseInt(counter)
//     // counter.forEach((count) => {
//     // console.log(count);

//     //     // dec = dec+1;
//     //     count.innerHTML =  `${dec}`
//     //     // if (ele.innerHTML !== counter.innerHTML) {
//     //     //     console.log("yes");
//     //     //     dec+=1
//     //     //     inbut.innerHTML = `${dec}`

//     //     //     inbut.innerHTML = counter.innerHTML
//     //     //     // inbut.value = counter
//     //     // }
//     //     //  else {
//     //     //     console.log(inbut.innerHTMl)
//     //     //     // console.log(dec)
//     //     //     dec+=1
//     //     inbut.innerHTML = `${dec}`
//     // }
// });



