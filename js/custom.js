$('#portfolioModal').on('show.bs.modal', function (event) {
  var target = $(event.relatedTarget) // Button that triggered the modal
  // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var title = target.data('portfolioname')
  var desc1 = target.data('desc1')
  var desc2 = target.data('desc2')
  var url = target.data('portfoliourl')
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('#portfolio-desc1').text(desc1)
  modal.find('#portfolio-desc2').text(desc2)
  modal.find('#portfolio-url').text("URL: " + url).attr("href", url)
})
