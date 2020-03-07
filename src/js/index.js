var str = '', str2 = '', str3 = '', str4 = '', str5 = ''
var peddinginfo = JSON.parse(localStorage.getItem('peddingInfo'))

var resolveinfo = JSON.parse(localStorage.getItem('resolveInfo'))

if (peddinginfo !== null) {
    var saddnum = 0
    peddinginfo.forEach(item => {
        saddnum = peddinginfo.length
        str4 += `<li class="addselect">
        <em></em>
        <input type="checkbox" name="" id="">
        <span>${item}</span>
        <i>-</i>
    </li>`
    })
    $('.pedding').html(str4)
    $('.addnum').html(saddnum)

}

if (resolveinfo !== null) {
    var sreducenum = 0
    resolveinfo.forEach(item => {
        sreducenum = resolveinfo.length
        str5 += `<li class="addselect">
        <em></em>
        <input type="checkbox" checked="true" name="" id="">
        <span>${item}</span>
        <i>-</i>
    </li>`
    })
    $('.resolve').html(str5)
    $('.reducenum').html(sreducenum)
}
// var addArr = [],redArr = []
$('.add').keyup(function () {
    if (event.keyCode === 13) {
        if (this.value) {
            str += `<li class="addselect">
                <em></em>
                <input type="checkbox" name="" id="">
                <span>${this.value}</span>
                <i>-</i>
            </li>`
            $('.pedding').append(str)
            $('.addnum').html($('.addnum').html() * 1 + 1)
            var addarr = JSON.parse(localStorage.getItem('peddingInfo'))
            if (addarr === null) {
                var addArr = []
                addArr.push(this.value)
                localStorage.setItem('peddingInfo', JSON.stringify(addArr))
            } else {
                peddinginfo.push(this.value)
                console.log(this.value)
                localStorage.setItem('peddingInfo', JSON.stringify(peddinginfo))
            }
            this.value = ''
            str = ''
        }
        else {
            alert('请输入内容！')
        }
    }
})


$('.pedding').on('click', 'input', function () {
    str2 = `<li>
    <em></em>
    <input type="checkbox" checked="true" name="" id="">
    <span>${$(this).next().html()}</span>
    <i>-</i>
</li>`
    $('.resolve').append(str2)
    $('.addnum').html($('.addnum').html() * 1 - 1)
    $('.reducenum').html($('.reducenum').html() * 1 + 1)
    var addarr = JSON.parse(localStorage.getItem('peddingInfo'))
    addarr.splice($.inArray($(this).next().html(), addarr), 1)
    localStorage.setItem('peddingInfo', JSON.stringify(addarr))
    var redarr = JSON.parse(localStorage.getItem('resolveInfo'))
    if (redarr === null) {
        var redArr = []
        redArr.push($(this).next().html())
        localStorage.setItem('resolveInfo', JSON.stringify(redArr))
    }
    else {
        redarr.push($(this).next().html())
        localStorage.setItem('resolveInfo', JSON.stringify(redarr))
    }
    // addlist.splice($.inArray(id,addlist),remnum)
    $(this).parent().remove()
})


$('.resolve').on('click', 'input', function () {
    str3 = `<li>
    <em></em>
    <input type="checkbox" name="" id="">
    <span>${$(this).next().html()}</span>
    <i>-</i>
</li>`
    $('.pedding').append(str3)
    // $('.pedding > li > input').attr('checked',false)
    $('.reducenum').html($('.reducenum').html() * 1 - 1)
    $('.addnum').html($('.addnum').html() * 1 + 1)
    var redarr = JSON.parse(localStorage.getItem('resolveInfo'))
    redarr.splice($.inArray($(this).next().html(), redarr), 1)
    localStorage.setItem('resolveInfo', JSON.stringify(redarr))
    var addarr = JSON.parse(localStorage.getItem('peddingInfo'))
    if (addarr !== null) {
        var addArr = []
        addArr.push($(this).next().html())
        localStorage.setItem('peddingInfo', JSON.stringify(addArr))
    }
    else {
        addarr.push($(this).next().html())
        localStorage.setItem('peddingInfo', JSON.stringify(addarr))
    }
    $(this).parent().remove()
})

$('.pedding').on('click', 'i', function () {
    $('.addnum').html($('.addnum').html() * 1 - 1)
    var addarr = JSON.parse(localStorage.getItem('peddingInfo'))
    addarr.splice($.inArray($(this).prev().html(),addarr),1)
    localStorage.setItem('peddingInfo',JSON.stringify(addarr))
    $(this).parent().remove()
})

$('.resolve').on('click', 'i', function () {
    $('.reducenum').html($('.reducenum').html() * 1 - 1)
    var redarr = JSON.parse(localStorage.getItem('resolveInfo'))
    redarr.splice($.inArray($(this).prev().html(),redarr),1)
    localStorage.setItem('resolveInfo',JSON.stringify(redarr))
    $(this).parent().remove()
})

$('button').click(function(){
    console.log(this);
    $('.pedding').remove()
    $('.addnum').html(0)
    $('.resolve').remove()
    $('.reducenum').html(0)
    var addarr = []
    var redarr = []
    localStorage.setItem('peddingInfo',JSON.stringify(addarr))
    localStorage.setItem('resolveInfo',JSON.stringify(redarr))
})