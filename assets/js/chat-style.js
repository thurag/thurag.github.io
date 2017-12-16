var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  // setTimeout(function() {
  //   fakeMessage();
  // }, 100);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  // console.log("setDate", d)
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();

  if ($.trim(msg) == '') {
    return false;
  }

  var fontSelected = $("input[name='fontOption']:checked").val() || null;

  roomBroadcastRef.push({msg: knayi.fontConvert(msg, 'unicode', fontSelected), from: clientId, clientImg: clientImg}); // sent msg by me

  // setTimeout(function() {
  //   fakeMessage();
  // }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

$('.message-input').on('keydown', function(e) {
  if (e.which !== 0 && !e.ctrlKey && !e.metaKey && !e.altKey) {
    console.log("typing...");
    roomTypingRef.push({from: clientId, clientImg: clientImg}).remove(); // sent msg by me

  }
})

var Fake = [
  'Hi there, I\'m Jesse and you?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

function fakeMessage(msg, clientImg) {
  msg = msg || Fake[i];
  clientImg = clientImg || "http://askavenue.com/img/17.jpg";

  // if ($('.message-input').val() != '') {
  //   return false;
  // }
  // updateScrollbar();

  // setTimeout(function() {
  //   $('.message.loading').remove();
  //   $('<div class="message new"><figure class="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  //   setDate();
  //   updateScrollbar();
  //   i++;
  // }, 1000 + (Math.random() * 20) * 100);

  $('.message.loading').remove();
  $('<div class="message new"><figure class="avatar"><img src='+ clientImg +' /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  updateScrollbar();

}

$('.button').click(function(){
  $('.menu .items span').toggleClass('active');
   $('.menu .button').toggleClass('active');
});