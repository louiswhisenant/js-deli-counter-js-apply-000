var katzDeliLine = [];

var num = 0;

function takeANumber(katzDeliLine) {
  //katzDeliLine.push(name);
  //return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
  num++;
  katzDeliLine.push(num);
  return "Welcome, you are ticket number " + num + ".";
}

function nowServing(line) {
  var announce = "";
  if (line.length > 0) {
    announce = "Currently serving " + line.shift() + ".";
    return announce;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var lineStatus = "The line is currently: ";
  var i = 0;
  if (i < line.length) {
    while (i < line.length) {
      lineStatus += (i + 1) + ". " + line[i] + ", ";
      i++;
    } 
    lineStatus = lineStatus.slice(0, -2);
    return lineStatus;
  } else {
    return "The line is currently empty.";
  }
}

