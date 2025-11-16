// ! 3rd piller of OOP (Abstraction)

interface IMusicPlayer{
    play():void;
    pause():void;
    stop():void;
}

class MusicPlayer implements IMusicPlayer{
    play(): void {
        console.log('Music is playing');
    }
    pause(): void {
        console.log("Music is pause");
    }
    stop(): void {
        console.log("Music is stop now");
    }
}

const mxPlayer=new MusicPlayer;
// mxPlayer.pause();
// mxPlayer.play();
// mxPlayer.stop();

abstract class MediaPlayer{
   abstract play():void;
   abstract pause():void;
   abstract stop():void;
}

class QcPlayer extends MediaPlayer{
    play(): void {
        console.log("Music is playing....");
    };
    pause(): void {
        console.log("Music is pause....");
    }
    stop(): void {
        console.log("Music stopped")
    }
}

const player1=new QcPlayer;
player1.pause();
player1.play();
player1.stop();