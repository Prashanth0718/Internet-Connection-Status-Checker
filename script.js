const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
wifiIcon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
subTitle = wrapper.querySelector("p"),
closeIcon = wrapper.querySelector(".close-icon");

window.onload = () => {
    function ajax(){
        let xhr = new XMLHttpRequest(); //creating new xml object
        xhr.open("GET","https://jsonplaceholder.typicode.com/posts", true); //sending get request to this url
        xhr.onload = ()=>{//once ajax loaded
            //if the ajax status code is equal to 200 or less than 300 that mean user is getting data/response from the provided URL
            //or user is online so he/she is getting response or 200 status code
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "You're online now";
                subTitle.innerText = "Hurrry! Internet is connected.";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

                closeIcon.onclick = ()=>{
                    wrapper.classList.add("hide");
                }
                setTimeout(() => {
                    wrapper.classList.add("hide");
                }, 5000);
                //console.log("Online")
           } else {//user isn't online or may getting something other error
            // toast.classList.add("offline");
            offline();
           }
        }
        xhr.onerror = ()=>{//if passed url is incorrect or returning 404 or other error
            //console.log("Offline");
            offline();
        }
        xhr.send();
    }

    function offline(){
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Oops! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
        //console.log("Offline");
    }
    
    //lets put this ajax call inside setInterval function so we can all it after every 100ms
    //so we don't need to refresh the page to see the updated status
    setInterval(() => {
        ajax();
    }, 100);

    
}


