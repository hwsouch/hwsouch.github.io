const str = "abracadabra"

let subs = [];
for(let i=0; i<= "abracadabra".length; i++)  {
    for(let n=0; n<= "abracadabra".length - i; n++) {
        // console.log(str.substr(i,n));  0~abracadabraの長さまで
        let s =str.substr(i,n);
        if(!subs.includes(s)) {
            subs.push(s);

        }
    }    
}    

        console.log(subs.length);
        console.log(str.substr(0,1));
        console.log(str.substr(5,9));