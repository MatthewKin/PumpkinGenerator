const canvas =
    document.getElementById("canvas");

const ctx =
    canvas.getContext("2d");


//basic controls

const seedInput =
    document.getElementById("seedInput");

const weirdSlider =
    document.getElementById("weirdSlider");

const detailSlider =
    document.getElementById("detailSlider");


const weirdValue =
    document.getElementById("weirdValue");

const detailValue =
    document.getElementById("detailValue");


//eye controls

const eyeShape =
    document.getElementById("eyeShape");

const eyeSizeSlider =
    document.getElementById("eyeSizeSlider");

const eyeSpacingSlider =
    document.getElementById("eyeSpacingSlider");

const eyeHeightSlider =
    document.getElementById("eyeHeightSlider");

const eyeTiltSlider =
    document.getElementById("eyeTiltSlider");

const eyeAsymmetrySlider =
    document.getElementById("eyeAsymmetrySlider");


const eyeSizeValue =
    document.getElementById("eyeSizeValue");

const eyeSpacingValue =
    document.getElementById("eyeSpacingValue");

const eyeHeightValue =
    document.getElementById("eyeHeightValue");

const eyeTiltValue =
    document.getElementById("eyeTiltValue");

const eyeAsymmetryValue =
    document.getElementById("eyeAsymmetryValue");


//nose controls

const noseShape =
    document.getElementById("noseShape");

const noseSizeSlider =
    document.getElementById("noseSizeSlider");

const noseWidthSlider =
    document.getElementById("noseWidthSlider");

const noseHeightSlider =
    document.getElementById("noseHeightSlider");

const noseTiltSlider =
    document.getElementById("noseTiltSlider");


const noseSizeValue =
    document.getElementById("noseSizeValue");

const noseWidthValue =
    document.getElementById("noseWidthValue");

const noseHeightValue =
    document.getElementById("noseHeightValue");

const noseTiltValue =
    document.getElementById("noseTiltValue");


//mouth controls

const mouthShape =
    document.getElementById("mouthShape");

const mouthWidthSlider =
    document.getElementById("mouthWidthSlider");

const mouthHeightSlider =
    document.getElementById("mouthHeightSlider");

const mouthPositionSlider =
    document.getElementById("mouthPositionSlider");

const teethSlider =
    document.getElementById("teethSlider");

const mouthChaosSlider =
    document.getElementById("mouthChaosSlider");


const mouthWidthValue =
    document.getElementById("mouthWidthValue");

const mouthHeightValue =
    document.getElementById("mouthHeightValue");

const mouthPositionValue =
    document.getElementById("mouthPositionValue");

const teethValue =
    document.getElementById("teethValue");

const mouthChaosValue =
    document.getElementById("mouthChaosValue");


//button

const generateButton =
    document.getElementById("generateButton");

const randomButton =
    document.getElementById("randomButton");

const exportButton =
    document.getElementById("exportButton");

const copySeedButton =
    document.getElementById("copySeedButton");


//seeded random

function hashString(str) {

    let hash = 2166136261;

    for (
        let i = 0;
        i < str.length;
        i++
    ) {

        hash ^= str.charCodeAt(i);

        hash +=
            (hash << 1) +
            (hash << 4) +
            (hash << 7) +
            (hash << 8) +
            (hash << 24);

    }

    return hash >>> 0;

}


function seededRandom(seed) {

    let value =
        hashString(seed);


    return function () {

        value += 0x6D2B79F5;

        let t = value;

        t =
            Math.imul(
                t ^ (t >>> 15),
                t | 1
            );

        t ^=
            t +
            Math.imul(
                t ^ (t >>> 7),
                t | 61
            );

        return (
            (t ^ (t >>> 14)) >>> 0
        ) / 4294967296;

    };

}


function randomRange(
    rng,
    min,
    max
) {

    return min +
        rng() *
        (max - min);

}


function randomInt(
    rng,
    min,
    max
) {

    return Math.floor(
        randomRange(
            rng,
            min,
            max + 1
        )
    );

}


function choose(
    rng,
    array
) {

    return array[
        Math.floor(
            rng() * array.length
        )
    ];

}


//bg

