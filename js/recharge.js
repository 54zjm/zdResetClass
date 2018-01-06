//调用放大输入input
moneyInput(false,undefined,'#J-input-money');

function changeRadio(id) {
    var aBankItems = $('.select-banks-in').find('li').each(function () {
        $(this).removeClass('selected-bank-item');
    });
    var banks = document.getElementsByName('bank');
    for (var i = 0; i < banks.length; i++) {
        var d = banks[i];
        if (d.id == id) {
            d.checked = true;
            $(d).parent().parent().addClass('selected-bank-item');
            $('#J-money-tip-row').show();
        } else {
            d.checked = false;
        }
    }
}

$(document).on('click','.select-banks-in li label',function(){
    changeRadio($(this).prev().attr('id'));
    $(this).prev()
});

$('#J-submit').on('click',function(){
    setTimeout(function(){
        layer.msg('充值金额不能为空');
    },100);
    if($('#J-input-money').val() == '') {
        return false;
    }else {
        return true;
    }
});
$('.select-banks2 input').blur(function(){
    if($(this).val() == '1' || $(this).val() == '0') {
        $(this).val(2);
    }
});