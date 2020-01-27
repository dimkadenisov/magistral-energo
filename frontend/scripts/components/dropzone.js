const dropzoneForm = $('.dropzone-form');
const dropzone = $('.dropzone');

function checkFilesExtensions(files, extensions) {
	return [...files].every(({ name }) => {
		return extensions.includes(name.match(/.(\w*)$/)[1]);
	});
}

function renderText(isMultiple, files) {
	return !isMultiple && files.length > 1
		? 'Можно загрузить только один файл'
		: [...files].map(file => file.name).join('');
}

function showFiles(files, nodeToDisplay) {
	const isMultiple = !!$(this)
		.closest('.dropzone')
		.find('.dropzone__input')
		.attr('multiple');

	const extensions = $(this)
		.closest('.dropzone')
		.find('.dropzone__input')
		.attr('data-allowed-files-extensions')
		.split(' ');

	const text = checkFilesExtensions(files, extensions)
		? renderText(isMultiple, files)
		: `Можно загружать файлы только с расширениями ${extensions}`;

	nodeToDisplay.text(text);
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
	console.log('ti pidoras');

	// if (dropzoneForm.hasClass('dropzone_uploading')) return false;

	// dropzoneForm.addClass('dropzone_uploading').removeClass('fropzone_error');
	// e.preventDefault();

	// const ajaxData = new FormData(dropzoneForm.get(0));

	// // if (droppedFiles) { // check this shit
	// // 	$.each(droppedFiles, function(i, file) {
	// // 		ajaxData.append($input.attr('name'), file);
	// // 	});
	// // }

	// $.ajax({
	// 	url: dropzoneForm.attr('action'),
	// 	type: dropzoneForm.attr('method'),
	// 	data: ajaxData,
	// 	dataType: 'json',
	// 	cache: false,
	// 	contentType: false,
	// 	processData: false,
	// 	complete: function() {
	// 		dropzoneForm.removeClass('dropzone_uploading');
	// 	},
	// 	success: function(data) {
	// 		dropzoneForm.addClass(
	// 			data.success === true ? 'dropzone_success' : 'dropzone_error',
	// 		);
	// 		// if (!data.success) $errorMsg.text(data.error); // check this shit
	// 	},
	// 	error: function() {
	// 		console.error('Dropzone Error');
	// 	},
	// });
});
