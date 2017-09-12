
// MODAL SECTION
$('#portfolioModal').on('show.bs.modal', function (event) {
  var target = $(event.relatedTarget) // Button that triggered the modal
  // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var title = target.data('portfolioname')
  var desc1 = target.data('desc1')
  var desc2 = target.data('desc2')
  var url   = target.data('portfoliourl')
  var image = target.data('image')
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('#portfolio-desc1').text(desc1)
  modal.find('#portfolio-desc2').text(desc2)
  modal.find('#portfolio-url').attr("href", url)
  modal.find('#modal-image').attr("src", image)
})

// CONTACT FORM HANDLER
var URL = 'https://pvrvxrut92.execute-api.us-east-1.amazonaws.com/Dev/contact'

$('#contact-form').submit(function (event) {
  event.preventDefault()

  var data = {
    name: $('#name').val(),
    email: $('#email').val(),
    description: $('#question').val()
  }

  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function () {
      $("#success-alert").removeClass("hidden");
      $("#error-alert").addClass("hidden");
    },
    error: function () {
      $("#success-alert").addClass("hidden");
      $("#error-alert").removeClass("hidden");
    }
  })
})
