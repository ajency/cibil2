var dropbox1 = false, dropbox2 = false;
var $modalOwl;
$(document).ready(function(){
    
    $('.floating-fields .form-field input[type="text"],.floating-fields .form-field input[type="email"],.floating-fields .form-field input[type="password"]').each(function(){        
        if(!$(this).val()){
            $(this).parent().removeClass("valid");
        } else{
            $(this).parent().addClass("valid");
        }
    });

    $('.floating-fields select').each(function(){
        if($(this).val()){
            $(this).parent().addClass('valid');
        } else {
            $(this).parent().removeClass('valid');
        }
    });    

    $(document).on('blur change', '.floating-fields .form-field input[type="text"],.floating-fields .form-field input[type="email"], .floating-fields .form-field input[type="password"]', function(){
        if(!$(this).val()){
            $(this).parent().removeClass("valid");
        } else{
            $(this).parent().addClass("valid");
        }
    });

    $(document).on('click', '.company-id-type .radio-group .radio-label', function(){
        var elemt = $(this).data('field');
        var name = $(this).data('name');
        $('.radio-content').hide();
        $('.'+elemt).show();
        $('.radio-selected-label').text(name);
        $('.radio-selected-label').show(0);
    });

    $('.mini-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1,
        autoplay: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
       // autoplayTimeout: 1000,
    });

    $modalOwl = $('.modal-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    $('.image-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
    $('.banner-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    $('#add-doc').click(function(e){
        e.preventDefault();
        $( "#btn-verify" ).removeAttr('disabled');
    });

    $(document).on('click', '.document-type-btns .radio-group .radio-label', function(){
        var elm = $(this).attr('for');
        $('.document-type-content').removeClass('active');
        $('.'+elm).addClass('active');
    });

    $('#btn-verify').click(function(e){
        e.preventDefault();
        $('.kyc-step1').hide();
        $('.kyc-step2').show();
        $('.progressbar-verticle li').addClass('active');
        $('.progressbar-verticle li:first-child').addClass('done');
    });

    $('.user-profile').click(function(){
        $(this).parent().toggleClass('opened');
    });

    $(document).click(function(e){
        var container = $('.dropdown-container,.profile-dropdown, .entity-type-select, .edit-entity-type, .btn-help, .questionable-panel,.older-reports-dropdown,.btn-old-report');

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('.profile-dropdown').removeClass('opened');

            if($('.entity-type-select.active').length){
                $('.entity-type-select').removeClass('active');
                $('.edit-entity-type').removeClass('active');
            }
            if($('.questionable-panel.active').length){
                $('.questionable-panel').removeClass('active');
                $('.btn-help').removeClass('active');
            }
            if($('.older-reports-dropdown.opened').length){
                $('.older-reports-dropdown').removeClass('opened');
                $('.btn-old-report').removeClass('show');
            }
        }

    });

    setTimeout(function(){
        $('.progress-steps li.completed').addClass('active done')
        $('.progress-steps li.incomplete').addClass('active');
    },500);

    // $('#btn-proceed').dblclick(function(){
    //     $('.progress-steps li.active').addClass('done');
    //     $('.progress-steps li.active').next().addClass('active');
    // });

    if($(".select2-normal").length){
        $(".select2-normal").select2({
            minimumResultsForSearch: -1,
            containerCssClass: "cs-select-normal",
            dropdownCssClass: "cs-select-normal-results",
        });
        $(".select2-normal").on('select2:open', function(e){
            $(this).parent().addClass('valid');
        });
        $(".select2-normal").on('select2:close', function(e){
            if($(this).val()){
                $(this).parent().addClass('valid');
            } else {
                $(this).parent().removeClass('valid');
            }
        });
    }
    
    if($(".select2-normal2").length){
        $(".select2-normal2").select2({
            minimumResultsForSearch: -1,
            containerCssClass: "cs-select-normal",
            dropdownCssClass: "select-search-results",
        });
        $(".select2-normal2").on('select2:open', function(e){
            $(this).parent().addClass('valid');
        });
        $(".select2-normal2").on('select2:close', function(e){
            if($(this).val()){
                $(this).parent().addClass('valid');
            } else {
                $(this).parent().removeClass('valid');
            }
        });
    }

    if($(".select-entry-count").length){
        $(".select-entry-count").select2({
            minimumResultsForSearch: -1,
            containerCssClass: "select-ec-container",
            dropdownCssClass: "select-ec-results",
        });
    }

    if($(".select2-serachbox").length){
        $(".select2-serachbox").select2({
            containerCssClass: "cs-select-normal",
            dropdownCssClass: "cs-select-normal-results",
        });
        $(".select2-serachbox").parent().addClass('valid');
        // $(".select2-serachbox").on('select2:open', function(e){
        //     $(this).parent().addClass('valid');
        // });
        // $(".select2-serachbox").on('select2:close', function(e){
        //     if($(this).val()){
        //         $(this).parent().addClass('valid');
        //     } else {
        //         $(this).parent().removeClass('valid');
        //     }
        // });
    }
    // if($(".select2-search").length){
    //     $(".select2-search").select2({
    //         containerCssClass: "select-search",
    //         dropdownCssClass: "select-search-results",
    //     });
    // }

    // if($(".select2-filter-bank").length){
    //     $(".select2-filter-bank").select2({
    //         placeholder: "Bank",
    //         minimumResultsForSearch: -1,
    //         containerCssClass: "select2-filter-dropdown",
    //         dropdownCssClass: "select2-filter-results",

    //     });
    // }

    // if($(".select2-filter-status").length){
    //     $(".select2-filter-status").select2({
    //         placeholder: 'Status',
    //         minimumResultsForSearch: -1,
    //         containerCssClass: "select2-filter-dropdown",
    //         dropdownCssClass: "select2-filter-results",
    //     });
    // }

    $('.edit-entity-type').click(function(){        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.entity-type-select').removeClass('active');
            return;
        }
        var elemt_offset = $(this).offset();
        var elemt_height = $(this).height();
        var elemt_w = $(this).width() / 2 - 150;
        $(this).addClass('active');
        $('.entity-type-select').addClass('active');
        $('.entity-type-select').css({'top':elemt_offset.top + elemt_height, 'left': elemt_offset.left + elemt_w});        
    });

    $('.feedback-btn').click(function(){
        $('.feedback-btn').removeClass('active');
        $(this).addClass('active');

        var type = $(this).data('feedbacktype');               
        $('.user-feedback').removeClass('active');
        $('#feedbacktype-'+type).addClass('active');

    });

    $('.drilldown-list li').click(function(){
        var id = $(this).data('index');
        $('.dd-content').hide(0);
        $('.dd-content[data-index="'+id+'"]').show(0);

        $('.questionable-wrapper').addClass('active');
        $('.questionable-content').addClass('active');
    });

    $('.panel-back').click(function(e){
        e.preventDefault();
        $('.questionable-wrapper').removeClass('active');
        $('.questionable-content').removeClass('active');
    });

    $('.btn-help').click(function(e){
        $(this).toggleClass('active');
        $('.questionable-panel').toggleClass('active');
        
    });

    $('.panel-close').click(function(e){
        $('.btn-help').removeClass('active');
        $('.questionable-panel').removeClass('active');
    });



    $('.signup-form .required input,.signup-form .required select').on('keyup change', function(e){
        if($(this).get(0).nodeName == 'INPUT'){
            if(!$(this).val()){
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');                
            }
        } else {
            if($(this).children('option:selected').val() == ''){
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');
            }
        }
    });

    $('.phone-number').keyup(function(){
        if( $(this).val() && !isNaN($(this).val()) ){
            $(this).parent().addClass('entered');
        } else {
            $(this).parent().removeClass('entered');
        }
    });

    $('#contact_number').on('keyup', function(){
        if( $(this).val() ){
            $(this).parent().find('.autofill-hint').addClass('d-none');
        } else {
            $(this).parent().find('.autofill-hint').removeClass('d-none');
        }
    });
    $('#company_pan_number').on('keyup', function(){
        if( $(this).val() ){
            $(this).parent().find('.autofill-hint').addClass('d-none');
        } else {
            $(this).parent().find('.autofill-hint').removeClass('d-none');
        }
    });

    $('.autofill-phone').click(function(){        
        $(this).parent().find('input').val($(this).data('autofill'));
        $(this).parent().addClass('entered');
        $(this).parent().find('input').trigger('change');
    });

    $('.signup-form').on('click', '#btn-signup-submit', function(e){
        e.preventDefault();

        var validate = true;
        $('.signup-form .required input').each(function(){
            if(!$(this).val()){
                validate = false;
                $(this).parent().addClass('error');
            }
        });
        var entity_type;
        $('.signup-form .required select').each(function(){
            if($(this).children('option:selected').val() == ''){
                $(this).parent().addClass('error');
                validate = false;
            }
            entity_type = $(this).children('option:selected').val();
        });

        var emailid = $('#email_address').val();
        if(emailid){
            if(!IsEmail(emailid)){
                $('#email_address').parent().addClass("error");
                $('#email_address').parent().find('.input-error').text('Invalid email id');     
                validate = false;           
            } else if(emailid == 'test@test.com') {
                $('#email_address').parent().addClass("error");
                $('#email_address').parent().find('.input-error').text('Account with this email id already exists'); 
                validate = false;
            } else {
                $('#email_address').parent().removeClass("error");
            }
        }
        var number = $('#mobile_number').val();
        if(number){
            if(isNaN(number)){
                $('#mobile_number').parent().addClass("error");                    
                $('#mobile_number').parent().find('.input-error').text('Only numeric values supported'); 
                validate = false; 
            } else if(number.length != 10){
                $('#mobile_number').parent().addClass("error");
                $('#mobile_number').parent().find('.input-error').text('Enter a 10 digit mobile number');
                validate = false;
            } else if(number == '9999999999'){
                $('#mobile_number').parent().addClass("error");
                $('#mobile_number').parent().find('.input-error').text('Account with this mobile no. already exists');
                validate = false;
            } else {
              $('#mobile_number').parent().removeClass("error");
            }
        } else {
            $(this).parent().addClass("error");
            $(this).parent().find('.input-error').text('Mobile number cannot be blank');
            validate = false;
        }

        if(validate){
            if(entity_type == 1 || entity_type == 2){
                window.location.href='/cibil/credit-report/company-info/';                            
            } else {
                window.location.href='/cibil/credit-report/company-info-proprietorship/';
            }
        }
    });


    // validation of company info
    $('.company-info-form .required input,.company-info-form .required select').on('keyup change', function(e){
        if($(this).get(0).nodeName == 'INPUT'){
            if(!$(this).val()){
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');                
            }
        } else {
            if($(this).children('option:selected').val() == ''){
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');
            }
        }
    });

    $('.company-info-form').on('click', '#btn-proceed', function(e){
        e.preventDefault();

        var validate = true;
        $('.company-info-form .required input').each(function(){
            if(!$(this).val()){
                validate = false;
                $(this).parent().addClass('error');
            }
        });
        var entity_type;
        $('.company-info-form .required select').each(function(){
            if($(this).children('option:selected').val() == ''){
                $(this).parent().addClass('error');
                validate = false;
            }
        });

        var number = $('#contact_number').val();
        if(number){
            if(isNaN(number)){
                $('#contact_number').parent().addClass("error");                    
                $('#contact_number').parent().find('.input-error').text('Only numeric values supported'); 
                validate = false; 
            } else if(number.length != 10){
                $('#contact_number').parent().addClass("error");
                $('#contact_number').parent().find('.input-error').text('Enter a 10 digit mobile number');
                validate = false;
            } else {
              $('#contact_number').parent().removeClass("error");
            }
        } else {
            $('#contact_number').parent().addClass("error");
            $('#contact_number').parent().find('.input-error').text('Company mobile number cannot be blank');
            validate = false;
        }

        var pincode = $('#pincode').val();
        if(pincode){
            if(isNaN(pincode)){
                $('#pincode').parent().addClass("error");                    
                $('#pincode').parent().find('.input-error').text('Only numeric values supported'); 
                validate = false; 
            } else {
              $('#pincode').parent().removeClass("error");
            }
        } else {
            $('#pincode').parent().addClass("error");
            $('#pincode').parent().find('.input-error').text('PIN Code is required');
            validate = false;
        }
        var comp_pan = $('#company_pan_number').val();        
        if($('#company_pan_number').parent().hasClass('required')){
            if(comp_pan){
                if( comp_pan.length != 10 ){
                    $('#company_pan_number').parent().addClass("error");
                    $('#company_pan_number').parent().find('.input-error').text('Invalid PAN number, minimum number should be 10 digit');
                    validate = false;
                } else {
                $('#company_pan_number').parent().removeClass("error");
                }
            } else {
                $('#company_pan_number').parent().addClass("error");
                $('#company_pan_number').parent().find('.input-error').text('Please Enter Company PAN');
                validate = false;
            }
        }

        var ci_number = $('#ci_number').val();  
        if($('#ci_number').parent().hasClass('required')){
            if(ci_number){
                if( ci_number.length != 21 ){
                    $('#ci_number').parent().addClass("error");
                    $('#ci_number').parent().find('.input-error').text('Invalid CIN, minimum number should be 21 digit');
                    validate = false;
                } else {
                $('#ci_number').parent().removeClass("error");
                }
            } else {
                $('#ci_number').parent().addClass("error");
                $('#ci_number').parent().find('.input-error').text('Please Enter Corporate Identification Number');
                validate = false;
            }
        }

        var cr_number = $('#cr_number').val();  
        if($('#cr_number').parent().hasClass('required')){
            if(cr_number){
                if( cr_number.length != 21 ){
                    $('#cr_number').parent().addClass("error");
                    $('#cr_number').parent().find('.input-error').text('Invalid CRN, minimum number should be 21 digit');
                    validate = false;
                } else {
                $('#cr_number').parent().removeClass("error");
                }
            } else {
                $('#cr_number').parent().addClass("error");
                $('#cr_number').parent().find('.input-error').text('Please Enter Corporate Registration Number');
                validate = false;
            }
        }

        var tax_identification_number = $('#tax_identification_number').val();  
        if($('#tax_identification_number').parent().hasClass('required')){
            if(tax_identification_number){
                if( tax_identification_number.length != 11 ){
                    $('#tax_identification_number').parent().addClass("error");
                    $('#tax_identification_number').parent().find('.input-error').text('Invalid TIN, minimum number should be 11 digit');
                    validate = false;
                } else {
                $('#tax_identification_number').parent().removeClass("error");
                }
            } else {
                $('#tax_identification_number').parent().addClass("error");
                $('#tax_identification_number').parent().find('.input-error').text('Please Enter TAX Identification Number');
                validate = false;
            }
        }

        var gst_number = $('#company_gst_number').val();  
        if($('#company_gst_number').parent().hasClass('required')){
            if(gst_number){
                if( gst_number.length != 15 ){
                    $('#company_gst_number').parent().addClass("error");
                    $('#company_gst_number').parent().find('.input-error').text('Invalid GST Number, minimum number should be 15 digit');
                    validate = false;
                } else {
                $('#company_gst_number').parent().removeClass("error");
                }
            } else {
                $('#company_gst_number').parent().addClass("error");
                $('#company_gst_number').parent().find('.input-error').text('Please Enter Company GST Number');
                validate = false;
            }
        }



        var share = $(this).data('share');
        var resume = $(this).data('resume');
        var url = '/cibil/credit-report/payment/';

        if(typeof share != "undefined") {
            url = '/cibil/credit-report/share/payment/';
        }

        if(typeof resume != "undefined") {
            url = '/cibil/credit-report/resume/payment/';
        }

        if(validate){
            window.location.href=url;
        }
    });

    // end of company info


    // validation of company info proprietorship

    $('.company-info-proprietorship-form .required input,.company-info-proprietorship-form .required select').on('keyup change', function(e){
        if($(this).get(0).nodeName == 'INPUT'){
            if(!$(this).val()){
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');                
            }
        } else {
            if($(this).children('option:selected').val() == ''){
                $(this).parent().addClass('error');
            } else {
                $(this).parent().removeClass('error');
            }
        }
    });

    $('.company-info-proprietorship-form').on('click', '#btn-proceed', function(e){
        e.preventDefault();

        var validate = true;
        $('.company-info-proprietorship-form .required input').each(function(){
            if(!$(this).val()){
                validate = false;
                $(this).parent().addClass('error');
            }
        });
        var entity_type;
        $('.company-info-proprietorship-form .required select').each(function(){
            if($(this).children('option:selected').val() == ''){
                $(this).parent().addClass('error');
                validate = false;
            }
        });

        var number = $('#contact_number').val();
        if(number){
            if(isNaN(number)){
                $('#contact_number').parent().addClass("error");                    
                $('#contact_number').parent().find('.input-error').text('Only numeric values supported'); 
                validate = false; 
            } else if(number.length != 10){
                $('#contact_number').parent().addClass("error");
                $('#contact_number').parent().find('.input-error').text('Enter a 10 digit mobile number');
                validate = false;
            } else {
              $('#contact_number').parent().removeClass("error");
            }
        } else {
            $(this).parent().addClass("error");
            $(this).parent().find('.input-error').text('Proprietor mobile number cannot be blank');
            validate = false;
        }
        
        var pincode = $('#pincode').val();
        if(pincode){
            if(isNaN(pincode)){
                $('#pincode').parent().addClass("error");                    
                $('#pincode').parent().find('.input-error').text('Only numeric values supported'); 
                validate = false; 
            } else {
              $('#pincode').parent().removeClass("error");
            }
        } else {
            $('#pincode').parent().addClass("error");
            $('#pincode').parent().find('.input-error').text('PIN Code is required');
            validate = false;
        }

        var gstin_number = $('#business_gstin_number').val();  
        if(gstin_number){
            if( gst_number.length != 15 ){
                $('#business_gstin_number').parent().addClass("error");
                $('#business_gstin_number').parent().find('.input-error').text('Invalid GSTIN Number, minimum number should be 15 digit');
                validate = false;
            } else {
              $('#business_gstin_number').parent().removeClass("error");
            }
        } else {
            $('#business_gstin_number').parent().addClass("error");
            $('#business_gstin_number').parent().find('.input-error').text('Please Enter Company GSTIN Number');
            validate = false;
        }

        var share = $(this).data('share');
        var resume = $(this).data('resume');
        var url = '/cibil/credit-report/proprietorship/payment/';

        if(typeof share != "undefined") {
            url = '/cibil/credit-report/share/proprietorship/company-info-error/';
        }

        if(typeof resume != "undefined") {
            url = '/cibil/credit-report/resume/proprietorship/company-info-error/';
        }

        if(validate){
            window.location.href=url;
        }
    });

    // end of company info proprietorship


    $(function () {
      $('[data-toggle="popover"]').popover()
    })

    $('input[type=radio][name=paymentselect]').change(function() {
        if (this.value == 'paymentOffline') {
            $('.offline-box').removeClass('d-none');
            $('.offline-btn').removeClass('d-none');
            $('.online-btn').addClass('d-none');
        }
        else if (this.value == 'paymentOnline') {
            $('.offline-box').addClass('d-none');
            $('.offline-btn').addClass('d-none');
            $('.online-btn').removeClass('d-none');
        }
    });

    $(document).on('click', '.more-text-btn', function(){
        $(this).parent().toggleClass('open');
    });

    // jQuery('.sticky-sidebar').theiaStickySidebar({        
    //     additionalMarginTop: 30
    // });

    // Set Password
    $('body').on('click', '.set-pwd', function(e){
        e.preventDefault();
        $(this).addClass('d-none');
        $('.enter-pwd').removeClass('d-none');
    })
    $('body').on('click', '.save-pwd', function(){
        $('.enter-pwd').addClass('d-none');
        $('.hidden-pwd').removeClass('d-none');
    })

    // Set Password
    $('body').on('click', '.view-tax', function(e){
        e.preventDefault();
        $(this).addClass('d-none');
        $('.hide-tax , .tax-details').removeClass('d-none');
    })
    $('body').on('click', '.hide-tax', function(e){
        e.preventDefault();
        $(this).addClass('d-none');
        $('.tax-details').addClass('d-none');
        $('.view-tax').removeClass('d-none');
    })

    if($('#state').length){
        populateStatesByIndia('state', 'Select');
    }    

    //Dropbox js

    Dropzone.prototype.defaultOptions.dictFileTooBig = "File size is greater than 10MB";
    Dropzone.prototype.defaultOptions.dictInvalidFileType = "File type is not supported. Ensure file is of type .jpeg, .jpg, .png, . pdf";

    var previewCont = '.fp-idproof';    
    $('#kycDropzone').dropzone({
        acceptedFiles: '.jpg, .png, .gif, .pdf',
        addRemoveLinks: true,
        previewsContainer: previewCont,
        thumbnailWidth: null, 
        thumbnailHeight: null,
        maxFiles: 3,
        maxFilesize: 10, //MB
        init: function() { // fake file upload            
            this.on('error', function(file, errorMessage) {

                if (file.accepted) {
                    var mypreview = document.getElementsByClassName('dz-error');
                    mypreview = mypreview[mypreview.length - 1];
                    mypreview.classList.toggle('dz-error');
                    mypreview.classList.toggle('dz-success');
                //    window.location.href="/cibil/credit-report/kyc-doc-upload"

                    // Resert all errors
                    $('.dz-1 .message-container').html('');
                   
                    $('#kycDropzone').addClass('file-added');
                    $('.kycDropzone > span').addClass('done');                

                    //completemultiple function -- add
                    $('#kycDropzone').addClass('file-added');                                     
                    
                    if($(previewCont+'.file-thumbnails .dz-preview').length){
                        $(previewCont+'.file-thumbnails .dz-preview').removeClass('active');
                    }
                  
                    $(file.previewElement).addClass('active');                    
                    $(file.previewElement).attr('data-parent', previewCont);

                    setTimeout(function(){
                        $('#kycDropzone .file-preview img').attr('src',  $('#kycDropzone .dz-preview.active img').attr('src'));
                    }, 500);                                      
                    //end of completemultiple function

                    $('div[data-target="#director-proof"]').addClass('file-success');
                    $('#director-proof').collapse('hide');
                    setTimeout(function(){
                        $('#company-address-proof').collapse('show');
                    }, 500)

                    dropbox1 = true;
                    validate_kyc_upload()

                } else {
                    this.removeFile(file);
                    $('.dz-1 .message-container').html(notices('error', 'UPLOAD FAILED', errorMessage));                  
                }
            });

            // this.on('completemultiple', function(file, errorMessage){                
            //     $(this).addClass('file-added');
            // });

            // this.on('maxfilesexceeded', function(file){
            //     console.log(file);
            //     console.log(errorMessage);
            //     $('.dz-1 .message-container').html(notices('error', 'UPLOAD FAILED', errorMessage));                
            // });

            this.on('uploadprogress', function(file, progress, bytesSent){
                $('#kycDropzone').addClass('uploading-files');   
                var percentage = Math.round(progress);
               
                calculate_upload_progress(percentage, '#kycDropzone');
                $('#kycDropzone .upload-progress').text(percentage);

                setTimeout(function(){
                    $('#kycDropzone').removeClass('uploading-files');                   
                }, 500);
            });

            this.on('dragover', function(){
                calculate_upload_progress_rest(0, '#kycDropzone');  
            });
            

            this.on('removedfile', function(file, errorMessage) {
                calculate_upload_progress_rest(0, '#kycDropzone');
                if( $('.fp-idproof > .dz-preview').length == 0 ){
                    $('#kycDropzone').removeClass('file-added');
                    dz_reset_preview($(file.previewElement).attr('data-parent'));
                    $('.kycDropzone > span').removeClass('done');
                    dropbox1 = false;
                    validate_kyc_upload();
                    $('div[data-target="#director-proof"]').removeClass('file-success');
                } else {
                    var parent = $(file.previewElement).attr('data-parent');
                    $(parent+'.file-thumbnails .dz-preview:nth-child(2)').trigger('click');
                }
            });
        }
    });

    previewCont2 = '.fp-addproof'
    $('#comp_add_proof').dropzone({
        acceptedFiles: '.jpg, .png, .gif, .pdf',
        addRemoveLinks: true,
        previewsContainer: previewCont2,
        thumbnailWidth: null, 
        thumbnailHeight: null,
        maxFiles: 3,
        maxFilesize: 10, //MB
        init: function() { // fake file upload            
            this.on('error', function(file, errorMessage) {

                if (file.accepted) {
                    // var mypreview = $(file.previewElement);
                    // mypreview = mypreview[mypreview.length - 1];
                    // mypreview.classList.toggle('dz-error');
                    // mypreview.classList.toggle('dz-success');
                //    window.location.href="/cibil/credit-report/kyc-doc-upload"

                    // Resert all errors
                    $('.dz-2 .message-container').html('');
                   
                    $('#comp_add_proof').addClass('file-added');
                    $('.comp_add_proof > span').addClass('done');                

                    //completemultiple function -- add
                    $('#comp_add_proof').addClass('file-added');                                     
                    
                    if($(previewCont2+'.file-thumbnails .dz-preview').length){
                        $(previewCont2+'.file-thumbnails .dz-preview').removeClass('active');
                    }
                  
                    $(file.previewElement).addClass('active');                    
                    $(file.previewElement).attr('data-parent', previewCont2);

                    setTimeout(function(){
                        $('#comp_add_proof .file-preview img').attr('src',  $('#comp_add_proof .dz-preview.active img').attr('src'));
                    }, 500);                                      
                    //end of completemultiple function

                    $('div[data-target="#company-address-proof"]').addClass('file-success');                    
                    $('#company-address-proof').collapse('hide');                    

                    dropbox2 = true;
                    validate_kyc_upload();

                } else {
                    this.removeFile(file);
                    $('.dz-2 .message-container').html(notices('error', 'UPLOAD FAILED', errorMessage));                  
                }
            });

            // this.on('completemultiple', function(file, errorMessage){                
            //     $(this).addClass('file-added');
            // });

            // this.on('maxfilesexceeded', function(file, errorMessage){
            //     $('.dz-2 .message-container').html(notices('error', 'UPLOAD FAILED', errorMessage));                
            // });

            this.on('uploadprogress', function(file, progress, bytesSent){
                $('#comp_add_proof').addClass('uploading-files');   
                var percentage = Math.round(progress);
               
                calculate_upload_progress(percentage, '#comp_add_proof');
                $('#comp_add_proof .upload-progress').text(percentage);

                setTimeout(function(){
                    $('#comp_add_proof').removeClass('uploading-files');                   
                }, 500);
            });

            this.on('dragover', function(){
                calculate_upload_progress_rest(0, '#comp_add_proof');  
            });
            

            this.on('removedfile', function(file, errorMessage) {
                calculate_upload_progress_rest(0, '#comp_add_proof');
                if( $('.fp-addproof > .dz-preview').length == 0 ){
                    $('#comp_add_proof').removeClass('file-added');
                    dz_reset_preview($(file.previewElement).attr('data-parent'));
                    $('.comp_add_proof > span').removeClass('done');
                    dropbox2 = false;
                    validate_kyc_upload();
                    $('div[data-target="#company-address-proof"]').removeClass('file-success');
                } else {
                    var parent = $(file.previewElement).attr('data-parent');
                    $(parent+'.file-thumbnails .dz-preview:first-child').trigger('click');
                }
            });
        }
    });

    $(document).on('click', '.add-more-file', function(){
        $(this).parents('form').trigger('click');
    });

    // $(document).on('click', '.online-btn.hold', function(e){
    //     e.preventDefault();
    //     var $this = $(this);
    //     $("html, body").animate({ scrollTop: 0 }, "slow", function(){
    //         $('.error-container .message').removeClass('d-none');
    //         $('.incomplete.active').addClass('error');
    //         $this.removeClass('hold');
    //     });
    // });

    $(document).on('click', '.file-thumbnails .dz-preview', function(){
        dz_show_preview($(this));
    });
    var verify_validate = true;
    $('input[name=radio_step1],input[name=radio_step2],input[name=radio_step3],input[name=radio_step4],input[name=radio_step5]').on('change', function(){
        validate_verify_yourself();
    });

    $('.btn-forgot-password').on('click', function(e){
        e.preventDefault();
        modal_switch_page($(this));
    });

    $('.btn-backto').click(function(e){
        e.preventDefault();
        modal_switch_page($(this));
    });

    // login in modal
    $(document).on('click', '#btn-signin-email', function(e){
        e.preventDefault();
        var validate_login = true;
        $('.signin-form .form-field.required input').each(function(){
            if( !$(this).val() ){
                $(this).parent().addClass("error");
                validate_login = false;
            } else{
                $(this).parent().removeClass("error");                
            }
        });
        if(validate_login){
            if(!IsEmail( $('.signin-form .form-field input[type=email]').val() )){
                $('.signin-form').addClass('error');
            } else {
                
                //modal_switch_page($(this));
                $('.signin-form').removeClass('error');
                window.location.href="/cibil/credit-report/signin-verify-email/";
            }
        }
    });

    $(document).on('click', '#btn-signin-submit', function(e){
        e.preventDefault();
        var validate_login = true;
        $('.signin-form .form-field.required input').each(function(){
            if( !$(this).val() ){
                $(this).parent().addClass("error");
                validate_login = false;
            } else{
                $(this).parent().removeClass("error");                
            }
        });
        if(validate_login){
            window.location.href='/cibil/accounts/my-reports';
        }
    });

    //Forgot Password
    $(document).on('click', '#btn-reset-link', function(e){
        e.preventDefault();
        var validate_reset = true;
        $('.forgot-password .form-field.required input').each(function(){
            if( !$(this).val() ){
                $(this).parent().addClass("error");
                validate_reset = false;
            } else{
                $(this).parent().removeClass("error");                
            }
        });

        if(validate_reset){
            if(!IsEmail( $('.forgot-password .form-field input[type=email]').val() )){
                $('.forgot-password').addClass('error');
            } else {
                $('.forgot-password').removeClass('error');
                modal_switch_page($(this));
            }
        }
    });
    
    //reset Password
    $(document).on('click', '#btn-reset-password', function(e){
        e.preventDefault();
        var validate = true;
        $('.reset-password .form-field.required input').each(function(){
            if( !$(this).val() ){
                $(this).parent().addClass("error");
                validate = false;
            } else{
                $(this).parent().removeClass("error");                
            }
        });

        if(validate){
            if( $('input[name="new_password"]').val() != $('input[name="confirm_password"]').val() ){
                $('.reset-password').removeClass('success');
                $('.reset-password').addClass('error');
            } else {                
                $('.reset-password').removeClass('error');
                $('.reset-password').addClass('success');
                var $this = $(this);
                setTimeout(function(){
                    modal_switch_page($this);
                    $('.reset-password').removeClass('success');
                }, 1500)
            }
        }
    }); 

    if($('.mobile-sticky-btns').length && $(window).width() < 768){
        $('.mobile-sticky-btns:not(.scroll-to-fixed-fixed)').scrollToFixed( {
            bottom: 0,
            limit: $('.mobile-sticky-btns').offset().top,
            preFixed: function() { $(this).addClass('stick'); },
            postFixed: function() { $(this).removeClass('stick'); }
        });
    }
    var uppercase = false;
    var special_char = false;
    var pass_length = false;

    $('#set_password').on('keyup change', function(){
        pass = $(this).val();
        uppercase = hasUpperCase(pass);
        special_char = hasSpecialChar(pass);

        if(uppercase) {
            $('.uppercase').addClass('checked');
        } else {
            $('.uppercase').removeClass('checked');
        }

        if(special_char) {
            $('.specialchar').addClass('checked');
        } else {
            $('.specialchar').removeClass('checked');
        }
        
        if(pass.length >= 6) {            
            $('.charlength').addClass('checked');
            pass_length = true;
        } else {
            $('.charlength').removeClass('checked');
            pass_length = false;
        }
    });

    $('#btn-set-password').click(function(e){
        e.preventDefault();
        var noredirect = $(this).data('noredirect');
        //console.log(noredirect);
        var pass = $('#set_password').val();
        var cpass = $('#confirm_password').val();
        if( uppercase && special_char && pass_length ) {              
            if(pass === cpass){
                $('.form-error').hide();
                $('.form-success').show();
                //console.log(noredirect);
                if(noredirect){                    
                    setTimeout(function(){
                        $('.setpass').addClass('d-none')
                        $('.hidden-pwd').removeClass('d-none');
                        $('#payment-setpassword').modal('hide');                        
                    }, 800);
                } else {
                    setTimeout(function(){
                        window.location.href='/cibil/credit-report/signin/';
                    }, 800);
                }

            } else {
                $('.form-error').show();
            }                       
        }

        if(!$('#set_password').val()){
            $('#set_password').parent().addClass('error');
        } else {
            $('#set_password').parent().removeClass('error');
        }
        if(!$('#confirm_password').val()){
            $('#confirm_password').parent().addClass('error');
        } else {
            $('#confirm_password').parent().removeClass('error');
        }
    });

    $('.share-with-box').click(function(){
        $('.share-with-box input').focus();
    });

    $('#email-share').on('keyup', function(e){
        if($(this).val()){
            $('.sharebox-cont').removeClass('error');
        }
        if(e.which === 13) {            
            if( !IsEmail( $(this).val() ) ) {
                $(this).addClass('invalid');
            } else {
                $(this).removeClass('invalid');
                var email_html = '<span class="email-ids" data-email="'+ $(this).val() +'"><i class="fas fa-user-alt text-blue user-icon"></i> '+ $(this).val() +' <span class="close"></span></span>';
                $( email_html ).insertBefore(this);
                $(this).val('');
            }
        }
    });

    $(document).on('click', '.email-ids .close', function(){
        $(this).parent().remove();
    });


    $(document).on('click', '.btn-resend-email', function(e){
        e.preventDefault();
        $(this).parent().addClass('d-none');
        $('.resend-confirm').removeClass('d-none');
    });

    $('.verify-otp-form').on('click', '.btn-verify-otp', function(e){
        e.preventDefault();
        if(!$('.verify-otp-form .form-field.required input').val()){
            $('.verify-otp-form .form-field.required').addClass('error');
        } else {
            $('.verify-otp-form .form-field.required').removeClass('error');
            window.location.href="/cibil/accounts/overview";
        }
    });

    $('.btn-vr-otp').click(function(e){
        e.preventDefault();

        var page = $(this).data('page');
        $('.ov-step-page').removeClass('active');
        $('.ov-step-page[data-step='+page+']').addClass('active');
    });

    // $('.report-card').click(function(){
    //     $(this).toggleClass('active');
    // });

    $('.btn-old-report').click(function(e){
        e.preventDefault();
        $(this).toggleClass('show');
        $('.older-reports-dropdown').toggleClass('opened');
    });
    $('.older-reports-dropdown .close-dropdown').click(function(e){
        e.preventDefault();
        $('.older-reports-dropdown').removeClass('opened');
        $('.btn-old-report').removeClass('show');
    });

    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.mobile-menu-container').toggleClass('open');
    });
    $('.btn-close-side-menu').click(function(){
        $('.hamburger').toggleClass('is-active');
        $('.mobile-menu-container').toggleClass('open');
    });

    $('.credit-lists-table-wrap tbody tr').click(function(){
        $(this).toggleClass('opend');
    });

    if($('#datepicker').length){
        var picker = new Lightpick({
            field: document.getElementById('datepicker'),
            singleDate: false,
            onSelect: function(start, end){
            //  var str = '';
            //  str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            //  str += end ? end.format('Do MMMM YYYY') : '...';
            //  document.getElementById('result-2').innerHTML = str;
            }
        });
    }
    if($('#datepicker2').length){
        var picker = new Lightpick({
            field: document.getElementById('datepicker2'),
            singleDate: false,
            onSelect: function(start, end){
            //  var str = '';
            //  str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            //  str += end ? end.format('Do MMMM YYYY') : '...';
            //  document.getElementById('result-2').innerHTML = str;
            }
        });
    }
    if($('#datepicker3').length){
        var picker = new Lightpick({
            field: document.getElementById('datepicker3'),
            singleDate: false,
            onSelect: function(start, end){
            //  var str = '';
            //  str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            //  str += end ? end.format('Do MMMM YYYY') : '...';
            //  document.getElementById('result-2').innerHTML = str;
            }
        });
    }
    if($('#datepicker4').length){
        var picker = new Lightpick({
            field: document.getElementById('datepicker4'),
            singleDate: false,
            onSelect: function(start, end){
            //  var str = '';
            //  str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            //  str += end ? end.format('Do MMMM YYYY') : '...';
            //  document.getElementById('result-2').innerHTML = str;
            }
        });
    }
   

    $('.mobile-filter-btn').click(function(){
        $('.mobile-filters-wrapper').addClass('opened');
    });    

    // $('.credit-lists-table-wrap tbody tr').click(function(){
    //     var url = $(this).data('url');
    //     if(url){
    //         window.location.href=url;
    //     }
    // });    
    $('#request-share-modal .btn-share-request').click(function(){
       // var share_number = $('.all-emails .email-ids').length; 
       var validate = true;
        var email = $('#share-email').val();
        if(!$('#share-email').val()){
            $('#share-email').parent().addClass('error');
            validate = false;
        } else {
            $('#share-email').parent().removeClass('error'); 

            if(!IsEmail(email)){
                $('#share-email').parent().addClass("error");
                $('#share-email').parent().find('.input-error').text('Invalid email id');     
                validate = false;           
            } else {
                $('#share-email').parent().removeClass("error");
            }
        }
        
        // if(!$('#share-companyname').val()){
        //     $('#share-companyname').parent().addClass('error');
        // } else {
        //     $('#share-companyname').parent().removeClass('error'); 
        // }

        if(validate){
            var alert = '<div class="alert-wrap slideInDown animated"><div class="alert alert-primary slideInUp animated shared-with" role="alert">Shared with <span class="count">one</span> person</div></div>';
            $('#request-share-modal').modal('hide');  
            $('#share-companyname').parent().removeClass('error');   
            
            $('.request-share-with').removeClass('show');
            $('.request-share-again').addClass('show');
        
            setTimeout(function(){
                $( "div.header" ).after( alert );
            },500);
            setTimeout(function(){
                $('.alert-wrap').remove();
            },8500);
        }

        

        

        // if( !share_number && !$('#email-share').val() ){
        //     $('.sharebox-cont').addClass('error');            
        // } else {
        //     $('.sharebox-cont').removeClass('error'); 

        //     if(email){
        //         if( !IsEmail( email ) ) {
        //             $('#email-share').addClass('invalid');
        //         } else {
        //             $('#email-share').removeClass('invalid');
        //             var email_html = '<span class="email-ids" data-email="'+ $('#email-share').val() +'"><i class="fas fa-user-alt text-blue user-icon"></i> '+ $('#email-share').val() +' <span class="close"></span></span>';
        //             $( email_html ).insertBefore( $('#email-share')[0] );
        //             $('#email-share').val('');
    
        //             share_number = $('.all-emails .email-ids').length; 
        //             var alert = '<div class="alert-wrap slideInDown animated"><div class="alert alert-primary slideInUp animated shared-with" role="alert">Shared with <span class="count">'+ inWords(share_number)  +'</span> person</div></div>';
                    
        //             if(!$('#share-companyname').val()){
        //                 $('#share-companyname').parent().addClass('error');
        //             } else {
        //                 $('#request-share-modal').modal('hide');  
        //                 $('#share-companyname').parent().removeClass('error');   
                        
        //                 $('.request-share-with').removeClass('show');
        //                 $('.request-share-again').addClass('show');
                    
        //                 setTimeout(function(){
        //                     $( "div.header" ).after( alert );
        //                 },500);
        //                 setTimeout(function(){
        //                     $('.alert-wrap').remove();
        //                 },8500);
        //             }
        //         }
        //     } else {
        //         share_number = $('.all-emails .email-ids').length; 
        //         var alert = '<div class="alert-wrap slideInDown animated"><div class="alert alert-primary slideInUp animated shared-with" role="alert">Shared with <span class="count">'+ inWords(share_number)  +'</span> person</div></div>';
                
        //         if(!$('#share-companyname').val()){
        //             $('#share-companyname').parent().addClass('error');
        //         } else {
        //             $('#request-share-modal').modal('hide');
        //             $('#share-companyname').parent().removeClass('error');

        //             $('.request-share-with').removeClass('show');
        //             $('.request-share-again').addClass('show');

        //             setTimeout(function(){
        //                 $( "div.header" ).after( alert );
        //             },500);
        //             setTimeout(function(){
        //                 $('.alert-wrap').remove();
        //             },8500);
        //         }
        //     }
        //}
    });

    $('.btn-request-another').click(function(){
        $('.request-share-with').addClass('show');
        $('.request-share-again').removeClass('show');
    });

    $('.btn-send-on-phone').click(function(e){
        e.preventDefault();
        var alert = '<div class="alert-wrap slideInDown animated"><div class="alert alert-primary slideInUp animated pl-1 pr-1" role="alert"><i class="fas fa-link"></i> Link has been sent</div></div>';  
        setTimeout(function(){
            $( "div.header" ).after( alert );
        },500);
        setTimeout(function(){
            $('.alert-wrap').remove();
        },8500);
    });

    var user_index = 3;
    $('#share-modal .btn-share-request').click(function(){
        var share_number = $('.all-emails .email-ids').length; 
        var email = $('#email-share').val();

        if( !share_number && !$('#email-share').val() ){
            $('.sharebox-cont').addClass('error');            
        } else {
            $('.sharebox-cont').removeClass('error');             

            if(email){
                if( !IsEmail( email ) ) {
                    $('#email-share').addClass('invalid');
                } else {
                    $('#email-share').removeClass('invalid');
                    var email_html = '<span class="email-ids" data-email="'+ $('#email-share').val() +'"><i class="fas fa-user-alt text-blue user-icon"></i> '+ $('#email-share').val() +' <span class="close"></span></span>';
                    $( email_html ).insertBefore( $('#email-share')[0] );
                    $('#email-share').val('');
    
                    share_number = $('.all-emails .email-ids').length; 
                    var alert = '<div class="alert-wrap slideInDown animated"><div class="alert alert-primary slideInUp animated shared-with" role="alert">Shared with <span class="count">'+ inWords(share_number)  +'</span> person</div></div>';                                                       

                    user_index++;                    
                    $('.email-ids:not(.done)').each(function(){
                        var demail = $(this).data('email');
                        $(this).addClass('done');
                        var html = '<li data-index="'+user_index+'"><input type="checkbox" name="access_list" id="email_'+user_index+'"><label for="email_'+user_index+'">'+demail+'<span class="btn p-0 stick-right btn-remove"><i class="chevron-close"></i></span><span class="btn btn-text-orange p-0 stick-right btn-add">ADD BACK</span></label></li>';
                        $( ".report-access-list" ).append( html );
                    });                    
                   
                    $('#share-modal').modal('hide');
                    $('.email-ids').remove();

                    setTimeout(function(){
                        $( "div.header" ).after( alert );
                    },500);
                    setTimeout(function(){
                        $('.alert-wrap').remove();
                    },8500);
                }
            } else {
                share_number = $('.all-emails .email-ids').length; 
                var alert = '<div class="alert-wrap slideInDown animated"><div class="alert alert-primary slideInUp animated shared-with" role="alert">Shared with <span class="count">'+ inWords(share_number)  +'</span> person</div></div>';
                
                user_index++;
                $('.email-ids:not(.done)').each(function(){
                    var demail = $(this).data('email');
                    $(this).addClass('done');
                    var html = '<li data-index="'+user_index+'"><input type="checkbox" name="access_list" id="email_'+user_index+'"><label for="email_'+user_index+'">'+demail+'<span class="btn p-0 stick-right btn-remove"><i class="chevron-close"></i></span><span class="btn btn-text-orange p-0 stick-right btn-add">ADD BACK</span></label></li>';
                    $( ".report-access-list" ).append( html );
                });  
                $('#share-modal').modal('hide');
                
                $('.email-ids').remove();

                setTimeout(function(){
                    $( "div.header" ).after( alert );
                },500);
                setTimeout(function(){
                    $('.alert-wrap').remove();
                },8500);
            }
        }
    });

    $('.btn-educate').click(function(){
        $(this).parent().hide();
        $('#share-modal button.close').addClass('d-none');
        $('#share-modal .modal-share-container').slideDown();
    });

    $(document).on('change', 'input[name="access_list"]', function(){
        $('.shared-with-section').css({'display':'none'});
        $('.edit-list-action').slideDown();
        $('.share-submit').css({'display':'none'});
    });

    $('#share-modal .btn-cancel').click(function(){
        $('input[name="access_list"]').prop('checked', false);
        $('.shared-with-section').css({'display':'block'});
        $('.edit-list-action').css({'display':'none'});
        $('.share-submit').slideDown();
    });  
    $('#share-modal .btn-save').click(function(){
        $('input[name="access_list"]:checked').parent().remove();
        $('.shared-with-section').css({'display':'block'});
        $('.edit-list-action').css({'display':'none'});
        $('.share-submit').slideDown();
    });  

    $('.drilldown-menu .side-navigation li a').click(function(e){
        e.preventDefault();
        var page = $(this).data('page');
        $('.drilldown-menu').addClass('opened');        
        $('.drilldown-content.'+page).addClass('opened');
    });

    $('.drilldown-back').click(function(e){
        e.preventDefault();
        $('.drilldown-menu').removeClass('opened');
        $('.drilldown-content').removeClass('opened');
       // $('.credit-facilities').removeClass('opened');
    });

    // // table horizontal scroll    
    $('#table-scroll').dragscrollable();
    $('.table-drag-scroll').dragscrollable();
    $('.scrollable-elm').dragscrollable();

    $('.tab-menu-list li').click(function(){
        var menu = $(this).data('menu');
        if($('.'+menu).length){
            $('.tab-menu-list li').removeClass('active');
            $(this).addClass('active');
            $('.tab-menu-list').addClass('slide-left');
            $('.tab-menu-content').addClass('slide-left');
            $('.tab-menu-content .menu-content').removeClass('active');
            $('.tab-menu-content .menu-content').hide();
            $('.'+menu).show();
            $('.'+menu).addClass('active');
        }
    });
    $('.back-to-tab').click(function(){
        $('.tab-menu-content .menu-content').hide();
        $('.tab-menu-content .menu-content').removeClass('active');
        $('.tab-menu-list li').removeClass('active');
        $('.tab-menu-list').removeClass('slide-left');
        $('.tab-menu-content').removeClass('slide-left');
    });

    $(document).on('change', '.menu-content.active input', function(){
        var filtercount = $('.tab-menu-content .menu-content.active input:checked').length;
        console.log(filtercount);
        if(filtercount){
            $('.tab-menu-list li.active .badge').text(filtercount);
        } else {
            $('.tab-menu-list li.active .badge').text('');
        }

    });

    $(window).resize(function(){
        if( $(window).width() > 768 ){
            $('.tab-menu-list li:first-child').trigger('click');
        }
    });

    $('.tb-view-more-btn').click(function(e){
        e.preventDefault();
        $(' span', this).toggleClass('d-none');
        // $(' .less', this).toggleClass('d-none');
        $(this).parents().parents().toggleClass('tb-view-results');
    });

    $('.ph-view-more').click(function(){
        $(this).hide();
        $('div.ph-result').removeClass('ph-result');
    });

    // if($('.progress').length){
    //     $('.progress').each(function(){
    //         var progress = $(this).data('progress');
    //         var id = $(this).attr('id');
    //         if(progress){
    //             calculate_upload_progress(progress, '#'+id );
    //         }
    //     });        
    // }

    $('.mobile-filters-wrapper .nav-items li').click(function(){
        $('.mobile-filters-wrapper .nav-items li').removeClass('active');        
        $(this).addClass('active');

        var tab = $(this).data('tab');
        $('.nav-filter-tab li').css('display', 'none');
        $('.'+tab).css('display', 'block');
    });

    if($('.switch-user-alert').length){
        $('.switch-user-alert').scrollToFixed( {            
            preFixed: function() { $(this).addClass('stick'); },
            postFixed: function() { $(this).removeClass('stick'); }
        });
    }


    $(document).on('click','.card-collapse', function(e){
        e.preventDefault();

        if($(this).hasClass('opened')){
            $(this).removeClass('opened');
        } else {
            //$('.card-collapse').removeClass('opened');
            $(this).addClass('opened');
        }
    });
    //var timeout = 1;
    if($('#toast-container').length){        
        //auto_save();
    }

    if($('.nav-tabs').length){
        $('.nav-tabs').scrollingTabs({
            enableSwiping: true,
            bootstrapVersion: 4,
            //scrollToTabEdge: true,
            leftArrowContent: [
                                '<div class="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-left">',
                                '  <i class="st-arrow st-arrow-left"></i>',
                                '</div>'
                            ].join(''),
            rightArrowContent: [
                '<div class="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-right">',
                '  <i class="st-arrow st-arrow-right"></i>',
                '</div>'
            ].join(''),
            disableScrollArrowsOnFullyScrolled: true
        });
    }

    $('.btn-comp-id').click(function(){
        $(this).addClass('d-none');
        $('.cfv-field').addClass('show');
        $('.cfv-field .fvalid').addClass('required');
        $('.cf-field').removeClass('show');
        $('.cf-field').removeClass('required');
    });

    $('#company_id').on('change', function(e){
        var comp_id = $(this).val();
        console.log($(this).val());
        //$('.cf-fields').addClass('col-md-6');

        if(comp_id){
            $('.cf-field').removeClass('show');
            $('.cf-field').removeClass('required');
            $('.'+comp_id).addClass('show required');
            //$('.'+comp_id +' input').focus();
        } else {
            $('.cf-field').removeClass('show');
            $('.cf-field').removeClass('required');
        }
    });
});

