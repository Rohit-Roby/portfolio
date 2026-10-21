'use strict';
const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.setAttribute('aria-label',isOpen?'Close navigation':'Toggle navigation');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Toggle navigation');}));}
const year=document.getElementById('year');if(year)year.textContent=String(new Date().getFullYear());
