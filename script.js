let getId = id => document.getElementById(id);
let getClass = cl => document.getElementsByClassName(cl);

//bold, italic, underline, strikeout
let bold = getClass('bold');
let italic = getClass('italic');
let underline = getClass('underline');
let strikeout = getClass('strikeout');

let lorem = getId('lorem');
bold[0].addEventListener('click', () => {
    lorem.classList.toggle("bold");

})

italic[0].addEventListener('click', () => {
    lorem.classList.toggle("italic");
})

underline[0].addEventListener('click', () => {
    lorem.classList.toggle("underline");
    lorem.classList.remove("strikeout");
})

strikeout[0].addEventListener('click', () => {
    lorem.classList.toggle("strikeout");
    lorem.classList.remove("underline");
})


// align (left, right, center)
let left = getId('left');
let right = getId('right');
let center = getId('center');

left.addEventListener('click', () => {
    lorem.style.textAlign = 'left';
})

right.addEventListener('click', () => {
    lorem.style.textAlign = 'right';
})

center.addEventListener('click', () => {
    lorem.style.textAlign = 'center';
})

//element position (left)  (for FONT FAMILY & FONT SIZE lists)
function leftPos(e, container) {
    let leftt = 0;
    let div = e.target;
    while (div) {
        leftt = leftt + parseFloat(div.offsetLeft);
        div = div.offsetParent;
    }
    container.style.left = `${leftt}px`
}

//font size
let fontSizeBtn = document.getElementById('fontSizeBtn');
let fontSizeContainer = getId('fontSizeContainer');
let size = getClass('size');

fontSizeBtn.addEventListener('click', function(e) {
    fontSizeContainer.style.display = 'block';
    fontFamilyContainer.style.display = 'none';
    leftPos(e, fontSizeContainer);
})

fontSizeContainer.addEventListener('click', () => {
    fontSizeContainer.style.display = 'none';
})

for (let i = 0; i < size.length; i++) {
    size[i].style.fontSize = size[i].textContent
    size[i].onclick = function() {
        lorem.style.fontSize = this.textContent;
    }
}


//font family
let fontFamilyBtn = getId('fontFamilyBtn');
let fontFamilyContainer = getId('fontFamilyContainer');
let fontF = getClass('fontF');

fontFamilyBtn.addEventListener('click', function(e) {
    fontFamilyContainer.style.display = 'block';
    fontSizeContainer.style.display = 'none';

    leftPos(e, fontFamilyContainer)
})

fontFamilyContainer.addEventListener('click', () => {
    fontFamilyContainer.style.display = 'none';
})

for (let i = 0; i < fontF.length; i++) {
    fontF[i].style.fontFamily = fontF[i].textContent
    fontF[i].onclick = function() {
        lorem.style.fontFamily = this.textContent;
    }
}

// let textContainer = getId('textContainer');
// textContainer.addEventListener('mouseover', () => {
//     fontFamilyContainer.style.display = 'none';
//     fontSizeContainer.style.display = 'none';
// })