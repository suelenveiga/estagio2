const vet = ['1','2','3','4','5','6'];

document.getElementById('mavatar1').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('tares1').style.display = "block"; 
    document.getElementById('tares11').style.display = "block";
    document.getElementById('tares2').style.display = "none"; 
    document.getElementById('tares12').style.display = "none";
});
document.getElementById('mavatar2').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('tares1').style.display = "none"; 
    document.getElementById('tares11').style.display = "none";
    document.getElementById('tares2').style.display = "block"; 
    document.getElementById('tares12').style.display = "block";
});
    
    
let iii = ['1','2','3'];
for(let i=0; i<3; i++){
    document.getElementById('selecionar'+iii[i]).addEventListener("click",function(e){
        e.preventDefault();
        document.getElementById('fisc'+iii[i]).style.display = "block";
        document.getElementById('fisc'+iii[i]).style.display = "block";
    });
}
let iid = ['1','2','3'];
for(let i=0; i<3; i++){
    document.getElementById('erro'+iid[i]).addEventListener("click",function(e){
        e.preventDefault();
        document.getElementById('perguntinha').style.display = "none";
    });
}

document.getElementById('erro').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('modalogin1').style.display = "none";
});
let y = ['1','2','3'];
document.getElementById('bca').addEventListener("click",function(e){
        e.preventDefault();
        for(let i=0; i<3; i++){
        if(document.getElementById('taresB'+y[i]).style.display == 'block'){
            document.getElementById('taresB1'+y[i]).style.display = 'block';
        }
        if(document.getElementById('taresB2'+y[i]).style.display == 'block'){
            document.getElementById('taresB22'+y[i]).style.display = 'block';
        }
    }
});

document.getElementById('tboca1').addEventListener('click',function(e){
    e.preventDefault();
    if(document.getElementById('tares11').style.display == "block"){
        console.log('branco');
        
        document.getElementById('taresB1').style.display = 'block';
        document.getElementById('taresB2').style.display = 'none';
        document.getElementById('taresB3').style.display = 'none';
    }
    if(document.getElementById('tares12').style.display == "block"){
        console.log('preto');
        
        document.getElementById('taresB21').style.display = 'block';
        document.getElementById('taresB22').style.display = 'none';
        document.getElementById('taresB23').style.display = 'none';
    }
});
document.getElementById('tboca2').addEventListener('click',function(e){
    e.preventDefault();
    if(document.getElementById('tares11').style.display == "block"){
        document.getElementById('taresB1').style.display = 'none';
        document.getElementById('taresB2').style.display = 'block';
        document.getElementById('taresB3').style.display = 'none';
    }
    if(document.getElementById('tares12').style.display == "block"){
        document.getElementById('taresB21').style.display = 'none';
        document.getElementById('taresB22').style.display = 'block';
        document.getElementById('taresB23').style.display = 'none';
    }
});
document.getElementById('tboca3').addEventListener('click',function(e){
    e.preventDefault();
    if(document.getElementById('tares11').style.display == "block"){
        document.getElementById('taresB1').style.display = 'none';
        document.getElementById('taresB2').style.display = 'none';
        document.getElementById('taresB3').style.display = 'block';
    }
    if(document.getElementById('tares12').style.display == "block"){
        document.getElementById('taresB21').style.display = 'none';
        document.getElementById('taresB22').style.display = 'none';
        document.getElementById('taresB23').style.display = 'block';
    }
});

document.getElementById('tcabelo1').addEventListener('click',function(e){
    e.preventDefault();
    for(let i=0; i<3; i++){
        if(document.getElementById('taresB1'+y[i]).style.display == 'block'){            
            document.getElementById('taresB'+y[i]+'c1').style.display = 'block'
            document.getElementById('taresB'+y[i]+'c2').style.display = 'none'
            document.getElementById('taresB'+y[i]+'c3').style.display = 'none'
        }
        if(document.getElementById('taresB22'+y[i]).style.display == 'block'){            
            document.getElementById('taresPB'+y[i]+'c1').style.display = 'block'
            document.getElementById('taresPB'+y[i]+'c2').style.display = 'none'
            document.getElementById('taresPB'+y[i]+'c3').style.display = 'none'
        }
    }
});
document.getElementById('tcabelo2').addEventListener('click',function(e){
    e.preventDefault();
    for(let i=0; i<3; i++){
        if(document.getElementById('taresB1'+y[i]).style.display == 'block'){
            document.getElementById('taresB'+y[i]+'c1').style.display = 'none'
            document.getElementById('taresB'+y[i]+'c2').style.display = 'block'
            document.getElementById('taresB'+y[i]+'c3').style.display = 'none'
        }
        if(document.getElementById('taresB22'+y[i]).style.display == 'block'){            
            document.getElementById('taresPB'+y[i]+'c1').style.display = 'block'
            document.getElementById('taresPB'+y[i]+'c2').style.display = 'none'
            document.getElementById('taresPB'+y[i]+'c3').style.display = 'none'
        }
    }
});
document.getElementById('tcabelo3').addEventListener('click',function(e){
    e.preventDefault();
    for(let i=0; i<3; i++){
        if(document.getElementById('taresB1'+y[i]).style.display == 'block'){
            document.getElementById('taresB'+y[i]+'c1').style.display = 'none'
            document.getElementById('taresB'+y[i]+'c2').style.display = 'none'
            document.getElementById('taresB'+y[i]+'c3').style.display = 'block'
        }
        if(document.getElementById('taresB22'+y[i]).style.display == 'block'){            
            document.getElementById('taresPB'+y[i]+'c1').style.display = 'block'
            document.getElementById('taresPB'+y[i]+'c2').style.display = 'none'
            document.getElementById('taresPB'+y[i]+'c3').style.display = 'none'
        }
    }
});

