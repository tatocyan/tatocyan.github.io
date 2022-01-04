/** jQueryの処理 */
$(function(){
    
    
    /** TOPページのCLICKの動き **/
    $('.test').textillate();
        
    $('.click').click(
        function(){
            $('.click').fadeOut(100);
            $('.first').slideDown(4000);
        }
    );
    
    /** TAPATOの文字の動き **/
    $('#top-h2').animate({opacity:1.0},{duration: 7000});
    
    /** メニュー覧の動き **/
    $('.menu-title').click(
        function(){
            $('.menu-title').fadeOut();
            $('.menu-element').fadeIn(2000);
        }
    );
    
    /** slickを用いたスライドショー **/
    $('.single-item').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2700,
    dots: true,
    fade: true,
    });
    

});