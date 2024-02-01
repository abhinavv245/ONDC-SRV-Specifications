// flow.js

var flows;

<<<<<<< HEAD
async function loadSteps(steps) {
=======
function loadSteps(steps) {
>>>>>>> c7b2f88 (added error ui)
  const stepPane = document.querySelector(".step-pane");
  const contentPane = document.querySelector(".content-pane");
  stepPane.innerHTML = "";
  contentPane.innerHTML = "";
<<<<<<< HEAD
  for (const [index, step] of steps?.entries()) {
    const { details } = step || [];
=======
  steps.forEach(function (step, index) {
>>>>>>> c7b2f88 (added error ui)
    const link = document.createElement("a");
    link.href = "#" + step.summary;
    link.classList.add(
      "list-group-item",
      "list-group-item-action",
      "step-item"
    );
    link.textContent = index + 1 + ". " + step.api;

    const content = document.createElement("div");
<<<<<<< HEAD
    const noteContent = document.createElement("div");
    content.id = step.summary;
    noteContent.id = "test";
    content.classList.add("step-content", "p-4");
    noteContent.classList.add("step-content", "p-4");

    var mermaidDiv = document.createElement("description-div");
    var yamlDiv = document.createElement("description-yaml");
    var noteDiv = document.createElement("note-yaml");

    if (details && details?.length) {
      for (const [innerIndex, detail] of details.entries()) {
        var mermaidPane = document.createElement("description-mermaid");
        const { description, mermaid: mermaidGraph } = detail;
        let svg = "";
        if (mermaidGraph) {
          let removeBacktick = mermaidGraph?.replace(/`/g, "");
          svg = await mermaid.render(`summary${index}`, removeBacktick)?.svg;
        }

        mermaidPane.innerHTML =
          "<p>" +
          `${innerIndex + 1}) ${description}` +
          "<p>" +
          "<p>" +
          svg +
          "<p>";

        mermaidDiv.appendChild(mermaidPane);
      }
    }
    if (!details && step.description) {
      mermaidDiv.innerHTML = "<p>" + step.description + "</p>";
    }
    // yamlDiv.innerHTML =
    //   '<pre class="yaml-content">' +
    //   JSON.stringify(step.example.value, null, 2) +
    //   "</pre>";
    yamlDiv.innerHTML =
      step?.api === "form"
        ? "<div>" +
          '<pre class="yaml-content">' +
          "<xmp>" +
          step.example.value +
          "</xmp>" +
          "</pre>" +
          '<div class="flow-forms">' +
          step.example.value +
          "</div>" +
          "</div>"
        : '<pre class="yaml-content">' +
          JSON.stringify(step.example.value, null, 2) +
          "</pre>";
    content.innerHTML = "<div>" + "<h3>" + step.summary + "</h3>" + "</div>";
    content.appendChild(mermaidDiv);
    content.appendChild(yamlDiv);

    if (step.notes) {
      noteDiv.innerHTML =
        step?.api === "form"
          ? "<div>" +
            '<pre class="yaml-content">' +
            "<xmp>" +
            step.notes.value +
            "</xmp>" +
            "</pre>" +
            '<div class="flow-forms">' +
            step.notes.value +
            "</div>" +
            "</div>"
          : '<pre class="yaml-content" style="color: #000000; background-color:lightgray;">' +
            JSON.stringify(step.notes.value, null, 2) +
            "</pre>";
      noteContent.innerHTML = "<div><h3>Notes</h3></div>";
      noteContent.appendChild(noteDiv);
    }
=======
    content.id = step.summary;
    content.classList.add("step-content", "p-4");
    content.innerHTML =
      "<div>" +
      "<h3>" +
      step.summary +
      "</h3>" +
      "<p>" +
      step.description +
      "</p>" +
      "</div>" +
      '<pre class="yaml-content">' +
      JSON.stringify(step.example.value, null, 2) +
      "</pre>";
>>>>>>> c7b2f88 (added error ui)

    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelectorAll(".step-item").forEach(function (item) {
        item.classList.remove("active");
      });
      document.querySelectorAll(".step-content").forEach(function (content) {
        content.classList.remove("active");
<<<<<<< HEAD
        noteContent.classList.remove("active");
      });
      link.classList.add("active");
      content.classList.add("active");
      noteContent.classList.add("active");
    });
    stepPane.appendChild(link);
    contentPane.appendChild(content);
    if (step.notes) {
      contentPane.appendChild(noteContent);
    }
  }
=======
      });
      link.classList.add("active");
      content.classList.add("active");
    });
    stepPane.appendChild(link);
    contentPane.appendChild(content);
  });
>>>>>>> c7b2f88 (added error ui)
}

function updateFlow() {
  var flowDropdown = document.getElementById("flow-dropdown");
  var selectedValue = flowDropdown.value;
  loadFlow(selectedValue);
}

async function loadFlow(flowName) {
  const flowSummary = document.getElementById("flow-summary");
  const flowDescription = document.getElementById("flow-description");
  flowSummary.innerHTML = "";
  flowDescription.innerHTML = "";
  let selectedFlow = flows.find((obj) => {
    if (obj["summary"] === flowName) return obj;
  });
  flowSummary.textContent = selectedFlow["summary"];
<<<<<<< HEAD
  flowDescription.textContent = selectedFlow["description"];
  var mermaidDiv = document.createElement("description-div");
=======
  flowDescription.innerHTML ="<p>" + selectedFlow["description"] + "</p> <br />";

>>>>>>> c7b2f88 (added error ui)
  if (selectedFlow["details"]) {
    var mermaidDiv = document.createElement("mermaid-div");
    for (const [index, step] of selectedFlow["details"].entries()) {
      var mermaidPane = document.createElement(`flow-mermaid-${index}`);
      const { description, mermaidGraph } = step;
      let svg = "";
      if (mermaidGraph) {
        let removeBacktick = mermaidGraph?.replace(/`/g, "");
        svg = await mermaid.render(`flow-mermaid`, removeBacktick);
      }
      mermaidPane.innerHTML =
        "<p><b>" +
        `${index + 1}. ${description}` +
        "</b></p>" +
        "<p>" +
        svg.svg +
        "</p>";
      mermaidDiv.appendChild(mermaidPane);
    }
<<<<<<< HEAD
  }
  flowDescription.append(mermaidDiv);
=======

    flowDescription.appendChild(mermaidDiv);
  }
>>>>>>> c7b2f88 (added error ui)
  loadSteps(selectedFlow["steps"]);
}

function loadFlows(data) {
  flows = data;
  const flowDropdown = document.getElementById("flow-dropdown");
  flowDropdown.innerHTML = "";
  // Render the steps list
  flows.forEach((flow) => {
    var option = document.createElement("option");
    option.text = flow.summary;
    flowDropdown.add(option);
  });
  loadFlow(flows[0].summary);
<<<<<<< HEAD
}
=======
}
>>>>>>> c7b2f88 (added error ui)
