(function(){
    let button = document.getElementById('checkDomain');

    button.addEventListener('click', handleButtonClick);

    function handleButtonClick() {
        let textInput = document.getElementById("nameDomainInput");
        let nameDomain = textInput.value;
        let spanDomainOut = document.getElementById("domainOut");
        let showText = document.getElementById("txtHide");
        
        if (nameDomain == '') {
            showText.style.display = 'none';
        } else {
            spanDomainOut.innerHTML = nameDomain;
            showText.style.display = 'block';  
        }
        
    }



    let unit = document.getElementsByClassName('unit');
    
    for (let i = 0; i < unit.length; i++) {
        unit[i].addEventListener('click', handleIconsClick);

        function handleIconsClick() {
            let unTxt = document.getElementsByClassName('unTxt');

            [].forEach.call(unTxt, function(el){
                el.style.display = 'none';
            });
            unTxt[i].style.display = 'block'; 
        }
    }

})();