var scaler = 30;
var x1 = 17;
var x2 = 6;
var ratio = x2 / x1;
var init_col = Math.random();
var step_col = 0.29;

function setup(){
    let EA2d = createCanvas(x1*scaler*ratio, x2*scaler);
    background(240);
    EA2d.parent("01-EA2dsq");

    var draw_pos_x = 0;
    var draw_pos_y = 0;
    var count = 0;
    colorMode(HSB, 1);

    var d = x2;
    while(d > 1e-2){
        if(count % 2 == 1){
            while((draw_pos_y + (d/ratio)) < x2){
                var c = color(init_col, 1, 1);
                noStroke();
                fill(c);
                rect(draw_pos_x*scaler, draw_pos_y*scaler, d*scaler, d*scaler/ratio);
                draw_pos_y += d/ratio;
                init_col = (init_col + step_col) % 1;
            }
            d = x2 - draw_pos_y;
        }
        else{
            while(draw_pos_x + d*ratio < x2){
                var c = color(init_col, 1, 1);
                noStroke();
                fill(c);
                rect(draw_pos_x*scaler, draw_pos_y*scaler, d*scaler*ratio, d*scaler);
                draw_pos_x += d*ratio;
                init_col = (init_col + step_col) % 1;
            }
            d = x2 - draw_pos_x;
        }

        count++;
    }
}

function draw(){

}