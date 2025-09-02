const empathies = ["今日もよくがんばったね、ゆっくり休んでいいよ。","ちょっとひと息、心の重みをそっとおろそう。","今は無理しなくていいよ、そのままの君でいいから。","辛い気持ち、ちゃんとわかってるからね。","夜は長く続かないよ、明日はきっと晴れるから。","一人じゃないよ、そばにいるから安心してね。","自分を甘やかしてあげる時間も大事だよ。","無理せず、君のペースで歩いていこう。","曇りの日もあるけど、いつかまた青空が見えるよ。","そのままの君が、一番素敵だよ。",]
const appreciations = ["いつもほんとにおつかれさま、よくがんばってるよね。","キミの頑張りはちゃんと届いてるよ、ありがとう。","頑張りすぎないで、時にはリラックスしようね。","小さな一歩でも、確かに前に進んでるよ。","今日も精一杯だったね、自分をほめてあげて。","努力は着実に未来につながってるよ、信じて。","休むことも大切な頑張りだよ、ゆっくりしてね。","君の頑張りに、まわりのみんなが助けられてるよ。","辛かった日もあるけど、ちゃんと乗り越えたね。","心から「ありがとう」が伝わってるよ。"]
const thanks = ["いつもありがとう、君がいるから助かってるよ。","一緒にいると、未来がもっと楽しみになるね。","明日はきっともっといい日になるよ、信じよう。","感謝の気持ちを忘れずに、毎日を大切にしようね。","君と歩く未来が、わくわくしているよ。","これからも一緒に笑顔でいようね。","小さな幸せを感じる毎日が続きますように。","みんなの笑顔が、何よりの宝物だよね。","ありがとうの気持ちが、明日を明るくしてくれるよ。","希望を胸に、楽しい未来を一緒につくろう。"]
const button = document.querySelector("#button");
button.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * empathies.length);
    const index2 = Math.floor(Math.random() * appreciations.length);
    const index3 = Math.floor(Math.random() * thanks.length);
    const empathy = empathies[index1];
    const appreciation = appreciations[index2];
    const thank = thanks[index3];
    const message = `${name}
    ${empathy}
    ${appreciation}
    ${thank}`
    const output = document.querySelector("#output");
    output.textContent = message;
});
