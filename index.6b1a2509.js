const e=document.querySelector('[data-value="days"]'),t=document.querySelector('[data-value="hours"]'),o=document.querySelector('[data-value="mins"]'),n=document.querySelector('[data-value="secs"]');function a(a){const r=Math.floor(a/864e5),l=Math.floor(a%864e5/36e5),u=Math.floor(a%36e5/6e4),c=Math.floor(a%6e4/1e3);return e.textContent=`${r}`,t.textContent=`${l}`,o.textContent=`${u}`,n.textContent=`${c}`,`\n${r}:${l}:${u}:${c}`}setInterval((()=>{const e=Date.now(),t=new Date("Jan 17, 2023").getTime()-e;a(t),console.log(a(t))}),1e3);
//# sourceMappingURL=index.6b1a2509.js.map