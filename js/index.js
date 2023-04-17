
document.addEventListener('DOMContentLoaded', () => {
      
      AOS.init();

      let logoWhite = document.querySelector('#logo > a > img:first-child');
      let logoBlack = document.querySelector('#logo > a > img:last-child');
      let main = document.getElementById('main');
      let about = document.querySelector('#about');
      let aboutTop = about.getBoundingClientRect().top + window.pageYOffset;
      let portfolio = document.querySelector('#portfolio');
      let portfoliotext = document.querySelector('#portfolio > h3');
      let mainTop = main.offsetTop;
      let portfolioTop = portfolio.getBoundingClientRect().top + window.pageYOffset;
      //  console.log(aboutTop);
       console.log(window.pageYOffset);
       console.log(mainTop);

      let slideText = document.querySelectorAll('.slide_text');
      let background = document.querySelector('#background_02');
      let mockupTitle = document.querySelectorAll('.mockup_title');

      let scroll = document.querySelector('.scroll');
      let loader = document.querySelector('.loader');

      setTimeout(() => {
        scroll.classList.remove('scroll');
        loader.style.display = 'none';
      }, 6000);

      window.addEventListener('scroll', function(){
        if(window.pageYOffset > mainTop) {
          logoWhite.style.display = 'block';
          logoWhite.animate([
            {opacity: 1},
          ],1000);
        }
        else if(window.pageYOffset < mainTop) {
          logoWhite.style.display = 'none';
          logoWhite.animate([
            {opacity: 0},
          ],1000);
        }
      });

      let introText = document.querySelector('#intro_text');
      let aboutLeft = document.querySelector('#about_left');
      let aboutRight = document.querySelector('#about_right');

      // + 11
      window.addEventListener('scroll', function(){
        if(window.pageYOffset >= aboutTop) {
          logoWhite.style.display = 'none';
          logoBlack.style.display = 'block';
          logoBlack.animate([
            {opacity: 1},
          ],1000);
          background.classList.add('bk_white');
          introText.classList.add('black_text');
          aboutLeft.classList.add('black_text');
          aboutRight.classList.add('black_text');
        }
        else if(window.pageYOffset < aboutTop && window.pageYOffset > mainTop) {
          logoBlack.style.display = 'none';
          logoWhite.style.display = 'block';
          logoBlack.animate([
            {opacity: 0},
          ],1000);
          background.classList.remove('bk_white');
          introText.classList.remove('black_text');
          aboutLeft.classList.remove('black_text');
          aboutRight.classList.remove('black_text');
        }
      });

      window.addEventListener('scroll', function(){
        if(window.pageYOffset >= portfolioTop) {

          logoBlack.style.display = 'none';
          logoWhite.style.display = 'block';
          logoWhite.animate([
            {opacity: 1},
          ],1000);
          background.classList.remove('bk_white');
          portfoliotext.style.color = '#ffffff';
          for(i = 0; i < slideText.length; i++) {
            slideText[i].classList.add('white_text');
          }
          for(i = 0; i < mockupTitle.length; i++) {
            mockupTitle[i].classList.add('white_text');
          }
        }
        else if(window.pageYOffset < portfolioTop && this.window.pageYOffset > aboutTop) {
          logoWhite.style.display = 'none';
          logoWhite.animate([
            {opacity: 0},
          ],1000);
          portfoliotext.style.color = '#000000';
          for(i = 0; i < slideText.length; i++) {
            slideText[i].classList.remove('white_text');
          }
          for(i = 0; i < mockupTitle.length; i++) {
            mockupTitle[i].classList.remove('white_text');
          }
        }
      });

      const content = '"THANK YOU!!!!"';
      const text = document.querySelector('.f_text');
      let index = 0;


      // function typing() {
      //   text.textContent += content[index++];
      //   if(index >= content.length) {
      //     // text.textContent ='';
      //     clearInterval(play);
      //     index = 0;
      //   };
      // };

      let footer = document.querySelector('#footer');
      let f = true;
      let h = null;
      
      let timer = null;
      let footerTop = footer.getBoundingClientRect().top + window.pageYOffset;
      window.addEventListener('scroll', function(){
        if(window.pageYOffset >= footerTop) {
          if(f == true) {
            
            function typing() {
              text.textContent += content[index++];
              if(index >= content.length) {
                index = 0;                
                clearInterval(play);

              };
            };
            const play = setInterval(typing, 200);
            h = play;

            f = false;
          }
        }
        else {
          if(h != null) {
            index = 0;
            clearInterval(h);
            h = null;
            text.textContent = '';
            f = true;
          }
        }
        window.onresize = function() {
          aboutTop = about.getBoundingClientRect().top + window.pageYOffset;
          portfolioTop = portfolio.getBoundingClientRect().top + window.pageYOffset;
          footerTop = footer.getBoundingClientRect().top + window.pageYOffset;
        };
      });

      // console.log(footerTop);

      // window.addEventListener('scroll', function(){
      //   if(window.pageYOffset >= footerTop) {
      //     if(f == true) {
            
      //       function typing() {
      //         text.textContent += content[index++];
      //         if(index >= content.length) {
      //           index = 0;                
      //           clearInterval(play);

      //         };
      //       };
      //       const play = setInterval(typing, 200);
      //       h = play;

      //       f = false;
      //     }
      //   }
      //   else {
      //     if(h != null) {
      //       index = 0;
      //       clearInterval(h);
      //       h = null;
      //       text.textContent = '';
      //       f = true;
      //     }
      //   }
      // });
      
}); // end