function drawBackground() {

    const gradient =
        ctx.createRadialGradient(
            400,
            350,
            50,
            400,
            400,
            600
        );


    gradient.addColorStop(
        0,
        "#3b170c"
    );

    gradient.addColorStop(
        0.65,
        "#210b07"
    );

    gradient.addColorStop(
        1,
        "#100504"
    );


    ctx.fillStyle =
        gradient;

    ctx.fillRect(
        0,
        0,
        800,
        800
    );


    /* Ground shadow */

    ctx.fillStyle =
        "rgba(0,0,0,0.6)";


    ctx.beginPath();

    ctx.ellipse(
        400,
        700,
        285,
        48,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();

}


//pumpkin main body

function drawPumpkinBody(
    rng,
    weirdness,
    details
) {

    const centerX = 400;
    const centerY = 410;

    const bodyWidth =
        285 +
        weirdness * 0.25;

    const bodyHeight =
        285;


    ctx.save();

    ctx.translate(
        centerX,
        centerY
    );


    //main body

    const gradient =
        ctx.createRadialGradient(
            -75,
            -90,
            20,
            0,
            0,
            bodyWidth
        );


    gradient.addColorStop(
        0,
        "#ffad35"
    );

    gradient.addColorStop(
        0.45,
        "#ff841f"
    );

    gradient.addColorStop(
        1,
        "#c94d13"
    );


    ctx.fillStyle =
        gradient;


    ctx.beginPath();


    ctx.moveTo(
        -bodyWidth * 0.58,
        -bodyHeight * 0.88
    );


    ctx.bezierCurveTo(
        -bodyWidth * 0.92,
        -bodyHeight * 0.83,
        -bodyWidth,
        -bodyHeight * 0.35,
        -bodyWidth * 0.88,
        0
    );


    ctx.bezierCurveTo(
        -bodyWidth * 0.98,
        bodyHeight * 0.42,
        -bodyWidth * 0.78,
        bodyHeight * 0.82,
        -bodyWidth * 0.40,
        bodyHeight * 0.92
    );


    ctx.bezierCurveTo(
        -bodyWidth * 0.12,
        bodyHeight,
        bodyWidth * 0.15,
        bodyHeight,
        bodyWidth * 0.43,
        bodyHeight * 0.91
    );


    ctx.bezierCurveTo(
        bodyWidth * 0.79,
        bodyHeight * 0.80,
        bodyWidth * 0.98,
        bodyHeight * 0.38,
        bodyWidth * 0.89,
        0
    );


    ctx.bezierCurveTo(
        bodyWidth,
        -bodyHeight * 0.37,
        bodyWidth * 0.87,
        -bodyHeight * 0.78,
        bodyWidth * 0.53,
        -bodyHeight * 0.88
    );


    ctx.bezierCurveTo(
        bodyWidth * 0.22,
        -bodyHeight * 0.97,
        -bodyWidth * 0.25,
        -bodyHeight * 0.98,
        -bodyWidth * 0.58,
        -bodyHeight * 0.88
    );


    ctx.closePath();

    ctx.fill();


    //ridges

    drawRidges(
        rng,
        bodyWidth,
        bodyHeight,
        details
    );


    //highlights

    ctx.save();

    ctx.globalAlpha = 0.12;

    ctx.fillStyle =
        "#ffd36a";


    ctx.beginPath();

    ctx.ellipse(
        -90,
        -100,
        65,
        115,
        -0.35,
        0,
        Math.PI * 2
    );

    ctx.fill();

    ctx.restore();


    ctx.restore();

}


//ridges

function drawRidges(
    rng,
    bodyWidth,
    bodyHeight,
    details
) {

    const ridgeCount =
        randomInt(
            rng,
            8,
            11
        );


    for (
        let i = 0;
        i < ridgeCount;
        i++
    ) {

        const normalized =
            i /
            (ridgeCount - 1);


        const x =
            -bodyWidth * 0.78 +
            normalized *
            bodyWidth * 1.56;


        const width =
            bodyWidth *
            randomRange(
                rng,
                0.075,
                0.12
            );


        const alpha =
            randomRange(
                rng,
                0.09,
                0.19
            );


        /* Dark side */

        ctx.save();

        ctx.globalAlpha =
            alpha;

        ctx.fillStyle =
            "#8e300f";


        ctx.beginPath();

        ctx.ellipse(
            x + width * 0.45,
            5,
            width,
            bodyHeight * 0.83,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.restore();


        /* Light side */

        ctx.save();

        ctx.globalAlpha =
            alpha * 0.7;

        ctx.fillStyle =
            "#ffb33e";


        ctx.beginPath();

        ctx.ellipse(
            x - width * 0.45,
            -5,
            width * 0.7,
            bodyHeight * 0.82,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.restore();

    }

}


//stem

function drawStem(rng) {

    const width =
        randomRange(
            rng,
            22,
            34
        );

    const height =
        randomRange(
            rng,
            45,
            70
        );


    ctx.save();

    ctx.translate(
        randomRange(
            rng,
            390,
            410
        ),
        115
    );


    ctx.fillStyle =
        "#3e2a12";


    ctx.beginPath();

    ctx.moveTo(
        -width / 2,
        5
    );


    ctx.bezierCurveTo(
        -width * 0.55,
        -height * 0.4,
        -width * 0.4,
        -height,
        0,
        -height
    );


    ctx.bezierCurveTo(
        width * 0.35,
        -height * 0.9,
        width * 0.5,
        -height * 0.3,
        width / 2,
        5
    );


    ctx.closePath();

    ctx.fill();

    ctx.restore();

}

//eyes

function drawEyes(
    rng,
    weirdness
) {



    const size =
        Number(
            eyeSizeSlider.value
        );


    const spacing =
        Number(
            eyeSpacingSlider.value
        );


    const height =
        Number(
            eyeHeightSlider.value
        );


    const tilt =
        Number(
            eyeTiltSlider.value
        );


    const asymmetry =
        Number(
            eyeAsymmetrySlider.value
        );


    const actualSize =
        24 +
        size * 0.16;


    /*
        Eye center.

        330 puts the eyes  above the nose
    */

    const eyeY =
        335 +
        height;


    const leftX =
        400 -
        spacing;


    const rightX =
        400 +
        spacing;


    let shape =
        eyeShape.value;


    if (shape === "random") {

        shape =
            choose(
                rng,
                [
                    "round",
                    "soft",
                    "sleepy",
                    "slit",
                    "triangle",
                    "angry",
                    "evil"
                ]
            );

    }


    const leftRotation =
        tilt * 0.01 +
        randomRange(
            rng,
            -0.03,
            0.03
        );


    const rightRotation =
        -tilt * 0.01 +
        randomRange(
            rng,
            -0.03,
            0.03
        );


    const leftScale =
        1 +
        randomRange(
            rng,
            -asymmetry / 500,
            asymmetry / 500
        );


    const rightScale =
        1 +
        randomRange(
            rng,
            -asymmetry / 500,
            asymmetry / 500
        );


    drawEye(
        leftX,
        eyeY,
        actualSize * leftScale,
        actualSize,
        leftRotation,
        shape,
        rng
    );


    drawEye(
        rightX,
        eyeY +
            randomRange(
                rng,
                -asymmetry * 0.12,
                asymmetry * 0.12
            ),
        actualSize * rightScale,
        actualSize,
        rightRotation,
        shape,
        rng
    );

}


// singled eye

function drawEye(
    x,
    y,
    width,
    height,
    rotation,
    type,
    rng
) {

    ctx.save();

    ctx.translate(
        x,
        y
    );

    ctx.rotate(
        rotation
    );


    ctx.fillStyle =
        "#090403";


    switch (type) {

        case "round":

            ctx.beginPath();

            ctx.ellipse(
                0,
                0,
                width,
                height,
                0,
                0,
                Math.PI * 2
            );

            ctx.fill();

            break;


        case "soft":

            ctx.beginPath();

            ctx.moveTo(
                -width,
                0
            );

            ctx.bezierCurveTo(
                -width * 0.6,
                -height,
                width * 0.6,
                -height,
                width,
                0
            );

            ctx.bezierCurveTo(
                width * 0.6,
                height * 0.7,
                -width * 0.6,
                height * 0.7,
                -width,
                0
            );

            ctx.fill();

            break;


        case "sleepy":

            ctx.lineWidth = 10;

            ctx.lineCap =
                "round";


            ctx.beginPath();

            ctx.moveTo(
                -width,
                3
            );

            ctx.quadraticCurveTo(
                0,
                height * 0.5,
                width,
                0
            );

            ctx.stroke();

            break;


        case "slit":

            ctx.beginPath();

            ctx.ellipse(
                0,
                0,
                width,
                height * 0.38,
                0,
                0,
                Math.PI * 2
            );

            ctx.fill();

            break;


        case "triangle":

            ctx.beginPath();

            ctx.moveTo(
                0,
                -height
            );

            ctx.lineTo(
                width,
                height
            );

            ctx.lineTo(
                -width,
                height
            );

            ctx.closePath();

            ctx.fill();

            break;


        case "angry":

            ctx.beginPath();

            ctx.moveTo(
                -width,
                -height * 0.45
            );

            ctx.lineTo(
                width,
                height * 0.35
            );

            ctx.lineTo(
                width * 0.72,
                height
            );

            ctx.lineTo(
                -width * 0.72,
                height
            );

            ctx.closePath();

            ctx.fill();

            break;


        case "evil":

            ctx.beginPath();

            ctx.moveTo(
                -width,
                -height * 0.55
            );

            ctx.lineTo(
                width,
                -height * 0.05
            );

            ctx.lineTo(
                width * 0.7,
                height
            );

            ctx.lineTo(
                -width * 0.8,
                height * 0.6
            );

            ctx.closePath();

            ctx.fill();

            break;

    }


    ctx.restore();

}


//noses

function drawNose(
    rng
) {

    const size =
        Number(
            noseSizeSlider.value
        );


    const width =
        Number(
            noseWidthSlider.value
        ) / 100;


    const y =
        420 +
        Number(
            noseHeightSlider.value
        );


    const rotation =
        Number(
            noseTiltSlider.value
        ) * 0.01;


    let type =
        noseShape.value;


    if (type === "random") {

        type =
            choose(
                rng,
                [
                    "triangle",
                    "holes",
                    "diamond",
                    "split",
                    "crooked",
                    "hook"
                ]
            );

    }


    const actualSize =
        15 +
        size * 0.12;


    ctx.save();

    ctx.translate(
        400,
        y
    );

    ctx.rotate(
        rotation
    );


    ctx.fillStyle =
        "#100503";


    switch (type) {

        case "triangle":

            ctx.beginPath();

            ctx.moveTo(
                0,
                -actualSize
            );

            ctx.lineTo(
                actualSize * width,
                actualSize
            );

            ctx.lineTo(
                -actualSize * width,
                actualSize
            );

            ctx.closePath();

            ctx.fill();

            break;


        case "holes":

            ctx.beginPath();

            ctx.ellipse(
                -actualSize * 0.5,
                0,
                actualSize * 0.35,
                actualSize * 0.5,
                0,
                0,
                Math.PI * 2
            );

            ctx.fill();


            ctx.beginPath();

            ctx.ellipse(
                actualSize * 0.5,
                0,
                actualSize * 0.35,
                actualSize * 0.5,
                0,
                0,
                Math.PI * 2
            );

            ctx.fill();

            break;


        case "diamond":

            ctx.beginPath();

            ctx.moveTo(
                0,
                -actualSize
            );

            ctx.lineTo(
                actualSize * width,
                0
            );

            ctx.lineTo(
                0,
                actualSize
            );

            ctx.lineTo(
                -actualSize * width,
                0
            );

            ctx.closePath();

            ctx.fill();

            break;


        case "split":

            ctx.strokeStyle =
                "#100503";

            ctx.lineWidth =
                Math.max(
                    5,
                    actualSize * 0.2
                );

            ctx.lineCap =
                "round";


            ctx.beginPath();

            ctx.moveTo(
                -actualSize * 0.7,
                -actualSize * 0.4
            );

            ctx.lineTo(
                0,
                actualSize * 0.35
            );

            ctx.lineTo(
                actualSize * 0.7,
                -actualSize * 0.4
            );

            ctx.stroke();

            break;


        case "crooked":

            ctx.beginPath();

            ctx.moveTo(
                -actualSize,
                0
            );

            ctx.quadraticCurveTo(
                0,
                -actualSize,
                actualSize * width,
                actualSize * 0.3
            );

            ctx.lineTo(
                actualSize * 0.4,
                actualSize
            );

            ctx.closePath();

            ctx.fill();

            break;


        case "hook":

            ctx.strokeStyle =
                "#100503";

            ctx.lineWidth =
                Math.max(
                    6,
                    actualSize * 0.25
                );

            ctx.lineCap =
                "round";


            ctx.beginPath();

            ctx.moveTo(
                0,
                -actualSize
            );

            ctx.quadraticCurveTo(
                actualSize * width,
                0,
                0,
                actualSize
            );

            ctx.stroke();

            break;

    }


    ctx.restore();

}


//mouth

function drawMouth(
    rng
) {

    const width =
        Number(
            mouthWidthSlider.value
        );


    const height =
        Number(
            mouthHeightSlider.value
        );


    const y =
        390 +
        Number(
            mouthPositionSlider.value
        );


    const chaos =
        Number(
            mouthChaosSlider.value
        );


    const teeth =
        Number(
            teethSlider.value
        );


    let type =
        mouthShape.value;


    if (type === "random") {

        type =
            choose(
                rng,
                [
                    "small",
                    "grin",
                    "jagged",
                    "fangs",
                    "crooked",
                    "scream",
                    "stitched",
                    "serrated"
                ]
            );

    }


    const actualWidth =
        75 +
        width * 0.95;


    const actualHeight =
        18 +
        height * 0.25;


    ctx.save();

    ctx.translate(
        400,
        y
    );


    switch (type) {

        case "small":

            drawSimpleMouth(
                actualWidth * 0.55,
                actualHeight * 0.55
            );

            break;


        case "grin":

            drawGrin(
                actualWidth,
                actualHeight,
                teeth,
                rng
            );

            break;


        case "jagged":

            drawJaggedMouth(
                actualWidth,
                actualHeight,
                teeth,
                rng,
                chaos
            );

            break;


        case "fangs":

            drawFangMouth(
                actualWidth,
                actualHeight,
                teeth,
                rng
            );

            break;


        case "crooked":

            drawCrookedMouth(
                actualWidth,
                actualHeight
            );

            break;


        case "scream":

            drawScreamMouth(
                actualWidth,
                actualHeight
            );

            break;


        case "stitched":

            drawStitchedMouth(
                actualWidth,
                actualHeight
            );

            break;


        case "serrated":

            drawSerratedMouth(
                actualWidth,
                actualHeight,
                teeth,
                rng,
                chaos
            );

            break;

    }


    ctx.restore();

}

//mouth types

function drawSimpleMouth(
    width,
    height
) {

    ctx.fillStyle =
        "#0d0302";


    ctx.beginPath();

    ctx.ellipse(
        0,
        0,
        width,
        height,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();

}


function drawGrin(
    width,
    height,
    teeth,
    rng
) {

    ctx.fillStyle =
        "#0d0302";


    ctx.beginPath();

    ctx.moveTo(
        -width,
        -height * 0.2
    );

    ctx.quadraticCurveTo(
        0,
        height * 1.15,
        width,
        -height * 0.2
    );

    ctx.quadraticCurveTo(
        0,
        height * 0.25,
        -width,
        -height * 0.2
    );

    ctx.closePath();

    ctx.fill();


    drawTeeth(
        width,
        height,
        teeth,
        rng
    );

}


function drawJaggedMouth(
    width,
    height,
    teeth,
    rng,
    chaos
) {

    ctx.fillStyle =
        "#0c0302";


    ctx.beginPath();

    ctx.moveTo(
        -width,
        -height * 0.2
    );


    const count =
        Math.max(
            3,
            teeth
        );


    for (
        let i = 0;
        i <= count;
        i++
    ) {

        const t =
            i / count;


        const x =
            -width +
            t * width * 2;


        const variation =
            chaos * 0.12;


        const y =
            i % 2 === 0
                ? -height * 0.15
                : height * 0.5 +
                  randomRange(
                      rng,
                      -variation,
                      variation
                  );


        ctx.lineTo(
            x,
            y
        );

    }


    ctx.lineTo(
        width,
        -height * 0.2
    );


    ctx.quadraticCurveTo(
        0,
        height * 0.8,
        -width,
        -height * 0.2
    );


    ctx.closePath();

    ctx.fill();


    drawTeeth(
        width,
        height,
        teeth,
        rng
    );

}


function drawFangMouth(
    width,
    height,
    teeth,
    rng
) {

    ctx.fillStyle =
        "#0c0302";


    ctx.beginPath();

    ctx.ellipse(
        0,
        0,
        width,
        height,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    drawTeeth(
        width,
        height,
        teeth,
        rng
    );

}


function drawCrookedMouth(
    width,
    height
) {

    ctx.fillStyle =
        "#0c0302";


    ctx.beginPath();

    ctx.moveTo(
        -width,
        0
    );

    ctx.quadraticCurveTo(
        -width * 0.1,
        height * 1.2,
        width,
        -height * 0.55
    );

    ctx.quadraticCurveTo(
        0,
        height * 0.15,
        -width,
        0
    );

    ctx.fill();

}


function drawScreamMouth(
    width,
    height
) {

    ctx.fillStyle =
        "#0a0201";


    ctx.beginPath();

    ctx.ellipse(
        0,
        0,
        width * 0.72,
        height * 1.35,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();


    ctx.fillStyle =
        "#f7e6a7";


    ctx.beginPath();

    ctx.ellipse(
        0,
        -height * 0.65,
        width * 0.6,
        height * 0.2,
        0,
        0,
        Math.PI * 2
    );

    ctx.fill();

}


function drawStitchedMouth(
    width,
    height
) {

    ctx.strokeStyle =
        "#0b0302";

    ctx.lineWidth = 8;

    ctx.lineCap =
        "round";


    ctx.beginPath();

    ctx.moveTo(
        -width,
        0
    );

    ctx.quadraticCurveTo(
        0,
        height * 0.4,
        width,
        0
    );

    ctx.stroke();


    const count =
        Math.max(
            4,
            Math.floor(
                width / 30
            )
        );


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const t =
            i /
            (count - 1);


        const x =
            -width +
            t * width * 2;


        const y =
            Math.sin(
                t * Math.PI
            ) *
            height *
            0.4;


        ctx.beginPath();

        ctx.moveTo(
            x - 5,
            y - 10
        );

        ctx.lineTo(
            x + 5,
            y + 10
        );

        ctx.stroke();

    }

}


function drawSerratedMouth(
    width,
    height,
    teeth,
    rng,
    chaos
) {

    ctx.fillStyle =
        "#0a0201";


    ctx.beginPath();

    ctx.moveTo(
        -width,
        0
    );


    const count =
        Math.max(
            4,
            teeth
        );


    for (
        let i = 0;
        i <= count;
        i++
    ) {

        const t =
            i / count;


        const x =
            -width +
            t * width * 2;


        const variation =
            randomRange(
                rng,
                -chaos * 0.1,
                chaos * 0.1
            );


        const y =
            i % 2 === 0
                ? height * 0.55
                : -height * 0.25;


        ctx.lineTo(
            x,
            y + variation
        );

    }


    ctx.lineTo(
        width,
        height
    );


    ctx.quadraticCurveTo(
        0,
        height * 1.3,
        -width,
        height
    );


    ctx.closePath();

    ctx.fill();

}


//teeth

function drawTeeth(
    width,
    height,
    count,
    rng
) {

    if (count <= 0) {
        return;
    }


    ctx.fillStyle =
        "#f5e8ad";


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const t =
            count === 1
                ? 0.5
                : i / (count - 1);


        const x =
            -width * 0.82 +
            t *
            width *
            1.64;


        const toothHeight =
            height *
            randomRange(
                rng,
                0.35,
                0.9
            );


        const toothWidth =
            randomRange(
                rng,
                6,
                15
            );


        ctx.beginPath();

        ctx.moveTo(
            x - toothWidth,
            -height * 0.25
        );

        ctx.lineTo(
            x,
            -height * 0.25 +
            toothHeight
        );

        ctx.lineTo(
            x + toothWidth,
            -height * 0.25
        );

        ctx.closePath();

        ctx.fill();

    }

}


//detailing

function drawDetails(
    rng,
    detailLevel
) {

    const wartCount =
        Math.floor(
            detailLevel / 12
        );


    for (
        let i = 0;
        i < wartCount;
        i++
    ) {

        const x =
            randomRange(
                rng,
                100,
                700
            );


        const y =
            randomRange(
                rng,
                210,
                620
            );


        const radius =
            randomRange(
                rng,
                3,
                9
            );


        ctx.fillStyle =
            choose(
                rng,
                [
                    "#9d3915",
                    "#7d2910",
                    "#b44717",
                    "#6b230f"
                ]
            );


        ctx.beginPath();

        ctx.arc(
            x,
            y,
            radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }


    /* scars */

    const scarCount =
        Math.floor(
            detailLevel / 20
        );


    ctx.strokeStyle =
        "#77280f";

    ctx.lineWidth = 4;

    ctx.lineCap =
        "round";


    for (
        let i = 0;
        i < scarCount;
        i++
    ) {

        const x =
            randomRange(
                rng,
                120,
                680
            );


        const y =
            randomRange(
                rng,
                200,
                600
            );


        const length =
            randomRange(
                rng,
                12,
                35
            );


        ctx.beginPath();

        ctx.moveTo(
            x,
            y
        );

        ctx.lineTo(
            x + length,
            y +
            randomRange(
                rng,
                -8,
                8
            )
        );

        ctx.stroke();

    }


    /* spots */

    const spotCount =
        Math.floor(
            detailLevel / 8
        );


    for (
        let i = 0;
        i < spotCount;
        i++
    ) {

        const x =
            randomRange(
                rng,
                100,
                700
            );


        const y =
            randomRange(
                rng,
                180,
                620
            );


        ctx.fillStyle =
            "rgba(90,30,12,0.35)";


        ctx.beginPath();

        ctx.arc(
            x,
            y,
            randomRange(
                rng,
                2,
                5
            ),
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}


//labels

function updateLabels() {

    weirdValue.textContent =
        weirdSlider.value;

    detailValue.textContent =
        detailSlider.value;


    eyeSizeValue.textContent =
        eyeSizeSlider.value;

    eyeSpacingValue.textContent =
        eyeSpacingSlider.value;

    eyeHeightValue.textContent =
        eyeHeightSlider.value;

    eyeTiltValue.textContent =
        eyeTiltSlider.value;

    eyeAsymmetryValue.textContent =
        eyeAsymmetrySlider.value;


    noseSizeValue.textContent =
        noseSizeSlider.value;

    noseWidthValue.textContent =
        noseWidthSlider.value;

    noseHeightValue.textContent =
        noseHeightSlider.value;

    noseTiltValue.textContent =
        noseTiltSlider.value;


    mouthWidthValue.textContent =
        mouthWidthSlider.value;

    mouthHeightValue.textContent =
        mouthHeightSlider.value;

    mouthPositionValue.textContent =
        mouthPositionSlider.value;

    teethValue.textContent =
        teethSlider.value;

    mouthChaosValue.textContent =
        mouthChaosSlider.value;

}


// MAIN DRAW SECTION

function drawPumpkin() {

    const seed =
        seedInput.value.trim() ||
        "HALLOWEEN";


    const weirdness =
        Number(
            weirdSlider.value
        );


    const details =
        Number(
            detailSlider.value
        );


    /* Separate RNGs */

    const bodyRng =
        seededRandom(
            seed +
            "|BODY|" +
            weirdness
        );


    const eyeRng =
        seededRandom(
            seed +
            "|EYES|" +
            eyeShape.value +
            "|" +
            eyeSizeSlider.value +
            "|" +
            eyeSpacingSlider.value +
            "|" +
            eyeHeightSlider.value +
            "|" +
            eyeTiltSlider.value +
            "|" +
            eyeAsymmetrySlider.value
        );


    const noseRng =
        seededRandom(
            seed +
            "|NOSE|" +
            noseShape.value +
            "|" +
            noseSizeSlider.value +
            "|" +
            noseWidthSlider.value +
            "|" +
            noseHeightSlider.value +
            "|" +
            noseTiltSlider.value
        );


    const mouthRng =
        seededRandom(
            seed +
            "|MOUTH|" +
            mouthShape.value +
            "|" +
            mouthWidthSlider.value +
            "|" +
            mouthHeightSlider.value +
            "|" +
            mouthPositionSlider.value +
            "|" +
            teethSlider.value +
            "|" +
            mouthChaosSlider.value
        );


    const detailRng =
        seededRandom(
            seed +
            "|DETAILS|" +
            details
        );


    /* Clear */

    ctx.clearRect(
        0,
        0,
        800,
        800
    );


    /* Background */

    drawBackground();


    /* Pumpkin */

    drawPumpkinBody(
        bodyRng,
        weirdness,
        details
    );


    /* Stem */

    drawStem(
        bodyRng
    );


    /*
        Details drawn BEFORE the face
    */

    drawDetails(
        detailRng,
        details
    );


    /* Face */

    drawEyes(
        eyeRng,
        weirdness
    );


    drawNose(
        noseRng
    );


    drawMouth(
        mouthRng
    );

}


//random seed (used ai to give me halloween adjacent words)

const seedWords = [

    "BONE",
    "GHOUL",
    "WITCH",
    "CRYPT",
    "GRAVE",
    "BAT",
    "SPIRIT",
    "SPOOK",
    "SKULL",
    "HAUNT",
    "NIGHT",
    "CANDY",
    "MOON",
    "DEMON",
    "ROT",
    "FANG",
    "COFFIN",
    "PHANTOM",
    "DUST",
    "OSSIFY",
    "WRAITH",
    "CEMETERY",
    "GHOST",
    "MORGUE",
    "BANSHEE",
    "BONEPILE",
    "SHADOW"

];


function generateRandomSeed() {

    const word =
        choose(
            Math.random,
            seedWords
        );


    const number =
        randomInt(
            Math.random,
            1,
            9999
        );


    seedInput.value =
        word +
        "-" +
        String(number)
            .padStart(
                4,
                "0"
            );


    drawPumpkin();

}


//exporting

function exportPNG() {

    const link =
        document.createElement("a");


    const safeSeed =
        (
            seedInput.value.trim() ||
            "HALLOWEEN"
        )
        .replace(
            /[^a-z0-9_-]/gi,
            "_"
        );


    link.download =
        "pumpkin-" +
        safeSeed +
        ".png";


    link.href =
        canvas.toDataURL(
            "image/png"
        );


    link.click();

}


//seed copyer

function copySeed() {

    const text =
        "Seed: " +
        seedInput.value +
        "\n" +

        "Face Weirdness: " +
        weirdSlider.value +
        "\n" +

        "Eye Shape: " +
        eyeShape.value +
        "\n" +

        "Eye Size: " +
        eyeSizeSlider.value +
        "\n" +

        "Eye Spacing: " +
        eyeSpacingSlider.value +
        "\n" +

        "Eye Height: " +
        eyeHeightSlider.value +
        "\n" +

        "Eye Tilt: " +
        eyeTiltSlider.value +
        "\n" +

        "Eye Asymmetry: " +
        eyeAsymmetrySlider.value +
        "\n" +

        "Nose Shape: " +
        noseShape.value +
        "\n" +

        "Nose Size: " +
        noseSizeSlider.value +
        "\n" +

        "Nose Width: " +
        noseWidthSlider.value +
        "\n" +

        "Nose Height: " +
        noseHeightSlider.value +
        "\n" +

        "Nose Tilt: " +
        noseTiltSlider.value +
        "\n" +

        "Mouth Shape: " +
        mouthShape.value +
        "\n" +

        "Mouth Width: " +
        mouthWidthSlider.value +
        "\n" +

        "Mouth Height: " +
        mouthHeightSlider.value +
        "\n" +

        "Mouth Position: " +
        mouthPositionSlider.value +
        "\n" +

        "Teeth: " +
        teethSlider.value +
        "\n" +

        "Mouth Chaos: " +
        mouthChaosSlider.value +
        "\n" +

        "Details: " +
        detailSlider.value;


    navigator.clipboard
        .writeText(text)
        .then(() => {

            copySeedButton.textContent =
                "COPIED!";


            setTimeout(
                () => {

                    copySeedButton.textContent =
                        "COPY SEED";

                },
                1000
            );

        });

}


//live controls

const liveControls = [

    weirdSlider,
    detailSlider,

    eyeSizeSlider,
    eyeSpacingSlider,
    eyeHeightSlider,
    eyeTiltSlider,
    eyeAsymmetrySlider,

    noseSizeSlider,
    noseWidthSlider,
    noseHeightSlider,
    noseTiltSlider,

    mouthWidthSlider,
    mouthHeightSlider,
    mouthPositionSlider,
    teethSlider,
    mouthChaosSlider,

    eyeShape,
    noseShape,
    mouthShape

];


liveControls.forEach(
    control => {

        control.addEventListener(
            "input",
            () => {

                updateLabels();

                drawPumpkin();

            }
        );


        control.addEventListener(
            "change",
            () => {

                updateLabels();

                drawPumpkin();

            }
        );

    }
);


//button events

generateButton.addEventListener(
    "click",
    () => {

        updateLabels();

        drawPumpkin();

    }
);


randomButton.addEventListener(
    "click",
    generateRandomSeed
);


exportButton.addEventListener(
    "click",
    exportPNG
);


copySeedButton.addEventListener(
    "click",
    copySeed
);


seedInput.addEventListener(
    "input",
    drawPumpkin
);


//start

updateLabels();

drawPumpkin();