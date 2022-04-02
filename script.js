"use strict";

// base color variables
const chosenLightness = 50
const lightnessVariance = 25
const fill = `hsl(48, 100%, ${chosenLightness}%)`

// calculate relative color to chosen  of other municipals
function calculateColor(currPop) {

    const newColorString = `hsl(48, 100%, ${currPop >= 1 ? chosenLightness + (lightnessVariance - (lightnessVariance / currPop)) : chosenLightness - (lightnessVariance - (lightnessVariance * currPop))}%)`

    return newColorString

    // if (currPop > 1) {
    //     const newColorString = `hsl(48, 100%, ${chosenLightness + (lightnessVariance - (lightnessVariance / currPop))}%)`
    //     return newColorString
    // } else {
    //     const newColorString = `hsl(48, 100%, ${chosenLightness - (lightnessVariance - (lightnessVariance * currPop))}%)`
    //     return newColorString
    // }
}

function runtimeFunc() {

    const info = document.querySelectorAll('#nav_container > \*')
    // const infoDefVals = new Array()
    // info.forEach(el => { infoDefVals.push(el.innerHTML) })

    // load SVG into HTMLCollection
    const b = document.getElementById("australia");
    const svgdocument = b.contentDocument; //
    const paths = svgdocument.getElementsByTagName("path");

    // get all paths from HTMLCollection and assign events
    for (let item of paths) {
        item.addEventListener('mouseover', mousoverEffect)
        item.addEventListener('mouseout', mouseoutEffect)

        function mousoverEffect() {
            // change fill of focused municip
            this.style.fill = fill

            // write into the site
            info[0].innerHTML = this.id
            info[1].innerHTML = String(this.dataset.population).replace(/(.)(?=(\d{3})+$)/g, '$1,')

            // get all other than focused and change their color
            for (let other_item of paths) {
                if (other_item !== this) {
                    const currPop = Number(this.dataset.population) / Number(other_item.dataset.population)
                    other_item.style.fill = calculateColor(currPop)
                }
            }
        }

        // reset colors and text after mouseout
        function mouseoutEffect() {
            for (let path of paths) {
                path.style.fill = '#4b4237ff'
                path.style.stroke = '#ffcd00ff'
            }

            // info.forEach(function (el, i) {
            //     el.innerHTML = infoDefVals[i]
            // });
        }
    }
}

window.addEventListener("load", runtimeFunc);
