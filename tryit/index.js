var Demo = function() {
    this.font = 'Lobster';
    this.message = 'ShadeCycle.js';
    this.num_layers = 15;
    this.offset_horizontal = 1;
    this.offset_vertical = 1;
    this.start_color = '#00FFFF';
    this.end_color = '#ff69b4';
    this.repeat = 0;
    this.offset = 0;
}

window.onload = function() {
    window.demo = new Demo();
    var gui = new dat.GUI();
    var controllers = [
        gui.add(demo, 'font', ["Bellefair","Cursive","Droid Sans Mono","Gloria Hallelujah","Impact","Inconsolata","Indie Flower","Lobster","Merriweather","Open Sans","Pacifico","Righteous","Roboto","Roboto Mono","Shrikhand","VT323"]),
        gui.add(demo, 'message'),
        gui.add(demo, 'num_layers', 0, 100).step(1),
        gui.add(demo, 'offset_horizontal', -100, 100).step(1),
        gui.add(demo, 'offset_vertical', -100, 100).step(1),
        gui.addColor(demo, 'start_color'),
        gui.addColor(demo, 'end_color'),
        gui.add(demo, 'repeat', 0, 100).step(1),
        gui.add(demo, 'offset', 0, 100).step(1)
    ];
    controllers.forEach((con) => {
        con.onChange((value) => {
            redraw();
        });
    });
    
    window.title = document.getElementById('title');
    window.title_style = title.style;
    window.sass = document.getElementById('sass');
    window.generated = document.getElementById('generated');
    redraw();
}

function redraw() {
    window.title.textContent = demo.message;
    window.title_style['font-family'] = demo.font;
    var css = ShadeCycle.css(demo.num_layers, demo.offset_horizontal, demo.offset_vertical, demo.start_color, demo.end_color, demo.repeat, demo.offset);
    window.title_style.textShadow = css;
    window.generated.textContent = `element {
    text-shadow: ${css};
}`;
    window.sass.textContent = `element {
    text-shadow: shade-cycle(${demo.num_layers}, ${demo.offset_horizontal}, ${demo.offset_vertical}, ${demo.start_color}, ${demo.end_color}, ${demo.repeat}, ${demo.offset});
}`;
}