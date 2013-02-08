var ClientSide = {};
////////////////////////////////////////////////////////////////////////////////
ClientSide.validate = function()
{
  var hasErrors = false;

  $('#exampleForm input[type="text"]').each(
    function(index, element)
    {
      if($(this).val().trim().length == 0)
        {
          ClientSide.fieldError($(this), "This field cannot be empty");
          hasErrors = true;
        }
      else
        ClientSide.fieldSuccess($(this));
    }
  );

  if (hasErrors)
    {
      ClientSide.setMessage('Missing Fields');
      return false;
    }

  ClientSide.setMessage('Fields OK!', 'alert-success');

  //return true;
  return false;
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.fieldSuccess = function(fieldObj)
{
  fieldObj.closest('.control-group').removeClass('error').addClass('success');
  fieldObj.next('span.help-inline').text('OK!');
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.fieldError = function(fieldObj, message)
{
  fieldObj.closest('.control-group').addClass('error');
  fieldObj.next('span.help-inline').text(message);
  return;
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.setMessage = function(message, messageType)
{
  if (messageType === undefined)
    messageType = 'alert-error';

  $('#generalMessages span').text(message);
  $('#generalMessages').removeClass('alert-error').removeClass('alert-success').
    addClass(messageType).show();
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.dismissAlert = function()
{
  $('#generalMessages').hide();
  return;
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.test = function()
{
  console.log('Working');
  return false;
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.start = function()
{
  $('#quickSubmit').click(ClientSide.validate);
  $('#dismissAlert').click(ClientSide.dismissAlert);
  return;
}
////////////////////////////////////////////////////////////////////////////////
$(document).ready(ClientSide.start);
////////////////////////////////////////////////////////////////////////////////
