const General = {
    root: document.getElementById('root'),
    
    removeElement: function(element) {
        element.querySelectorAll('*').forEach(el => {
            el.inneHTML = '';
            el.parentNode.removeChild(el);
        });
    }
}