$ = jQuery.noConflict();

$(document).ready(function () {

    let slider_items = $('.s_item');
    let s_indicators = $('.indicator div');
    let i=0;
    //slider();
    // function slider() {
        // for (let i = 0; i < 3; i++) {
        //     //$(slider_items[i+1]).fadeOut(200);


        // }
        // let intervalID;
        // function slider() {
        //     if (i === 0) {
        //         $(slider_items[2]).removeClass('active');
        //         $(s_indicators[2]).removeClass('active');
        //         i++
        //         $(slider_items[0]).addClass('active');
        //         $(s_indicators[0]).addClass('active');
        //     }
        //     else if (i === 1) {
        //         $(slider_items[0]).removeClass('active');
        //         $(s_indicators[0]).removeClass('active');
        //         i++
        //         $(slider_items[1]).addClass('active');
        //         $(s_indicators[1]).addClass('active');
        //     }
        //     else if (i === 2) {
        //         i++
        //         $(slider_items[1]).removeClass('active');
        //         $(s_indicators[1]).removeClass('active');
        //         i = 0;
        //         $(slider_items[2]).addClass('active');
        //         $(s_indicators[2]).addClass('active');
        //     }

        // }
        // //i = 0;
        // if (!intervalID) {
        //     intervalID = setInterval(() => {
        //         slider()
        //     }, 2000);
        // }
    // }

    //FACILITIES RUN SND STOP ON HOVER
    // $(document).on('mouseover','.s_item',()=>{
    //     clearInterval(intervalID,()=>{
    //         intervalID=null;
    //     })
    // })
    // $(document).on('mouseleave','.s_item',()=>{
    //     intervalID = setInterval(() => {
    //         slider()
    //     }, 2000);
    // })

    //FACILITIES ANCOR CLICK FUNCTION
    $(document).on('click','.ancor:eq(0)',()=>{
        if($('.s_item.active').attr('data-item')!='s-1')
        {
            $('.s_item.active').removeClass('active').prev().addClass('active');
            $('.indicator div.active').removeClass('active').prev().addClass('active');
            
        }
        
        else{
            $('.indicator div.active').removeClass('active');
            $('.s_item.active').removeClass('active');
            $('.s_item:eq(2)').addClass('active');
            $('.indicator div:eq(2)').addClass('active');
        }
        
    })
    $(document).on('click','.ancor:eq(1)',()=>{
        if($('.s_item.active').attr('data-item')!='s-3')
        {
            $('.s_item.active').removeClass('active').next().addClass('active');
            $('.indicator div.active').removeClass('active').next().addClass('active');
        }
        
        else{
            $('.indicator div.active').removeClass('active');
            $('.s_item.active').removeClass('active');
            $('.s_item:eq(0)').addClass('active');
            $('.indicator div:eq(0)').addClass('active');
        }
        
    })

    //NOTICE BOARD STOP AND RUN ON HOVER
    // $(document).on('mouseover','.notices',()=>{
    //     clearInterval(intervalID,()=>{
    //         intervalID=null;
    //     })
    // })
    // $(document).on('mouseleave','.notices',()=>{
    //     intervalID = setInterval(() => {
    //         slider()
    //     }, 2000);
    // })


    //PAYPAL INTEGRATION










   
})