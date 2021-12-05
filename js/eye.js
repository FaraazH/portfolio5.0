//EYE
let background = document.querySelector('.background');
let light = document.querySelectorAll('.light');
let lightL = document.querySelector('.lightL');
let lightR = document.querySelector('.lightR');
let cornea = document.querySelector('.cornea');
let lens = document.querySelector('.lens');
let retina = document.querySelector('.retina');

//CIRCLE
let corneaCircle = document.querySelector('.corneaCircle');
let lensCircle = document.querySelector('.lensCircle');
let retinaCircle = document.querySelector('.retinaCircle');

//SLIDER
let corneaSlider = document.querySelector('.corneaSlider');
let lensSlider = document.querySelector('.lensSlider');
let retinaSlider = document.querySelector('.retinaSlider');

//PARTS
let corneaParts = [corneaCircle, corneaSlider];
let lensParts = [lensCircle, lensSlider];
let retinaParts = [retinaCircle, retinaSlider];


//////////////////////////////////WINDOW
window.addEventListener('load', e => {

    cornea.classList.add('color');
    lens.classList.remove('color');
    retina.classList.remove('color');

    //SLIDER RESET
    corneaSlider.value = [0];

    //SLIDER COLOR RESET
    corneaSlider.style.background = 'transparent';
  
    //SLIDER INNER COLOR 
    corneaSlider.oninput = function() {
        let value = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #061d337e 0%, #061d337e ' + value + '%, rgba(255, 255, 255, 0) ' + value + '%, transparent 100%)';
      };

    //PARTS ADD AND REMOVE
    corneaParts.forEach(part => part.classList.add('visible'));
    lensParts.forEach(part => part.classList.remove('visible'));
    retinaParts.forEach(part => part.classList.remove('visible'));

    //GSAP
    let tl = gsap.timeline({paused:true});

    //GSAP CLEAR
    gsap.set('.light', {clearProps: true});

    //GSAP TIMELINE
    tl.fromTo('.cornea', 10, {attr: {d:'M291 1172.27V1069.9a168.64 168.64 0 0 0 0 296.2v-102.37h28.82v-91.46Z'}}, {attr:{d:'M291 1140.27V1069.9a168.64 168.64 0 0 0 0 296.2v-70.37h28.82v-155.46Z'}},0);
    tl.fromTo('.pupilC', 10,{scale: 0.6, transformOrigin: 'center'}, {scale: 1.1, transformOrigin: 'center'}, 0);
    tl.fromTo('.light', 10, {scaleY: 1, transformOrigin:'center'}, {scaleY: 1.7, transformOrigin:'center'},0);
    tl.fromTo('.lightL', 10, {attr: {points:'0 391.43 0 274.54 513.47 332.99 0 391.43'}}, {attr: {points:'0 391.43 0 274.54 513.47 332.99 0 391.43'}}, 0); 
    tl.fromTo('.lightR', 10, {attr: {points:'779.14 310.94 779.14 355.04 513.47 332.99 779.14 310.94'}}, {attr: {points:'779.14 310.94 779.14 355.04 513.47 332.99 779.14 310.94'}}, 0);

    //GSAP SLIDER UPDATE
    function update(){
        tl.progress(corneaSlider.value);
        } 
        
    corneaSlider.addEventListener('input', update);

});

// //////////////////////////////////CORNEA
cornea.addEventListener('click', () => {

    cornea.classList.add('color');
    lens.classList.remove('color');
    retina.classList.remove('color');

    //SLIDER RESET
    corneaSlider.value = [0];

    //SLIDER COLOR RESET
    corneaSlider.style.background = 'transparent';
  
    //SLIDER INNER COLOR 
    corneaSlider.oninput = function() {
        let value = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #061d337e 0%, #061d337e ' + value + '%, rgba(255, 255, 255, 0) ' + value + '%, transparent 100%)';
      };

    //PARTS ADD AND REMOVE
    corneaParts.forEach(part => part.classList.add('visible'));
    lensParts.forEach(part => part.classList.remove('visible'));
    retinaParts.forEach(part => part.classList.remove('visible'));

    //GSAP
    let tl = gsap.timeline({paused:true});

    //GSAP CLEAR
    gsap.set('.light', {clearProps: true});

    //GSAP TIMELINE
    tl.fromTo('.cornea', 10, {attr: {d:'M291 1172.27V1069.9a168.64 168.64 0 0 0 0 296.2v-102.37h28.82v-91.46Z'}}, {attr:{d:'M291 1140.27V1069.9a168.64 168.64 0 0 0 0 296.2v-70.37h28.82v-155.46Z'}},0);
    tl.fromTo('.pupilC', 10,{scale: 0.6, transformOrigin: 'center'}, {scale: 1.1, transformOrigin: 'center'}, 0);
    tl.fromTo('.light', 10, {scaleY: 1, transformOrigin:'center'}, {scaleY: 1.7, transformOrigin:'center'},0);
    tl.fromTo('.lightL', 10, {attr: {points:'0 391.43 0 274.54 513.47 332.99 0 391.43'}}, {attr: {points:'0 391.43 0 274.54 513.47 332.99 0 391.43'}}, 0); 
    tl.fromTo('.lightR', 10, {attr: {points:'779.14 310.94 779.14 355.04 513.47 332.99 779.14 310.94'}}, {attr: {points:'779.14 310.94 779.14 355.04 513.47 332.99 779.14 310.94'}}, 0);

    //GSAP SLIDER UPDATE
    function update(){
        tl.progress(corneaSlider.value);
        } 
        
    corneaSlider.addEventListener('input', update);

})


