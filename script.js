const dreams = {
  "猫": { title: "猫の夢は、愛される予感", body: "自由でしなやかな猫は、あなたの魅力と直感の象徴。人に甘えることを少し許して、素直な気持ちを見せてみて。対人運がやさしく動き始めそうです。", hint: "ピンクの小物を身につける" },
  "好きな人": { title: "会いたい気持ちが、夢になったみたい", body: "好きな人が現れる夢は、恋するエネルギーが高まっているサイン。夢の中で楽しく過ごせたなら、現実でも距離が近づく小さなチャンスがありそう。", hint: "短いメッセージを送ってみる" },
  "海": { title: "海は、あなたの深い心の鏡", body: "穏やかな海なら心が整いつつある合図。荒れた海なら、抱え込んだ感情を休ませてあげて。どちらも心が次へ進もうとしている大切な夢です。", hint: "水辺をゆっくり散歩する" },
  "追いかけられる": { title: "ちょっとだけ、頑張りすぎかも", body: "追いかけられる夢は、期限や期待にプレッシャーを感じているサイン。逃げ切れたなら問題解決はもうすぐ。まずは自分のペースを取り戻して。", hint: "今日やらないことをひとつ決める" },
  "空を飛ぶ": { title: "新しい私へ、飛び立つタイミング", body: "空を飛ぶ夢は、自由への憧れと運気上昇のしるし。気持ちよく飛べたなら、新しい挑戦に追い風が吹いています。直感を信じて一歩踏み出して。", hint: "行きたい場所をメモする" }
};
const form = document.querySelector('#dream-form');
const input = document.querySelector('#dream-input');
const result = document.querySelector('#result');

function showResult(keyword) {
  const match = Object.keys(dreams).find(k => keyword.includes(k));
  const data = dreams[match] || { title: `「${keyword}」の夢が伝えること`, body: "その夢は、心の奥で育っている小さな気づきのサインかもしれません。夢で印象に残った色や気持ちをメモして、今の自分とゆっくり照らし合わせてみて。", hint: "夢の続きをノートに書く" };
  document.querySelector('#result-title').textContent = data.title;
  document.querySelector('#result-body').textContent = data.body;
  document.querySelector('#result-hint').textContent = data.hint;
  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
form.addEventListener('submit', e => { e.preventDefault(); const value = input.value.trim(); if(value) showResult(value); else { input.focus(); input.placeholder = 'キーワードを入力してね ♡'; } });
document.querySelectorAll('[data-keyword]').forEach(btn => btn.addEventListener('click', () => { input.value = btn.dataset.keyword; showResult(btn.dataset.keyword); }));
document.querySelector('.result-close').addEventListener('click', () => result.classList.remove('show'));
document.querySelectorAll('[data-mood]').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('[data-mood]').forEach(b => b.classList.remove('active')); btn.classList.add('active'); input.value = `${btn.dataset.mood}夢`; document.querySelector('#search').scrollIntoView({behavior:'smooth'}); setTimeout(() => input.focus(), 500); }));
