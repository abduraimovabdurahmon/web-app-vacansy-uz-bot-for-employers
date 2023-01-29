const tg = window.Telegram.WebApp;

tg.ready()
tg.expand()

const mainButton = Telegram.WebApp.MainButton;

mainButton.text = 'Yuborish';
mainButton.hide();

Telegram.WebApp.onEvent('mainButtonClicked', async ()=>{
    data.type = await 'e';
    tg.sendData(JSON.stringify(data));
})

let data = {};

const checkText = (regex, id, value, idName)=>{
    if(value == ''){
        document.getElementsByClassName('errorMessage')[id].style.display = 'none';
       return document.getElementById(idName).style.border = '1px solid blueviolet';

    }
    if(regex.test(value)){
        document.getElementsByClassName('errorMessage')[id].style.display = 'none';
        document.getElementById(idName).style.border = '1px solid green';
    }
    else{
            document.getElementsByClassName('errorMessage')[id].style.display = 'block';   
    }
}


const checkSelect = (idName)=>{
    document.getElementById(idName).style.border = '1px solid green';
}



document.getElementById('firstname').addEventListener('input', function() {
    data.firstname = this.value.split("'").join('+');
    check(data);
    checkText(/^[A-Za-z'\s]{0,20}$/g, 0, this.value, 'firstname');
});

document.getElementById('lastname').addEventListener('input', function() {
    data.lastname = this.value.split("'").join('+');
    check(data);
    checkText(/^[A-Za-z']{0,20}$/g, 1, this.value, 'lastname');
});

document.getElementById('age').addEventListener('input', function() {
    data.age = this.value;
    check(data);
    checkText(/^(1[89]|[2-9]\d)$/gm, 2, this.value, 'age');
});

// select tag
document.getElementById('sex').addEventListener('change', function() {
    data.sex = this.value;
    check(data);
    checkSelect('sex')
});

document.getElementById('phone').addEventListener('input', function() {
    data.phone = this.value;
    check(data);
    checkText(/^9989[012345789][0-9]{7}$/g, 4, this.value, 'phone');
});

document.getElementById('email').addEventListener('input', function() {
    data.email = this.value;
    check(data);
    checkText(/^[a-zA-Z0-9._-]{0,40}@[a-zA-Z0-9.-]{0,10}\.[a-zA-Z]{2,4}$/g, 5, this.value, 'email');
});

document.getElementById('address').addEventListener('change', function() {
    data.address = this.value;
    check(data);
    checkSelect('address');
});

document.getElementById('telegram').addEventListener('input', function() {
    data.telegram = this.value;
    check(data);
    checkText(/^@[A-Za-z0-9_]{5,25}$/, 7, this.value, 'telegram')
})

document.getElementById('price').addEventListener('input', function() {
    data.price = this.value;
    check(data);
    checkText(/^[0-9]{0,9}$/g, 8, this.value, 'price');
});

document.getElementById('experience').addEventListener('change', function() {
    data.experience = this.value;
    check(data);
    checkSelect('experience');
});

document.getElementById('speciality').addEventListener('change', function() {
    data.speciality = this.value;
    check(data);
    checkSelect('speciality');
});

document.getElementById('time1').addEventListener('input', function() {
    data.time1 = this.value;
    check(data);
    checkSelect('time1');
});

document.getElementById('time2').addEventListener('input', function() {
    data.time2 = this.value;
    check(data);
    checkSelect('time2');
});

document.getElementById('info').addEventListener('input', function() {
    data.info = this.value.split("'").join("+");
    check(data);
    checkText(/^[A-Za-z0-9\s.+-,()#'!]{0,150}$/g, 12, this.value, 'info');
    if(this.value == ''){
        document.getElementById('info').style.border = '1px solid blueviolet';
    }
});
// 


const check = (data) => {
    if(data.firstname && data.lastname && data.age && data.sex && data.phone && data.email && data.address && data.telegram && data.price && data.experience && data.speciality && data.time1 && data.time2 && data.info) {
        if(/^[A-Za-z'\s]{0,20}$/g.test(data.firstname) && /^[A-Za-z']{0,20}$/g.test(data.lastname) && /^(1[89]|[2-9]\d)$/gm.test(data.age) && /^9989[012345789][0-9]{7}$/g.test(data.phone) && /^[a-zA-Z0-9._-]{0,40}@[a-zA-Z0-9.-]{0,10}\.[a-zA-Z]{2,4}$/g.test(data.email) && /^[A-Za-z0-9\s.+-,()#'!]{0,150}$/g.test(data.info) && /^[0-9]{0,9}$/g.test(data.price) && /^@[A-Za-z0-9_]{5,25}$/g.test(data.telegram)){
            mainButton.show();
        }
        else{
            mainButton.hide();
        }
    }
    else{
        mainButton.hide();
    }
}


