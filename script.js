var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#ground2',
        start: '0% 95%',
        end: '50% 50%',
        
        scrub: 'true'
    }
})

tl.to('#fanta-can-img', {
    top: '100%',
    left: '60%',
    duration: 2.2,
}, 'fanta')
tl.to('#orange-img', {
    top: '160%',
    left: '67%',
    duration: 2.2,
}, 'fanta')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#ground3',
        start: '0% 95%',
        end: '50% 50%',
        
        scrub: 'true'
    }
})

tl2.to('#fanta-can-img', {
    top: '210%',
    width: '26%',
    height: '55%',
    duration: 2.2,
    left: '37%',
}, 'fanta')
tl2.to('#orange-img', {
    top: '210%',
    duration: 2.2,
    left: '81%',
}, 'fanta')
