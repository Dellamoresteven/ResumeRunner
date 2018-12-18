var tabbedIn = true;

$(document).ready(function() {
  // removes javascript notice
  $('#javascriptNotice').css('display', 'none');
  setCss();
});

function setCss() {
  let i = 0;
  const desc = [
    "Developer",
    "Creator",
    "Computer Scientist"
  ]
  typeText("decription", desc[i] + "_");
  let IntervalType = setInterval(() => {
    if (!tabbedIn)
      return
    if (i === desc.length - 1) {
      clearInterval(IntervalType);
      deleteText("decription", desc[i].length + 10, () => {
        deleteText("header1", 15, () => {
          setTimeout(() => {
            // $("p").css({"background-color": "yellow", "font-size": "200%"});
            $("#header1").css({
              "color": "black"
            })
            $("#decription").css({
              "color": "black"
            })
            typeText("header1", "Welcome to");
            typeText("decription", "Resume Runner");
          }, 1500);
          setTimeout(() => {
            deleteText("decription", 13, () => {
              start = true;
              deleteText("header1", 13, () => {});
            });
          }, 5000);
        });
      });
    } else {
      deleteText("decription", desc[i].length, () => {
        i = (i + 1) % desc.length;
        setTimeout(() => {
          typeText("decription", desc[i] + "_");
        }, 250);
      });
    }
  }, 3000);
}

function typeText(id, text, callback) {
  const element = document.getElementById(id);


  if (text.length === 0) {
    element.innerHTML = element.innerHTML.substr(0, element.innerHTML.length - 1);

    if (callback)
      callback();
  } else {
    setTimeout(function() {
      if (element.innerHTML.charAt(element.innerHTML.length - 1) === "_")
        element.innerHTML = element.innerHTML.substr(0, element.innerHTML.length - 1);

      element.innerHTML += text.charAt(0) + "_";

      text = text.substr(1, text.length);

      typeText(id, text, callback);
    }, 25 + Math.random() * 50);
  }
}

function deleteText(id, amount, callback) {
  const element = document.getElementById(id);

  if (amount === 0) {
    if (callback)
      callback();
  } else {
    setTimeout(function() {
      if (element.innerHTML.length <= 1) {
        element.innerHTML = "";
      } else {
        element.innerHTML = element.innerHTML.substr(0, element.innerHTML.length - 2) + "_";
      }
      deleteText(id, amount - 1, callback);
    }, 50);
  }
}

/**
 * Checks to see if the user is 'tabbed' into the window.
 */
window.onblur = () => {
  tabbedIn = false;
};
window.onfocus = () => {
  tabbedIn = true;
};