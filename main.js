$(document).ready(() =>
{
    
    $('.month').click(function()
    {
        $(event.currentTarget).next('.calendar').slideToggle();

    });
});
