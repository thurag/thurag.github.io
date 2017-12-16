// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9U6EC_uOm222p3n9P6vhWRpyhAWTpnDs",
    authDomain: "chatting-app-20171212.firebaseapp.com",
    databaseURL: "https://chatting-app-20171212.firebaseio.com",
    projectId: "chatting-app-20171212",
    storageBucket: "",
    messagingSenderId: "608524088223"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  // Initialize global variables
  var databaseRoot = 'chat/app/';

  // Initialize room
  var room = getRoomName();
  joinRoom(room);

  function joinRoom(room) {

    clientId = localStorage.getItem("clientId");
    clientImg = localStorage.getItem("clientImg");

    if (!clientId) {
      var key = database.ref(databaseRoot + room + '/_join_').push({ joined : 'unknown'}).key
      clientId = 'member_' + key;
      localStorage.setItem("clientId", clientId);
      database.ref(databaseRoot + room + '/_join_/' + key).update({ joined : clientId});
    }

    if (!clientImg) {
      getClientImg();
    } else {
      $("img.agent").attr("src", clientImg)
    }

    console.log('joinRoom', room);
    console.log('clientId', clientId);

    // listen broadcase message
    roomBroadcastRef = database.ref(databaseRoot + room + '/_broadcast_');
    roomBroadcastRef.on('child_added', function(data) { // sent msg from others
      console.log("roomBroadcastRef > child_added", data.key, data.val());

      let message = data.val();
      let fromId = message.from;
      if (fromId === clientId) {
        console.log("self message in right side", message.msg);
        $('<div class="message message-personal">' + message.msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        $('.message-input').val(null);
        updateScrollbar();
      } else {
        console.log("other message in left side", message.msg);
        fakeMessage(message.msg, message.clientImg);
      }
    });

    // listen typing bubble events
    roomTypingRef = database.ref(databaseRoot + room + '/_typing_');
    roomTypingRef.on('child_added', function(data) {
      console.log("roomTypingRef > child_added", data.key, data.val());

      let message = data.val();
      let fromId = message.from;
      if (fromId === clientId) {
        console.log("ignore self typing");
        // return;
      } else {
        if (!$('.message.loading').length > 0) {
          $('<div class="message loading new"><figure class="avatar"><img src='+ message.clientImg +' /></figure><span></span></div>').appendTo($('.mCSB_container'));
          updateScrollbar();
          removeTimeout = setTimeout(function(){
            $('.message.loading').remove();
          }, 1500);
        } else {
          clearTimeout(removeTimeout);
          removeTimeout = setTimeout(function(){
            $('.message.loading').remove();
          }, 1500);
        }
      }
    })

  }

  function getRoomName() { // たとえば、 URLに  ?roomname  とする
    let url = document.location.href;
    let args = url.split('?');
    if (args.length > 1) {
      let room = args[1];
      if (room != '') {
        return room;
      }
    }

    // generate rondom room, and replace URL
    let room = 'room_' + getUniqueStr();
    window.history.pushState(null, null, '?' + room);
    return room;
  }

  // http://qiita.com/coa00@github/items/679b0b5c7c468698d53f
  // 疑似ユニークIDを生成
  function getUniqueStr(myStrong){
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16);
  }

  function getClientImg() {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      async: false,
      success: function(data) {
        console.log("getClientImg", data)
        clientImg = data.results[0].picture.medium;
        console.log("clientImg", clientImg);
        localStorage.setItem("clientImg", clientImg);
        $("img.agent").attr("src", clientImg)
      }
    });
  }