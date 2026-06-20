# falkadeh1099
آینده در دستان شماست با  فالکده محسن پاشا 

<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --nr:#FF3333;--no:#FF9933;--ny:#FFFF33;--nb:#0A0A0A;
  --nt:#FFFFFF;--na:rgba(255,51,51,0.35);
}
#fal-root{
  font-family:'Vazirmatn',sans-serif;
  background:#0A0A0A;
  color:#fff;
  min-height:600px;
  border-radius:14px;
  padding:1.5rem;
  direction:rtl;
  text-align:right;
  position:relative;
  overflow:hidden;
  border:1px solid var(--na);
  animation:nbp 8s linear infinite;
}
@keyframes nbp{
  0%,100%{box-shadow:0 0 10px var(--nr),0 0 20px rgba(255,51,51,0.2)}
  33%{box-shadow:0 0 10px var(--no),0 0 20px rgba(255,153,51,0.2)}
  66%{box-shadow:0 0 10px var(--ny),0 0 20px rgba(255,255,51,0.1)}
}
.stars{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;z-index:0}
.star{position:absolute;background:#fff;border-radius:50%;animation:twinkle var(--d,3s) infinite}
@keyframes twinkle{0%,100%{opacity:0.2}50%{opacity:1}}
#fal-inner{position:relative;z-index:1}
h1{font-size:2rem;font-weight:700;color:var(--nr);text-shadow:0 0 15px var(--ny);text-align:center;margin-bottom:0.25rem}
.sub{text-align:center;color:var(--no);font-size:0.85rem;margin-bottom:1.5rem;opacity:0.8}
.inp{width:100%;padding:0.65rem 0.8rem;background:rgba(255,255,255,0.08);border:1px solid var(--na);border-radius:8px;color:#fff;font-family:'Vazirmatn',sans-serif;font-size:1rem;transition:border 0.3s}
.inp:focus{outline:none;border-color:var(--nr);box-shadow:0 0 8px var(--nr)}
.inp::placeholder{color:rgba(255,255,255,0.4)}
label{display:block;color:var(--ny);font-size:0.85rem;margin-bottom:0.4rem}
.mb1{margin-bottom:1rem}
.svc-grid{display:flex;flex-wrap:wrap;gap:0.4rem;justify-content:center;margin-bottom:0.5rem}
.svc-cat{font-size:0.8rem;color:var(--no);margin:0.75rem 0 0.35rem;text-align:center}
.svc-btn{padding:0.3rem 0.75rem;border-radius:20px;border:1px solid var(--na);background:rgba(255,255,255,0.07);color:#fff;cursor:pointer;font-family:'Vazirmatn',sans-serif;font-size:0.85rem;transition:all 0.25s}
.svc-btn:hover{background:var(--ny);color:#000;border-color:var(--ny)}
.svc-btn.active{background:var(--nr);color:#000;border-color:var(--nr);font-weight:700;box-shadow:0 0 8px var(--nr)}
.main-btn{width:100%;padding:0.8rem;background:linear-gradient(45deg,var(--no),var(--nr));color:#fff;border:none;border-radius:8px;font-family:'Vazirmatn',sans-serif;font-size:1.05rem;font-weight:700;cursor:pointer;transition:all 0.3s;animation:pglow 3s infinite;margin-top:0.75rem}
.main-btn:hover:not(:disabled){transform:translateY(-2px);filter:brightness(1.15)}
.main-btn:disabled{opacity:0.5;cursor:wait;animation:none}
@keyframes pglow{0%,100%{box-shadow:0 0 12px rgba(255,51,51,0.5)}50%{box-shadow:0 0 22px rgba(255,153,51,0.7)}}
.result-box{margin-top:1.25rem;padding:1.2rem;border:1px dashed var(--na);border-radius:10px;background:rgba(255,255,255,0.04);animation:rev 0.6s ease}
@keyframes rev{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.res-title{color:var(--nr);font-size:1.2rem;font-weight:700;margin-bottom:1rem;border-bottom:1px solid var(--na);padding-bottom:0.5rem}
.res-body{white-space:pre-wrap;line-height:1.9;font-size:0.97rem;color:#eee}
.cursor{display:inline-block;width:2px;height:1em;background:var(--nr);animation:blink 0.7s infinite;vertical-align:text-bottom;margin-right:2px}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.spin{width:32px;height:32px;border:3px solid rgba(255,255,255,0.15);border-top:3px solid var(--nr);border-radius:50%;animation:spin 1s linear infinite;margin:2rem auto}
@keyframes spin{to{transform:rotate(360deg)}}
.err{color:#ff8080;background:rgba(255,51,51,0.1);border:1px solid #ff3333;padding:0.7rem;border-radius:8px;margin-top:0.75rem;font-size:0.9rem}
.back-btn{background:transparent;border:1px solid var(--na);color:var(--ny);padding:0.35rem 0.75rem;border-radius:8px;cursor:pointer;font-family:'Vazirmatn',sans-serif;font-size:0.8rem;margin-bottom:1rem;transition:all 0.25s}
.back-btn:hover{border-color:var(--nr);color:var(--nr)}
.user-lbl{font-size:1rem;color:#ccc;margin-bottom:1rem}
.poem-box{border-right:3px solid var(--no);padding-right:1rem;margin-bottom:1rem;color:#ffd9a8;font-size:1rem;line-height:2.2;white-space:pre-wrap}
.outro{font-style:italic;color:var(--ny);font-size:0.82rem;text-align:center;margin-top:1.25rem;padding-top:0.75rem;border-top:1px dashed var(--na);opacity:0.8}
.copy-btn{background:transparent;border:1px solid var(--nr);color:var(--nr);padding:0.4rem 0.9rem;border-radius:8px;cursor:pointer;font-family:'Vazirmatn',sans-serif;font-size:0.85rem;transition:all 0.25s;margin-top:1rem}
.copy-btn:hover{background:var(--nr);color:#000}
.ta{width:100%;padding:0.65rem 0.8rem;background:rgba(255,255,255,0.08);border:1px solid var(--na);border-radius:8px;color:#fff;font-family:'Vazirmatn',sans-serif;font-size:0.95rem;resize:vertical;min-height:90px;transition:border 0.3s}
.ta:focus{outline:none;border-color:var(--nr);box-shadow:0 0 8px var(--nr)}
.abjad-box{background:rgba(255,255,51,0.07);border:1px solid rgba(255,255,51,0.3);border-radius:10px;padding:1rem;text-align:center;margin-top:0.5rem}
.abjad-num{font-size:3rem;color:var(--ny);font-weight:700;text-shadow:0 0 10px var(--ny)}
.abjad-lbl{font-size:0.85rem;color:rgba(255,255,255,0.6);margin-top:0.25rem}
</style>
<div id="fal-root">
  <div class="stars" id="stars-container"></div>
  <div id="fal-inner">
    <h1>فالکده محسن پاشا</h1>
    <div class="sub">دروازه‌ای به سوی اسرار کائنات</div>
    <div id="fal-app"></div>
  </div>
</div>

<script>
(function(){
const abjadMap={'ا':1,'أ':1,'إ':1,'آ':1,'ب':2,'ج':3,'د':4,'ه':5,'ة':5,'و':6,'ز':7,'ح':8,'ط':9,'ی':10,'ي':10,'ک':20,'ك':20,'ل':30,'م':40,'ن':50,'س':60,'ع':70,'ف':80,'ص':90,'ق':100,'ر':200,'ش':300,'ت':400,'ث':500,'خ':600,'ذ':700,'ض':800,'ظ':900,'غ':1000,' ':0};
function calcAbjad(t){let s=0;for(const c of t)s+=abjadMap[c]||0;return s;}

const stars=document.getElementById('stars-container');
for(let i=0;i<60;i++){
  const s=document.createElement('div');
  s.className='star';
  const sz=Math.random()*2.5+0.5;
  s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${(Math.random()*4+2).toFixed(1)}s;animation-delay:${(Math.random()*4).toFixed(1)}s`;
  stars.appendChild(s);
}

const services=[
  {id:'hafez',name:'فال حافظ',cat:'فال‌های متنی',inp:false,prompt:(n)=>`شما یک فالگیر و استاد شعر حافظ هستید به نام محسن پاشا. برای ${n||'بیننده'}، یک غزل از حافظ بخوان و سپس تفسیر عمیق و عرفانی آن را بنویس. ابتدا شعر را بنویس (۴-۶ بیت کامل)، سپس یک خط خالی بگذار و بعد تفسیر عرفانی بنویس. تفسیر باید گرم، الهام‌بخش و کامل باشد.`},
  {id:'tarot',name:'فال تاروت (۳ کارت)',cat:'فال‌های متنی',inp:false,prompt:(n)=>`شما محسن پاشا، استاد کارت‌های تاروت هستید. برای ${n||'بیننده'} سه کارت از دسته سرنوشت بکش: یکی برای گذشته، یکی برای حال و یکی برای آینده. برای هر کارت: نام کارت (فارسی)، جایگاه، و تفسیر عمیق بنویس. در پایان نتیجه‌گیری کلی بنویس.`},
  {id:'coffee',name:'فال قهوه',cat:'فال‌های متنی',inp:false,prompt:(n)=>`شما محسن پاشا هستید و با تخیل قوی خود، فنجان قهوه ${n||'بیننده'} را می‌بینید. نمادها و اشکالی را که در فنجان می‌بینی توصیف کن و تفسیر عرفانی و کامل آن‌ها را بنویس. فضای تخیلی و رازآلود ایجاد کن.`},
  {id:'abjad',name:'فال ابجد',cat:'فال‌های متنی',inp:true,inputPrompt:'نیت یا سوال خود را بنویسید:',prompt:(n,i)=>`شما محسن پاشا، استاد علم ابجد هستید. نیت "${i}" را با علم ابجد تفسیر کن. توضیح بده که عدد ابجد این نیت چیست و چه معنایی دارد. سپس پیام عرفانی کاملی برای ${n||'بیننده'} بنویس.`},
  {id:'dream',name:'تعبیر خواب',cat:'فال‌های متنی',inp:true,inputPrompt:'خواب خود را شرح دهید:',prompt:(n,i)=>`شما محسن پاشا، استاد تعبیر خواب هستید. خواب "${i}" را برای ${n||'بیننده'} با زبانی عرفانی و عمیق تعبیر کن. نمادها را توضیح بده و پیام اصلی خواب را آشکار کن.`},
  {id:'month',name:'فال ماهانه',cat:'فال‌های متنی',inp:true,inputPrompt:'نام ماه مورد نظر را بنویسید:',prompt:(n,i)=>`شما محسن پاشا هستید. برای ماه ${i}، راهنمایی کامل عرفانی برای ${n||'بیننده'} در زمینه‌های شغلی، عاطفی و مالی بنویس.`},
  {id:'yesno',name:'فال بله/خیر',cat:'فال‌های متنی',inp:true,inputPrompt:'سوال تک‌نیتی خود را بنویسید:',prompt:(n,i)=>`شما محسن پاشا هستید. به سوال "${i}" از ${n||'بیننده'} با یک کلمه (بله یا خیر) و سپس توضیح حکیمانه پاسخ بده.`},
  {id:'wealth',name:'فال ثروت',cat:'فال‌های متنی',inp:false,prompt:(n)=>`شما محسن پاشا هستید. درباره آینده مالی و مسیر برکت ${n||'بیننده'} صحبت کن. فرصت‌های مالی، چالش‌ها و راه‌های رسیدن به فراوانی را با زبانی عرفانی بیان کن.`},
  {id:'emotional',name:'فال عاطفی',cat:'فال‌های متنی',inp:false,prompt:(n)=>`شما مینا پاشا هستید، بانوی اسرار عاطفی. برای ${n||'بیننده'} راهنمایی عاطفی عمیق ارائه کن. وضعیت کنونی قلبش، چالش‌های رابطه، و نور امید پیش رو را با لحنی مهربان بیان کن.`},
  {id:'hidden',name:'پشت پرده چیست؟',cat:'فال‌های متنی',inp:false,prompt:(n)=>`شما محسن پاشا، بینای رازهای نهان هستید. برای ${n||'بیننده'} مهم‌ترین حقایق پنهان در سه حوزه اصلی زندگی‌اش را آشکار کن: ۱. رشد شخصی و روحی ۲. روابط عاطفی و اجتماعی ۳. مسیر شغلی و مالی. پاسخی جامع و روشنگر بده.`},
  {id:'abjad_calc',name:'محاسبه ابجد',cat:'محاسبات عرفانی',inp:true,inputPrompt:'کلمه یا عبارت مورد نظر را بنویسید:',clientSide:true},
  {id:'astro',name:'طالع‌بینی (ماه تولد)',cat:'محاسبات عرفانی',inp:true,inputPrompt:'ماه تولد خود را بنویسید:',prompt:(n,i)=>`شما محسن پاشا هستید. برای کسی که در ماه ${i} متولد شده، خصوصیات شخصیتی، نقاط قوت، چالش‌ها، توتم حیوانی و ستاره راهنما را با زبانی عرفانی توصیف کن.`},
];

let state={screen:'main',userName:'',selectedService:null,userInput:'',loading:false,result:null,error:null,streaming:'',copied:false};

function render(){
  const app=document.getElementById('fal-app');
  if(state.screen==='main') app.innerHTML=renderMain();
  else if(state.screen==='service') app.innerHTML=renderService();
  bindEvents();
}

function renderMain(){
  const cats=[...new Set(services.map(s=>s.cat))];
  return `
    <div class="mb1">
      <label>نام شما</label>
      <input class="inp" id="inp-name" type="text" placeholder="اسمتان را وارد کنید..." value="${escHtml(state.userName)}">
    </div>
    ${cats.map(cat=>`
      <div class="svc-cat">${escHtml(cat)}</div>
      <div class="svc-grid">
        ${services.filter(s=>s.cat===cat).map(s=>`<button class="svc-btn" data-id="${s.id}">${escHtml(s.name)}</button>`).join('')}
      </div>
    `).join('')}
    <div class="outro" style="margin-top:1.5rem">
      نام خود را وارد کنید، سرویس مورد نظر را انتخاب کنید و رازهای کائنات را بگشایید.
    </div>
  `;
}

function renderService(){
  const svc=state.selectedService;
  if(!svc) return '';
  if(svc.clientSide && svc.id==='abjad_calc'){
    const val=state.userInput;
    const num=val?calcAbjad(val):null;
    return `
      <button class="back-btn" id="btn-back">← بازگشت</button>
      <div class="user-lbl">نام شما: ${escHtml(state.userName)}</div>
      <div class="mb1">
        <div class="res-title">${escHtml(svc.name)}</div>
        <label>${escHtml(svc.inputPrompt)}</label>
        <input class="inp" id="inp-svc" type="text" placeholder="..." value="${escHtml(state.userInput)}">
      </div>
      ${num!==null?`
        <div class="abjad-box">
          <div class="abjad-num">${num}</div>
          <div class="abjad-lbl">عدد ابجد «${escHtml(val)}»</div>
        </div>
        <div class="result-box" style="margin-top:1rem">
          <div class="res-body" style="text-align:center;line-height:2">
            ${getAbjadMeaning(num)}
          </div>
        </div>
      `:''}
    `;
  }
  return `
    <button class="back-btn" id="btn-back">← بازگشت</button>
    <div class="user-lbl">نام شما: ${escHtml(state.userName||'...')}</div>
    <div class="mb1">
      <div class="res-title">${escHtml(svc.name)}</div>
      ${svc.inp?`
        <label>${escHtml(svc.inputPrompt)}</label>
        <textarea class="ta" id="inp-svc" placeholder="...">${escHtml(state.userInput)}</textarea>
      `:''}
    </div>
    <button class="main-btn" id="btn-get" ${state.loading?'disabled':''}>
      ${state.loading?'در حال ارتباط با پاشا...':'دریافت فال ✦'}
    </button>
    ${state.error?`<div class="err">${escHtml(state.error)}</div>`:''}
    ${state.loading?`<div class="spin"></div>`:''}
    ${state.result?renderResult():''}
    ${state.streaming&&!state.result?`
      <div class="result-box">
        <div class="res-title">${escHtml(svc.name)}</div>
        <div class="res-body">${escHtml(state.streaming)}<span class="cursor"></span></div>
      </div>
    `:''}
  `;
}

function getAbjadMeaning(n){
  if(n<=9) return `عدد ${n} نماد نیرو و آغاز است. این عدد نشانه‌ای از تازگی و شروع راهی نو دارد.`;
  const d=n%9||9;
  const meanings={1:'آغاز، رهبری، اراده',2:'همکاری، تعادل، صبر',3:'خلاقیت، شادی، بیان',4:'ثبات، عملگرایی، پشتکار',5:'آزادی، تحول، ماجراجویی',6:'هماهنگی، عشق، مسئولیت',7:'خرد، عمق، معنویت',8:'قدرت، فراوانی، موفقیت',9:'کمال، بخشش، روشنگری'};
  return `عدد ابجد شما ${n} است. این عدد به عدد کاباله ${d} (${meanings[d]}) تبدیل می‌شود.\n\nپیام پاشا: ${meanings[d]}، این است راز نهفته در نیت شما.`;
}

function renderResult(){
  const text=state.result||'';
  let parts=text.split('---');
  let poem='',interp='';
  if(parts.length>=2&&state.selectedService?.id==='hafez'){poem=parts[0].trim();interp=parts.slice(1).join('---').trim();}
  else interp=text;
  return `
    <div class="result-box">
      <div class="res-title">${escHtml(state.selectedService?.name||'نتیجه')}</div>
      ${poem?`<div class="poem-box">${escHtml(poem)}</div>`:''}
      <div class="res-body">${escHtml(interp)}</div>
      <div class="outro">از اینکه فالکده محسن پاشا را انتخاب کردید، سپاسگزارم.</div>
      <button class="copy-btn" id="btn-copy">${state.copied?'کپی شد! ✓':'کپی متن'}</button>
    </div>
  `;
}

function escHtml(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

function bindEvents(){
  document.querySelectorAll('.svc-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const nm=document.getElementById('inp-name')?.value||'';
      if(!nm.trim()){alert('لطفاً ابتدا نام خود را وارد کنید.');return;}
      state.userName=nm;
      const svc=services.find(s=>s.id===btn.dataset.id);
      state.selectedService=svc;
      state.screen='service';
      state.result=null;state.error=null;state.streaming='';state.userInput='';state.loading=false;
      render();
    });
  });
  const nameInp=document.getElementById('inp-name');
  if(nameInp) nameInp.addEventListener('input',e=>state.userName=e.target.value);
  const btnBack=document.getElementById('btn-back');
  if(btnBack) btnBack.addEventListener('click',()=>{state.screen='main';state.result=null;state.error=null;state.streaming='';render();});
  const svcInp=document.getElementById('inp-svc');
  if(svcInp){
    svcInp.addEventListener('input',e=>{
      state.userInput=e.target.value;
      if(state.selectedService?.clientSide) render();
    });
  }
  const btnGet=document.getElementById('btn-get');
  if(btnGet) btnGet.addEventListener('click',getFal);
  const btnCopy=document.getElementById('btn-copy');
  if(btnCopy) btnCopy.addEventListener('click',()=>{
    navigator.clipboard.writeText(state.result||'');
    state.copied=true;render();setTimeout(()=>{state.copied=false;render();},2000);
  });
}

async function getFal(){
  const svc=state.selectedService;
  if(!svc) return;
  if(!state.userName.trim()){state.error='لطفاً نام خود را وارد کنید.';render();return;}
  if(svc.inp&&!state.userInput.trim()){state.error='لطفاً فیلد مورد نظر را پر کنید.';render();return;}
  state.loading=true;state.error=null;state.result=null;state.streaming='';
  render();
  const prompt=svc.prompt(state.userName,state.userInput);
  try{
    const resp=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-6',
        max_tokens:1000,
        system:'شما محسن پاشا یا مینا پاشا هستید، یک فالگیر و حکیم عرفانی فارسی‌زبان. همیشه به زبان فارسی و با لحنی عمیق، عرفانی و گرم پاسخ دهید. پاسخ‌های شما باید کامل، جامع و الهام‌بخش باشند.',
        messages:[{role:'user',content:prompt}],
        stream:true
      })
    });
    if(!resp.ok){const e=await resp.json();throw new Error(e.error?.message||'خطا در ارتباط با API');}
    const reader=resp.body.getReader();const dec=new TextDecoder();
    let buf='';
    while(true){
      const{done,value}=await reader.read();
      if(done) break;
      buf+=dec.decode(value,{stream:true});
      const lines=buf.split('\n');buf=lines.pop();
      for(const line of lines){
        if(!line.startsWith('data:')) continue;
        const data=line.slice(5).trim();
        if(data==='[DONE]') continue;
        try{
          const j=JSON.parse(data);
          if(j.type==='content_block_delta'&&j.delta?.text){
            state.streaming+=j.delta.text;
            render();
          }
        }catch(e){}
      }
    }
    state.result=state.streaming;state.streaming='';state.loading=false;
    render();
  }catch(e){
    state.loading=false;state.error='خطا: '+e.message;
    render();
  }
}

render();
})();
</script>


https://github.com/user-attachments/assets/3d40a548-d3b6-4ab0-9fc9-190dd253aa8f

<img width="421" height="543" alt="1000151985" src="https://github.com/user-attachments/assets/77de807f-5111-4d66-900b-d8d086005df4" />
<img width="768" height="1344" alt="1000154936" src="https://github.com/user-attachments/assets/083b410b-73df-4566-b7c8-e5e3efc424ed" />
<img width="800" height="1280" alt="1000156826" src="https://github.com/user-attachments/assets/60182e9a-d66b-4f31-a1d2-7c760baea2fd" />
<img width="800" height="1280" alt="1000156828" src="https://github.com/user-attachments/assets/7468270d-7b7c-4753-b259-7bbd97eb7d64" />
<img width="800" height="1280" alt="1000156831" src="https://github.com/user-attachments/assets/136a8e08-207f-49c6-9edc-2f2777d6db11" />
<img width="800" height="1280" alt="1000156835" src="https://github.com/user-attachments/assets/22d77040-efe5-44c1-bf03-7c0be51950fb" />
