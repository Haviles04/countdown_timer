

const setItem = (intName, int) => {
    document.getElementsByClassName(intName)[0].innerHTML = int;
}

const twoWeeks = new Date(Date.now() + 12096e5).getTime();

const calculateTime = () => {
    const now = new Date().getTime();
    const distance = twoWeeks - now;
 
    setItem("days", Math.floor(distance / (1000 * 60 * 60 * 24)));
    setItem("hours", Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setItem("minutes", Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setItem("seconds", Math.floor((distance % (1000 * 60)) / 1000));
}

setInterval(calculateTime, 1000);