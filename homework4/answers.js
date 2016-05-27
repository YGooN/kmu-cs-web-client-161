function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2() {
  document.getElementById("q2-answer").innerHTML = "<ol><li>Javascript can change HTML by accessing DOM</li><li>Javascript can add or remove existing elements and attributes</li></ol>";
}

function answer_3() {
  document.getElementsByClassName("q34-answer")[0].innerHTML = "<ol><li>Parent node - A node directly above a node</li><li>Child nodes - Nodes one level directly below</li><li>Sibling nodes - Nodes at the same level (same parent node)</li><li>Descendant nodes - A set of nodes any number of levels below another node</li><li>Ancestor nodes - A set of nodes above a node in a tree</li></ol>";
}

function answer_4() {
  document.getElementsByClassName("q34-answer")[1].innerHTML = "<ul><li>document.getElementById <br>- Returns an element with a given ID_NAME. <br>- Duplicate ID is not allowed in the HTML specification. </li><li>document.getElementsByClassName<br>- Get a list of elements based on the class name</li><li>document.getElementsByName <br> - Get a list of elements based on the name. <br>- Name is generally used with input tag.</li><li>document.getElementsByTagName <br> - Get a list of elements with the input tag name.</li></ul>";
}

$('a').click(function () {
    output = "Answer5";
  $(this).text(output);
})

$('.item').click(function () {
  $(this).attr("style", "font-size:3em;");
})

$('.item-group').next().dblclick(function () {
  $(this).attr("style","color:blue;");
})

$('.item-group').next().next().next().dblclick(function () {
  $(this).attr("style","color:blue;");
})