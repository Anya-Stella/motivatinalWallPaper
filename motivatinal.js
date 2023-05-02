class card{
    constructor(text, fontColor, pictureUrl, verticalPos, horizontalPos){
        this.text = text;
        this.fontColor = fontColor;
        this.pictureUrl = pictureUrl;
        this.verticalPos = verticalPos;
        this.horizontalPos = horizontalPos;
    }
}

function motivationalSpeechWallpaper(cardObject){
    //position名の変換
    const verticalPosition = {
        "top" : "flex-start",
        "center" : "center",
        "bottom" : "flex-end"
    }

    const horizontalPosition = {
        "left" : "flex-start",
        "center" : "center",
        "right" : "flex-end"
    }

    //外枠の作成
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");


    //背景画像の設定
    wrapper.style.backgroundImage = "url(" + cardObject.pictureUrl + ")";
    

    //文字の設定
    let text = document.createElement("h2");
    text.classList.add("text");
    wrapper.append(text);
    text.innerHTML = cardObject.text;
    text.style.color = "#" + cardObject.fontColor;


    //文字のポジション
    wrapper.style.justifyContent = verticalPosition[cardObject.verticalPos];
    wrapper.style.alignItems = horizontalPosition[cardObject.horizontalPos];
    

    return wrapper;
}


//domObjの取得とobjectの作成
let domObj = document.getElementById("target");

let card1 = new card("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");
let card2 = new card("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");
let card3 = new card("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");

//domObjに追加していく
domObj.append(motivationalSpeechWallpaper(card1));
domObj.append(motivationalSpeechWallpaper(card2));
domObj.append(motivationalSpeechWallpaper(card3));