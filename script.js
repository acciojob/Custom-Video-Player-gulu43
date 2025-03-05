/* Edit this file */
let player = document.querySelector('.player');
let video = player.querySelector('.viewer');
let progress = player.querySelector('.progress');
let progressBar = document.querySelector('.progress__filled');
// let pb = document.querySelector('#pb');
let toggle = player.querySelector('.toggle');
let skipButtons = player.querySelectorAll('[data-skip]');
let ranges = player.querySelectorAll('.player__slider');
let volume_var = player.querySelector('.volume');
let v_speed_var = player.querySelector('.v_speed');
let pre_var = player.querySelector('.pre');
let pos_var = player.querySelector('.pos');


// toggle part
toggle.addEventListener('click', ()=>{
    if (video.paused) {
        video.play();
        toggle.textContent="❚ ❚";
    }else{
        video.pause();
        toggle.textContent="►";
    }
});

// progess bar
video.addEventListener('timeupdate',(e)=>{   
    let curP = ((video.currentTime / video.duration) * 100);
    progressBar.style.width = `${curP}%`;
});

// volume
volume_var.addEventListener('change',(e)=>{
    video.volume = e.target.value;
    console.log(video.volume);
});

// seekbar
v_speed_var.addEventListener('change',(e)=>{
    video.playbackRate = parseFloat(e.target.value);
    console.log(video.playbackRate);
});
// buttons
pre_var.addEventListener('click',(e)=>{
    video.currentTime += parseFloat(pre_var.dataset.skip);
});
pos_var.addEventListener('click',(e)=>{
    video.currentTime += parseFloat(pos_var.dataset.skip);
});