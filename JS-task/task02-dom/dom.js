function changeOuterLinks() {
    const links = document.querySelectorAll('nav#link-list a');
    links.forEach( item => {
        if (item.innerHTML.includes('outer-link')) {
            item.setAttribute('target', '_blank');
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })
    const nav = document.querySelector('#link-list');
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.width = '30%';
        nav.style.margin = '0px auto';
        nav.style.border = '1px solid blue';
        nav.style.padding = '16px';
}

changeOuterLinks();


export { changeOuterLinks };