var scaler = 30;
var x1 = 10;
var x2 = 6;
var ratio = x2 / x1;

function setup(){
    let EA2d = createCanvas(x1*scaler, x2*scaler);
    background(240);
    EA2d.parent("01-EA2d");

    var draw_pos_x = 0;
    var draw_pos_y = 0;
    var count = 0;
    colorMode(HSB, 1);

    var d = x2;
    while(d > 0){
        if(count % 2 == 1){
            while(draw_pos_y + d <= x2){
                var c = color(Math.random(), 1, 1);
                noStroke();
                fill(c);
                rect(draw_pos_x*scaler, draw_pos_y*scaler, d*scaler, d*scaler);
                draw_pos_y += d;
            }
            d = x2 - draw_pos_y;
        }
        else{
            while(draw_pos_x + d <= x1){
                var c = color(Math.random(), 1, 1);
                noStroke();
                fill(c);
                rect(draw_pos_x*scaler, draw_pos_y*scaler, d*scaler, d*scaler);
                draw_pos_x += d;
            }
            d = x1 - draw_pos_x;
        }

        count++;
    }
}

function draw(){

}