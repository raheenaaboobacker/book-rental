(function () {
    var _zata_server_url = "https://reviews.contlo.com/";

    // var _zata_server_url = "https://reviews.contlo.com/";
    document.addEventListener('DOMContentLoaded', fetchMainReviewHtml, false);
    window.addEventListener('load', fetchMainReviewHtml);


    var mainLoaded = false;
    var selectedRating = -1;
    var reviewsType = 'PRODUCT';
    function addEvents() {
        var cntlReviewBtn = document.getElementById("cntl-review-btn");
        if (isDefined(cntlReviewBtn)) {
            cntlReviewBtn.addEventListener("click", function () {
                var content = document.getElementById("cntl-review-form");
                if (content.style.maxHeight != "0px") {
                    content.style.maxHeight = "0px";
                    cntlReviewBtn.innerText = getStringVal("string_write_review")
                } else {
                    cntlReviewBtn.innerText = getStringVal("string_cancel_review")
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }

        document.getElementById("review-input-form").onsubmit = submitForm
        addPageChangeActions()

        let ratingBadge = document.getElementById("cntl_rating_badge")
        if (isDefined(ratingBadge)) {
            ratingBadge.addEventListener("click", function (event) {
                let elements = document.getElementsByClassName("cntl-container")
                if (elements.length > 0) {
                    elements[0].scrollIntoView();
                }
            })
        }
        addPageEvents()

        let reviewTab = document.getElementById("cntl-reviews-tab")
        let shopReviewTab = document.getElementById("cntl-shop-reviews-tab")
        let qaTab = document.getElementById("cntl-qa-tab")
        if (isDefined(qaTab)) {
            qaTab.addEventListener("click", function (event) {
                showReviewContainer(false)
                showQaContainer(true)
            })
        }


        if (isDefined(reviewTab)) {
            reviewTab.addEventListener("click", function (event) {
                showReviewContainer(true)
                showQaContainer(false)
                showShopReviewContainer(false)
                reviewsType = 'PRODUCT'
                updatePage(event)
            })
        }

        if (isDefined(shopReviewTab)) {
            shopReviewTab.addEventListener("click", function (event) {
                showReviewContainer(false)
                showShopReviewContainer(true)
                reviewsType = 'SHOP'
                updatePage(event)
            })
        }
    }

    function showReviewContainer(show) {
        let elements = document.getElementsByClassName("cntl-review-container")
        let reviewsTab = document.getElementById("cntl-reviews-tab")
        if (!isDefined(reviewsTab)) {
            return
        }
        if(show) {
            reviewsTab.style.opacity = "1"
            // reviewsTab.style.color = "#000000"
            reviewsTab.classList.add("cntl-tab-active")
        } else {
            reviewsTab.style.opacity = "0.6"
            reviewsTab.classList.remove("cntl-tab-active")
        }

        for (let i = 0; i < elements.length; i++) {
            if (show) {
                elements[i].style.display = "block"
            } else {
                elements[i].style.display = "none"
            }
        }
    }

    function showShopReviewContainer(show) {
        let elements = document.getElementsByClassName("cntl-review-container")
        let reviewsTab = document.getElementById("cntl-shop-reviews-tab")

        if (!isDefined(reviewsTab)) {
            return
        }
        if(show) {
            reviewsTab.style.opacity = "1"
            // reviewsTab.style.color = "#000000"
            reviewsTab.classList.add("cntl-tab-active")
        } else {
            reviewsTab.style.opacity = "0.6"
            reviewsTab.classList.remove("cntl-tab-active")
        }

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block"
        }
    }

    function addPageEvents() {
        // image actions
        addReviewImageClick()
        addImagePreviewActions()
        let preference = document.getElementById("cntl_review_preference")
        if (isDefined(preference)) {
            preference.addEventListener("change", updatePage)
        }

        var elements = document.getElementsByClassName("cntl-rating-summary-element")
        for (let i = 0; i < elements.length; i++) {
            let ratingCount = elements[i].getAttribute("data-rating-count")
            if (ratingCount > 0) {
                elements[i].addEventListener('click', handleSummaryRatingClick)
            } else {
                elements[i].style.cursor = 'auto'
            }
        }
    }

    function addReviewElementEvents() {
        var reviewHelpfulBtns = document.getElementsByClassName("cntl-review-helpful-btn")
        for (let i = 0; i < reviewHelpfulBtns.length; i++) {
            reviewHelpfulBtns[i].addEventListener("click", updateHelpfulBtn)
        }
    }

    function addQuestionElementEvents() {
        var questionHelpfulBtns = document.getElementsByClassName("cntl-question-helpful-btn")
        for (let i = 0; i < questionHelpfulBtns.length; i++) {
            questionHelpfulBtns[i].addEventListener("click", updateQuestionHelpfulBtn)
        }
    }

    function updateHelpfulBtn(event) {
        var element = event.currentTarget
        let reviewId = element.getAttribute("data-review-id")
        let thankyouDiv = document.getElementById("cntl-thank-you-"+reviewId)
        let helpfulCnt = document.getElementById("cntl-review-helpful-cnt-"+reviewId)
        thankyouDiv.style.display = "inline-block"
        element.style.display = "none"
        if (isDefined(helpfulCnt)) {
            helpfulCnt.style.display = "none"
        }

        let properties = propertyKeys()
        let apiKey = properties["apiKey"]
        let productId = properties["productId"]

        Zajax.post(_zata_server_url + "reviews/add_helpful", {
            "api_key": apiKey,
            "product_id": productId,
            "review_id": reviewId
        }, function (response) {
        })
    }

    function updateQuestionHelpfulBtn(event) {
        var element = event.currentTarget
        let questionId = element.getAttribute("data-question-id")
        let thankyouDiv = document.getElementById("cntl-question-thank-you-"+questionId)
        thankyouDiv.style.display = "inline-block"
        element.style.display = "none"

        let properties = propertyKeys()
        let apiKey = properties["apiKey"]
        let productId = properties["productId"]

        Zajax.post(_zata_server_url + "reviews/question_helpful", {
            "api_key": apiKey,
            "product_id": productId,
            "question_id": questionId
        }, function (response) {
        })
    }

    function addPageChangeActions() {
        var pageActions = document.getElementsByClassName("cntl-page-action")
        for (var i = 0; i < pageActions.length; i++) {
            pageActions[i].addEventListener("click", updatePage)
        }
    }

    var Zajax = {};
    Zajax.post = function (url, params, responseHandler) {
        var xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function (response) {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText)
                responseHandler(response)
            }
        };


        xhttp1.open("POST", url, true);
        xhttp1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp1.send(JSON.stringify(params));
    }

    Zajax.postForm = function (url, formData, responseHandler) {
        var xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = function (response) {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText)
                responseHandler(response)
            }
        };


        xhttp1.open("POST", url, true);
        // xhttp1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp1.send(formData);
    }

    function isDefined(val) {
        return (typeof val !== 'undefined' && val !== null)
    }

    function fetchMainReviewHtml() {
        if (mainLoaded) return;

        loadReviewWidget()
        loadCarousel()
    }

    function loadReviewWidget() {
        let single_page = false
        var widgetDivs = document.getElementsByClassName("cntl-review-widget")
        if(widgetDivs.length == 0) {
            widgetDivs = document.getElementsByClassName("cntl-all-review-widget")
            single_page = true
        }

        var customizationShopId = document.getElementById("customization_shop_id")

        for (var i = 0; i < widgetDivs.length; i++) {
            mainLoaded = true
            let widgetDiv = widgetDivs[i]
            let apiKey = widgetDiv.getAttribute("api-key")
            let productId = widgetDiv.getAttribute("product-id")
            let params = {"api_key": apiKey, "product_id": productId, "reviews_type": reviewsType}

            if (isDefined(customizationShopId)) {
                params['customization_shop_id'] = customizationShopId.value
            }
            if (single_page) {
                params['single_page'] = 1
            }
            Zajax.post(_zata_server_url + "reviews/main_widget", params,
                function (response) {
                    console.log(response)
                    if(response.render_html !== "") {
                        widgetDiv.innerHTML = response.render_html
                        addPlaceholderWidgets()
                        addEvents()
                        addReviewElementEvents()
                        addQuestionEvents()
                        addQuestionElementEvents()
                    }
                    checkProductEmptyReviewAndSwitchToShopTab(response)
                })
        }
    }

    function addPlaceholderWidgets() {
        let innerHtmlImage = document.getElementById("imagePlaceholderInitial")
        let placeholderFixedItem = document.getElementById("ctnl-placeholder-fixed-item")
        if(isDefined(innerHtmlImage) && isDefined(placeholderFixedItem)) {
            placeholderFixedItem.innerHTML = innerHtmlImage.innerHTML
            innerHtmlImage.innerHTML = ""
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function resetFields() {
        let nameTxt = document.getElementById("cntl-review-name")
        let emailTxt = document.getElementById("cntl-review-email")
        let radioChecked = document.querySelector('input[name="cntl-rating"]:checked')
        let titleTxt = document.getElementById("cntl-review-title")
        let contentTxt = document.getElementById("cntl-review-content")
        let fileSelected = document.getElementById("cntl-file-upload")
        nameTxt.value = ""
        emailTxt.value = ""
        radioChecked.checked = false
        titleTxt.value = ""
        contentTxt.value = ""
        fileSelected.value = ""
    }

    function propertyKeys() {
        let widgetDiv = document.getElementById("cntl-review-widget")
        if (widgetDiv === null || widgetDiv === 'undefined') {
            widgetDiv = document.getElementById("cntl-all-review-widget")
        }
        let apiKey = widgetDiv.getAttribute("api-key")
        let productId = widgetDiv.getAttribute("product-id")
        let productName = widgetDiv.getAttribute("product-name")

        return {apiKey: apiKey, productId: productId, productName: productName}
    }

    function submitForm(event) {
        event.preventDefault()
        if (!setupFormValidation(event)) return;
        let nameTxt = document.getElementById("cntl-review-name")
        let emailTxt = document.getElementById("cntl-review-email")
        let radioChecked = document.querySelector('input[name="cntl-rating"]:checked')
        let titleTxt = document.getElementById("cntl-review-title")
        let contentTxt = document.getElementById("cntl-review-content")

        let properties = propertyKeys()
        let apiKey = properties["apiKey"]
        let productId = properties["productId"]
        let productName = properties["productName"]
        let photo = document.getElementById("cntl-file-upload").files[0];

        let formData = new FormData();

        formData.append("file", photo);
        formData.append("api_key", apiKey)
        formData.append("api_key", apiKey)
        formData.append("product_id", productId)
        formData.append("name", nameTxt.value)
        formData.append("email", emailTxt.value)
        formData.append("rating", radioChecked.value)
        formData.append("title", titleTxt.value)
        formData.append("content", contentTxt.value)
        formData.append("product_name", productName)

        Zajax.postForm(_zata_server_url + "reviews/submit_review", formData, function (response) {
            console.log(response)
            var content = document.getElementById("cntl-review-form");
            document.getElementById("cntl-review-form").style.maxHeight = "0px";
            let reviewBtn = document.getElementById("cntl-review-btn")
            reviewBtn.innerText = getStringVal("string_write_review")
            var successText = document.getElementById("cntl_review_success")
            successText.style.visibility = "visible"
            successText.style.paddingTop = "30px"
            successText.style.maxHeight = "100px"
            resetFields()
        })
    }

    function handleSummaryRatingClick(event) {
        event.preventDefault()
        let targetElement = event.currentTarget
        let ratingVal = targetElement.getAttribute("data-rating-val")
        selectedRating = ratingVal
        let allReviewsHtml = document.getElementById("cntl-review-summary-all-reviews")
        let allReviewsText = getStringVal("string_see_all_reviews")
        allReviewsHtml.innerHTML = "<span id=\"cntl-show-all-reviews\" class=\"cntl-link-style\" style=\"visibility: visible;\">" + allReviewsText + "</span>"
        // handling show all rating
        document.getElementById("cntl-show-all-reviews").addEventListener("click", function (event) {
            selectedRating = -1
            allReviewsHtml.innerHTML = ""
            updatePage(event)
        })

        updatePage(event)
    }

    function updatePage(event) {
        event.preventDefault()
        let targetElement = event.target.id
        let page = targetElement.split("cntl-page-")[1]
        let reviewListContainer = document.getElementById("review_list_container")
        let reviewPreference = document.getElementById("cntl_review_preference")
        let properties = propertyKeys()
        let apiKey = properties["apiKey"]
        let productId = properties["productId"]
        let sortOrder = "most_recent"
        if (isDefined(reviewPreference)) {
            sortOrder = reviewPreference.value
        }

        let params = {
            "api_key": apiKey, "product_id": productId,
            "page": page, "sort_order": sortOrder,
            "reviews_type": reviewsType
        }
        if (selectedRating > 0)
            params['rating_filter'] = selectedRating
        Zajax.post(_zata_server_url + "reviews/widget_review_page", params,
            function (response) {
                console.log(response)
                checkProductEmptyReviewAndSwitchToShopTab(response, page)
                reviewListContainer.innerHTML = response.review_list_html
                addPageChangeActions()
                addPageEvents()
                addReviewElementEvents()
                if(page > 1) {
                    scrollToView()
                }
            })
    }

    function checkProductEmptyReviewAndSwitchToShopTab(response) {
        let shopReviewTab = document.getElementById("cntl-shop-reviews-tab")
        if(reviewsType == 'PRODUCT' && isDefined(shopReviewTab) && isDefined(response.product_reviews_count) && response.product_reviews_count == 0) {
            shopReviewTab.click()
        }
    }

    function scrollToView() {
        let allWidget = document.getElementById("cntl-all-review-widget")
        let productWidget = document.getElementById("cntl-review-widget")
        if (isDefined(productWidget)) {
            productWidget.scrollIntoView()
        } else if (isDefined(allWidget)) {
            allWidget.scrollIntoView()
        }
    }

    function getStringVal(error_name) {
        let element = document.getElementById(error_name)
        if (element !== null) {
            return element.value
        }
        return ""
    }

    function setupFormValidation(event) {
        var reviewSubmitBtn = document.getElementById("cntl-submit-review-btn")
        // reviewSubmitBtn.addEventListener("click", function (event) {
        let nameTxt = document.getElementById("cntl-review-name")
        let nameError = document.getElementById("cntl-review-name_error")
        var submit = true;
        if (nameTxt.value.length < 3) {
            nameError.innerHTML = getStringVal("error_enter_valid_name")
            submit = false
        } else {
            nameError.innerHTML = ""
        }

        let emailTxt = document.getElementById("cntl-review-email")
        let emailError = document.getElementById("cntl-review-email_error")
        if (!validateEmail(emailTxt.value)) {
            emailError.innerHTML = getStringVal("error_enter_valid_email_address")
            submit = false
        } else {
            emailError.innerHTML = ""
        }

        let radioChecked = document.querySelector('input[name="cntl-rating"]:checked')
        // let ratingTxt = document.querySelector('input[name="cntl-rating"]:checked').value;

        // alert(ratingTxt)
        let ratingError = document.getElementById("cntl-review-rating_error")
        if (radioChecked === null || radioChecked === 'undefined') {
            ratingError.innerHTML = getStringVal("error_enter_star_rating")
            submit = false
        } else {
            ratingError.innerHTML = ""
        }

        let titleTxt = document.getElementById("cntl-review-title")
        let titleError = document.getElementById("cntl-review-title_error")
        if (titleTxt.value.length < 3) {
            titleError.innerHTML = getStringVal("error_enter_valid_title")
            submit = false
        } else {
            titleError.innerHTML = ""
        }

        let contentTxt = document.getElementById("cntl-review-content")
        let contentError = document.getElementById("cntl-review-content_error")
        if (contentTxt.value.length < 3 || contentTxt.value.length > 5000) {
            contentError.innerHTML = getStringVal("error_enter_valid_content")
            submit = false
        } else {
            contentError.innerHTML = ""
        }
        return submit
        // })
    }


    function fetchReviewDetails(reviewId, callback) {
        let properties = propertyKeys()
        let apiKey = properties["apiKey"]
        let productId = properties["productId"]

        Zajax.post(_zata_server_url + "reviews/review_details", {
            "api_key": apiKey,
            "product_id": productId,
            "review_id": reviewId
        }, function (response) {
            console.log(response)
            callback(response)
        })
    }
    

    function addReviewImageClick() {
        var reviewImages = document.getElementsByClassName("cntl-review_image")
        for (var i = 0; i < reviewImages.length; i++) {
            reviewImages[i].addEventListener("click", openImagePreviewModal)
        }

        var reviewImages1 = document.getElementsByClassName("cntl-review_image_grid")
        for (var i = 0; i < reviewImages1.length; i++) {
            reviewImages1[i].addEventListener("click", openImagePreviewModal)
        }

        var reviewThumbs1 = document.getElementsByClassName("cntl-thumb-image-grid")
        for (var i = 0; i < reviewThumbs1.length; i++) {
            reviewThumbs1[i].addEventListener("click", openImagePreviewModal)
        }
    }


    function addImagePreviewActions() {
        var closeModal1 = document.getElementById("cntl-close-modal")

        if (isDefined(closeModal1)) {
            closeModal1.addEventListener("click", closeModal)
        }


        var prevAction = document.getElementById("cntl-prev")
        prevAction.addEventListener("click", moveDownPage)

        var nextAction = document.getElementById("cntl-next")
        nextAction.addEventListener("click", moveUpPage)
    }

    function moveUpPage() {
        plusSlides(1)
    }

    function moveDownPage() {
        plusSlides(-1)
    }

    var reviewDetails = {}
    function openImagePreviewModal(event) {
        let reviewId = event.target.getAttribute("data-review-id")
        let indexId = event.target.getAttribute("data-index-id")

        fetchReviewDetails(reviewId, function (response) {
            // alert(JSON.stringify(response))
            document.getElementById("previewImagesModal").style.display = "block";
            document.getElementById("previewBackground").style.display = "block";
            reviewDetails = response['data']
            slideIndex = indexId
            showSlides(slideIndex);
        })
        reduceZIndexExternalPopups()
        // let imageDataElementId = event.target.getAttribute("data-img-ids")
        //
        // let encodedImageUrls = document.getElementById(imageDataElementId).getAttribute("data-img-urls")
        // let imageUrls = JSON.parse(atob(encodedImageUrls))

    }

    // reduces azly zindex
    function reduceZIndexExternalPopups() {
        let element = document.getElementById("conversions_layers_root")
        if (isDefined(element)) {
            element.style.zIndex = 2147483646
        }
    }

    function closeModal() {
        document.getElementById("previewImagesModal").style.display = "none";
        document.getElementById("previewBackground").style.display = "none";
        document.getElementById("cntl_preview_video_id").pause();
    }

    // showSlides(slideIndex);
    function plusSlides(n) {
        let totalFiles = reviewDetails.file_urls.length
        if (parseInt(slideIndex) + n < 0 || parseInt(slideIndex) + n >= totalFiles) {
            return
        }
        slideIndex = parseInt(slideIndex) + n
        showSlides(slideIndex);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    var slideIndex = 0;
    var emptyStar = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="{{star_color}}" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>'
    var fullStar = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="{{star_color}}" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>'
    function showSlides(index) {
        let totalFiles = reviewDetails.file_urls.length
        var prevAction = document.getElementById("cntl-prev")
        var nextAction = document.getElementById("cntl-next")
        nextAction.style.color = "white"
        prevAction.style.color = "white"
        if(index >= totalFiles-1) {
            nextAction.style.color = "rgba(255, 255, 255, 0.3)"
        }

        if(index <= 0) {
            prevAction.style.color = "rgba(255, 255, 255, 0.3)"
        }

        let imageUrl = reviewDetails.file_urls[index]
        let fileDetail = reviewDetails.file_details[index]

        let reviewIcon = document.getElementById("cntl-preview-review-icon")
        let reviewerName = document.getElementById("cntl-preview-reviewer-name")
        let verifiedBuyer = document.getElementById("cntl-preview-verified-buyer")

        let previewImageId = document.getElementById("cntl_preview_image_id")
        let previewVideoId = document.getElementById("cntl_preview_video_id")
        let previewVideoParentId = document.getElementById("cntl_preview_video_parent_id")
        let previewVideoSourceId = document.getElementById("cntl_preview_source_video_id")

        previewImageId.addEventListener("load", imageSizeHandler)
        let content = document.getElementById("cntl-preview-review-content")
        let title = document.getElementById("cntl-preview-review-title")
        let date = document.getElementById("cntl-preview-review-date")
        var fullStar1 = fullStar.replace("{{star_color}}", reviewDetails.star_color)
        var emptyStar1 = emptyStar.replace("{{star_color}}", reviewDetails.star_color)
        let rating = document.getElementById("cntl-preview-rating")
        if(!fileDetail.file_type || fileDetail.file_type == 'image') {
            previewImageId.src = imageUrl
            previewImageId.style.display = "block"
            previewVideoId.style.display = "none"
            previewVideoParentId.style.display = "none"
        } else {
            previewVideoId.style.display = "block"
            previewVideoParentId.style.display = "block"
            previewImageId.style.display = "none"
            previewVideoSourceId.setAttribute("src", imageUrl)
            previewVideoId.load()
        }

        content.innerHTML = reviewDetails.content
        title.innerHTML = reviewDetails.title
        date.innerHTML = reviewDetails.date
        date.innerHTML = reviewDetails.date
        reviewerName.innerHTML = reviewDetails.reviewer_name
        reviewIcon.innerHTML = (reviewDetails.reviewer_name.charAt(0) + "").toUpperCase()
        if(reviewDetails.verified_buyer) {
            verifiedBuyer.innerHTML = getStringVal("string_verified_buyer")
        }

        var ratingHtml = ""
        for (var i = 1; i <= 5; i++) {
            if(reviewDetails.rating >= i) {
                ratingHtml = ratingHtml + fullStar1
            } else {
                ratingHtml = ratingHtml + emptyStar1
            }
        }
        rating.innerHTML = ratingHtml
    }

    // NOTE:changing image size based on width and height
    function imageSizeHandler(event) {
        let element = document.getElementById("cntl_preview_img_parent")
        if (event.target.height > event.target.width) {
            element.style.height = "100%"
            element.style.maxWidth = "100%"
            element.style.maxHeight = "auto"
            element.style.width = "auto"
        } else {
            element.style.height = "auto"
            element.style.maxWidth = "auto"
            element.style.maxHeight = "100%"
            element.style.width = "100%"
        }
    }

    // Q & A

    function addQuestionEvents() {
        var cntlQuestionBtn = document.getElementById("cntl-question-btn");
        if (isDefined(cntlQuestionBtn)) {
            cntlQuestionBtn.addEventListener("click", function () {
                var content = document.getElementById("cntl-question-form");
                if (content.style.maxHeight != "0px") {
                    content.style.display = "none"
                    content.style.maxHeight = "0px";
                    cntlQuestionBtn.innerText = getStringVal("string_ask_question")
                } else {
                    content.style.display = "block"
                    cntlQuestionBtn.innerText = getStringVal("string_cancel_question")
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }

        let questionPreference = document.getElementById("cntl_question_preference")
        if (isDefined(questionPreference)) {
            questionPreference.addEventListener("change", updateQuestionPage)
        }

        let questionInputForm = document.getElementById("question-input-form")
        if (isDefined(questionInputForm)) {
            questionInputForm.onsubmit = submitQuestionForm
        }
        addQuestionPageChangeActions()
    }


    function addQuestionPageChangeActions() {
        var pageActions = document.getElementsByClassName("cntl-question-page-action")
        for (var i = 0; i < pageActions.length; i++) {
            pageActions[i].addEventListener("click", updateQuestionPage)
        }
    }

    function submitQuestionForm(event) {
        event.preventDefault()
        if (!setupQuestionFormValidation(event)) return;
        let nameTxt = document.getElementById("cntl-questionby-name")
        let emailTxt = document.getElementById("cntl-questionby-email")
        let contentTxt = document.getElementById("cntl-question-content")

        let properties = propertyKeys()
        let apiKey = properties["apiKey"]
        let productId = properties["productId"]

        Zajax.post(_zata_server_url + "reviews/submit_question", {
            "api_key": apiKey,
            "product_id": productId,
            "name": nameTxt.value,
            "email": emailTxt.value,
            "question": contentTxt.value,
        }, function (response) {
            console.log(response)
            document.getElementById("cntl-question-form").style.maxHeight = "0px";
            document.getElementById("cntl-question-btn").innerText = getStringVal("string_ask_question")
            var successText = document.getElementById("cntl_qa_success")
            successText.style.visibility = "visible"
            successText.style.paddingTop = "30px"
            successText.style.maxHeight = "100px"
            resetQuestionFormFields()
        })
    }

    function resetQuestionFormFields() {
        let nameTxt = document.getElementById("cntl-questionby-name")
        let emailTxt = document.getElementById("cntl-questionby-email")
        let contentTxt = document.getElementById("cntl-question-content")
        nameTxt.value = ""
        emailTxt.value = ""
        contentTxt.value = ""
    }

    function addQuestionPageEvents() {
        // image actions
        document.getElementById("cntl_question_preference")
            .addEventListener("change", updateQuestionPage)
    }


    function updateQuestionPage(event) {
        event.preventDefault()
        let targetElement = event.target.id
        let page = targetElement.split("cntl-question-page-")[1]
        let questionListContainer = document.getElementById("question_list_container")
        let questionPreference = document.getElementById("cntl_question_preference")
        let properties = propertyKeys()
        let apiKey = properties["apiKey"]
        let productId = properties["productId"]

        let sortOrder = questionPreference.value

        let params = {
            "api_key": apiKey, "product_id": productId,
            "page": page, "sort_order": sortOrder
        }

        Zajax.post(_zata_server_url + "reviews/widget_question_page", params,
            function (response) {
                console.log(response)
                questionListContainer.innerHTML = response.question_list_html
                addQuestionPageChangeActions()
                addQuestionPageEvents()
                addQuestionElementEvents()
                document.getElementById("cntl-qa-list-container").style.display = "block"
            })
    }

    function setupQuestionFormValidation(event) {
        // var reviewSubmitBtn = document.getElementById("cntl-submit-question-btn")
        // reviewSubmitBtn.addEventListener("click", function (event) {
        let nameTxt = document.getElementById("cntl-questionby-name")
        let nameError = document.getElementById("cntl-questionby-name_error")
        var submit = true;
        if (nameTxt.value.length < 3) {
            nameError.innerHTML = getStringVal("error_enter_valid_name")
            submit = false
        } else {
            nameError.innerHTML = ""
        }

        let emailTxt = document.getElementById("cntl-questionby-email")
        let emailError = document.getElementById("cntl-questionby-email_error")
        if (!validateEmail(emailTxt.value)) {
            emailError.innerHTML = getStringVal("error_enter_valid_email_address")
            submit = false
        } else {
            emailError.innerHTML = ""
        }

        let contentTxt = document.getElementById("cntl-question-content")
        let contentError = document.getElementById("cntl-question-content_error")
        if (contentTxt.value.length < 2 || contentTxt.value.length > 500) {
            contentError.innerHTML = getStringVal("error_enter_valid_content")
            submit = false
        } else {
            contentError.innerHTML = ""
        }
        return submit
        // })
    }

    function showQaContainer(show) {
        let elements = document.getElementsByClassName("cntl-qa-container")
        let qaTab = document.getElementById("cntl-qa-tab")
        if (typeof qaTab === 'undefined' || qaTab === null) {
            return
        }
        if(show) {
            qaTab.style.opacity = "1"
            qaTab.classList.add("cntl-tab-active")
        } else {
            qaTab.style.opacity = "0.6"
            qaTab.classList.remove("cntl-tab-active")
        }


        for (var i = 0; i < elements.length; i++) {
            if (show) {
                elements[i].style.display = "block"
            } else {
                elements[i].style.display = "none"
            }
        }
    }


    /////////// carousal changes
    let carouselIndex = 0
    function loadCarousel() {
        setCarouselActions()
        var carouselDivs = document.getElementsByClassName("cntl-carousal-widget")
        for (let i = 0; i < carouselDivs.length; i++) {
            let widgetDiv = carouselDivs[i]
            let apiKey = widgetDiv.getAttribute("api-key")
            let params = {"api_key": apiKey}
            var customizationShopId = document.getElementById("customization_shop_id")
            if(isDefined(customizationShopId)) {
                params['customization_shop_id'] = customizationShopId.value
            }


            Zajax.post(_zata_server_url + "reviews/carousel_widget", params,
                function (response) {
                    console.log(response)
                    if(response.render_html !== "") {
                        widgetDiv.innerHTML = response.render_html
                        setCarouselActions()
                    }
                })
        }

    }

    function setCarouselActions() {
        var nextAction = document.getElementById("cntl-carousal-next")
        if(isDefined(nextAction)) {
            nextAction.addEventListener("click", moveCarouselNextPage)
        }

        var prevAction = document.getElementById("cntl-carousal-prev")
        if(isDefined(prevAction)) {
            prevAction.addEventListener("click", moveCarouselPrevPage)
        }
    }

    function moveCarouselNextPage() {
        moveCarouselNext(1)
    }

    function moveCarouselPrevPage() {
        moveCarouselNext(-1)
    }

    function moveCarouselNext(n) {
        let slides = document.querySelector(".cntl-carousel-inner");
        let deltaCount = 1
        let carouselCount = document.getElementById("cntl_carousal_count").value
        let carouselLayout = document.getElementById("cntl_carousal_layout").value
        if(carouselLayout === 'focused_view') {
            deltaCount = -1
        }

        if (parseInt(carouselIndex) + n < 0 || parseInt(carouselIndex) + n + deltaCount >= carouselCount-1) {
            return
        }
        carouselIndex = parseInt(carouselIndex) + n
        let indPercentage = 100.0 / carouselCount
        let transform = indPercentage * carouselIndex
        slides.style.transform = "translateX(-"+transform+"%)";
    }

    fetchMainReviewHtml()
})();