$('.drilldown-content.report-summary').scroll(function() {
    var progress1 = '#progress1';
    if ($(progress1).length && isScrolledIntoView(progress1)) {
        if(!$(progress1).hasClass('done')){
            var pre = $(progress1).data('progress');
            if(pre){
                calculate_upload_progress(pre, progress1 );
            }
            $(progress1).addClass('done');
        }
    }
    var progress2 = '#progress2';
    if ($(progress2).length && isScrolledIntoView(progress2)) {
        if(!$(progress2).hasClass('done')){
            var pre = $(progress2).data('progress');
            if(pre){
                calculate_upload_progress(pre, progress2 );
            }
            $(progress2).addClass('done');
        }
    }
    var progress3 = '#progress3';
    if ($(progress3).length && isScrolledIntoView(progress3)) {
        if(!$(progress3).hasClass('done')){
            var pre = $(progress3).data('progress');
            if(pre){
                calculate_upload_progress(pre, progress3 );
            }
            $(progress3).addClass('done');
        }
    }
});
$(window).scroll(function() {
    var progress1 = '#progress1';
    if ($(progress1).length && isScrolledIntoView(progress1)) {
        if(!$(progress1).hasClass('done')){
            var pre = $(progress1).data('progress');
            if(pre){
                calculate_upload_progress(pre, progress1 );
            }
            $(progress1).addClass('done');
        }
    }
    var progress2 = '#progress2';
    if ($(progress2).length && isScrolledIntoView(progress2)) {
        if(!$(progress2).hasClass('done')){
            var pre = $(progress2).data('progress');
            if(pre){
                calculate_upload_progress(pre, progress2 );
            }
            $(progress2).addClass('done');
        }
    }
    var progress3 = '#progress3';
    if ($(progress3).length && isScrolledIntoView(progress3)) {
        if(!$(progress3).hasClass('done')){
            var pre = $(progress3).data('progress');
            if(pre){
                calculate_upload_progress(pre, progress3 );
            }
            $(progress3).addClass('done');
        }
    }
});

