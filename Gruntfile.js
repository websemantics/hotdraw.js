module.exports = function(grunt) {

    var pkg = grunt.file.readJSON("package.json");

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: pkg,
        banner: grunt.file.read("./src/docblock.js")
            .replace(/@VERSION/, pkg.version)
            .replace(/@DATE/, grunt.template.today("yyyy-mm-dd")) + "\n",
        // Task configuration.
        uglify: {
            options: {
                banner: "<%= banner %>",
                report: "min"
            },
            dist: {
                src: "<%= concat.target.dest %>",
                dest: "dist/hotdraw-min.js"
            }
        },
        concat: {
            options: {
                banner: "<%= banner %>"
            },
            target: {
                dest: "dist/hotdraw.js",
                src: [  "./bower_components/Oea.svg/dist/oea.svg.js",
                        "./src/initHotdraw.js",
                        "./src/Framework/Figure.js",
                        "./src/Framework/Drawing.js",
                        "./src/Framework/FigureEnumeration.js",
                        "./src/Framework/FigureChangeListener.js",
                        "./src/Framework/DrawingChangeListener.js",
                        "./src/Framework/FigureChangeEvent.js",
                        "./src/Framework/DrawingChangeEvent.js",
                        "./src/Framework/Tool.js",
                        "./src/Framework/DrawingView.js",
                        "./src/Framework/DrawingEditor.js",
                        "./src/Framework/Handle.js",
                        "./src/Framework/Locator.js",
                        "./src/Util/ReverseVectorEnumerator.js",
                        "./src/Util/PaletteButton.js",
                        "./src/Util/Command.js",
                        "./src/Util/FloatingTextField.js",
                        "./src/Util/Geom.js",
                        "./src/Standard/FigureTransferCommand.js",
                        "./src/Standard/DeleteCommand.js",
                        "./src/Standard/DuplicateCommand.js",
                        "./src/Figures/GroupCommand.js",
                        "./src/Figures/UngroupCommand.js",
                        "./src/Standard/FigureEnumerator.js",
                        "./src/Standard/ReverseFigureEnumerator.js",
                        "./src/Standard/FigureChangeEventMulticaster.js",
                        "./src/Standard/AbstractFigure.js",
                        "./src/Standard/CompositeFigure.js",
                        "./src/Standard/StandardDrawing.js",
                        "./src/Standard/AbstractTool.js",
                        "./src/Standard/SelectionTool.js",
                        "./src/Standard/StandardDrawingView.js",
                        "./src/Standard/ToolButton.js",
                        "./src/Standard/PaletteIcon.js",
                        "./src/Standard/SelectAreaTracker.js",
                        "./src/Standard/CreationTool.js",
                        "./src/Standard/ScribbleTool.js",
                        "./src/Standard/DragTracker.js",
                        "./src/Standard/AbstractHandle.js",
                        "./src/Standard/LocatorHandle.js",
                        "./src/Standard/RadiusHandle.js",
                        "./src/Standard/HandleTracker.js",
                        "./src/Standard/AbstractLocator.js",
                        "./src/Standard/RelativeLocator.js",
                        "./src/Standard/BoxHandleKit.js",
                        "./src/Standard/TextHolder.js",
                        "./src/Standard/NullHandle.js",
                        "./src/Standard/ActionTool.js",
                        "./src/Figures/FigureAttributes.js",
                        "./src/Figures/AttributeFigure.js",
                        "./src/Standard/DecoratorFigure.js",
                        "./src/Figures/RectangleFigure.js",
                        "./src/Figures/PolyLineFigure.js",
                        "./src/Figures/EllipseFigure.js",
                        "./src/Figures/ImageFigure.js",
                        "./src/Figures/RoundRectangleFigure.js",
                        "./src/Figures/TextFigure.js",
                        "./src/Figures/TextTool.js",
                        "./src/Figures/FontSizeHandle.js",
                        "./src/Figures/PolyLineHandle.js",
                        "./src/Figures/PolyLineLocator.js",
                        "./src/Figures/LineFigure.js",
                        "./src/Figures/BorderDecorator.js",
                        "./src/Figures/BorderTool.js",
                        "./src/Figures/GroupFigure.js",
                        "./src/Figures/GroupHandle.js",
                        "./src/Contrib/PolygonFigure.js",
                        "./src/Contrib/PolygonHandle.js",
                        "./src/Contrib/PolygonTool.js",
                        "./src/Contrib/PolygonScaleHandle.js",
                        "./src/Contrib/FloatingTextArea.js",
                        "./src/Contrib/TextAreaTool.js",
                        "./src/Contrib/OpacityHandle.js",
                        "./src/Contrib/TextAlignHandle.js",
                        "./src/Contrib/TextAreaDecorator.js",
                        "./src/Application/DrawApplication.js",
                        "./src/Demo/DemoDrawingView.js",
                        "./src/Demo/DemoApplication.js",
                        "./src/Demo/DemoAttributes.js",
                        "./src/Demo/HotDraw.js",
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-exec");

    grunt.registerTask("default", ["concat", "uglify"]);
};
