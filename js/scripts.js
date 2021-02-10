$(() => {
	// Выбор города
	$('header .city .mini_modal .btn.yes').click(function (e) {
		e.preventDefault()

		$('header .city .mini_modal').fadeOut(200)
	})

	// Выбор города - Поиск
	$('#city_modal .form .input').keydown(function (e) {
		let _self = $(this)

		setTimeout(() => {
			if (_self.val().length) {
				$('#city_modal .form .tips > *').hide()

				$('#city_modal .form .tips > *').each(function (index) {
					let str = $(this).text().toLowerCase()

					if (str.indexOf(_self.val().toLowerCase()) == 0) {
						$(this).show()
					}
				})
			} else {
				$('#city_modal .form .tips > *').hide()
			}
		})
	})

	// Выбор города - Отправка формы
	$('#city_modal .form').submit(function (e) {
		e.preventDefault()

		let newCity = $('#city_modal .form .input').val()

		$.fancybox.close(true)

		$('header .city .mini_modal').fadeOut(200)

		$('header .city .current b').text(newCity)
		$('header .city .mini_modal .question b').text(newCity)
	})


	// Забыли пароль? - Шаг 1
	$('.auth .data.recovery.step1 form').submit(function (e) {
		e.preventDefault()

		$('.auth .data.recovery.step1').hide()
		$('.auth .data.recovery.step2').fadeIn(300)
	})

	// Забыли пароль? - Шаг 2
	$('.auth .data.recovery.step2 form').submit(function (e) {
		e.preventDefault()

		$('.auth .data.recovery.step2').hide()
		$('.auth .data.recovery.step3').fadeIn(300)
	})

	// Забыли пароль? - Изменить номер
	$('.auth .data.recovery.step2 .change_code .btn').click(function (e) {
		e.preventDefault()

		$('.auth .data.recovery.step2').hide()
		$('.auth .data.recovery.step1').fadeIn(300)
	})


	// Регистрация - Смена шага
	var currentStep = 1

	$('.auth .data.register .next_step_btn').click(function (e) {
		e.preventDefault()

		currentStep++
		$('.auth .head .steps .current').text(currentStep)

		$(this).closest('.data').hide()
		$('.auth .data.register.step' + currentStep).fadeIn(300)
	})


	// Регистрация - Шаг 2
	$('.auth .data.register .phone_number').submit(function (e) {
		e.preventDefault()

		$(this).hide()
		$('.auth .data.register .phone_code').fadeIn(300)
	})

	// Регистрация - Шаг 2 - Изменить номер
	$('.auth .data.register .phone_code .change_code_btn').click(function (e) {
		e.preventDefault()

		$('.auth .data.register .phone_code').hide()
		$('.auth .data.register .phone_number').fadeIn(300)
	})


	// Фото профиля
	$('.personal_info .form .photo label .delete').click(function (e) {
		e.preventDefault()

		$('.personal_info .form .photo label img').remove()
		$('.personal_info .form .photo input[type=file]').val('')
	})


	// Таймер
	$('.timer').each(function () {
		let timerDate = $(this).data('date')

		$(this).countdown(timerDate, function (event) {
			$(this).find('.hours').text(event.strftime('%H'))
			$(this).find('.minutes').text(event.strftime('%M'))
			$(this).find('.seconds').text(event.strftime('%S'))
		})
	})


	// Боковая колонка - Категории
	$('aside .categories .sub_link').click(function (e) {
		e.preventDefault()

		let parent = $(this).parent().parent()

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			parent.find('.sub_cats').slideUp(300)
		} else {
			parent.find('.sub_link').removeClass('active')
			parent.find('.sub_cats').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Боковая колонка - Спойлер в категориях
	$('aside .categories .more .btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.sub_cats')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			parent.find('.hide').slideUp(200)
		} else {
			$(this).addClass('active')
			parent.find('.hide').slideDown(300)
		}
	})


	// Боковая колонка - Сброс фильтра
	$('.filter .form .reset .btn').click(function (e) {
		$('.filter input').removeAttr('checked')

		$('.filter .form select').each(function () {
			$(this).find('option:first').prop('selected', true)
		})

		$('select').niceSelect('update')
	})


	// Боковая колонка - Моб. фильтр
	$('.page_head .filter_btn').click(function (e) {
		e.preventDefault()

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('aside').slideUp(200)
		} else {
			$(this).addClass('active')
			$('aside').slideDown(300)
		}
	})


	// Боковая колонка - Спойлер в отзыве
	$('.review .text .spoler_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.text')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			parent.find('.hide').slideUp(200)
		} else {
			$(this).addClass('active')
			parent.find('.hide').slideDown(300)
		}
	})


	// Профиль автора - Спойлер в олписании
	$('.author_profile .description .spoler_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.description')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			parent.find('.hide').slideUp(200)
		} else {
			$(this).addClass('active')
			parent.find('.hide').slideDown(300)
		}
	})


	// Профиль автора - Месенджеры
	$('.author_profile .messengers .btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Профиль автора - Поделиться соц. сети
	$('body').on('click', '.share .socials .btn', function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Профиль автора - Галерея
	if ($('.author_profile .gallery .swiper-container').length) {
		new Swiper('.author_profile .gallery .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 7,
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Слайдер карточки обьявления
	if ($('.ads_category .ad .swiper-container').length) {
		var i = 0,
			swiperSliders = new Swiper('.ads_category .ad .swiper-container', {
				loop: true,
				speed: 500,
				// watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				spaceBetween: 0,
				slidesPerView: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						allowTouchMove: true
					},
					1024: {
						allowTouchMove: false
					}
				},
				on: {
					init: swiper => {
						setTimeout(() => {
							$(swiper.$el).find('.swiper-pagination-bullet').attr('data-slider', i)
							i++

							if (!is_touch_device()) {
								$('.swiper-pagination-bullet').on('mouseover', function () {
									swiperSliders[parseInt($(this).data('slider'))].slideTo($(this).index() + 1)
								})
							}
						})
					}
				}
			})
	}


	// Добавление нового отзыва
	$('#add_review_modal .form .rate .field > label').click(function () {
		$('#add_review_modal .form .hide').fadeIn(300)
		$('#add_review_modal .form .submit_btn').prop('disabled', false)
	})

	$('#add_review_modal .form').submit(function (e) {
		e.preventDefault()

		$.fancybox.close(true)

		$.fancybox.open({
			src: '#add_review_phone_modal',
			type: 'inline',
			touch: false
		})
	})

	$('#add_review_phone_modal .step1 .form').submit(function (e) {
		e.preventDefault()

		$('#add_review_phone_modal .step1').hide()
		$('#add_review_phone_modal .step2').fadeIn(300)
	})

	$('#add_review_phone_modal .step2 .back button').click(function (e) {
		e.preventDefault()

		$('#add_review_phone_modal .step2').hide()
		$('#add_review_phone_modal .step1').fadeIn(300)
	})


	// Добавление/Редактирование - Стоимость
	$('.lk_info .add_edit .form .price label').click(function (e) {
		let _self = $(this)

		setTimeout(() => {
			_self.prev().prop('checked')
				? $('.lk_info .add_edit .form .price .input').prop('disabled', true)
				: $('.lk_info .add_edit .form .price .input').prop('disabled', false)
		})
	})

	// Добавление/Редактирование - Раздел
	$('.add_edit .form #section').change(function (e) {
		$('.add_edit .form #category').prop('disabled', false)
		$('.add_edit .form select').niceSelect('update')
	})

	// Добавление/Редактирование - Категория
	$('.add_edit .form #category').change(function (e) {
		$('.add_edit .form #sub_category').prop('disabled', false)
		$('.add_edit .form select').niceSelect('update')
	})

	// Добавление/Редактирование - Подкатегория
	$('.add_edit .form #sub_category').change(function (e) {
		$('.lk_info .add_edit .form .hide').fadeIn(300)
	})


	// Поиск
	$('.page_head .search form .input').keydown(function (e) {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length > 1
				? $('.page_head .search form .tips').fadeIn(300)
				: $('.page_head .search form .tips').hide()
		})
	})


	// Форма - Прикреплённый файл
	$('.form .attachment input[type=file]').change(function () {
		var files = Array.from($(this).prop('files'))

		files.forEach(function (file, i, arr) {
			let html = new String
				+ '<div class="file">'
				+ '<div class="name">' + file.name + '</div>'
				+ '<button type="button" class="remove_btn" data-index="' + i + '">удалить</button>'
				+ '</div>'

			$('.form .attachment .files').append(html)
		})
	})

	// Форма - Прикреплённый файл - Удаление
	$('body').on('click', '.form .attachment .remove_btn', function (e) {
		$(this).closest('.file').remove()
	})


	// Уведомления
	$('.notifications .notification .close').click(function (e) {
		e.preventDefault()

		$(this).closest('.notification').remove()
	})


	// Для организаций - Мы организация
	$('.lk_info .we_organization .info .name').click(function (e) {
		let _self = $(this)

		setTimeout(() => {
			_self.prev().prop('checked')
				? $('.lk_info .for_organizations .form').fadeIn(300)
				: $('.lk_info .for_organizations .form').hide()
		})
	})


	// Копирование в буфер обмена
	new ClipboardJS('.copy_btn', {
		text: function () {
			let url = document.location.href
			return url
		}
	})


	// Лимит символов в поле ввода
	$('body').on('keydown', '.form .with_limit', function () {
		let _self = $(this)

		setTimeout(() => {
			_self.closest('.line').find('.limit .current').text(_self.val().length)
		})
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.ads_category .row').each(function () {
		adHeight($(this), parseInt($(this).css('--ads_count')))
	})
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	$('.ads_category .row').each(function () {
		adHeight($(this), parseInt($(this).css('--ads_count')))
	})
})



