body {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    margin: 0;
    padding: 0;
}

.loading {
    background-image: url("data:image/gif;base64,R0lGODlhJQAlAJECAL3L2AYrTv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAJQAlAAACi5SPqcvtDyGYIFpF690i8xUw3qJBwUlSadmcLqYmGQu6KDIeM13beGzYWWy3DlB4IYaMk+Dso2RWkFCfLPcRvFbZxFLUDTt21BW56TyjRep1e20+i+eYMR145W2eefj+6VFmgTQi+ECVY8iGxcg35phGo/iDFwlTyXWphwlm1imGRdcnuqhHeop6UAAAIfkEBQoAAgAsEAACAAQACwAAAgWMj6nLXAAh+QQFCgACACwVAAUACgALAAACFZQvgRi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwXABEADAADAAACBYyPqcsFACH5BAUKAAIALBUAFQAKAAsAAAITlGKZwWoMHYxqtmplxlNT7ixGAQAh+QQFCgACACwQABgABAALAAACBYyPqctcACH5BAUKAAIALAUAFQAKAAsAAAIVlC+BGL3Z3IlxUmUuhtR2LzHhsiEFACH5BAUKAAIALAEAEQAMAAMAAAIFjI+pywUAIfkEBQoAAgAsBQAFAAoACwAAAhOUYJnAagwdjGq2amXGU1PuLEYBACH5BAUKAAIALBAAAgAEAAsAAAIFhI+py1wAIfkEBQoAAgAsFQAFAAoACwAAAhWUL4AIvdnciXFSZS6G1HYvMeGyIQUAIfkEBQoAAgAsFwARAAwAAwAAAgWEj6nLBQAh+QQFCgACACwVABUACgALAAACE5RgmcBqDB2MarZqZcZTU+4sRgEAIfkEBQoAAgAsEAAYAAQACwAAAgWEj6nLXAAh+QQFCgACACwFABUACgALAAACFZQvgAi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwBABEADAADAAACBYSPqcsFADs=");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 60%;
}

.start_btn{
    display:inline-block;
    margin:0 auto;
    width:8em;
    height:1.7em;
    line-height:1.7em;
    font-size:2.2em;
    color:#fff;
}

.SHADE {
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: 11;
}

.BOX-V {
    box-orient: vertical;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-direction: column;
}

.BOX-D {
    box-align: end;
    box-pack: center;
    -webkit-box-align: end;
    -webkit-box-pack: center;
    -ms-flex-align: end;
    -ms-flex-pack: center;
}

.BOX-M {
    box-align: center;
    box-pack: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -ms-flex-align: center;
    -ms-flex-pack: center;
}

.BOX-S {
    display: block;
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
}

.BOX,
.BOX-V,
.BOX-D,
.BOX-M,
.FOOTER {
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
}

.BBOX,
.BOX,
.APP-STAGE,
.INSET-STAGE,
.STAGE,
.PAGE-STAGE,
.PAGE,
.PAGE-BOX,
.INSET-PAGE,
.FOOTER {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}


#welcome {
    background-color: rgba(0, 0, 0, .8);
    text-align: center;
    font-weight: bold;
    overflow: hidden;
}

.welcome-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 100% 100%;
    opacity: .4;
    overflow: hidden;
}

#GameTimeLayer {
    top: 1em;
    left: 0;
    width: 100%;
    text-align: center;
    color: rgb(233, 138, 131);
    font-size: 4em;
    text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
    overflow: hidden;
}

#GameLayerBG {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #fff;
}

.GameLayer {
    position: absolute;
    bottom: 0;
    left: 0;
}

.block {
    position: absolute;
    border-top: 1px solid #b8dfe6;
    background-repeat: no-repeat;
    background-position: center;
}

.t1,
.t2,
.t3,
.t4,
.t5 {
    background-size: auto 100%;
    background-image: url(./image/ClickBefore.png);
}

.tt1,
.tt2,
.tt3,
.tt4,
.tt5 {
    background-size: auto 86%;
    background-image: url(./image/AfterClicking.png);
}

.bl {
    border-left: 1px solid #b8dfe6;
}

@-ms-keyframes flash {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-webkit-keyframes flash {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.flash {
    -webkit-animation: flash .2s 3;
    animation: flash .2s 3;
}

.bad {
    background-color: rgb(211, 91, 91);
    -webkit-animation: flash .2s 3;
    animation: flash .2s 3;
}

* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-user-select: none;
}

#GameScoreLayer {
    padding-top: 2em;
    font-size: 2em;
    font-weight: bold;
    color: #251c1c;
    text-align: center;
    overflow: hidden;
}

.share-icon {
    width: 1.7em;
    background-repeat: no-repeat;
    background-size: auto 100%;
}



#GameScoreLayer-btn .btn,
#GameScoreLayer-share .btn {
    text-align: center;
    font-size: 1.1em;
    color: rgba(0, 0, 0, 0.3);
    height: 2em;
    line-height: 2em;
}

.btn:active {
    opacity: 0.2;
}

#landscape {
    display: none;
}

#gameBody {
    position: relative;
    width: 640px;
    margin: 0 auto;
}

#share-wx {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 10000;
    display: none;
}
