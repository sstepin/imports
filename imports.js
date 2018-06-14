//Global Variables

//Get & Process Data from MySQL
$(document).ready(function()
{

});

$(document).on('click','#contractTab', function()
{
    visibleTab(this);

});

$(document).on('click','#paymentTab', function()
{
    visibleTab(this);
});

$(document).on('click','#bookingTab', function()
{
    visibleTab(this);
});

function visibleTab(currentTab)
{
    $('.tabs').css('background-color', '#d6d8d9');
    $(currentTab).css('background-color', 'white');
}