// Выравнивание обьявлений
function adHeight(context, step) {
	let start = 0,
		finish = step,
		$ads = context.find('.ad')

	$ads.find('.name').height('auto')

	$ads.each(function () {
		setHeight($ads.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}



// Фото профиля
function readFile(input) {
	let file = input.files[0],
		reader = new FileReader()

	reader.readAsDataURL(file)

	reader.onload = function () {
		$('.personal_info .form .photo label .delete').before('<img src="' + reader.result + '" alt="">')
	}
}


// Добавление/Редактирование
var imagesDroppedFiles = false

// Добавление/Редактирование - перетаскивание файлов
$('#images_drop_zone').on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
	e.preventDefault()
	e.stopPropagation()
})
	.on('drop', function (e) {
		imagesDroppedFiles = e.originalEvent.dataTransfer.files
		imagesShowFiles(imagesDroppedFiles)
	})

// Добавление/Редактирование - выбор файлов на устройстве
$('.form .images.drop_files input[type=file]').change(function (e) {
	imagesShowFiles(e.target.files)
})

// Добавление/Редактирование - удаление изображения
$('body').on('click', '.form .images.drop_files .delete', function (e) {
	e.preventDefault()

	let parent = $(this).closest('.image')
	parent.remove()
})


// Добавление/Редактирование - отображение файлов
var imagesCount = 1

imagesShowFiles = function (files) {
	Object.keys(files).forEach(i => {
		const file = files[i],
			reader = new FileReader()

		reader.readAsDataURL(file)

		reader.onload = function () {
			let html = new String()
				+ '<div class="image">'
				+ '<div class="img">'
				+ '<img src="' + reader.result + '" alt="" >'
				+ '<button type="button" class="delete"></button>'
				+ '</div>'
				+ '<input type="radio" name="cover" id="cover_check' + (imagesCount + 1) + '">'
				+ '<label for="cover_check' + (imagesCount + 1) + '">Обложка</label>'
				+ '</div>'

			$('.form .images.drop_files .selected').append(html)

			if (!$('.form .images.drop_files .selected input:checked').length) {
				$('.form .images.drop_files .selected .image:first input').prop('checked', true)
			}

			imagesCount++
		}
	})
}



// Для организаций - Фотографии
var photosDroppedFiles = false

// Для организаций - Фотографии - перетаскивание файлов
$('#photos_drop_zone').on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
	e.preventDefault()
	e.stopPropagation()
})
	.on('drop', function (e) {
		photosDroppedFiles = e.originalEvent.dataTransfer.files
		photosShowFiles(photosDroppedFiles)
	})

