const dropzoneForm = $('.dropzone-form');
const dropzone = $('.dropzone');

function showFiles(files, nodeToDisplay) {
	nodeToDisplay.text([...files].map(file => file.name).join(' '));
}

dropzone
	.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
		e.preventDefault();
		e.stopPropagation();
	})
	.on('dragover dragenter', function() {
		dropzone.addClass('dropzone_dragover');
	})
	.on('dragleave dragend drop', function() {
		dropzone.removeClass('dropzone_dragover');
	})
	.on('drop', function(e) {
		const files = e.originalEvent.dataTransfer.files;
		const nodeToDisplay = $(this)
			.closest('.dropzone-form')
			.find('.dropzone-form__files-count');
		showFiles.call(this, files, nodeToDisplay);
	});

$('.dropzone__input').on('change', function(e) {
	const nodeToDisplay = $(this)
		.closest('.dropzone-form')
		.find('.dropzone-form__files-count');
	showFiles.call(this, e.target.files, nodeToDisplay);
});

dropzoneForm.on('submit', function(e) {
	e.preventDefault();

	const form = this;

	if ($(this).hasClass('dropzone_uploading')) return false;

	$(this)
		.addClass('dropzone_uploading')
		.removeClass('dropzone_error');
	dropzone.find('.dropzone-form__files-count').text('Загрузка');

	// const ajaxData = new FormData(this);
	const ajaxData = {};

	$.ajax({
		url: $(this).attr('action'),
		type: $(this).attr('method'),
		data: ajaxData,
		dataType: 'json',
		cache: false,
		contentType: 'form/multipart',
		complete: function() {
			$(this).removeClass('dropzone_uploading');
		}.bind(form),
		success: function(data) {
			$(this)
				.find('.dropzone-form__files-count')
				.text(
					data.success === true
						? 'Успешная загрузка'
						: 'Ошибка загрузки файлов',
				);
		}.bind(form),
		error: function() {
			$(this)
				.find('.dropzone-form__files-count')
				.text('Ошибка загрузки файлов');
			console.error('Dropzone Error');
		}.bind(form),
	});
});
