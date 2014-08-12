/**
    common js functions for dashboard pages

 */


function fnGenerateBidProgressBarForEveryDashboardOrder(){
    var $arr_bid_progressbar = $dashboard_rightarea.find(".bid_progressbar");
    $.each($arr_bid_progressbar, function(index, elem) {
        var prog_val = parseInt($(elem).data("progressval"));
        var bid_status = parseInt($(elem).data("status"));

        if (bid_status == 1 || bid_status == 0) {
            $(elem).css("height", "10px");
            $(elem).find(".ui-widget-header").css("height", "10px");
        }

        $(elem).progressbar({
            value : prog_val
        });
    });
}


// common function to refresh corresponding orders list when click the tab header
// e.g. fnRefreshListWhenClickTab('#tab-my-purchase-forpaid-orders', '/dashboard/dashboard_purchases_forpaid');
function fnBindEventToRefreshListWhenClickTab(tab_id, datalist_url){
    var $tabForpaidOrders = $('.right-area .tab-items '+tab_id);
    $tabForpaidOrders.unbind('click');
    $tabForpaidOrders.bind('click', function (e) {
        e.preventDefault();

        $.ajax({
            url : datalist_url,
            type : 'get',
            //dataType: 'json', // must use html, as response is: js and html src in approve_bid.js.erb
            data : { }
        }).done(function(data) {
            //$(this).tab('show');// not needed
        });
    });
};