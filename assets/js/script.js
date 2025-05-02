const aboutBtn = document.querySelectorAll('.about-btn');

aboutBtn.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        const aboutDetail =  document.querySelectorAll('.about-detail')

        aboutBtn.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');   
        
        aboutDetail.forEach(detail =>{
            detail.classList.remove('active');
        });
        aboutDetail[index].classList.add('active');
    });
});

const navlinks = document.querySelectorAll('.nav-container .nav-links a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section')
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.nav-container .nav-links')

const contactBtn = document.querySelector('#contId');



menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
})

const activePage = ()=>{
    const header = document.querySelector('.nav-container')
    const barsBox = document.querySelector('.bars-box')
    navlinks.forEach(link =>{
        link.classList.remove('active');
    })
    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    },1000)

    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    },1000)

    sections.forEach(sc =>{
        sc.classList.remove('active');
    })

    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
    


    
}

navlinks.forEach((link,index)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active')
            setTimeout(() => {
                sections[index].classList.add('active');
            }, 1000);
            
        }
    })
})

logolink.addEventListener('click',()=>{
    if(!navlinks[0].classList.contains('active')){
        activePage()

        navlinks[0].classList.add('active')
        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1000);
    }
})

const contactPage = ()=>{
    const header = document.querySelector('.nav-container')

    const barsBox = document.querySelector('.bars-box')
    navlinks.forEach(link =>{
        link.classList.remove('active');
    })
    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    },1000)

    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    },1000)

}

contactBtn.addEventListener('click',()=>{
    if(!navlinks[3].classList.contains('active')){
        navlinks[0].classList.remove('active')
        contactPage()
        navlinks[3].classList.add('active')

        setTimeout(() => {
            sections[0].classList.remove('active')
            sections[3].classList.add('active');
        }, 500);
    }
})


sections.forEach((link,index)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active')

            setTimeout(() => {
                sections[index].classList.add('active');
            }, 1000);
        }
    })
})