const links = document.querySelector('.links')
const linksContainer = document.querySelector('.container-links')
const navToggle = document.querySelector('.toggle-btn')
const closeBtn = document.querySelector('.close-btn')
const scrollLinks = document.querySelectorAll('.scroll-link')
const data = document.querySelector('.data')
const nav = document.querySelector('.nav')

data.innerHTML = new Date().getFullYear()

navToggle.addEventListener('click', ()=>{
  linksContainer.classList.toggle('show')
})

navToggle.addEventListener('click', ()=>{
  const linksHeight = links.getBoundingClientRect().height
  const containerHeight = linksContainer.getBoundingClientRect().height
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  }else{
    linksContainer.style.height = 0
  }
})

const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset
  const navHeight = nav.getBoundingClientRect().height
  
  if(scrollHeight > navHeight){
    nav.classList.add('fixedNav')
  } else{
    nav.classList.remove('fixedNav')
  }

  if(scrollHeight > 500){
    topLink.classList.add('show-link')
  } else{
    topLink.classList.remove('show-link')
  }
})

scrollLinks.forEach(link=>{
  link.addEventListener('click', (e)=>{
    const id = e.currentTarget.getAttribute('href')
    const element = document.getElementById(id)

    const navHeight = nav.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = nav.classList.contains('fixedNav')
    let position = element.offsetTop - navHeight

    if(!fixedNav){
      position = position - navHeight
    }
    if(navHeight > 82){
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0
  })
})