document.getElementById('tacesso1').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('taresA1').style.display = 'block';
    document.getElementById('taresA2').style.display = 'none';
    document.getElementById('taresA3').style.display = 'none';
});
document.getElementById('tacesso2').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('taresA1').style.display = 'none';
    document.getElementById('taresA2').style.display = 'block';
    document.getElementById('taresA3').style.display = 'none';
});
document.getElementById('tacesso3').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('taresA1').style.display = 'none';
    document.getElementById('taresA2').style.display = 'none';
    document.getElementById('taresA3').style.display = 'block';
});
document.getElementById('tudo').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('avatarteste1').style.display = "block";
    document.getElementById('dado').style.display = "block";  
});


let dado = document.getElementById('dado');
let guarda=0;
let pontos = 0;
let ifrs = 0;
let lemos = 0;
let bom = 0;
let helena = 0;
const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const topp = [80,76,58,41,26,9,9,27,43,60,75,80,80,62,46,30,13,6,6,10,29,29,49,80];
const leftt = [7,16,13,9,3,8,19,21,26,30,37,46,56,56.5,51,46,41,50,59.5,69,71.5,82,83,83];
const vp = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.'];
const dic = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa ipsam sequi! Rerum fuga distinctio nobis repudiandae rem adipisci aliquid, ullam officiis in magni eveniet ratione sit. Harum, magni nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit.'];
const gabarito = ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'];

dado.addEventListener("click",function(e){
    e.preventDefault();
    let num = Math.floor(Math.random() * 6) + 1;
    guarda += num;
    console.log(guarda);
    
    for (let i = 0; i < vetor.length; i++) {
            if(guarda == vetor[i]){

                document.getElementById('avatarteste1').style.top = topp[i] + '%';
                document.getElementById('avatarteste1').style.left = leftt[i] + '%';

                let teste = topp[i];
                let teste2 = leftt[i];

                if (teste == topp[i] && leftt[i]){
                    document.getElementById('perguntinha').style.display = 'block';
                    p = document.getElementById('perg');
                    p.textContent = vp[i];
                    document.getElementById('dicaa').textContent = dic[i];
                        if (document.getElementById('erro1').textContent == gabarito[i]) {
                            pontos += vetor[i];                            
                            document.getElementById('pontos').innerHTML = pontos;
                    }
        }
    }
        if(guarda >= 24){
            document.getElementById('avatarteste1').style.top = 80 + '%';
            document.getElementById('avatarteste1').style.left = 83 + '%';
        } 
        if(guarda > 24){
            document.getElementById('nav2').style.display = "block";
            document.getElementById('some').style.display = "none";
            document.getElementById('ranking').style.display = "block";

            db.ref('/cadastro').on('child_added', function(item) {
                var c1 = item.val().email;                
                if(localStorage.getItem('usuario') == c1){
                    var c = item.key;
                    var cadastro = {
                        nome:item.val().nome,
                        idade:item.val().idade,
                        cidade:item.val().cidade,
                        escola:item.val().escola,
                        email:item.val().email,
                        senha:item.val().senha,
                        pontos:pontos
                    }
                     db.ref('/cadastro').child(c).set(cadastro);
                    var p = item.val().pontos;
                    var esc = item.val().escola;
                    if(esc == 'IFRS'){
                        ifrs = pontos;
                        }
                    if(esc == 'Lemos'){
                        lemos = pontos;
                        }
                    if(esc == 'Bom Jesus'){
                        bom = pontos;
                        }
                    if(esc == 'Helena'){
                        helena = pontos;
                        }
                    var escola = {
                        ifrs:ifrs,
                        lemos:lemos,
                        bom_jesus:bom,
                        helena:helena
                    }
                    db.ref('/escola').set(escola);
                    }
        });        
    }
}
});

const db = firebase.database();
const tbody = document.getElementById('tbody');
let clas = ["bg-info","oi","bg-danger","oi","bg-warning","oi","bg-success","oi","bg-primary"];
db.ref('/ifrs').on('child_added', function(item) {
     console.log(item.val());
});



