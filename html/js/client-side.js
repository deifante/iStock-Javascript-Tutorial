var ClientSide = {};
////////////////////////////////////////////////////////////////////////////////
ClientSide.validate = function()
{
  var hasErrors = false;
  if ($('#firstName').val().trim().length == 0)
    {
      ClientSide.fieldError('#firstName', '"First Name" cannot be empty.');
      hasErrors = true;
    }
  else
    ClientSide.fieldSuccess('#firstName');

  if ($('#lastName').val().trim().length == 0)
    {
      ClientSide.fieldError('#lastName', '"Last Name" cannot be empty.');
      hasErrors = true;
    }
  else
    ClientSide.fieldSuccess('#lastName');

  if ($('#phoneNumber').val().trim().length == 0)
    {
      ClientSide.fieldError('#phoneNumber', '"Phone Number" cannot be empty.');
      hasErrors = true;
    }
  else
    ClientSide.fieldSuccess('#phoneNumber');

  if (hasErrors)
    {
      ClientSide.setMessage('Missing Fields');
      return false;
    }

  ClientSide.setMessage('Fields OK!', 'text-success');

  //return true;
  return false;
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.fieldSuccess = function(fieldId)
{
  $(fieldId).closest('.control-group').removeClass('error').addClass('success');
  $(fieldId).next('span.help-inline').text('OK!');
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.fieldError = function(fieldId, message)
{
  $(fieldId).closest('.control-group').addClass('error');
  $(fieldId).next('span.help-inline').text(message);
  return;
}
////////////////////////////////////////////////////////////////////////////////
ClientSide.setMessage = function(message, messageType)
{
  if (messageType === undefined)
    messageType = 'text-error';

  $('#generalMessages').addClass(messageType);
  $('#generalMessages').text(message);
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
  return;
}
////////////////////////////////////////////////////////////////////////////////
$(document).ready(ClientSide.start);
////////////////////////////////////////////////////////////////////////////////
