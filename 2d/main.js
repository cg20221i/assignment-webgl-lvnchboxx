function main() {
  //get the element
  //get context is for adding the library webgl into outcode
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("experimental-webgl");
  // vertecies

    var vertices = 
    // the number 5
    [-0.58, 0.9,
     -0.8,  0.9,
     -0.86, 0.8,
     -0.86, 0.5,
     -0.83, 0.42,
     -0.8,  0.5,
     -0.8,  0.55,
     -0.75, 0.55,
     -0.64, 0.55,
     -0.6,  0.5,
     -0.6,  0.4,
     -0.6,  0.3,
     -0.68, 0.2,
     -0.8,  0.2,
     -0.86, 0.15,
     -0.8,  0.1,
     -0.65, 0.1,
     -0.53, 0.25,
     -0.53, 0.55,
     -0.6,  0.65,
     -0.8,  0.65,
     -0.8,  0.75,
     -0.77, 0.8,
     -0.58, 0.8,
     -0.53, 0.85,
     
    //the number number 4
     0.55, 0.9,
     0.5,  0.8,
     0.5,  0.53,
     0.55, 0.45,
     0.75, 0.45,
     0.75, 0.1,
     0.80, 0.0,
     0.8,  0.1,
     0.8,  0.9,
     0.75, 0.8,
     0.75, 0.55,
     0.58, 0.55,
     0.55, 0.6,
     0.55, 0.8,

     //the alphabet N and A

     // the alphabet N
     //PHASE1
     -0.5, -0.3,
     -0.58, -0.1,
     -0.5, -0.6,
     -0.58, -0.6,
     // phase 2
     -0.58, -0.08,
     -0.49, -0.3,
     -0.38 , -0.6,
     -0.3, -0.6,
     // phase 3
     -0.38, -0.08,
     -0.3,  -0.08,
     -0.38, -0.44,
     -0.3,  -0.59,
      //THE ALPHABET A
      //phase 1
     0.1, -0.6,
     0.18, -0.6,
     0.28, -0.1,

    // phase 2
    0.28, -0.1,
    0.28, -0.4,
    0.34, -0.45,
    0.34, -0.1,
    // phase 3
    0.18 , -0.54,
    0.18, -0.47,
    0.28, -0.47,
    0.28, -0.54,
    // phase 4
    0.28, -0.41,
    0.34, -0.46,
    0.28, -0.59,
    // PHASE 5
    0.28, -0.6,
    0.34, -0.47,
    0.34, -0.6


    ];

    
      // create a linkedlist for storingthe vertecies in gpu
      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW); // allocation
      
      
// vertex shader
    var vertexShaderCode = `
    attribute vec2 aPosition; 
    void main  (){
    gl_PointSize = 5.0;
    gl_Position = vec4(aPosition, 0.0, 1.0);
    }
    `;


    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    
    var fragmentShaderCode = `
          precision mediump float;
          void main () {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
          }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
  
    var shaderProgram = gl.createProgram(); 
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    //teach how to       

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);  
    gl.enableVertexAttribArray(aPosition);

          // coloring the canvas
    gl.clearColor(1.0, 0.56, 0.64, 1.0); 
  
    gl.clear(gl.COLOR_BUFFER_BIT);
    //drawing dot       loaded array,needed new array
      gl.drawArrays(gl.LINE_LOOP, 0, 25); //5
      gl.drawArrays(gl.LINE_LOOP, 25, 14); // 4
      //alphanet N phase 1
      gl.drawArrays(gl.TRIANGLE_STRIP, 39, 4); 
      // N phase 2
      gl.drawArrays(gl.TRIANGLE_FAN, 43, 4);
      // N phase 3
      gl.drawArrays(gl.TRIANGLE_STRIP, 47, 4);
      
      // A phase 1
      gl.drawArrays(gl.TRIANGLE_FAN, 51, 3);
      // A phase 2
      gl.drawArrays(gl.TRIANGLE_FAN, 54, 4);
      // A phase 3
      gl.drawArrays(gl.TRIANGLE_FAN, 58, 4);
      //A phase 4
      gl.drawArrays(gl.TRIANGLES, 62, 3);
      // A final phase
      gl.drawArrays(gl.TRIANGLES, 65, 3);
  }