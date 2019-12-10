$(document).on('change keyup','.filters .input-search,.filters select[name=bank],.filters select[name=status]', function(e){
    //e.preventDefault();
    $('.filter-table-wrap').removeClass('active');
    $(this).parent().parent().parent().parent().addClass('active');

    var search = $('.filter-table-wrap.active .filter-search-box input').val();
    var bank = $('.filter-table-wrap.active  .filter-bank select').val();
    var status = $('.filter-table-wrap.active  .filter-status select').val();
    var daterange = $('.filter-table-wrap.active  #datepicker').attr('value');

    if( !search && !bank && !status ){
        return;
    }

    var result_count = $('.filter-table-wrap.active .filter-table tbody tr').length;
    var no_result_count = 0;    

    $('.filter-table-wrap.active .filter-table tbody tr').each(function(){
        var result = false;

        var bank_key = '', date_key = '', status_key = '', company_key = '', address_key = '', credittype = '';
        $(' td', this).each(function(){
            if(typeof $(this).data('bank') !== 'undefined' ){
                bank_key = $(this).data('bank');
            }
            if(typeof $(this).data('status') !== 'undefined' ){
                status_key = $(this).data('status');
            }
            if(typeof $(this).data('date') !== 'undefined' ){
                date_key = $(this).data('date');
            }
            if(typeof $(this).data('company') !== 'undefined' ){
                company_key = $(this).data('company');
            }
            if(typeof $(this).data('address') !== 'undefined' ){
                address_key = $(this).data('address');
            }
            if(typeof $(this).data('credittype') !== 'undefined' ){
                credittype = $(this).data('credittype');
            }
        });

        // Magic happens here ***** 
        if( search && !bank && !status ){
            if( bank_key.includes(search) || status_key.includes(search) || date_key.includes(search) || company_key.includes(search) || address_key.includes(search) || credittype.includes(search) ) {
                result = true;
            }
        } else if(search && bank && !status){
            if( ( bank_key.includes(search) || status_key.includes(search) || date_key.includes(search) || company_key.includes(search) || address_key.includes(search) || credittype.includes(search) ) && bank_key == bank ) {
                result = true;
            }
        } else if(search && !bank && status){
            if( ( bank_key.includes(search) || status_key.includes(search) || date_key.includes(search) || company_key.includes(search) || address_key.includes(search) || credittype.includes(search) ) && status_key == status ) {
                result = true;
            }
        } else if(!search && bank && !status){
            if( bank_key == bank ) {
                result = true;
            }
        } else if(!search && !bank && status){
            if( status_key == status ) {
                result = true;
            }
        } else if(!search && bank && status){
            if( bank_key == bank && status_key == status ) {
                result = true;
            }
        } else if(search && bank && status){
            if( ( bank_key.includes(search) || status_key.includes(search) || date_key.includes(search) || company_key.includes(search) || address_key.includes(search) || credittype.includes(search) ) && (bank_key == bank) && (status_key == status) ) {
                result = true;
            }
        }
        

        if(!result){
            $(this).addClass('d-none');
            $('.table-pagination').addClass('d-none');
            no_result_count++;
        } else {
            $(this).removeClass('d-none');
            $('.table-pagination').removeClass('d-none');
        }
    });    

    if(result_count == no_result_count){
        $('.filter-table-wrap.active .table-no-results').removeClass('d-none');
    } else {
        $('.filter-table-wrap.active .table-no-results').addClass('d-none');
    }

 });

 $(document).on('change keyup','#related-parties .filters .input-search,#related-parties .filters select[name=type]', function(e){
    $('.filter-table-wrap').removeClass('active');
    $(this).parent().parent().parent().parent().addClass('active');

    var search = $('.filter-table-wrap.active .filter-search-box input').val();
    var type = $('.filter-table-wrap.active  .filter-type select').val();

    if( !search && !type ){
        return;
    }

    var result_count = $('.filter-table-wrap.active .card-wrapper .card').length;
    var no_result_count = 0; 

    $('.filter-table-wrap.active .card-wrapper .card').each(function(){
        var result = false;

        if(typeof $(this).data('name') !== 'undefined' ){
            name_key = $(this).data('name');
        }
        if(typeof $(this).data('address') !== 'undefined' ){
            address_key = $(this).data('address');
        }
        if(typeof $(this).data('contact') !== 'undefined' ){
            contact_key = $(this).data('contact');
        }
        if(typeof $(this).data('type') !== 'undefined' ){
            type_key = $(this).data('type');
        }

        if( search && !type ){
            if( name_key.includes(search) || address_key.includes(search) || contact_key.includes(search) ) {
                result = true;
            }
        } else if( !search && type){
            console.log('type')
            if( type == type_key ) {
                result = true;
            } else if( type == 'all') {
                result = true;
            }
        } else if(search && type){
            if( ( name_key.includes(search) || address_key.includes(search) || contact_key.includes(search) ) && type == type_key ) {
                result = true;
            }
        }

        if(!result){
            $(this).addClass('d-none');
            $('.filter-table-wrap.active .table-pagination').addClass('d-none');
            no_result_count++;
        } else {
            $(this).removeClass('d-none');
            $('.filter-table-wrap.active .table-pagination').removeClass('d-none');
        }

    });

    if(result_count == no_result_count){
        $('.filter-table-wrap.active .elem-no-results').removeClass('d-none');
    } else {
        $('.filter-table-wrap.active .elem-no-results').addClass('d-none');
    }
});

 // Sort div elements
 $('select[name="sortby"]').change(function(){
    // console.log('hellooosdsd');
    // console.log($(this).val());

    var order = $(this).val();

    var $selector = $('.card-wrapper'),
    $element = $selector.children('.card');
    $element.sort(function(a, b) {
            var an = parseInt(a.getAttribute('data-sort')),
            bn = parseInt(b.getAttribute('data-sort'));
            if (order == "asc") {
                    if (an > bn)
                    return 1;
                    if (an < bn)
                    return -1;
            } else if (order == "desc") {
                    if (an < bn)
                    return 1;
                    if (an > bn)
                    return -1;
            }
            return 0;
    });
    $element.detach().appendTo($selector);

 });