function auto_save(){
    var timer;
    timer = setInterval(function(){
        $('.toast-autosave').addClass('show');        
        setTimeout(function(){                                
            $('.toast-autosave').removeClass('show');
            clearInterval(timer);
            auto_save();
        },5000);
    }, 18000);
}

function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

function hasSpecialChar(str){
    var format = /[ !~`@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return (format.test(str));
}

$(window).resize(function(){
    if($(window).width() < 768){
        if($('.mobile-sticky-btns').length){        
            $('.mobile-sticky-btns:not(.scroll-to-fixed-fixed)').scrollToFixed( {
                bottom: 0,
                limit: $('.mobile-sticky-btns').offset().top,
                preFixed: function() { $(this).addClass('stick'); },
                postFixed: function() { $(this).removeClass('stick'); }
            });
        }
    } else {
        $('.mobile-sticky-btns').scrollToFixed('unfixed');
    } 
     
    //$('.nav-tabs').scrollingTabs('refresh');  
});  

function modal_switch_page($this){
    var page = $this.data('page');
    var step = $('.step-page.active').data('step');        
    $('.modal-steps-pages').removeClass('step-'+step); 
    $('.modal-steps-pages').addClass('step-'+page);
    setTimeout(function(){       
        $('.step-page[data-step='+page+']').addClass('active');
        $('.step-page[data-step='+step+']').removeClass('active');
        $modalOwl.trigger('refresh.owl.carousel');
    }, 400);    
}

function validate_verify_yourself(){
    var names = [];
    var verify_validate = true;

    $('.verify-identity-questions input:radio').each(function () {
        var rname = $(this).attr('name');
        if ($.inArray(rname, names) == -1) names.push(rname);
    });

    $.each(names, function (i, name) {
        if ($('input[name="' + name + '"]:checked').length == 0) {
            //console.log('Please check ' + name);
            verify_validate = false;
        }
    });

    if(verify_validate){
        $('.btn-ekyc').removeClass('disabled');
       // window.location.href='/cibil/credit-report/kyc/'
    }
}

function validate_kyc_upload(){
    if(dropbox1 && dropbox2){
        $('#btn-proceed-verify').removeClass('disabled');
    } else {
        $('#btn-proceed-verify').addClass('disabled');
    }
}

function calculate_upload_progress_rest(value, parent){
    var left = $(parent+' .progress-left .progress-bar');
    var right = $(parent+' .progress-right .progress-bar');

    right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
    left.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
    
}

function calculate_upload_progress(value, parent){
    var left = $(parent+' .progress-left .progress-bar');
    var right = $(parent+' .progress-right .progress-bar');
    var i = 1;  
    var interval = setInterval(function() {
        $(parent).parent().find('.percentage-value .value').text(i);
        if (i >= value) clearInterval(interval);
        i++;
    }, 5);  

    if (value > 0) {
      if (value <= 50) {
        right.addClass('animate');
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.addClass('animate');
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }      
    }    
}

function percentageToDegrees(percentage) {
    return percentage / 100 * 360
}

// File Upload preview box
function dz_show_preview(thumbnail){
    thumbnail.siblings().removeClass('active');
    thumbnail.addClass('active');
    var image_src = thumbnail.find('img').attr('src');
    var previewCont = thumbnail.parents('.fileupload-preview').find('.file-preview-image-wrap');
    $(previewCont).children('img').attr('src', image_src);
}

function dz_reset_preview(container){
    $(container).parents('form').find('.file-preview-image-wrap img').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=');
}

function notices(type,title,subtitle = ''){
    var html = '<div class="bounceIn animated message message-'+type+'">'
                    +'<h4 class="message-text">'+title+'</h4>'
                    +'<p class="message-info font-12">'+subtitle+'</p>'
                +'</div>';    
    return html;
}


function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
        return false;
    }else{
        return true;
    }
}

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str;
}