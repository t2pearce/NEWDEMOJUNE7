window.onload = function() {
      var array = ["/2/slides.dzi", "/3/slides.dzi", "/4/slides.dzi", "/5/slides.dzi"];
      var location = 0;

        var viewer = OpenSeadragon({
        id:              "contentDiv",
        prefixUrl:       "/openseadragon-2.4.2/images/",
        // tileSources: array[location],
        gestureSettingsTouch: {
          pinchRotate: true
        },
        showRotationControl: true,
        showFlipControl: true,
        constrainDuringPan: true,
      });

      var anno = OpenSeadragon.Annotorious(viewer, {
        locale: 'auto'
      });

      anno.setAuthInfo({
        id: 'http://www.example.com/rainer',
        displayName: 'Taylor'
      });

      var toolToggle = document.getElementById('current-tool');
      toolToggle.addEventListener('click', function() {
        if (toolToggle.innerHTML == 'TOOL: RECTANGLE') {
          toolToggle.innerHTML = 'TOOL: RECTANGLE';
          anno.setDrawingTool('rect');
        } else {
          toolToggle.innerHTML = 'TOOL: RECTANGLE';
          anno.setDrawingTool('rect');
        }
      });

      var modeBtn = document.getElementById('mode');
      modeBtn.addEventListener('click', function() {
        if (modeBtn.innerHTML == 'MODE: VIEW') {
          modeBtn.innerHTML = 'MODE: ANNOTATE';
          anno.setDrawingEnabled(true);
        } else {
          modeBtn.innerHTML = 'MODE: VIEW';
          anno.setDrawingEnabled(false);
        }
      });

      var pictureToggle = document.getElementById('picture');
      pictureToggle.addEventListener('click', function() {
        if (pictureToggle.innerHTML == 'PARS002') {
          pictureToggle.innerHTML == 'PARS002'
          location = 0;
          anno.clearAnnotations();
          viewer.open(array[location]);
        } else {
          pictureToggle.innerHTML == 'PARS002'
          location = 0;
          viewer.open(array[location]);
        }
        });

      var pictureToggle2 = document.getElementById('picture2');
      pictureToggle2.addEventListener('click', function() {
          if (pictureToggle2.innerHTML == 'PARS003') {
          pictureToggle2.innerHTML == 'PARS003'
          location = 1;
          anno.clearAnnotations();
          viewer.open(array[location]);
        } else {
          pictureToggle2.innerHTML == 'PARS003'
          location = 1;
          viewer.open(array[location]);
        }
        });

      var pictureToggle3 = document.getElementById('picture3');
      pictureToggle3.addEventListener('click', function() {
          if (pictureToggle3.innerHTML == 'PARS005') {
          pictureToggle3.innerHTML == 'PARS005'
          location = 3;
          anno.clearAnnotations();
          viewer.open(array[location]);
        } else {
          pictureToggle3.innerHTML == 'PARS005'
          location = 3;
          viewer.open(array[location]);
        }
        });



      anno.on('createSelection', function(selection) {
        console.log('selection', selection);
      });

      anno.on('selectAnnotation', function(annotation) {
        console.log('selected', annotation);
      });

      anno.on('cancelSelected', function(a) {
        console.log('cancelSelected', a);
      });

      anno.on('mouseEnterAnnotation', function(annotation) {
        // console.log('mouseEnter', annotation);
      });

      anno.on('mouseLeaveAnnotation', function(annotation) {
        // console.log('mouseLeave', annotation);
      });

      anno.loadAnnotations('annotations.w3c.json');
    }
