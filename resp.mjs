import puppeteer from "puppeteer-core";
const OUT="C:/Users/dhgot/AppData/Local/Temp";
const b=await puppeteer.launch({executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",headless:"new",args:["--no-sandbox","--disable-gpu"]});
async function full(w,name){
  const p=await b.newPage();
  await p.setViewport({width:w,height:900,deviceScaleFactor:1});
  await p.goto("http://localhost:5173/?static",{waitUntil:"networkidle0",timeout:40000});
  await new Promise(r=>setTimeout(r,2000));
  // 모든 whileInView 모션 트리거 위해 천천히 스크롤
  const h=await p.evaluate(async()=>{
    const H=document.body.scrollHeight;
    for(let y=0;y<H;y+=400){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));}
    window.scrollTo(0,0); await new Promise(r=>setTimeout(r,300));
    return H;
  });
  await p.screenshot({path:`${OUT}/resp-${name}.png`,fullPage:true});
  console.log(name,"w="+w,"h="+h);
  await p.close();
}
await full(390,"m");
await full(768,"t");
await b.close();