// Для организаций - Фотографии - выбор файлов на устройстве
$('.form .photos.drop_files input[type=file]').change(function (e) {
	photosShowFiles(e.target.files)
})

// Для организаций - Фотографии - удаление изображения
$('body').on('click', '.form .photos.drop_files .delete', function (e) {
	e.preventDefault()

	let parent = $(this).closest('.image')
	parent.remove()
})


// Для организаций - Фотографии - отображение файлов
photosShowFiles = function (files) {
	Object.keys(files).forEach(i => {
		const file = files[i],
			reader = new FileReader()

		reader.readAsDataURL(file)

		reader.onload = function () {
			let html = new String()
				+ '<div class="image">'
				+ '<div class="img">'
				+ '<img src="' + reader.result + '" alt="" >'
				+ '<button type="button" class="delete"></button>'
				+ '</div>'
				+ '</div>'

			$('.form .photos.drop_files .selected').append(html)
		}
	})

	$.fancybox.open({
		src: '#noti_error_modal',
		type: 'inline',
		touch: false
	})
}



// Для организаций - Документы
var docsDroppedFiles = false

// Для организаций - Документы - перетаскивание файлов
$('#docs_drop_zone').on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
	e.preventDefault()
	e.stopPropagation()
})
	.on('drop', function (e) {
		docsDroppedFiles = e.originalEvent.dataTransfer.files
		docsShowFiles(docsDroppedFiles)
	})