$('.btn-reset-filters').click(function(e){
    e.preventDefault();
    var $parent = $(this).parent().parent().parent();

    $parent.find('.input-search').val('');
    $parent.find('.form-field').removeClass('valid');
    $parent.find('.search-box').val('');
    $parent.find('.select2-normal2').each(function(){
        $(this).val($(" option:first-child", this).val());
        $(this).trigger('change');
        $(this).parent().removeClass('valid');
    });
    $parent.find('.filter-table tbody tr').removeClass('d-none');
    $parent.find('.table-pagination').removeClass('d-none');
    $parent.find('.table-no-results').addClass('d-none');

    if($('.card-wrapper .card').length){
        $('.card-wrapper .card').removeClass('d-none')
    }
});

$('.mf-reset-filters').click(function(){
    $('input[type="checkbox"]').prop('checked', false);
    $('#datepicker2').val('');
});
$('.mf-btn-cancel,.mf-btn-save').click(function(){
    $('.mobile-filters-wrapper').removeClass('opened');
});

$('#allbank').change(function(){
    if($(this).prop('checked')){
        $('input[name="bankname"]').prop('checked', true);
    } else {
        $('input[name="bankname"]').prop('checked', false);
    }
});

// $('.mf-btn-save').click(function(){

//     var banknames;
//     $('input[name="bankname"]').each(function(){
//         if($(this).prop('checked')){
//             banknames = $(this).attr('id') + ' ';
//         }        
//     });

//     $('.filter-table-wrap.active .filter-table tbody tr').each(function(){

//     });

//     $('.mobile-filters-wrapper').removeClass('opened');
// });

// $('input[name="bankname"]').change(function(){    
//     //$('input[name="bankname"]').prop('checked', true);
//     var banknames = '';
//     $('input[name="bankname"]').each(function(){
//         if($(this).prop('checked')){
//             banknames += $(this).attr('id') + ' ';
//         }        
//     });

//     $('.filter-table-wrap.active .filter-table tbody tr').each(function(){

//     });
// });

// $(document).ready(function(){
//     if($('.table-scroll').length){

//     }
// });

// document.querySelector('.table-scroll').addEventListener('scroll', function(e){
//     this.querySelector('.thead-col').style.left = this.scrollLeft +"px";
//     if(this.scrollLeft > 0){
//         this.querySelector('.thead-col').classList.add('col-intersect')
//     } else {
//         this.querySelector('.thead-col').classList.remove('col-intersect');
//     }

//     this.querySelector('.thead-row').style.top = this.scrollTop +"px";
//     if(this.scrollTop > 0){
//         this.querySelector('.thead-col').classList.add('thead-intersect')
//     } else {
//         this.querySelector('.thead-col').classList.remove('thead-intersect');
//     }
// });

function sortTable(n,ths) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;    
    table = ths.parentElement.parentElement.parentElement;
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        //console.log(rows[i].getElementsByTagName("TD")[n]);
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }