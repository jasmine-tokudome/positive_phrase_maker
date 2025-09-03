const empathies = ["今日もよくがんばったね、ゆっくり休んで。","ちょっとひと息、心の重荷をそっとおろそう。","今は無理しないで。そのままの君でいて。","辛い気持ち、蓋をしなくてもいいんだよ。","一人じゃないよ、そばにいるからね。","自分を甘やかしてあげる時間も大事だよ。","周囲と比べないで、君のペースで歩いていこう。","そのままの君が、一番素敵だよ。",]
const thanks = ["ありがとう、いつも君の優しさに助けられているよ。","明日はどんな幸せが待ってるかな。","明日はきっともっといい日になるよ。","毎日を慈しんで幸せにね。","これからどんな幸せと出会うだろうって、わくわくしているよ。","これからも笑顔で過ごせますように。","小さな幸せを感じる毎日が続きますように。"]
const button = document.querySelector("#button");
button.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * empathies.length);
    const index3 = Math.floor(Math.random() * thanks.length);
    const empathy = empathies[index1];
    const thank = thanks[index3];
    const message = `${name}
    ${empathy}
    ${thank}`
    const output = document.querySelector("#output");
    output.textContent = message;
});
