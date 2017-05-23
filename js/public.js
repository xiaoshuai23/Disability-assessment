/**
 * Created by eng on 2017/5/3.
 */
// 公共js

// 1、复选框单选样式
//    调用要用radio.call(this)，因为此处this指向window

function radio(){
    var name=$(this).attr('name');
    $('input[name ="' +name+'"]').each(function(i,v){
        $(v).removeAttr('checked');
    });
    $(this).prop('checked','checked');

}

// 2、其他输入框处理
function setOther(name){
    $('input[name="disability.'+name+'"]').on('click',function(){
        if($('.'+name).is(':checked')){

            $('#'+name).removeAttr('readOnly');
        }else{

            $('#'+name).val('');
            $('#'+name).attr("readonly","readonly");
        }
    });
}

function loadingData(datas) {
    if(datas!=null && datas.length>1){
        datas.split('&').forEach(function(param){
            param = param.split('=');
            var name = param[0], val = param[1];
            if( $('input[name ="' +name+'"]').attr('type')=='text'){
                $('input[name ="' +name+'"]').val(val);
            }else if($('input[name ="' +name+'"]').attr('type')=='checkbox'){
                $('input[name ="' + name + '"]').each(function(i,v){
                    if($('input[name ="' +name+'"]').eq(i).val()==val){
                        $('input[name ="' + name + '"]').eq(i).prop('checked',true);
                    }
                });
            }
        });
    }
    window.scrollTo(0, 0);
    window.android.pageReady();
}

function setColorValue(name,className,score){
    console.log(this);
    $('input[name="disability.'+name+'"]').val(score);
    $('.'+className).css('color','#000');
    $(this).css('color','#1B43EF');
}

function callColorValue(name,className,scores){
    $('.'+className).each(function(i,v){
        $(v).on('click',function(){
            setColorValue.call(this,name,className,scores[i])
        });
    });
}



