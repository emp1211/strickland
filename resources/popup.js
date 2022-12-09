//////   DISPLAY AND HIDE THE DROPDOWN NAV IN MOBILE   ///////

let isDroppedDown = false;
const dropdownMenu = document.getElementById("dropdown-nav");
const dropdownBtn = document.getElementById("dropdown-menu");
dropdownBtn.addEventListener("click", () => {
    if (!isDroppedDown) {
        dropdownMenu.style.display = 'flex';
        isDroppedDown = true;
    } else {
        dropdownMenu.style.display = 'none';
        isDroppedDown = false;
    }
});


//////   BANNER DROPDOWN AD   //////


setTimeout(() => {
    document.getElementById("ad").style.marginTop = '0';
}, "3000");

const deadline = Date.parse(new Date()) + 680752000;
const getRemainingTime = (endtime) => {
    const total = endtime - Date.parse(new Date());
    const secs = Math.floor( (total/1000) % 60);
    const mins = Math.floor( (total/1000/60) % 60 );
    const hrs = Math.floor( (total/(1000*60*60)) % 24 );
    return {total, hrs, mins, secs};
};

const renderCountdown = () => {    
    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");    
    const sec = document.getElementById("sec");    
    const refreshInterval = setInterval(() => {
        const time = getRemainingTime(deadline);
        hrs.textContent = ('0' + time.hrs).slice(-2);
        min.textContent = ('0' + time.mins).slice(-2);
        sec.textContent = ('0' + time.secs).slice(-2);
        if (time.total <= 0) {
            clearInterval(refreshInterval);
        }
    }, 1000); 
};

renderCountdown();