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

  ClientSide.setMessage('Fields OK!', 'text-success');

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