// Для организаций - Документы - выбор файлов на устройстве
$('.form .docs.drop_files input[type=file]').change(function (e) {
	docsShowFiles(e.target.files)
})

// Для организаций - Документы - удаление изображения
$('body').on('click', '.form .docs.drop_files .delete', function (e) {
	e.preventDefault()

	let parent = $(this).closest('.image')
	parent.remove()
})


// Для организаций - Документы - отображение файлов
docsShowFiles = function (files) {
	Object.keys(files).forEach(i => {
		const file = files[i],
			reader = new FileReader()

		var html = ''

		reader.readAsDataURL(file)

		reader.onload = function () {
			console.log(file)
			if (file.type.search('image') >= 0) {
				html = new String()
					+ '<div class="image">'
					+ '<div class="img">'
					+ '<img src="' + reader.result + '" alt="" >'
					+ '<button type="button" class="delete"></button>'
					+ '</div>'
					+ '</div>'
			}

			if (file.name.slice((file.name.lastIndexOf('.') - 1 >>> 0) + 2) === 'pdf') {
				html = new String()
					+ '<div class="file">'
					+ '<div class="icon">'
					+ '<img src="images/ic_pdf.svg" alt="" class="icon">'
					+ '</div>'
					+ '<div class="name">' + file.name + '</div>'
					+ '<button type="button" class="delete"></button>'
					+ '<button type="button" class="edit modal_link" data-content="#edit_file_modal"><svg><use xlink:href="images/sprite.svg#ic_edit"></use></svg></button>'
					+ '</div>'
			}

			if (file.name.slice((file.name.lastIndexOf('.') - 1 >>> 0) + 2) === 'xlsx') {
				html = new String()
					+ '<div class="file">'
					+ '<div class="icon">'
					+ '<img src="images/ic_exel.svg" alt="" class="icon">'
					+ '</div>'
					+ '<div class="name">' + file.name + '</div>'
					+ '<button type="button" class="delete"></button>'
					+ '<button type="button" class="edit modal_link" data-content="#edit_file_modal"><svg><use xlink:href="images/sprite.svg#ic_edit"></use></svg></button>'
					+ '</div>'
			}

			if (file.name.slice((file.name.lastIndexOf('.') - 1 >>> 0) + 2) === 'docx') {
				html = new String()
					+ '<div class="file">'
					+ '<div class="icon">'
					+ '<img src="images/ic_word.svg" alt="" class="icon">'
					+ '</div>'
					+ '<div class="name">' + file.name + '</div>'
					+ '<button type="button" class="delete"></button>'
					+ '<button type="button" class="edit modal_link" data-content="#edit_file_modal"><svg><use xlink:href="images/sprite.svg#ic_edit"></use></svg></button>'
					+ '</div>'
			}

			$('.form .docs.drop_files .selected').append(html)
		}
	})
}