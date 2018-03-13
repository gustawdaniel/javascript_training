(function($) {

   $(document).ready(function() {

        let stars = $("#rating .rating__star"),
            radios = $(":radio[name='rating']");


        stars.hover(
            function () {
                let that = $(this);
                that.prevAll().andSelf().addClass('rating__star--hovered')
            },
            function () {
                let that = $(this);
                that.prevAll().andSelf().removeClass('rating__star--hovered')
            }
        );

        stars.on('click', function () {
            let that = $(this);

            that.prevAll().andSelf().addClass('rating__star--selected');
            that.nextAll().removeClass('rating__star--selected');

            console.log(that.index());
            radios.eq(that.index()).prop('checked', true);


        })

   });

})(jQuery);