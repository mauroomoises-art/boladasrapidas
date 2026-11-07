
const produtos=[
 {nome:"iPhone 13 Pro",preco:45000,local:"Massinga",img:"imagens/produto1.jpg",estrela:"⭐⭐⭐⭐⭐ 4.9",vendas:128},
 {nome:"Samsung Galaxy S23",preco:38500,local:"Inhambane",img:"imagens/produto1.jpg",estrela:"⭐⭐⭐⭐ 4.7",vendas:96},
 {nome:"Toyota Corolla 2018",preco:485000,local:"Massinga",img:"imagens/produto1.jpg",estrela:"⭐⭐⭐⭐⭐ 5.0",vendas:12},
 {nome:"Casa 2 Quartos",preco:850000,local:"Inhambane",img:"imagens/produto1.jpg",estrela:"⭐⭐⭐⭐ 4.8",vendas:7},
 {nome:"Ténis Nike Air",preco:3500,local:"Massinga",img:"imagens/produto1.jpg",estrela:"⭐⭐⭐⭐⭐ 4.9",vendas:210},
 {nome:"TV LG 55\" 4K",preco:29500,local:"Inhambane",img:"imagens/produto1.jpg",estrela:"⭐⭐⭐⭐ 4.6",vendas:54},
];
function render(){
 let max=+document.getElementById('filtroPreco').value||999999999;
 document.getElementById('grid').innerHTML=produtos.filter(p=>p.preco<=max).map(p=>`<div class="card"><img src="${p.img}"><div><b>${p.nome}</b><div class="price">${p.preco.toLocaleString()} MT</div><div>📍 ${p.local} • ${p.estrela}</div><div>✅ Vendedor Verificado • ${p.vendas} vendas</div><button onclick="show('chat')">💬 Comprar / Chat</button></div></div>`).join('');
}
document.getElementById('filtroPreco').onchange=render;
function show(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}
function toggleEmoji(){document.getElementById('emojis').classList.toggle('hidden');}
document.querySelectorAll('.emojis').forEach(e=>e.addEventListener('click',ev=>{if(ev.target.textContent.trim()){document.getElementById('msg').value+=ev.target.textContent.trim();}}));
function enviar(){let v=document.getElementById('msg').value;if(!v)return;document.getElementById('mensagens').innerHTML+=`<p><b>Tu:</b> ${v}</p>`;document.getElementById('msg').value='';setTimeout(()=>document.getElementById('mensagens').innerHTML+=`<p><b>Lucifer:</b> Recebido! Vou ajudar-te. 🙏</p>`,600);}
function modo(m){document.getElementById('modoAtual').textContent='Modo: '+m+(m==='Vídeo'?' — videochamada simulada ligada 📹':m==='Áudio'?' — a gravar áudio 🎤':' — escreve à vontade ✍️');}
function like(b){b.textContent='❤️ Curtido!';}
function avaliar(n){alert('Obrigado! Avaliaste '+n+' estrelas de honestidade. O que as pessoas acham foi atualizado.');}
function mudaCor(c){document.querySelector('.top').style.background=c;document.querySelectorAll('.card button').forEach(b=>b.style.background=c);}
function vender(){let n=prompt('Nome do produto:');let p=prompt('Preço em MT:');if(n&&p){produtos.unshift({nome:n,preco:+p||0,local:'Massinga',img:'imagens/produto1.jpg',estrela:'⭐⭐⭐⭐⭐ Novo',vendas:0});render();alert('Produto publicado! 🚀');}}
// Painel do Dono
let users=[{nome:'Ana Massinga',selo:true},{nome:'João Inhambane',selo:false},{nome:'Carlos',selo:false}];
let probs=[{txt:'Vendedor não entregou — Ana',st:'Pendente'},{txt:'Produto falso — João',st:'Pendente'},{txt:'Burla reportada — Carlos',st:'Pendente'}];
function renderDono(){
 document.getElementById('selos').innerHTML=users.map((u,i)=>`<p>${u.nome} ${u.selo?'✅ SELO VERIFICADO':''} <button onclick="toggleSelo(${i})">${u.selo?'Tirar Selo':'Dar Selo'}</button></p>`).join('');
 document.getElementById('problemas').innerHTML=probs.map((p,i)=>`<p>${p.txt} — <b>${p.st}</b> <button onclick="resolver(${i})">Resolver</button> <button onclick="banir(${i})">Banir Utilizador</button></p>`).join('');
}
function toggleSelo(i){users[i].selo=!users[i].selo;renderDono();}
function resolver(i){probs[i].st='✅ Resolvido pelo Dono Lucifer O\'Black';renderDono();}
function banir(i){alert('Utilizador banido pelo Dono.');probs[i].st='🚫 Utilizador Banido';renderDono();}
// Pesquisa + auto-follow
document.getElementById('pesquisa').addEventListener('input',e=>{let q=e.target.value.toLowerCase();document.querySelectorAll('.card').forEach(c=>c.style.display=c.textContent.toLowerCase().includes(q)?'':'none');});
document.getElementById('escuro')?.addEventListener('change',e=>{document.body.style.background=e.target.checked?'#111':'#f0f2f5';document.body.style.color=e.target.checked?'#fff':'#111';});
let seguidores=128540; setInterval(()=>{seguidores++;let el=document.getElementById('seguidores');if(el)el.textContent=seguidores.toLocaleString();},8000);
render();renderDono();
alert('👑 Bem-vindo ao BOLADAS RÁPIDAS! Ao entrar, segues automaticamente o Criador Lucifer O\'Black — de Inhambane, Massinga. 🇲🇿');
