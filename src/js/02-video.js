import throttle from "lodash.throttle";
// import player from "@vimeo/player";

    const STORAGE_KEY = "videoplayer-current-time";
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe); 

    function getLocalStorage (data){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds))};

    player.on('timeupdate', throttle(getLocalStorage,1000));
    const storage = localStorage.getItem(STORAGE_KEY);
    if (storage){
        player.setCurrentTime(JSON.parse(storage));
    }

    

    

    
