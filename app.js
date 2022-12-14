let kredit = document.getElementById('kredit')
let kreditInput = document.getElementById('kreditinput')
let muddat = document.getElementById('muddat')
let muddatInput = document.getElementById('muddatinput')
let start = document.getElementById('start')
let startInput = document.getElementById('startinput')
let stavka = document.getElementById('stavka')
let stavkaInput = document.getElementById('stavkainput')
let prosent = document.getElementById('prosent')
let sumkredit = document.getElementById('sumkredit')
 



const calc = () =>{
    let k = kreditInput.value
    let m = muddatInput.value
    let s = startInput.value
    let st = stavkaInput.value
    kredit.textContent = `${k} mln`
    muddat.textContent = m
    start.textContent = `${s} mln`
    stavka.textContent =`${st}%`
    prosent.textContent =`${st}%`
    sumkredit.textContent =`${k-s} mln`
}
let  count = document.getElementById('count')
let  table = document.querySelector('table')

const callMe = (el) =>{
    if(document.querySelector('button.active')){
        document.querySelector('button.active').classList.remove('active')
    }
    el.classList.add('active')
}

muddatInput.addEventListener('input',() =>{
    let v = muddatInput.value
    count.textContent = v
    table.innerHTML = `
    <tr>
        <th style="font-size:24px">№</th>
        <th style="font-size:24px">To'lov, so'm
        </th>
        <th style="font-size:24px">Qarz, so'm
        </th>
        <th style="font-size:24px">Foiz, so'm
        </th>
        <th style="font-size:24px">Qoldiq, so'm
        </th>
        </tr>

    `
    let qiymat = kreditInput.value-startInput.value
    let y = v*12
    let tolov = Math.floor((kreditInput.value-startInput.value)*1000000/y)
    let foiz = Math.round((kreditInput.value-startInput.value)*stavkaInput.value*10000/y)
    let summa = tolov+foiz
    let qoldiq = Math.floor(qiymat*1000000-summa)
    console.log(qiymat);
    for (let i = 1; i <= v*12; i++) {
        console.log(qoldiq);
        table.innerHTML += `
        <tr>
        <td style="font-size:24px; opacity:0.7">${i}</td>
        <td style="font-size:24px">${summa}</td>
        <td style="font-size:24px; opacity:0.7">${tolov}</td>
        <td style="font-size:24px; opacity:0.7">${foiz}</td>
        <td style="font-size:24px; opacity:0.7">${qoldiq}</td>
        </tr>
        `
        foiz  = Math.floor(qoldiq*stavkaInput.value/1200)
        summa = tolov+foiz
        qiymat = kreditInput.value-startInput.value
        qoldiq = qoldiq - tolov
        if(qoldiq<0){
            qoldiq = 0
        }
        
    }
})

startInput.addEventListener('input',() =>{
    let v = muddatInput.value
    count.textContent = v
    table.innerHTML = `
    <tr>
        <th style="font-size:24px">№</th>
        <th style="font-size:24px">To'lov, so'm
        </th>
        <th style="font-size:24px">Qarz, so'm
        </th>
        <th style="font-size:24px">Foiz, so'm
        </th>
        <th style="font-size:24px">Qoldiq, so'm
        </th>
        </tr>

    `
    let qiymat = kreditInput.value-startInput.value
    console.log(qiymat);
    let y = v*12
    let tolov = Math.floor((kreditInput.value-startInput.value)*1000000/y)
    let foiz = Math.round((kreditInput.value-startInput.value)*stavkaInput.value*10000/y)
    let sum = tolov+foiz
    let qoldiq = Math.round(qiymat*1000000-sum)
    for (let i = 1; i <= v*12; i++) {
       
        table.innerHTML += `
        <tr>
        <td style="font-size:24px;opacity:0.7">${i}</td>
        <td style="font-size:24px">${tolov+foiz}</td>
        <td style="font-size:24px;opacity:0.7">${tolov}</td>
        <td style="font-size:24px;opacity:0.7">${foiz}</td>
        <td style="font-size:24px;opacity:0.7">${qoldiq}</td>
        </tr>
        `
       
        foiz  = Math.floor(qoldiq*stavkaInput.value/1200)
        summa = tolov+foiz
        qiymat = kreditInput.value-startInput.value
        qoldiq = qoldiq - tolov
    }
})
kreditInput.addEventListener('input',() =>{
    let v = muddatInput.value
    count.textContent = v
    table.innerHTML = `
    <tr>
        <th style="font-size:24px">№</th>
        <th style="font-size:24px">To'lov, so'm
        </th>
        <th style="font-size:24px">Qarz, so'm
        </th>
        <th style="font-size:24px">Foiz, so'm
        </th>
        <th style="font-size:24px">Qoldiq, so'm
        </th>
        </tr>

    `
    let qiymat = kreditInput.value-startInput.value
    console.log(qiymat);
    let y = v*12
    let tolov = Math.floor((kreditInput.value-startInput.value)*1000000/y)
    let foiz = Math.round((kreditInput.value-startInput.value)*stavkaInput.value*10000/y)
    let sum = tolov+foiz
    let qoldiq = Math.round(qiymat*1000000-sum)
    for (let i = 1; i <= v*12; i++) {
       
        table.innerHTML += `
        <tr>
        <td style="font-size:24px;opacity:0.7">${i}</td>
        <td style="font-size:24px">${tolov+foiz}</td>
        <td style="font-size:24px;opacity:0.7">${tolov}</td>
        <td style="font-size:24px;opacity:0.7">${foiz}</td>
        <td style="font-size:24px;opacity:0.7">${qoldiq}</td>
        </tr>
        `
       
        foiz  = Math.floor(qoldiq*stavkaInput.value/1200)
        summa = tolov+foiz
        qiymat = kreditInput.value-startInput.value
        qoldiq = qoldiq - tolov
        if(qoldiq<0){
            qoldiq = 0
        }
    }
})
stavkaInput.addEventListener('input',() =>{
    let v = muddatInput.value
    count.textContent = v
    table.innerHTML = `
    <tr>
        <th style="font-size:24px">№</th>
        <th style="font-size:24px">To'lov, so'm
        </th>
        <th style="font-size:24px">Qarz, so'm
        </th>
        <th style="font-size:24px">Foiz, so'm
        </th>
        <th style="font-size:24px">Qoldiq, so'm
        </th>
        </tr>

    `
    let qiymat = kreditInput.value-startInput.value
    console.log(qiymat);
    let y = v*12
    let tolov = Math.floor((kreditInput.value-startInput.value)*1000000/y)
    let foiz = Math.round((kreditInput.value-startInput.value)*stavkaInput.value*10000/y)
    let sum = tolov+foiz
    let qoldiq = Math.round(qiymat*1000000-sum)
    for (let i = 1; i <= v*12; i++) {
       
        table.innerHTML += `
        <tr>
        <td style="font-size:24px;opacity:0.7">${i}</td>
        <td style="font-size:24px">${tolov+foiz}</td>
        <td style="font-size:24px;opacity:0.7">${tolov}</td>
        <td style="font-size:24px;opacity:0.7">${foiz}</td>
        <td style="font-size:24px;opacity:0.7">${qoldiq}</td>
        </tr>
        `
       
        foiz  = Math.floor(qoldiq*stavkaInput.value/1200)
        summa = tolov+foiz
        qiymat = kreditInput.value-startInput.value
        qoldiq = qoldiq - tolov
        if(qoldiq<0){
            qoldiq = 0
        }
    }
})


document.querySelector('.download').addEventListener('click', function() {
    let table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll('#count'));
})