const greetings = ["こうして想っているよ、大切な人","ふっと息をついたあなたへ","心を包みこみたい素敵なあなた","そっと寄り添いたい優しい人","あなたに静かに届けたい言葉があるよ"]
const states = ["いま心が少し重たいかもしれない","迷いの中を歩いているかもしれない","疲れて羽ばたけないように思えるかもしれない","不安で足元がぐらついているかもしれない","涙をこらえているかもしれない"
]
const hopeMessages = ["それでもあなたの中の光は消えていない","きっとやさしい時間が訪れる","あなたには寄り添う力がある","心の奥には必ず温かい灯りがある","新しい朝があなたを照らす"
]
const button = document.querySelector("#button");
button.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * greetings.length);
    const index2 = Math.floor(Math.random() * states.length);
    const index3 = Math.floor(Math.random() * hopeMessages.length);
    const greeting = greetings[index1];
    const state = states[index2];
    const hope = hopeMessages[index3];
    const message = `いま${greeting}、
    あなたは${state}けれど、
    ${hope}から大丈夫だよ。
    `
    const output = document.querySelector("#output");
    output.textContent = message;
});