// //////////////////////////////////LENS
lens.addEventListener('click', () => {

    lens.classList.add('color');
    cornea.classList.remove('color');
    retina.classList.remove('color');

    //SLIDER RESET
    lensSlider.value = [0];

    //SLIDER COLOR RESET
    lensSlider.style.background = 'transparent';

    //SLIDER INNERCOLOR
    lensSlider.oninput = function() {
        let value = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #061d337e 0%, #061d337e ' + value + '%, rgba(255, 255, 255, 0) ' + value + '%, transparent 100%)';
      };

    //PARTS AND REMOVE
    lensParts.forEach(part => part.classList.add('visible'));
    corneaParts.forEach(part => part.classList.remove('visible'));
    retinaParts.forEach(part => part.classList.remove('visible'));

    //GSAP
    let tl = gsap.timeline({paused:true});

    //GSAP CLEAR
    gsap.set('.light', {clearProps: true});

    //GSAP TIMELINE
    tl.fromTo('.cornea', 10, {attr: {d:'M291.2 1152.27V1069.9a168.64 168.64 0 0 0 0 296.2v-80.37h28.82v-131.46Z'}}, {attr:{d:'M291.2 1172.27V1069.9a168.64 168.64 0 0 0 0 296.2v-102.37h28.82v-91.46Z'}},0);
    tl.fromTo('.blur', 10, {attr: {stdDeviation: 6}}, {attr: {stdDeviation: 0}}, 0);
    tl.fromTo('.light', 10, {scaleY: 1.4, transformOrigin:'center'}, {scaleY: .9, transformOrigin:'center'},0);
    tl.fromTo('.lightL', 10, {attr: {points:'0 391.43 0 274.54 513.47 332.99 0 391.43'}}, {attr: {points:'0 391.43 0 274.54 613.47 332.99 0 391.43'}}, 0); 
    tl.fromTo('.lightR', 10, {attr: {points:'779.14 310.94 779.14 355.04 513.47 332.99 779.14 310.94'}}, {attr: {points:'779.14 310.94 779.14 355.04 613.47 332.99 779.14 310.94'}}, 0);

    //GSAP SLIDER UPDATE
    function update(){
        tl.progress(lensSlider.value);
        } 
        
    lensSlider.addEventListener('input', update);
      
});

// //////////////////////////////////RETINA
retina.addEventListener('click', () => {

    retina.classList.add('color');
    lens.classList.remove('color');
    cornea.classList.remove('color');

    //SLIDER RESET
    retinaSlider.value = [0];

    //SLIDER COLOR RESET
    retinaSlider.style.background = 'transparent';

    //SLIDER INNERCOLOR
    retinaSlider.oninput = function() {
        let value = (this.value-this.min)/(this.max-this.min)*100;
        this.style.background = 'linear-gradient(to right, #061d337e 0%, #061d337e ' + value + '%, rgba(255, 255, 255, 0) ' + value + '%, transparent 100%)';
      };

    //PARTS AND REMOVE
    retinaParts.forEach(part => part.classList.add('visible'));
    lensParts.forEach(part => part.classList.remove('visible'));
    corneaParts.forEach(part => part.classList.remove('visible'));

    //GSAP
    let tl = gsap.timeline({paused:true});

    //GSAP TIMELINE
    // tl.fromTo('.cornea', 10, {attr: {d:'M233 676V556.05a198.08 198.08 0 0 0 0 347.94V783.74H267V676.3Z'}}, 
    //                          {attr: {d:'M233 656V556.05a198.08 198.08 0 0 0 0 347.94V804.74H267V656.3Z'}},0);

    tl.fromTo('.cornea', 10, {attr: {d:'M291.2 1172.27V1069.9a168.64 168.64 0 0 0 0 296.2v-102.37h28.82v-91.46Z'}}, 
                             {attr: {d:'M291.2 1152.27V1069.9a168.64 168.64 0 0 0 0 296.2v-84.37h28.82v-131.46Z'}},0);


    //LIGHT
    tl.fromTo('.light', 10, {scaleY: 1, transformOrigin:'center'}, {scaleY: 1.4, transformOrigin:'center'},0);
    tl.fromTo('.light', 10, {opacity: '40%'}, {opacity: '70%'},0);
    // tl.fromTo('.lightL', 10, {attr: {points:'0,463.29 0,325.99 603.14,394.64'}}, {attr: {points:'0,463.29 0,325.99 603.14,394.64'}}, 0); 
    // tl.fromTo('.lightR', 10, {attr: {points:'819.54,368.74 819.54,420.54 603.14,394.64'}}, {attr: {points:'819.54,368.74 819.54,420.54 603.14,394.64'}}, 0);

    tl.fromTo('.lightL', 10, {attr: {points:'0 391.43 0 274.54 513.47 332.99 0 391.43'}}, {attr: {points:'0 391.43 0 274.54 513.47 332.99 0 391.43'}}, 0); 
    tl.fromTo('.lightR', 10, {attr: {points:'779.14 310.94 779.14 355.04 513.47 332.99 779.14 310.94'}}, {attr: {points:'779.14 310.94 779.14 355.04 513.47 332.99 779.14 310.94'}}, 0);
    
    //CONES AND RODS
    tl.fromTo('.rod', 10, {opacity: '100%'}, {opacity: '0%'}, 0);
    tl.fromTo('.cone', 10, {opacity: '0%'}, {opacity: '100%'}, 0);

    //GSAP SLIDER UPDATE
    function update(){
        tl.progress(retinaSlider.value);
        } 
        
    retinaSlider.addEventListener('input', update);
});

