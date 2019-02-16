const Footer = {
    wrapper: '',
    renderFooter: function() {
        General.root.appendChild(Footer.wrapper);
    },
    renderWrapper: function() {
        let wrapper = document.createElement('div');
        wrapper.classList.add('footer-wrapper','wrapper');
        Footer.wrapper = wrapper;
    },
    renderCopyright: function() {
        let copy = document.createElement('span');
        copy.classList.add('footer__copy');
        copy.appendChild(document.createTextNode('Copyright 2019'));
        Footer.wrapper.appendChild(copy);
    },
    render: function() {        
        Footer.renderWrapper();
        Footer.renderWrapper();
        Footer.renderCopyright();
        Footer.renderFooter();
    }
}