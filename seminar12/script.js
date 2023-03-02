const playVideo = document.querySelector('img#play');
const pauseVideo = document.querySelector('img#pause');
const stopVideo = document.querySelector('img#stop');
const forward = document.querySelector('img#forward');
const video = document.querySelector('video');
const scrollVideo = document.querySelector('progress');
const timeVideo = document.querySelector('span.currentTime');
const dVideo = document.querySelector('span.durationVideo');
const volume = document.querySelector('input[type=range]');

playVideo.onclick = () => {
    if (document.querySelector('div.cntEndVideo')) {
        document.querySelector('div.cntEndVideo').remove();
    }
    video.play();
}

//событие обновления времени вызываю функцию прогресс просмотра шкала зелененькая
video.addEventListener('timeupdate', updateProgressBar, false);

pauseVideo.onclick = () => {
    video.pause();

}

stopVideo.onclick = () => {
    video.pause();
    video.currentTime = 0; //останавливаю просмотр и текущему времени видео присваиваю ноль
}

forward.onclick = () => {
    video.currentTime += 30; //перемотка на 30 секунд
}

backward.onclick = () => {
    video.currentTime -= 30;
}

volume.onchange = (e) => {
    video.volume = e.target.value;
}


//функция заполнения шкалы просмотра видео
function updateProgressBar() {
    if (!isNaN(video.duration)) { //проверяю не NaN залетел в функцию

        let percentage = ((100 / video.duration) * video.currentTime);
        scrollVideo.value = percentage;
        //  scrollVideo.innerHTML = percentage + '% просмотрено';

    }
}

//прослушивание по окончанию видео
video.addEventListener('ended', nextVideo, false);

//функция просмотра других видео
function nextVideo() {
    const nextViewVideo = {
        1: {
            title_video: 'Выживший',
            desc_video: 'Фильм «Выживший» режиссёра А. Иньярриту – эпическая историческая драма, один из самых ожидаемых и обсуждаемых проектов 2015 года. Основанная на реальной истории американского колониста Хью Гласса, который сумел перенести тяжелое ранение и выжить в условиях дикой природы в одиночестве, эта история принесла своим создателям двенадцать номинаций на кинопремию «Оскар»',
            duration: '2:26:57',
            poster: 'https://images.kinorium.com/movie/shot/534575/w1500_48941617.jpg',
            linkFilm: 'https://scn-ural.ru/vyz.mp4'
        },
        "2": {
            title_video: 'Триннадцать',
            desc_video: 'Молодой парень по имени Винс случайно узнает быстрый способ разбогатеть. И, сам того не подозревая, ввязывается в смертельно опасную игру - русскую рулетку.',
            duration: '1:29:34',
            poster: 'http://media.filmz.ru/photos/full/f_54879.jpg',
            linkFilm: 'https://scn-ural.ru/13.mp4'
        }
    }

    if (!document.querySelector('div.cntEndVideo')) {
        createWindowEndedVideo(nextViewVideo);
        eventEndedVideo();
    }

}

//вешаю событие на кнопку реплэй
function eventEndedVideo() {
    const replayVideoImg = document.querySelector('.cntButtonReplay');
    replayVideoImg.onclick = () => {
        video.play();
        document.querySelector('div.cntEndVideo').remove();
    }
}

//создаю формы с картинкам и длительностью видео
function createWindowEndedVideo(arrayVideo) {
    const cntVideo = document.querySelector('div.contVideo');
    const cntEndVideo = document.createElement('div');
    cntEndVideo.classList.add('cntEndVideo');
    cntVideo.appendChild(cntEndVideo);


    const cntButtonReplay = document.createElement('div');
    cntButtonReplay.classList.add('cntButtonReplay');
    cntEndVideo.appendChild(cntButtonReplay);

    const imgReplay = document.createElement('img');
    imgReplay.src = './img/replay.png';
    imgReplay.width = '64';
    cntButtonReplay.appendChild(imgReplay);

    const labelReplay = document.createElement('div');
    labelReplay.textContent = 'Посмотреть сначала';
    cntButtonReplay.appendChild(labelReplay);

    if (arrayVideo) {
        for (let i in arrayVideo) {
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('videoContainer');
            cntEndVideo.appendChild(videoContainer);

            const poster_video = document.createElement('img');
            poster_video.classList.add('poster_video');
            poster_video.id = 'video' + i;
            poster_video.src = arrayVideo[i].poster;
            videoContainer.appendChild(poster_video);

            const durationNextVideo = document.createElement('div');
            durationNextVideo.classList.add('durVideo');
            durationNextVideo.textContent = arrayVideo[i].duration;
            videoContainer.appendChild(durationNextVideo);
            addEventsNextVideo('video' + i, i, arrayVideo);
        }
    }
}

//добавляю события при клике на другие видео
function addEventsNextVideo(videoClick, i, arrayVideo) {
    const idVideo = document.querySelector('#' + videoClick);

    idVideo.onclick = () => {
        video.src = arrayVideo[i].linkFilm;
        video.load();
        video.poster = arrayVideo[i].poster;
        video.play();
        document.querySelector('div.cntEndVideo').remove();
    }
}

//событие при клике по шкале прогресса просмотра
scrollVideo.addEventListener('click', seek);

function seek(e) {
    let percent = e.offsetX / this.offsetWidth;
    video.currentTime = percent * video.duration;
    e.target.value = Math.floor(percent / 100);
    //    e.target.innerHTML = scrollVideo.value + '% просмотрено';
}


//таймер показа в текстовом варианте сколько времени прошло с момента начала просмотра
setInterval(() => {

    let houres = Math.floor(video.currentTime / 60 / 60);
    let minutes = Math.floor(video.currentTime / 60 % 60);
    let seconds = Math.floor(video.currentTime % 60 % 60);
    let z = houres < 10 ? "0" + houres : houres;
    let x = minutes < 10 ? "0" + minutes : minutes;
    let y = seconds < 10 ? "0" + seconds : seconds;


    timeVideo.textContent = String(z).padStart(2, '0') + ':' + String(x).padStart(2, '0') + ':' + (y);
}, 600)



//загружаю метаданные видео его продолжительность
video.onloadedmetadata = () => {
 
    hour = Math.floor(video.duration / 60 / 60);
    min = Math.floor(video.duration / 60 % 60);
    sec = Math.floor(video.duration % 60 % 60);

    dVideo.textContent = String(hour).padStart(2, '0') + ':' + String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');

}